import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Crown, Medal, Star, Code, Target, TrendingUp } from 'lucide-react';
import styles from './PageTwo.module.scss';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  problemsSolved: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master';
  avatar: string;
  streak: number;
}

const mockData: LeaderboardEntry[] = [
  { rank: 1, username: 'CodeMaster2024', points: 2847, problemsSolved: 342, level: 'Master', avatar: '👑', streak: 47 },
  { rank: 2, username: 'AlgoNinja', points: 2654, problemsSolved: 298, level: 'Expert', avatar: '🥷', streak: 23 },
  { rank: 3, username: 'DevWizard', points: 2432, problemsSolved: 276, level: 'Expert', avatar: '🧙‍♂️', streak: 18 },
  { rank: 4, username: 'ByteHunter', points: 2198, problemsSolved: 245, level: 'Advanced', avatar: '🎯', streak: 32 },
  { rank: 5, username: 'ScriptKiddie', points: 1987, problemsSolved: 213, level: 'Advanced', avatar: '💻', streak: 12 },
  { rank: 6, username: 'LogicLord', points: 1876, problemsSolved: 198, level: 'Advanced', avatar: '⚡', streak: 8 },
  { rank: 7, username: 'CodeCrusher', points: 1654, problemsSolved: 176, level: 'Intermediate', avatar: '💪', streak: 15 },
  { rank: 8, username: 'BugBuster', points: 1543, problemsSolved: 162, level: 'Intermediate', avatar: '🐛', streak: 6 },
  { rank: 9, username: 'PythonPro', points: 1432, problemsSolved: 149, level: 'Intermediate', avatar: '🐍', streak: 21 },
  { rank: 10, username: 'JavaGuru', points: 1321, problemsSolved: 134, level: 'Intermediate', avatar: '☕', streak: 9 }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Master': return 'master';
    case 'Expert': return 'expert';
    case 'Advanced': return 'advanced';
    case 'Intermediate': return 'intermediate';
    default: return 'beginner';
  }
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Crown size={20} />;
    case 2: return <Medal size={20} />;
    case 3: return <Trophy size={20} />;
    default: return <span className={styles.rankNumber}>{rank}</span>;
  }
};

const PageTwo: React.FC = () => {
  return (
    <div className={styles.leaderboard}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Link to="/page-1" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to CodeQuest
          </Link>
          <h1>
            <Trophy className={styles.headerIcon} size={32} />
            Leaderboard
          </h1>
          <p>Compete with the best coders and climb your way to the top!</p>
        </div>

        {/* Stats Section */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Code size={24} />
            </div>
            <div className={styles.statNumber}>1,247</div>
            <div className={styles.statLabel}>Total Problems</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Target size={24} />
            </div>
            <div className={styles.statNumber}>89,543</div>
            <div className={styles.statLabel}>Solutions Submitted</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <TrendingUp size={24} />
            </div>
            <div className={styles.statNumber}>12,384</div>
            <div className={styles.statLabel}>Active Coders</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Star size={24} />
            </div>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>Success Rate</div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <h2>Top Performers This Month</h2>
          </div>
          
          <div className={styles.table}>
            <div className={styles.tableHead}>
              <div className={styles.rankCol}>Rank</div>
              <div className={styles.userCol}>User</div>
              <div className={styles.pointsCol}>Points</div>
              <div className={styles.problemsCol}>Solved</div>
              <div className={styles.levelCol}>Level</div>
              <div className={styles.streakCol}>Streak</div>
            </div>
            
            <div className={styles.tableBody}>
              {mockData.map((entry) => (
                <div key={entry.rank} className={styles.tableRow}>
                  <div className={styles.rankCol}>
                    <div className={`${styles.rankContainer} ${styles[`rank${entry.rank <= 3 ? entry.rank : 'default'}`]}`}>
                      {getRankIcon(entry.rank)}
                    </div>
                  </div>
                  
                  <div className={styles.userCol}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatar}>{entry.avatar}</div>
                      <span className={styles.username}>{entry.username}</span>
                    </div>
                  </div>
                  
                  <div className={styles.pointsCol}>
                    <span className={styles.points}>{entry.points.toLocaleString()}</span>
                  </div>
                  
                  <div className={styles.problemsCol}>
                    <span className={styles.problems}>{entry.problemsSolved}</span>
                  </div>
                  
                  <div className={styles.levelCol}>
                    <span className={`${styles.levelBadge} ${styles[getLevelColor(entry.level)]}`}>
                      {entry.level}
                    </span>
                  </div>
                  
                  <div className={styles.streakCol}>
                    <div className={styles.streak}>
                      <span className={styles.streakNumber}>{entry.streak}</span>
                      <span className={styles.streakDays}>days</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <Link to="/page-1" className={styles.navButton}>
            Previous Page
          </Link>
          <Link to="/page-3" className={styles.navButton}>
            Next Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;


