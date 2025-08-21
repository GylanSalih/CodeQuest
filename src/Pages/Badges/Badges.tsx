import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Star, Zap, Target, Trophy, Calendar, Users, Lock, CheckCircle } from 'lucide-react';
import styles from './Badges.module.scss';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'Progress' | 'Achievement' | 'Special' | 'Streak' | 'Social';
  difficulty: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  requirement: string;
  points: number;
  isEarned: boolean;
  earnedDate?: string;
  progress?: {
    current: number;
    target: number;
  };
}

const mockBadges: Badge[] = [
  // Earned Badges
  {
    id: '1',
    name: 'First Steps',
    description: 'Complete your first coding challenge',
    icon: '🚀',
    category: 'Progress',
    difficulty: 'Bronze',
    requirement: 'Complete 1 challenge',
    points: 50,
    isEarned: true,
    earnedDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'JavaScript Rookie',
    description: 'Solve 5 JavaScript challenges',
    icon: '🟨',
    category: 'Achievement',
    difficulty: 'Bronze',
    requirement: 'Solve 5 JavaScript challenges',
    points: 100,
    isEarned: true,
    earnedDate: '2024-01-18'
  },
  {
    id: '3',
    name: 'Speed Demon',
    description: 'Complete a challenge in under 10 minutes',
    icon: '⚡',
    category: 'Special',
    difficulty: 'Silver',
    requirement: 'Complete any challenge < 10 min',
    points: 150,
    isEarned: true,
    earnedDate: '2024-01-20'
  },
  {
    id: '4',
    name: 'Week Warrior',
    description: 'Maintain a 7-day coding streak',
    icon: '🔥',
    category: 'Streak',
    difficulty: 'Silver',
    requirement: '7 day streak',
    points: 200,
    isEarned: true,
    earnedDate: '2024-01-25'
  },
  {
    id: '5',
    name: 'Problem Solver',
    description: 'Solve 25 challenges across all difficulties',
    icon: '🧩',
    category: 'Progress',
    difficulty: 'Silver',
    requirement: 'Solve 25 challenges',
    points: 250,
    isEarned: true,
    earnedDate: '2024-02-01'
  },
  {
    id: '6',
    name: 'Algorithm Master',
    description: 'Complete 10 algorithm challenges',
    icon: '🧮',
    category: 'Achievement',
    difficulty: 'Gold',
    requirement: 'Complete 10 algorithm challenges',
    points: 300,
    isEarned: true,
    earnedDate: '2024-02-05'
  },
  {
    id: '7',
    name: 'React Champion',
    description: 'Master React by solving 8 React challenges',
    icon: '⚛️',
    category: 'Achievement',
    difficulty: 'Gold',
    requirement: 'Solve 8 React challenges',
    points: 350,
    isEarned: true,
    earnedDate: '2024-02-08'
  },
  {
    id: '8',
    name: 'Consistency King',
    description: 'Code for 30 consecutive days',
    icon: '👑',
    category: 'Streak',
    difficulty: 'Gold',
    requirement: '30 day streak',
    points: 500,
    isEarned: true,
    earnedDate: '2024-02-10'
  },

  // In Progress Badges
  {
    id: '9',
    name: 'Century Club',
    description: 'Reach 100 solved challenges',
    icon: '💯',
    category: 'Progress',
    difficulty: 'Gold',
    requirement: 'Solve 100 challenges',
    points: 400,
    isEarned: false,
    progress: { current: 47, target: 100 }
  },
  {
    id: '10',
    name: 'TypeScript Guru',
    description: 'Become a TypeScript expert',
    icon: '🔷',
    category: 'Achievement',
    difficulty: 'Gold',
    requirement: 'Solve 15 TypeScript challenges',
    points: 400,
    isEarned: false,
    progress: { current: 8, target: 15 }
  },
  {
    id: '11',
    name: 'Elite Performer',
    description: 'Solve 5 Expert level challenges',
    icon: '🎖️',
    category: 'Achievement',
    difficulty: 'Platinum',
    requirement: 'Solve 5 Expert challenges',
    points: 750,
    isEarned: false,
    progress: { current: 2, target: 5 }
  },
  
  // Locked Badges
  {
    id: '12',
    name: 'Node.js Ninja',
    description: 'Master backend development',
    icon: '🟢',
    category: 'Achievement',
    difficulty: 'Platinum',
    requirement: 'Solve 12 Node.js challenges',
    points: 600,
    isEarned: false
  },
  {
    id: '13',
    name: 'Community Helper',
    description: 'Help others by sharing solutions',
    icon: '🤝',
    category: 'Social',
    difficulty: 'Silver',
    requirement: 'Share 10 helpful solutions',
    points: 300,
    isEarned: false
  },
  {
    id: '14',
    name: 'Perfect Score',
    description: 'Achieve 100% success rate on 20 challenges',
    icon: '💎',
    category: 'Special',
    difficulty: 'Diamond',
    requirement: '100% success rate on 20 challenges',
    points: 1000,
    isEarned: false
  },
  {
    id: '15',
    name: 'Marathon Runner',
    description: 'Maintain a 100-day coding streak',
    icon: '🏃‍♂️',
    category: 'Streak',
    difficulty: 'Diamond',
    requirement: '100 day streak',
    points: 1500,
    isEarned: false
  },
  {
    id: '16',
    name: 'Grand Master',
    description: 'Reach the pinnacle of coding excellence',
    icon: '👑',
    category: 'Special',
    difficulty: 'Diamond',
    requirement: 'Solve 500 challenges',
    points: 2000,
    isEarned: false
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Bronze': return 'bronze';
    case 'Silver': return 'silver';
    case 'Gold': return 'gold';
    case 'Platinum': return 'platinum';
    case 'Diamond': return 'diamond';
    default: return 'bronze';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Progress': return <Target size={16} />;
    case 'Achievement': return <Trophy size={16} />;
    case 'Special': return <Star size={16} />;
    case 'Streak': return <Zap size={16} />;
    case 'Social': return <Users size={16} />;
    default: return <Award size={16} />;
  }
};

