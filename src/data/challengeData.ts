interface Challenge {
  id: string;
  title: string;
  description: string; // Kurze Beschreibung für Übersichtsseite
  detailedDescription: string; // Ausführliche Beschreibung für Detail-Ansicht
  difficulty: 'Beginner' | 'Junior' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'JavaScript' | 'TypeScript' | 'React' | 'Node.js' | 'Algorithm' | 'Data Structures';
  points: number;
  tags: string[];
  isCompleted?: boolean;
  example: {
    input: string;
    output: string;
  };
  hint: string;
  solution: string;
  starterCode: string;
  testCases: Array<{
    input: any;
    expected: any;
    description: string;
  }>;
}

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Hallo Welt und Grundlagen',
    description: 'Lerne die Basics von JavaScript und schreibe dein erstes "Hallo Welt" Programm mit Funktionen und Parametern.',
    detailedDescription: `Erstelle eine Funktion \`sayHello\`, die einen Namen als Parameter entgegennimmt und "Hallo [Name]!" zurückgibt.

**Anforderungen:**
- Die Funktion soll den Namen als String-Parameter entgegennehmen
- Gib eine Begrüßung im Format "Hallo [Name]!" zurück
- Verwende Template Literals oder String-Concatenation

**Beispiel:**
\`\`\`javascript
sayHello("Max") // sollte "Hallo Max!" zurückgeben
sayHello("Anna") // sollte "Hallo Anna!" zurückgeben
\`\`\``,
    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 50,
    tags: ['variablen', 'console', 'grundlagen'],
    isCompleted: true,
    example: {
      input: 'sayHello("Max")',
      output: '"Hallo Max!"'
    },
    hint: `💡 **Tipp:** 
- Verwende \`function sayHello(name) { ... }\` um eine Funktion zu definieren
- Mit Template Literals: \`\`Hallo \${name}!\`\`
- Oder mit +: \`"Hallo " + name + "!"\`
- Vergiss nicht das \`return\` Statement!`,
    solution: `function sayHello(name) {
  return \`Hallo \${name}!\`;
}

// Alternative Lösung:
function sayHello(name) {
  return "Hallo " + name + "!";
}`,
    starterCode: `function sayHello(name) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(sayHello("Max"));`,
    testCases: [
      {
        input: "Max",
        expected: "Hallo Max!",
        description: "Einfacher Name"
      },
      {
        input: "Anna",
        expected: "Hallo Anna!",
        description: "Anderer Name"
      },
      {
        input: "JavaScript",
        expected: "Hallo JavaScript!",
        description: "Längerer Name"
      }
    ]
  },
  {
    id: '2',
    title: 'Zahlen addieren',
    description: 'Schreibe eine Funktion, die zwei Zahlen addiert und das Ergebnis zurückgibt. Lerne die Grundlagen von Funktionen.',
    detailedDescription: `Schreibe eine Funktion, die zwei Zahlen addiert und das Ergebnis zurückgibt. Lerne dabei über Funktionen und Parameter.

**Anforderungen:**
- Erstelle eine Funktion \`addNumbers\`, die zwei Parameter entgegennimmt
- Addiere die beiden Zahlen
- Gib das Ergebnis zurück

**Beispiel:**
\`\`\`javascript
addNumbers(5, 3) // sollte 8 zurückgeben
addNumbers(10, -2) // sollte 8 zurückgeben
\`\`\``,
    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 75,
    tags: ['funktionen', 'parameter', 'addition'],
    isCompleted: true,
    example: {
      input: 'addNumbers(5, 3)',
      output: '8'
    },
    hint: `💡 **Tipp:** 
- Verwende \`function addNumbers(a, b) { ... }\`
- Nutze den + Operator zum Addieren
- \`return a + b;\` gibt das Ergebnis zurück`,
    solution: `function addNumbers(a, b) {
  return a + b;
}

// Alternative mit Arrow Function:
const addNumbers = (a, b) => a + b;`,
    starterCode: `function addNumbers(a, b) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(addNumbers(5, 3));
console.log(addNumbers(10, -2));`,
    testCases: [
      {
        input: [5, 3],
        expected: 8,
        description: "Positive Zahlen"
      },
      {
        input: [10, -2],
        expected: 8,
        description: "Positive und negative Zahl"
      },
      {
        input: [0, 0],
        expected: 0,
        description: "Null-Werte"
      }
    ]
  },
  {
    id: '3',
    title: 'Gerade oder ungerade Zahl',
    description: 'Erstelle eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist mit if/else und Modulo-Operator.',
    detailedDescription: `Erstelle eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist. Verwende if/else und den Modulo-Operator.

**Anforderungen:**
- Erstelle eine Funktion \`isEven\`, die eine Zahl als Parameter entgegennimmt
- Prüfe mit dem Modulo-Operator (%) ob die Zahl gerade ist
- Gib \`true\` für gerade, \`false\` für ungerade zurück

**Beispiel:**
\`\`\`javascript
isEven(4) // sollte true zurückgeben
isEven(7) // sollte false zurückgeben
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 100,
    tags: ['if-else', 'modulo', 'bedingungen'],
    example: {
      input: 'isEven(4)',
      output: 'true'
    },
    hint: `💡 **Tipp:** 
- Der Modulo-Operator % gibt den Rest einer Division zurück
- Eine Zahl ist gerade, wenn \`zahl % 2 === 0\`
- Verwende if/else: \`if (zahl % 2 === 0) { return true; } else { return false; }\``,
    solution: `function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Kürzere Version:
function isEven(number) {
  return number % 2 === 0;
}`,
    starterCode: `function isEven(number) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(isEven(4));
console.log(isEven(7));`,
    testCases: [
      {
        input: 4,
        expected: true,
        description: "Gerade Zahl"
      },
      {
        input: 7,
        expected: false,
        description: "Ungerade Zahl"
      },
      {
        input: 0,
        expected: true,
        description: "Null ist gerade"
      }
    ]
  },
  {
    id: '4',
    title: 'Namen-Liste anzeigen',
    description: 'Verwende ein Array mit Namen und gib jeden Namen mit einer for-Schleife in der Konsole aus.',
    detailedDescription: `Verwende ein Array mit Namen und gib jeden Namen mit einer for-Schleife in der Konsole aus.

**Anforderungen:**
- Erstelle eine Funktion \`printNames\`, die ein Array von Namen entgegennimmt
- Durchlaufe das Array mit einer for-Schleife
- Gib jeden Namen in der Konsole aus

**Beispiel:**
\`\`\`javascript
printNames(["Max", "Anna", "Tom"]) 
// sollte ausgeben:
// Max
// Anna  
// Tom
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 125,
    tags: ['arrays', 'schleifen', 'for-loop'],
    example: {
      input: 'printNames(["Max", "Anna", "Tom"])',
      output: 'Max\\nAnna\\nTom'
    },
    hint: `💡 **Tipp:** 
- Verwende \`for (let i = 0; i < array.length; i++)\`
- Greife auf Array-Elemente mit \`array[i]\` zu
- Verwende \`console.log(array[i])\` zum Ausgeben`,
    solution: `function printNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// Alternative mit for...of:
function printNames(names) {
  for (let name of names) {
    console.log(name);
  }
}`,
    starterCode: `function printNames(names) {
  // Schreibe hier deine for-Schleife
  
}

// Test deinen Code:
printNames(["Max", "Anna", "Tom"]);`,
    testCases: [
      {
        input: ["Max"],
        expected: "Max",
        description: "Ein Name"
      },
      {
        input: ["Max", "Anna", "Tom"],
        expected: "Max\nAnna\nTom",
        description: "Mehrere Namen"
      },
      {
        input: [],
        expected: "",
        description: "Leeres Array"
      }
    ]
  },
  {
    id: '5',
    title: 'Einfacher Taschenrechner',
    description: 'Baue einen Taschenrechner für +, -, *, / mit zwei Zahlen und verwende switch/case für die Operationen.',
    detailedDescription: `Baue einen Taschenrechner für +, -, *, / mit zwei Zahlen. Verwende switch/case für die verschiedenen Operationen.

**Anforderungen:**
- Erstelle eine Funktion \`calculate\`, die drei Parameter entgegennimmt: zahl1, operation, zahl2
- Verwende switch/case für die Operationen: '+', '-', '*', '/'
- Gib das Ergebnis zurück

**Beispiel:**
\`\`\`javascript
calculate(10, '+', 5) // sollte 15 zurückgeben
calculate(10, '/', 2) // sollte 5 zurückgeben
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 150,
    tags: ['switch-case', 'rechnen', 'operatoren'],
    example: {
      input: 'calculate(10, "+", 5)',
      output: '15'
    },
    hint: `💡 **Tipp:** 
- Verwende \`switch (operation) { case '+': ... }\`
- Jeder case sollte die entsprechende Operation ausführen
- Vergiss nicht \`break;\` nach jedem case
- Füge einen \`default\` case für unbekannte Operationen hinzu`,
    solution: `function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Unbekannte Operation';
  }
}`,
    starterCode: `function calculate(num1, operation, num2) {
  // Schreibe hier dein switch/case
  
}

// Test deinen Code:
console.log(calculate(10, '+', 5));
console.log(calculate(10, '/', 2));`,
    testCases: [
      {
        input: [10, '+', 5],
        expected: 15,
        description: "Addition"
      },
      {
        input: [10, '-', 3],
        expected: 7,
        description: "Subtraktion"
      },
      {
        input: [6, '*', 4],
        expected: 24,
        description: "Multiplikation"
      },
      {
        input: [10, '/', 2],
        expected: 5,
        description: "Division"
      }
    ]
  },
  {
    id: '6',
    title: 'Text umkehren',
    description: 'Schreibe eine Funktion, die einen Text rückwärts ausgibt. Verwende String-Methoden zum Umkehren.',
    detailedDescription: `Schreibe eine Funktion, die einen Text rückwärts ausgibt. Zum Beispiel: "Hallo" wird zu "ollaH".

**Anforderungen:**
- Erstelle eine Funktion \`reverseString\`, die einen Text als Parameter entgegennimmt
- Kehre den Text um und gib das Ergebnis zurück
- Verwende String-Methoden wie split(), reverse(), join()

**Beispiel:**
\`\`\`javascript
reverseString("Hallo") // sollte "ollaH" zurückgeben
reverseString("Welt") // sollte "tleW" zurückgeben
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 125,
    tags: ['strings', 'umkehren', 'split-reverse'],
    example: {
      input: 'reverseString("Hallo")',
      output: '"ollaH"'
    },
    hint: `💡 **Tipp:** 
- \`string.split('')\` macht aus einem String ein Array von Zeichen
- \`array.reverse()\` kehrt ein Array um
- \`array.join('')\` macht aus einem Array wieder einen String`,
    solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}

