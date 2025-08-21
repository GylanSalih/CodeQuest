import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>
        <div className={styles['footerContent']}>
          {/* Logo */}
          <Link to="/" className={styles['brand']}>
            <img 
              src="/assets/img/Logo_Black.png" 
              alt="CodeQuest Logo" 
              className={styles['logoLight']}
              width={20}
              height={20}
            />
            <img 
              src="/assets/img/Logo_White.png" 
              alt="CodeQuest Logo" 
              className={styles['logoDark']}
              width={20}
              height={20}
            />
            <span>CodeQuest</span>
          </Link>

          {/* Copyright */}
          <div className={styles['copyright']}>
            <p>
              © {currentYear} PetalStack. Made with{' '}
              <Heart size={14} className={styles['heart']} /> by developers for developers.
            </p>
          </div>

          {/* Social Icons */}
          <div className={styles['socialIcons']}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="mailto:contact@example.com"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
