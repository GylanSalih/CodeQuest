import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Star, ChevronRight, Filter } from 'lucide-react';
import { challenges } from '../../data/challengeData';
import styles from './PageOne.module.scss';



const difficultyColors = {
  'Beginner': 'beginner',
  'Junior': 'junior', 
  'Intermediate': 'intermediate',
  'Advanced': 'advanced',
  'Expert': 'expert'
};

const categoryIcons = {
  'JavaScript': '🟨',
  'TypeScript': '🔷',
  'React': '⚛️',
  'Node.js': '🟢',
  'Algorithm': '🧮',
  'Data Structures': '📊'
};

const PageOne: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const challengesPerPage = 9;
  
  const categories = ['All', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Algorithm', 'Data Structures'];
  const difficulties = ['All', 'Beginner', 'Junior', 'Intermediate', 'Advanced', 'Expert'];
  
  const filteredChallenges = challenges.filter(challenge => {
    const categoryMatch = selectedCategory === 'All' || challenge.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || challenge.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedDifficulty]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredChallenges.length / challengesPerPage);
  const startIndex = (currentPage - 1) * challengesPerPage;
  const paginatedChallenges = filteredChallenges.slice(startIndex, startIndex + challengesPerPage);

  return (
    <div className={styles.explore}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1>
            <Code className={styles.headerIcon} size={32} />
            Coding-Aufgaben entdecken
          </h1>
        </div>

        {/* Filters with Stats */}
        <div className={styles.filtersSection}>
          <div className={styles.filtersHeader}>
            <h2>
              <Filter size={20} />
              Aufgaben filtern
            </h2>
            <div className={styles.taskCount}>
              {filteredChallenges.length} Aufgaben gefunden
            </div>
          </div>
          
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label>Kategorie</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.filterSelect}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className={styles.filterGroup}>
              <label>Schwierigkeit</label>
              <select 
                value={selectedDifficulty} 
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className={styles.filterSelect}
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className={styles.challengesSection}>
          <div className={styles.challengesGrid}>
            {paginatedChallenges.map((challenge) => (
              <div key={challenge.id} className={`${styles.challengeCard} ${challenge.isCompleted ? styles.completed : ''}`}>
                <div className={styles.challengeHeader}>
                  <div className={styles.challengeMeta}>
                    <span className={styles.categoryIcon}>
                      {categoryIcons[challenge.category]}
                    </span>
                    <span className={styles.category}>{challenge.category}</span>
                  </div>
                  <span className={`${styles.difficultyBadge} ${styles[difficultyColors[challenge.difficulty]]}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                
                <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                <p className={styles.challengeDescription}>{challenge.description}</p>
                
                <div className={styles.challengeStats}>
                  <div className={styles.statItem}>
                    <Star size={16} />
                    <span>{challenge.points} pts</span>
                  </div>
                </div>
                
                <div className={styles.challengeTags}>
                  {challenge.tags.map(tag => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
                
                <Link to={`/challenge/${challenge.id}`} className={styles.startButton}>
                  {challenge.isCompleted ? '✓ Abgeschlossen' : 'Aufgabe starten'}
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={styles.paginationButton}
              >
                Zurück
              </button>
              
              <div className={styles.paginationInfo}>
                Seite {currentPage} von {totalPages}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={styles.paginationButton}
              >
                Weiter
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PageOne;