// Alternative mit einer Schleife:
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
    starterCode: `function reverseString(str) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(reverseString("Hallo"));
console.log(reverseString("Welt"));`,
    testCases: [
      {
        input: "Hallo",
        expected: "ollaH",
        description: "Einfacher Text"
      },
      {
        input: "Welt",
        expected: "tleW",
        description: "Anderer Text"
      },
      {
        input: "a",
        expected: "a",
        description: "Einzelnes Zeichen"
      }
    ]
  },
  {
    id: '7',
    title: 'Größte Zahl finden',
    description: 'Finde die größte Zahl in einem Array ohne Math.max() zu verwenden. Lerne Vergleiche und Schleifen.',
    detailedDescription: `Gegeben ist ein Array mit Zahlen. Finde die größte Zahl ohne Math.max() zu verwenden.

**Anforderungen:**
- Erstelle eine Funktion \`findLargest\`, die ein Array von Zahlen entgegennimmt
- Finde die größte Zahl durch Vergleichen
- Verwende NICHT Math.max()

**Beispiel:**
\`\`\`javascript
findLargest([3, 7, 2, 9, 1]) // sollte 9 zurückgeben
findLargest([15, 8, 23, 4]) // sollte 23 zurückgeben
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 150,
    tags: ['arrays', 'vergleiche', 'maximum'],
    example: {
      input: 'findLargest([3, 7, 2, 9, 1])',
      output: '9'
    },
    hint: `💡 **Tipp:** 
- Starte mit der ersten Zahl als \`largest\`
- Durchlaufe das Array und vergleiche jede Zahl
- Wenn eine Zahl größer ist, aktualisiere \`largest\``,
    solution: `function findLargest(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

// Alternative mit for...of:
function findLargest(numbers) {
  let largest = numbers[0];
  for (let number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}`,
    starterCode: `function findLargest(numbers) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(findLargest([3, 7, 2, 9, 1]));
console.log(findLargest([15, 8, 23, 4]));`,
    testCases: [
      {
        input: [3, 7, 2, 9, 1],
        expected: 9,
        description: "Gemischte Zahlen"
      },
      {
        input: [15, 8, 23, 4],
        expected: 23,
        description: "Andere Zahlen"
      },
      {
        input: [5],
        expected: 5,
        description: "Ein Element"
      }
    ]
  },
  {
    id: '8',
    title: 'Einkaufsliste verwalten',
    description: 'Erstelle eine einfache Einkaufsliste mit Array-Methoden: Artikel hinzufügen, entfernen und anzeigen.',
    detailedDescription: `Erstelle eine einfache Einkaufsliste: Artikel hinzufügen, entfernen und anzeigen. Verwende Array-Methoden.

**Anforderungen:**
- Erstelle eine Funktion \`manageShoppingList\`, die eine Operation und einen Artikel entgegennimmt
- Verwende ein Array als Einkaufsliste
- Implementiere 'add', 'remove', 'show' Operationen

**Beispiel:**
\`\`\`javascript
manageShoppingList('add', 'Äpfel') // Fügt Äpfel hinzu
manageShoppingList('show') // Zeigt alle Artikel
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 175,
    tags: ['arrays', 'push-pop', 'listen'],
    example: {
      input: 'manageShoppingList("add", "Äpfel")',
      output: '["Äpfel"]'
    },
    hint: `💡 **Tipp:** 
- Verwende ein globales Array oder speichere es in der Funktion
- \`array.push(item)\` fügt ein Element hinzu
- \`array.splice(index, 1)\` entfernt ein Element
- \`array.indexOf(item)\` findet den Index eines Elements`,
    solution: `let shoppingList = [];

function manageShoppingList(operation, item) {
  switch (operation) {
    case 'add':
      shoppingList.push(item);
      return shoppingList;
    case 'remove':
      const index = shoppingList.indexOf(item);
      if (index > -1) {
        shoppingList.splice(index, 1);
      }
      return shoppingList;
    case 'show':
      return shoppingList;
    default:
      return 'Unbekannte Operation';
  }
}`,
    starterCode: `let shoppingList = [];

function manageShoppingList(operation, item) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(manageShoppingList('add', 'Äpfel'));
console.log(manageShoppingList('add', 'Milch'));
console.log(manageShoppingList('show'));`,
    testCases: [
      {
        input: ['add', 'Äpfel'],
        expected: ['Äpfel'],
        description: "Artikel hinzufügen"
      },
      {
        input: ['show'],
        expected: ['Äpfel'],
        description: "Liste anzeigen"
      },
      {
        input: ['remove', 'Äpfel'],
        expected: [],
        description: "Artikel entfernen"
      }
    ]
  },
  {
    id: '9',
    title: 'Wörter zählen',
    description: 'Schreibe eine Funktion, die in einem Text die Anzahl der Wörter zählt und bei Leerzeichen trennt.',
    detailedDescription: `Schreibe eine Funktion, die in einem Text die Anzahl der Wörter zählt. Trenne bei Leerzeichen.

**Anforderungen:**
- Erstelle eine Funktion \`countWords\`, die einen Text entgegennimmt
- Teile den Text bei Leerzeichen auf
- Zähle die Anzahl der Wörter

**Beispiel:**
\`\`\`javascript
countWords("Hallo Welt") // sollte 2 zurückgeben
countWords("Das ist ein Test") // sollte 4 zurückgeben
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 125,
    tags: ['strings', 'split', 'zählen'],
    example: {
      input: 'countWords("Hallo Welt")',
      output: '2'
    },
    hint: `💡 **Tipp:** 
- \`string.split(' ')\` teilt einen String bei Leerzeichen
- Das Ergebnis ist ein Array
- \`array.length\` gibt die Anzahl der Elemente zurück`,
    solution: `function countWords(text) {
  if (text.trim() === '') {
    return 0;
  }
  return text.trim().split(' ').length;
}

// Alternative mit filter für mehrere Leerzeichen:
function countWords(text) {
  return text.trim().split(/\\s+/).length;
}`,
    starterCode: `function countWords(text) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(countWords("Hallo Welt"));
console.log(countWords("Das ist ein Test"));`,
    testCases: [
      {
        input: "Hallo Welt",
        expected: 2,
        description: "Zwei Wörter"
      },
      {
        input: "Das ist ein Test",
        expected: 4,
        description: "Vier Wörter"
      },
      {
        input: "",
        expected: 0,
        description: "Leerer Text"
      }
    ]
  },
  {
    id: '10',
    title: 'Einfache Passwort-Prüfung',
    description: 'Prüfe ob ein Passwort mindestens 8 Zeichen lang ist und einen Großbuchstaben enthält. Validation lernen.',
    detailedDescription: `Prüfe ob ein Passwort mindestens 8 Zeichen lang ist und einen Großbuchstaben enthält.

**Anforderungen:**
- Erstelle eine Funktion \`validatePassword\`, die ein Passwort entgegennimmt
- Prüfe: mindestens 8 Zeichen UND mindestens ein Großbuchstabe
- Gib true/false zurück

**Beispiel:**
\`\`\`javascript
validatePassword("Passwort123") // sollte true zurückgeben
validatePassword("kurz") // sollte false zurückgeben
\`\`\``,

    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 150,
    tags: ['strings', 'validation', 'regex-basics'],
    example: {
      input: 'validatePassword("Passwort123")',
      output: 'true'
    },
    hint: `💡 **Tipp:** 
- \`password.length >= 8\` prüft die Länge
- \`password !== password.toLowerCase()\` prüft auf Großbuchstaben
- Verwende && um beide Bedingungen zu verknüpfen`,
    solution: `function validatePassword(password) {
  const hasMinLength = password.length >= 8;
  const hasUpperCase = password !== password.toLowerCase();
  return hasMinLength && hasUpperCase;
}

// Alternative mit Regex:
function validatePassword(password) {
  return password.length >= 8 && /[A-Z]/.test(password);
}`,
    starterCode: `function validatePassword(password) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log(validatePassword("Passwort123"));
console.log(validatePassword("kurz"));`,
    testCases: [
      {
        input: "Passwort123",
        expected: true,
        description: "Gültiges Passwort"
      },
      {
        input: "kurz",
        expected: false,
        description: "Zu kurz"
      },
      {
        input: "langenpasswort",
        expected: false,
        description: "Kein Großbuchstabe"
      }
    ]
  },
  {
    id: '11',
    title: 'Zahlen-Rätespiel',
    description: 'Erstelle ein Zahlen-Rätespiel wo der Computer eine Zahl "denkt" und der Nutzer raten muss. Random lernen.',
    detailedDescription: `Erstelle ein Spiel wo der Computer eine Zahl zwischen 1-10 "denkt" und der Nutzer raten muss.

**Anforderungen:**
- Erstelle eine Funktion \`numberGuessingGame\`
- Der Computer "denkt" sich eine Zahl zwischen 1-10
- Vergleiche die Benutzereingabe mit der gedachten Zahl
- Gib "zu hoch", "zu niedrig" oder "richtig" zurück

**Beispiel:**
\`\`\`javascript
// Computer denkt sich 7
numberGuessingGame(5) // sollte "zu niedrig" zurückgeben
numberGuessingGame(7) // sollte "richtig" zurückgeben
\`\`\``,

    difficulty: 'Junior',
    category: 'JavaScript',
    points: 200,
    tags: ['random', 'while-loop', 'spiel'],
    example: {
      input: 'numberGuessingGame(5)',
      output: '"zu niedrig" (wenn Computer 7 gedacht hat)'
    },
    hint: `💡 **Tipp:** 
- \`Math.floor(Math.random() * 10) + 1\` erzeugt eine Zahl zwischen 1-10
- Verwende if/else if/else für die Vergleiche
- Speichere die gedachte Zahl außerhalb der Funktion`,
    solution: `let secretNumber = Math.floor(Math.random() * 10) + 1;

function numberGuessingGame(guess) {
  if (guess < secretNumber) {
    return "zu niedrig";
  } else if (guess > secretNumber) {
    return "zu hoch";
  } else {
    return "richtig";
  }
}

// Neue Zahl für nächstes Spiel
function newGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
}`,
    starterCode: `let secretNumber = Math.floor(Math.random() * 10) + 1;

function numberGuessingGame(guess) {
  // Schreibe hier deinen Code
  
}

// Test deinen Code:
console.log("Die gedachte Zahl ist:", secretNumber); // Nur zum Testen
console.log(numberGuessingGame(5));`,
    testCases: [
      {
        input: 5,
        expected: "variable", // Depends on random number
        description: "Raten einer Zahl"
      },
      {
        input: 1,
        expected: "variable",
        description: "Niedrige Zahl"
      },
      {
        input: 10,
        expected: "variable",
        description: "Hohe Zahl"
      }
    ]
  },
  {
    id: '12',
    title: 'HTML Button erstellen',
    description: 'Erstelle deinen ersten Button mit HTML und CSS. Der Button soll sich beim Hovern verfärben lernen.',
    detailedDescription: `Erstelle deinen ersten Button mit HTML und CSS. Der Button soll sich beim Hovern verfärben.

**Anforderungen:**
- Erstelle eine React Komponente mit einem Button
- Der Button soll Text "Klick mich!" anzeigen
- Füge CSS-Styles hinzu
- Implementiere Hover-Effekt

**Beispiel:**
\`\`\`jsx
<SimpleButton />
// Sollte einen Button mit Hover-Effekt rendern
\`\`\``,

    difficulty: 'Beginner',
    category: 'React',
    points: 100,
    tags: ['html', 'css', 'hover'],
    example: {
      input: '<SimpleButton />',
      output: 'Button mit Hover-Effekt'
    },
    hint: `💡 **Tipp:** 
- Verwende \`function SimpleButton() { return <button>...</button>; }\`
- CSS: \`.button:hover { background-color: blue; }\`
- Vergiss nicht den export!`,
    solution: `import React from 'react';
import './SimpleButton.css';

function SimpleButton() {
  return (
    <button className="simple-button">
      Klick mich!
    </button>
  );
}

export default SimpleButton;

/* CSS (SimpleButton.css):
.simple-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.simple-button:hover {
  background-color: #0056b3;
}
*/`,
    starterCode: `import React from 'react';

function SimpleButton() {
  // Erstelle hier deinen Button
  
}

export default SimpleButton;`,
    testCases: [
      {
        input: "component render",
        expected: "button element",
        description: "Button wird gerendert"
      },
      {
        input: "button text",
        expected: "Klick mich!",
        description: "Korrekter Text"
      },
      {
        input: "hover effect",
        expected: "color change",
        description: "Hover-Effekt funktioniert"
      }
    ]
  },
  {
    id: '13',
    title: 'Erste React Komponente',
    description: 'Erstelle deine erste React Komponente, die "Willkommen!" anzeigt und lerne JSX Grundlagen kennen.',
    detailedDescription: `Erstelle deine erste React Komponente, die "Willkommen!" anzeigt. Lerne JSX Grundlagen kennen.

**Anforderungen:**
- Erstelle eine Funktions-Komponente namens \`Welcome\`
- Die Komponente soll "Willkommen!" in einem h1-Tag anzeigen
- Exportiere die Komponente als default

**Beispiel:**
\`\`\`jsx
<Welcome />
// Sollte <h1>Willkommen!</h1> rendern
\`\`\``,

    difficulty: 'Beginner',
    category: 'React',
    points: 150,
    tags: ['komponenten', 'jsx', 'react-basics'],
    example: {
      input: '<Welcome />',
      output: '<h1>Willkommen!</h1>'
    },
    hint: `💡 **Tipp:** 
- Verwende \`function Welcome() { return ... }\`
- JSX wird in return geschrieben
- HTML-Tags müssen geschlossen sein`,
    solution: `import React from 'react';

function Welcome() {
  return <h1>Willkommen!</h1>;
}

export default Welcome;`,
    starterCode: `import React from 'react';

function Welcome() {
  // Schreibe hier deine JSX
  
}

export default Welcome;`,
    testCases: [
      {
        input: "component render",
        expected: "h1 element",
        description: "H1-Element wird gerendert"
      },
      {
        input: "text content",
        expected: "Willkommen!",
        description: "Korrekter Text"
      }
    ]
  },
  {
    id: '14',
    title: 'Props verwenden',
    description: 'Erstelle eine Komponente, die einen Namen als Prop erhält und "Hallo [Name]!" anzeigt. Props lernen.',
    detailedDescription: `Erstelle eine Komponente, die einen Namen als Prop erhält und "Hallo [Name]!" anzeigt.

**Anforderungen:**
- Erstelle eine Komponente \`Greeting\`
- Die Komponente erhält eine \`name\` Prop
- Zeige "Hallo [name]!" an

**Beispiel:**
\`\`\`jsx
<Greeting name="Max" />
// Sollte "Hallo Max!" anzeigen
\`\`\``,

    difficulty: 'Beginner',
    category: 'React',
    points: 175,
    tags: ['props', 'parameter', 'komponenten'],
    example: {
      input: '<Greeting name="Max" />',
      output: '"Hallo Max!"'
    },
    hint: `💡 **Tipp:** 
- Props sind der erste Parameter: \`function Greeting(props)\`
- Zugriff auf Props: \`props.name\`
- Oder mit Destructuring: \`function Greeting({ name })\``,
    solution: `import React from 'react';

function Greeting({ name }) {
  return <h1>Hallo {name}!</h1>;
}

// Alternative:
function Greeting(props) {
  return <h1>Hallo {props.name}!</h1>;
}

export default Greeting;`,
    starterCode: `import React from 'react';

function Greeting({ name }) {
  // Schreibe hier deine JSX
  
}

export default Greeting;`,
    testCases: [
      {
        input: { name: "Max" },
        expected: "Hallo Max!",
        description: "Name Max"
      },
      {
        input: { name: "Anna" },
        expected: "Hallo Anna!",
        description: "Name Anna"
      }
    ]
  },
  {
    id: '15',
    title: 'Einfacher Counter',
    description: 'Baue einen Zähler mit + und - Buttons und verwende useState Hook für den Zählerstand lernen.',
    detailedDescription: `Baue einen Zähler mit + und - Buttons. Verwende useState Hook für den Zählerstand.

**Anforderungen:**
- Erstelle eine Komponente \`Counter\`
- Verwende \`useState\` für den Zählerstand
- Zwei Buttons: einen zum Erhöhen (+1), einen zum Verringern (-1)
- Zeige den aktuellen Zählerstand an

**Beispiel:**
\`\`\`jsx
<Counter />
// Zeigt Zähler mit + und - Buttons
\`\`\``,

    difficulty: 'Junior',
    category: 'React',
    points: 225,
    tags: ['useState', 'events', 'state'],
    example: {
      input: '<Counter />',
      output: 'Zähler: 0 [+] [-]'
    },
    hint: `💡 **Tipp:** 
- \`const [count, setCount] = useState(0);\`
- Button onClick: \`onClick={() => setCount(count + 1)}\`
- Zeige count in einem Element an`,
    solution: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Zähler: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;`,
    starterCode: `import React, { useState } from 'react';

function Counter() {
  // Erstelle hier deinen State
  
  return (
    <div>
      {/* Zeige hier den Zähler und die Buttons */}
    </div>
  );
}

export default Counter;`,
    testCases: [
      {
        input: "initial state",
        expected: 0,
        description: "Startwert ist 0"
      },
      {
        input: "increment",
        expected: 1,
        description: "Plus Button funktioniert"
      },
      {
        input: "decrement",
        expected: -1,
        description: "Minus Button funktioniert"
      }
    ]
  },
  {
    id: '16',
    title: 'TypeScript Basics',
    description: 'Lerne TypeScript Grundlagen und definiere Typen für Zahlen, Strings und Booleans richtig.',
    detailedDescription: `Lerne TypeScript Grundlagen: Typen für Zahlen, Strings und Booleans definieren.

**Anforderungen:**
- Erstelle Variablen mit expliziten Typen
- Verwende \`number\`, \`string\`, \`boolean\` Typen
- Erstelle eine typisierte Funktion

**Beispiel:**
\`\`\`typescript
let age: number = 25;
let name: string = "Max";
let isStudent: boolean = true;
\`\`\``,
    difficulty: 'Beginner',
    category: 'TypeScript',
    points: 125,
    tags: ['types', 'typescript-basics', 'typen'],
    example: {
      input: 'let age: number = 25;',
      output: 'Korrekte Typisierung'
    },
    hint: `💡 **Tipp:** 
- \`let variableName: type = value;\`
- Grundtypen: \`number\`, \`string\`, \`boolean\`
- Funktionen: \`function name(param: type): returnType { ... }\``,
    solution: `let age: number = 25;
let name: string = "Max";
let isStudent: boolean = true;

function greet(name: string): string {
  return \`Hallo \${name}!\`;
}

// Oder mit Interface:
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Max",
  age: 25
};`,
    starterCode: `// Definiere Variablen mit Typen
let age = 25; // Füge hier den Typ hinzu
let name = "Max"; // Füge hier den Typ hinzu
let isStudent = true; // Füge hier den Typ hinzu

// Erstelle eine typisierte Funktion
function greet(name) {
  return \`Hallo \${name}!\`;
}`,
    testCases: [
      {
        input: "type annotation",
        expected: "correct typing",
        description: "Korrekte Typisierung"
      }
    ]
  },
  {
    id: '17',
    title: 'Interface erstellen',
    description: 'Erstelle ein Interface für eine Person mit Name, Alter und E-Mail und verwende es in Funktionen.',
    detailedDescription: `Erstelle ein Interface für eine Person mit Name, Alter und E-Mail. Verwende es in einer Funktion.

**Anforderungen:**
- Erstelle ein \`Person\` Interface
- Definiere Eigenschaften: \`name\`, \`age\`, \`email\`
- Erstelle eine Funktion, die das Interface verwendet

**Beispiel:**
\`\`\`typescript
interface Person {
  name: string;
  age: number;
  email: string;
}
\`\`\``,
    difficulty: 'Junior',
    category: 'TypeScript',
    points: 200,
    tags: ['interface', 'objekte', 'types'],
    example: {
      input: 'interface Person { ... }',
      output: 'Funktionierendes Interface'
    },
    hint: `💡 **Tipp:** 
- \`interface Name { property: type; }\`
- Verwende das Interface als Parameter-Typ
- Greife auf Eigenschaften mit \`object.property\` zu`,
    solution: `interface Person {
  name: string;
  age: number;
  email: string;
}

function introducePerson(person: Person): string {
  return \`Hallo, ich bin \${person.name}, \${person.age} Jahre alt. Meine E-Mail: \${person.email}\`;
}

const max: Person = {
  name: "Max",
  age: 25,
  email: "max@example.com"
};

console.log(introducePerson(max));`,
    starterCode: `// Erstelle hier dein Person Interface
interface Person {
  // Definiere die Eigenschaften
}

// Erstelle eine Funktion, die das Interface verwendet
function introducePerson(person: Person): string {
  // Implementiere die Funktion
}

// Teste dein Interface
const testPerson: Person = {
  name: "Max",
  age: 25,
  email: "max@example.com"
};`,
    testCases: [
      {
        input: { name: "Max", age: 25, email: "max@example.com" },
        expected: "interface usage",
        description: "Interface korrekt verwendet"
      }
    ]
  },
  {
    id: '18',
    title: 'Bubble Sort Algorithmus',
    description: 'Implementiere den Bubble Sort Algorithmus um ein Array von Zahlen zu sortieren und Algorithmen lernen.',
    detailedDescription: `Implementiere den Bubble Sort Algorithmus um ein Array von Zahlen zu sortieren.

**Anforderungen:**
- Erstelle eine Funktion \`bubbleSort\`
- Implementiere den Bubble Sort Algorithmus
- Sortiere das Array aufsteigend

**Beispiel:**
\`\`\`javascript
bubbleSort([64, 34, 25, 12, 22, 11, 90])
// sollte [11, 12, 22, 25, 34, 64, 90] zurückgeben
\`\`\``,
    difficulty: 'Junior',
    category: 'Algorithm',
    points: 250,
    tags: ['sortierung', 'algorithmus', 'bubble-sort'],
    example: {
      input: 'bubbleSort([64, 34, 25, 12])',
      output: '[12, 25, 34, 64]'
    },
    hint: `💡 **Tipp:** 
- Verwende verschachtelte Schleifen
- Vergleiche benachbarte Elemente
- Tausche sie, wenn sie in falscher Reihenfolge sind
- Wiederhole bis keine Tausche mehr nötig sind`,
    solution: `function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tausche Elemente
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    
    // Wenn keine Tausche stattgefunden haben, ist das Array sortiert
    if (!swapped) break;
  }
  
  return arr;
}`,
    starterCode: `function bubbleSort(arr) {
  // Implementiere hier den Bubble Sort Algorithmus
  
}

// Test deinen Code:
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
    testCases: [
      {
        input: [64, 34, 25, 12, 22, 11, 90],
        expected: [11, 12, 22, 25, 34, 64, 90],
        description: "Unsortiertes Array"
      },
      {
        input: [5, 2, 8, 1, 9],
        expected: [1, 2, 5, 8, 9],
        description: "Kleineres Array"
      }
    ]
  }
];

export const getChallengeById = (id: string): Challenge | undefined => {
  return challenges.find(challenge => challenge.id === id);
};

export type { Challenge };