const Badges: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  
  const categories = ['All', 'Progress', 'Achievement', 'Special', 'Streak', 'Social'];
  const difficulties = ['All', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'];
  
  const filteredBadges = mockBadges.filter(badge => {
    const categoryMatch = selectedCategory === 'All' || badge.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || badge.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });
  
  const earnedBadges = mockBadges.filter(badge => badge.isEarned);
  const totalPoints = earnedBadges.reduce((sum, badge) => sum + badge.points, 0);
  const inProgressBadges = mockBadges.filter(badge => !badge.isEarned && badge.progress);

  return (
    <div className={styles.badges}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Link to="/dashboard" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1>
            <Award className={styles.headerIcon} size={32} />
            Your Badges
          </h1>
          <p>Track your achievements and unlock new challenges</p>
        </div>

        {/* Stats Overview */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Trophy size={24} />
              </div>
              <div className={styles.statNumber}>{earnedBadges.length}</div>
              <div className={styles.statLabel}>Badges Earned</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Star size={24} />
              </div>
              <div className={styles.statNumber}>{totalPoints.toLocaleString()}</div>
              <div className={styles.statLabel}>Badge Points</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Target size={24} />
              </div>
              <div className={styles.statNumber}>{inProgressBadges.length}</div>
              <div className={styles.statLabel}>In Progress</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Zap size={24} />
              </div>
              <div className={styles.statNumber}>{Math.round((earnedBadges.length / mockBadges.length) * 100)}%</div>
              <div className={styles.statLabel}>Completion</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className={styles.filtersSection}>
          <div className={styles.filtersHeader}>
            <h2>Filter Badges</h2>
          </div>
          
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label>Category</label>
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
              <label>Difficulty</label>
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

        {/* Badges Grid */}
        <div className={styles.badgesSection}>
          <div className={styles.badgesHeader}>
            <h2>All Badges ({filteredBadges.length})</h2>
          </div>
          
          <div className={styles.badgesGrid}>
            {filteredBadges.map((badge) => (
              <div 
                key={badge.id} 
                className={`${styles.badgeCard} ${badge.isEarned ? styles.earned : ''} ${!badge.isEarned && !badge.progress ? styles.locked : ''}`}
              >
                <div className={styles.badgeHeader}>
                  <div className={styles.badgeIcon}>
                    {badge.isEarned || badge.progress ? badge.icon : '🔒'}
                  </div>
                  <div className={styles.badgeStatus}>
                    {badge.isEarned ? (
                      <CheckCircle className={styles.earnedIcon} size={20} />
                    ) : badge.progress ? (
                      <div className={styles.progressIndicator}>
                        {Math.round((badge.progress.current / badge.progress.target) * 100)}%
                      </div>
                    ) : (
                      <Lock className={styles.lockedIcon} size={20} />
                    )}
                  </div>
                </div>
                
                <div className={styles.badgeContent}>
                  <div className={styles.badgeMeta}>
                    <span className={`${styles.difficultyBadge} ${styles[getDifficultyColor(badge.difficulty)]}`}>
                      {badge.difficulty}
                    </span>
                    <div className={styles.categoryMeta}>
                      {getCategoryIcon(badge.category)}
                      <span>{badge.category}</span>
                    </div>
                  </div>
                  
                  <h3 className={styles.badgeName}>{badge.name}</h3>
                  <p className={styles.badgeDescription}>{badge.description}</p>
                  
                  <div className={styles.badgeRequirement}>
                    <strong>Requirement:</strong> {badge.requirement}
                  </div>
                  
                  {badge.progress && (
                    <div className={styles.progressSection}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill}
                          style={{ width: `${(badge.progress.current / badge.progress.target) * 100}%` }}
                        />
                      </div>
                      <div className={styles.progressText}>
                        {badge.progress.current} / {badge.progress.target}
                      </div>
                    </div>
                  )}
                  
                  <div className={styles.badgeFooter}>
                    <div className={styles.badgePoints}>
                      <Star size={16} />
                      {badge.points} points
                    </div>
                    {badge.earnedDate && (
                      <div className={styles.earnedDate}>
                        <Calendar size={16} />
                        Earned {new Date(badge.earnedDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <Link to="/dashboard" className={styles.navButton}>
            Back to Dashboard
          </Link>
          <Link to="/page-1" className={styles.navButton}>
            Explore Challenges
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Badges;
