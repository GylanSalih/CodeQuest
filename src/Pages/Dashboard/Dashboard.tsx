import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Target, Calendar, Star, Clock, TrendingUp, Award, ChevronRight, Code, Flame } from 'lucide-react';
import styles from './Dashboard.module.scss';

interface UserStats {
  username: string;
  avatar: string;
  totalPoints: number;
  currentLevel: number;
  nextLevelPoints: number;
  solvedChallenges: number;
  currentStreak: number;
  rank: number;
}

interface RecentChallenge {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Junior' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  points: number;
  completedAt: string;
  timeSpent: string;
}

interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Junior' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  points: number;
  timeEstimate: string;
  expiresIn: string;
}

const mockUserStats: UserStats = {
  username: 'CodeNinja2024',
  avatar: '🥷',
  totalPoints: 2847,
  currentLevel: 12,
  nextLevelPoints: 3200,
  solvedChallenges: 47,
  currentStreak: 12,
  rank: 156
};

const mockRecentChallenges: RecentChallenge[] = [
  {
    id: '1',
    title: 'Array Manipulation Basics',
    difficulty: 'Beginner',
    category: 'JavaScript',
    points: 100,
    completedAt: '2 hours ago',
    timeSpent: '15 min'
  },
  {
    id: '2',
    title: 'React Component Lifecycle',
    difficulty: 'Junior',
    category: 'React',
    points: 250,
    completedAt: '1 day ago',
    timeSpent: '28 min'
  },
  {
    id: '3',
    title: 'Binary Tree Traversal',
    difficulty: 'Intermediate',
    category: 'Algorithm',
    points: 350,
    completedAt: '2 days ago',
    timeSpent: '42 min'
  }
];

const mockDailyChallenge: DailyChallenge = {
  id: 'daily-001',
  title: 'Implement a Debounce Function',
  description: 'Create a debounce function that delays the execution of a function until after a specified delay.',
  difficulty: 'Junior',
  category: 'JavaScript',
  points: 200,
  timeEstimate: '20 min',
  expiresIn: '14h 32m'
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'beginner';
    case 'Junior': return 'junior';
    case 'Intermediate': return 'intermediate';
    case 'Advanced': return 'advanced';
    case 'Expert': return 'expert';
    default: return 'beginner';
  }
};

const getLevelProgress = (currentPoints: number, nextLevelPoints: number) => {
  const currentLevelStart = Math.floor(currentPoints / 300) * 300;
  const progress = ((currentPoints - currentLevelStart) / (nextLevelPoints - currentLevelStart)) * 100;
  return Math.min(progress, 100);
};

const Dashboard: React.FC = () => {
  const levelProgress = getLevelProgress(mockUserStats.totalPoints, mockUserStats.nextLevelPoints);
  const pointsToNextLevel = mockUserStats.nextLevelPoints - mockUserStats.totalPoints;

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.welcomeSection}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>{mockUserStats.avatar}</div>
              <div className={styles.userDetails}>
                <h1>Welcome back, {mockUserStats.username}!</h1>
                <p>Ready to tackle some challenges today?</p>
              </div>
            </div>
            <div className={styles.quickStats}>
              <div className={styles.quickStat}>
                <Trophy size={20} />
                <span>Rank #{mockUserStats.rank}</span>
              </div>
              <div className={styles.quickStat}>
                <Flame size={20} />
                <span>{mockUserStats.currentStreak} day streak</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Stats */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {/* Level & Progress Card */}
            <div className={styles.levelCard}>
              <div className={styles.levelHeader}>
                <div className={styles.levelInfo}>
                  <Star className={styles.levelIcon} size={24} />
                  <div>
                    <h3>Level {mockUserStats.currentLevel}</h3>
                    <p>{pointsToNextLevel} points to Level {mockUserStats.currentLevel + 1}</p>
                  </div>
                </div>
                <div className={styles.totalPoints}>
                  {mockUserStats.totalPoints.toLocaleString()} pts
                </div>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${levelProgress}%` }}
                  />
                </div>
                <span className={styles.progressText}>{Math.round(levelProgress)}%</span>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className={styles.achievementCard}>
              <div className={styles.achievementHeader}>
                <Trophy size={24} />
                <h3>Achievements</h3>
              </div>
              <div className={styles.achievementStats}>
                <div className={styles.achievementStat}>
                  <span className={styles.number}>{mockUserStats.solvedChallenges}</span>
                  <span className={styles.label}>Challenges Solved</span>
                </div>
                <div className={styles.achievementStat}>
                  <span className={styles.number}>8</span>
                  <span className={styles.label}>Badges Earned</span>
                </div>
              </div>
              <Link to="/badges" className={styles.viewBadgesBtn}>
                View All Badges
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className={styles.dailyChallengeSection}>
          <div className={styles.dailyChallenge}>
            <div className={styles.dailyHeader}>
              <div className={styles.dailyTitle}>
                <Calendar size={24} />
                <h2>Daily Challenge</h2>
                <span className={styles.timer}>⏰ {mockDailyChallenge.expiresIn} left</span>
              </div>
            </div>
            
            <div className={styles.dailyContent}>
              <div className={styles.challengeInfo}>
                <div className={styles.challengeMeta}>
                  <span className={`${styles.difficultyBadge} ${styles[getDifficultyColor(mockDailyChallenge.difficulty)]}`}>
                    {mockDailyChallenge.difficulty}
                  </span>
                  <span className={styles.category}>{mockDailyChallenge.category}</span>
                </div>
                <h3>{mockDailyChallenge.title}</h3>
                <p>{mockDailyChallenge.description}</p>
                <div className={styles.challengeDetails}>
                  <span><Star size={16} /> {mockDailyChallenge.points} points</span>
                  <span><Clock size={16} /> ~{mockDailyChallenge.timeEstimate}</span>
                </div>
              </div>
              <button className={styles.startDailyBtn}>
                Start Challenge
                <Target size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.recentSection}>
          <div className={styles.recentHeader}>
            <h2>
              <TrendingUp size={24} />
              Recent Activity
            </h2>
            <Link to="/page-1" className={styles.viewAllLink}>
              Explore More Challenges
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className={styles.recentList}>
            {mockRecentChallenges.map((challenge) => (
              <div key={challenge.id} className={styles.recentItem}>
                <div className={styles.recentInfo}>
                  <div className={styles.recentMeta}>
                    <span className={`${styles.difficultyDot} ${styles[getDifficultyColor(challenge.difficulty)]}`} />
                    <span className={styles.category}>{challenge.category}</span>
                    <span className={styles.points}>+{challenge.points} pts</span>
                  </div>
                  <h4>{challenge.title}</h4>
                  <div className={styles.recentDetails}>
                    <span>Completed {challenge.completedAt}</span>
                    <span>Time: {challenge.timeSpent}</span>
                  </div>
                </div>
                <div className={styles.completedIcon}>✓</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <Link to="/page-1" className={styles.actionCard}>
            <Code size={32} />
            <h3>Explore Challenges</h3>
            <p>Find new coding challenges to solve</p>
          </Link>
          
          <Link to="/page-2" className={styles.actionCard}>
            <Trophy size={32} />
            <h3>Leaderboard</h3>
            <p>See how you rank against others</p>
          </Link>
          
          <Link to="/badges" className={styles.actionCard}>
            <Award size={32} />
            <h3>Your Badges</h3>
            <p>View your achievements and progress</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
