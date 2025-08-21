import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Editor } from '@monaco-editor/react';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Terminal, 
  Lightbulb, 
  Eye, 
  RotateCcw,
  XCircle 
} from 'lucide-react';
import styles from './ChallengeDetail.module.scss';
import { getChallengeById } from '../../data/challengeData';

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Einfach': return 'easy';
    case 'Mittel': return 'medium';
    case 'Schwer': return 'hard';
    case 'Expert': return 'expert';
    default: return 'beginner';
  }
};

const ChallengeDetail: React.FC = () => {
const { id } = useParams<{ id: string }>();
const challenge = getChallengeById(id || '');

const [activeTab, setActiveTab] = useState<'task' | 'hint' | 'solution'>('task');
const [code, setCode] = useState(challenge?.starterCode || '');
const [isRunning, setIsRunning] = useState(false);
const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
const [testResults, setTestResults] = useState<Array<{ passed: boolean; message: string }>>([]);
const [showResults, setShowResults] = useState(false);
const [points, setPoints] = useState(0);
const editorRef = useRef<any>(null);

// Zeige einen Fehler wenn die Challenge nicht gefunden wurde
if (!challenge) {
return (
<div className={styles.challengeDetail}>
<div className={styles.header}>
  <Link to="/page-1" className={styles.backButton}>
    <ArrowLeft size={20} />
    Zurück zu Aufgaben
  </Link>
</div>
<div className={styles.content}>
  <div className={styles.errorMessage}>
    <h2>Challenge nicht gefunden</h2>
    <p>Die Challenge mit der ID "{id}" konnte nicht gefunden werden.</p>
    <Link to="/page-1">Zurück zur Übersicht</Link>
  </div>
</div>
</div>
);
}

const handleEditorDidMount = (editor: any) => {
editorRef.current = editor;
};

const runCode = () => {
setIsRunning(true);
setConsoleOutput([]);
setShowResults(false);

// Simulate code execution with setTimeout
setTimeout(() => {
try {
// Capture console.log output from real code execution
const logs: string[] = [];
const originalConsoleLog = console.log;
const originalConsoleError = console.error;

// Override console methods to capture output
console.log = (...args: any[]) => {
  logs.push(args.map(arg => 
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' '));
};

console.error = (...args: any[]) => {
  logs.push('ERROR: ' + args.map(arg => String(arg)).join(' '));
};

// Execute the actual user code
try {
  // Create a function wrapper to avoid global scope pollution
  const executeCode = new Function(code);
  executeCode();
} catch (execError: any) {
  logs.push(`❌ Runtime Error: ${execError.message}`);
}

// Restore original console methods
console.log = originalConsoleLog;
console.error = originalConsoleError;

if (logs.length === 0) {
  logs.push('💡 Keine Ausgabe - vergiss nicht console.log() zu verwenden!');
}

setConsoleOutput(logs);
setIsRunning(false);
} catch (error: any) {
setConsoleOutput([`❌ Syntax Error: ${error.message}`]);
setIsRunning(false);
}
}, 1000);
};

const submitSolution = () => {
setIsRunning(true);
setShowResults(false);

setTimeout(() => {
try {
// Execute the actual user code and test it with real test cases
const results = challenge.testCases.map((testCase, index) => {
  try {
    // Create a sandboxed environment for code execution
    const sandbox: any = {};
    
    // Execute user code in sandbox
    const executeCode = new Function('sandbox', `
      ${code}
      
      // Try to find the main function based on common patterns
      const functionNames = Object.getOwnPropertyNames(this).filter(name => 
        typeof this[name] === 'function' && 
        !['constructor', 'toString', 'valueOf'].includes(name)
      );
      
      // For each function, add to sandbox
      functionNames.forEach(name => {
        sandbox[name] = this[name];
      });
      
      // Also check for function declarations in the code
      const funcMatches = \`${code}\`.match(/function\\s+(\\w+)/g);
      if (funcMatches) {
        funcMatches.forEach(match => {
          const funcName = match.replace('function ', '');
          if (typeof this[funcName] === 'function') {
            sandbox[funcName] = this[funcName];
          }
        });
      }
    `);
    
    executeCode(sandbox);
    
    // Find the appropriate function to test
    const functionNames = Object.keys(sandbox).filter(key => typeof sandbox[key] === 'function');
    
    if (functionNames.length === 0) {
      return {
        passed: false,
        message: `✗ Test ${index + 1}: Keine Funktion gefunden. Stelle sicher, dass du eine Funktion definierst.`
      };
    }
    
    // Use the first function found (or try to match by common names)
    const mainFunction = sandbox[functionNames[0]];
    
    // Execute the test
    let actualResult;
    if (Array.isArray(testCase.input)) {
      // Multiple parameters
      actualResult = mainFunction(...testCase.input);
    } else {
      // Single parameter
      actualResult = mainFunction(testCase.input);
    }
    
    // Compare results
    const passed = JSON.stringify(actualResult) === JSON.stringify(testCase.expected);
    
    return {
      passed,
      message: passed 
        ? `✓ Test ${index + 1}: ${testCase.description} - Erfolgreich!`
        : `✗ Test ${index + 1}: ${testCase.description} - Fehlgeschlagen. Erwartet: "${JSON.stringify(testCase.expected)}", Erhalten: "${JSON.stringify(actualResult)}"`
    };
    
  } catch (error: any) {
    return {
      passed: false,
      message: `✗ Test ${index + 1}: ${testCase.description} - Fehler: ${error.message}`
    };
  }
});

const passedTests = results.filter(r => r.passed).length;
const allPassed = passedTests === results.length;

if (allPassed) {
  setPoints(challenge.points);
  results.push({
    passed: true,
    message: `🎉 Alle Tests bestanden! +${challenge.points} Punkte erhalten!`
  });
} else {
  results.push({
    passed: false,
    message: `📊 ${passedTests}/${challenge.testCases.length} Tests bestanden. Versuche es nochmal!`
  });
}

setTestResults(results);
setShowResults(true);
setIsRunning(false);

} catch (error: any) {
setTestResults([{
  passed: false,
  message: `❌ Code-Fehler: ${error.message}`
}]);
setShowResults(true);
setIsRunning(false);
}
}, 1500);
};

const resetCode = () => {
setCode(challenge.starterCode);
setConsoleOutput([]);
setTestResults([]);
setShowResults(false);
setPoints(0);
};

return (
<div className={styles.challengeDetail}>
<div className={styles.header}>
<Link to="/page-1" className={styles.backButton}>
  <ArrowLeft size={20} />
  Zurück zu Aufgaben
</Link>
<h1 className={styles.challengeTitle}>{challenge.title}</h1>
<div className={styles.challengeMeta}>
  <span className={`${styles.difficultyBadge} ${styles[getDifficultyColor(challenge.difficulty)]}`}>
    {challenge.difficulty}
  </span>
  <span className={styles.category}>{challenge.category}</span>
  <span className={styles.points}>{challenge.points} Punkte</span>
</div>
</div>

<div className={styles.content}>
{/* Left Panel - Task Details */}
<div className={styles.leftPanel}>
  <div className={styles.tabs}>
    <button 
      className={`${styles.tab} ${activeTab === 'task' ? styles.active : ''}`}
      onClick={() => setActiveTab('task')}
    >
      Aufgabe
    </button>
    <button 
      className={`${styles.tab} ${activeTab === 'hint' ? styles.active : ''}`}
      onClick={() => setActiveTab('hint')}
    >
      <Lightbulb size={16} />
      Tipp
    </button>
    <button 
      className={`${styles.tab} ${activeTab === 'solution' ? styles.active : ''}`}
      onClick={() => setActiveTab('solution')}
    >
      <Eye size={16} />
      Lösung
    </button>
  </div>

  <div className={styles.tabContent}>
    {activeTab === 'task' && (
      <div className={styles.taskContent}>
        <div className={styles.description}>
          <h3>Aufgabenbeschreibung</h3>
          <div dangerouslySetInnerHTML={{ __html: challenge.detailedDescription
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/```javascript\n([\s\S]*?)\n```/g, '<pre><code>$1</code></pre>')
            .replace(/\n/g, '<br/>') 
          }} />
        </div>
        
        <div className={styles.example}>
          <h4>Beispiel</h4>
          <div className={styles.exampleCode}>
            <div className={styles.exampleItem}>
              <span className={styles.label}>Input:</span>
              <code>{challenge.example.input}</code>
            </div>
            <div className={styles.exampleItem}>
              <span className={styles.label}>Output:</span>
              <code>{challenge.example.output}</code>
            </div>
          </div>
        </div>

        <div className={styles.tags}>
          {challenge.tags.map(tag => (
            <span key={tag} className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </div>
    )}

    {activeTab === 'hint' && (
      <div className={styles.hintContent}>
        <h3>💡 Hilfestellung</h3>
        <div dangerouslySetInnerHTML={{ __html: challenge.hint
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/`([^`]+)`/g, '<code>$1</code>')
          .replace(/```javascript\n([\s\S]*?)\n```/g, '<pre><code>$1</code></pre>')
          .replace(/\n/g, '<br/>') 
        }} />
      </div>
    )}

    {activeTab === 'solution' && (
      <div className={styles.solutionContent}>
        <h3>🔍 Musterlösung</h3>
        <pre className={styles.solutionCode}>
          <code>{challenge.solution}</code>
        </pre>
        <p className={styles.solutionNote}>
          ⚠️ Versuche zuerst die Aufgabe selbst zu lösen, bevor du dir die Lösung anschaust!
        </p>
      </div>
    )}
  </div>
</div>

{/* Right Panel - Code Editor */}
<div className={styles.rightPanel}>
  <div className={styles.editorHeader}>
    <h3>Code Editor</h3>
    <div className={styles.editorActions}>
      <button 
        onClick={resetCode}
        className={styles.resetButton}
        title="Code zurücksetzen"
      >
        <RotateCcw size={16} />
      </button>
    </div>
  </div>

  <div className={styles.editor}>
    <Editor
      height="400px"
      defaultLanguage="javascript"
      value={code}
      onChange={(value) => setCode(value || '')}
      onMount={handleEditorDidMount}
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        wordWrap: 'on',
        lineNumbers: 'on',
        roundedSelection: false,
        scrollbar: {
          vertical: 'visible',
          horizontal: 'visible'
        }
      }}
    />
  </div>

  <div className={styles.actions}>
    <button 
      onClick={runCode}
      disabled={isRunning}
      className={styles.runButton}
    >
      {isRunning ? (
        <>
          <div className={styles.spinner} />
          Läuft...
        </>
      ) : (
        <>
          <Play size={16} />
          Code ausführen
        </>
      )}
    </button>
    
    <button 
      onClick={submitSolution}
      disabled={isRunning}
      className={styles.submitButton}
    >
      {isRunning ? (
        <>
          <div className={styles.spinner} />
          Teste...
        </>
      ) : (
        <>
          <CheckCircle size={16} />
          Lösung testen
        </>
      )}
    </button>
  </div>

  {/* Console Output */}
  <div className={styles.console}>
    <div className={styles.consoleHeader}>
      <Terminal size={16} />
      <span>Console</span>
    </div>
    <div className={styles.consoleContent}>
      {consoleOutput.length === 0 ? (
        <div className={styles.consoleEmpty}>
          Führe deinen Code aus, um die Ausgabe zu sehen...
        </div>
      ) : (
        consoleOutput.map((line, index) => (
          <div key={index} className={styles.consoleLine}>
            <span className={styles.consolePrefix}>{'>'}</span>
            <span>{line}</span>
          </div>
        ))
      )}
    </div>
  </div>

  {/* Test Results */}
  {showResults && (
    <div className={styles.results}>
      <div className={styles.resultsHeader}>
        <h4>Testergebnisse</h4>
        {points > 0 && (
          <span className={styles.pointsEarned}>+{points} Punkte!</span>
        )}
      </div>
      <div className={styles.resultsList}>
        {testResults.map((result, index) => (
          <div 
            key={index} 
            className={`${styles.resultItem} ${result.passed ? styles.passed : styles.failed}`}
          >
            {result.passed ? (
              <CheckCircle size={16} className={styles.resultIcon} />
            ) : (
              <XCircle size={16} className={styles.resultIcon} />
            )}
            <span>{result.message}</span>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
</div>
</div>
);
};

export default ChallengeDetail;
