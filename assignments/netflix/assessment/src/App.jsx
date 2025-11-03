import React, { useState, useEffect } from 'react';

// Custom SVG Icons as components
const PlayIcon = ({ size = 24, fill = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const InfoIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const ChevronLeftIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRightIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export default function NetflixLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'trending', name: 'Trending Now' },
    { id: 'action', name: 'Action' },
    { id: 'drama', name: 'Drama' },
    { id: 'comedy', name: 'Comedy' },
  ];

  const movies = {
    trending: [
      { id: 1, title: 'Dark Horizon', gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e3a8a 100%)' },
      { id: 2, title: 'City Lights', gradient: 'linear-gradient(135deg, #ca8a04 0%, #c2410c 100%)' },
      { id: 3, title: 'Ocean Deep', gradient: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)' },
      { id: 4, title: 'Red Dawn', gradient: 'linear-gradient(135deg, #b91c1c 0%, #db2777 100%)' },
      { id: 5, title: 'Forest Tales', gradient: 'linear-gradient(135deg, #15803d 0%, #059669 100%)' },
      { id: 6, title: 'Neon Nights', gradient: 'linear-gradient(135deg, #db2777 0%, #7c3aed 100%)' },
    ],
    action: [
      { id: 7, title: 'Thunder Strike', gradient: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' },
      { id: 8, title: 'Velocity', gradient: 'linear-gradient(135deg, #dc2626 0%, #000000 100%)' },
      { id: 9, title: 'Steel Force', gradient: 'linear-gradient(135deg, #475569 0%, #3f3f46 100%)' },
      { id: 10, title: 'Night Ops', gradient: 'linear-gradient(135deg, #1e3a8a 0%, #000000 100%)' },
      { id: 11, title: 'Combat Zone', gradient: 'linear-gradient(135deg, #c2410c 0%, #7f1d1d 100%)' },
      { id: 12, title: 'Rapid Fire', gradient: 'linear-gradient(135deg, #ca8a04 0%, #b91c1c 100%)' },
    ],
    drama: [
      { id: 13, title: 'Silent Hearts', gradient: 'linear-gradient(135deg, #9f1239 0%, #581c87 100%)' },
      { id: 14, title: 'The Last Song', gradient: 'linear-gradient(135deg, #3730a3 0%, #581c87 100%)' },
      { id: 15, title: 'Autumn Days', gradient: 'linear-gradient(135deg, #b45309 0%, #c2410c 100%)' },
      { id: 16, title: 'Whispers', gradient: 'linear-gradient(135deg, #374151 0%, #1e293b 100%)' },
      { id: 17, title: 'Broken Wings', gradient: 'linear-gradient(135deg, #1e40af 0%, #312e81 100%)' },
      { id: 18, title: 'Memories', gradient: 'linear-gradient(135deg, #0f766e 0%, #155e75 100%)' },
    ],
    comedy: [
      { id: 19, title: 'Laugh Out Loud', gradient: 'linear-gradient(135deg, #eab308 0%, #f97316 100%)' },
      { id: 20, title: 'Funny Business', gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' },
      { id: 21, title: 'Comedy Gold', gradient: 'linear-gradient(135deg, #f59e0b 0%, #ca8a04 100%)' },
      { id: 22, title: 'Silly Times', gradient: 'linear-gradient(135deg, #84cc16 0%, #16a34a 100%)' },
      { id: 23, title: 'Jokes Aside', gradient: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)' },
      { id: 24, title: 'Happy Hour', gradient: 'linear-gradient(135deg, #d946ef 0%, #9333ea 100%)' },
    ],
  };

  const heroSlides = [
    { title: 'Stellar Odyssey', desc: 'An epic journey across the cosmos', gradient: 'linear-gradient(to right, #312e81, #581c87, #831843)' },
    { title: 'Urban Legends', desc: 'Stories from the heart of the city', gradient: 'linear-gradient(to right, #0f172a, #1f2937, #18181b)' },
    { title: 'Wild Frontier', desc: 'Adventure awaits in the untamed lands', gradient: 'linear-gradient(to right, #064e3b, #115e59, #155e75)' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'background-color 0.3s',
      background: scrolled ? '#000' : 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      color: '#e50914',
      fontSize: '32px',
      fontWeight: 'bold',
      letterSpacing: '-1px',
    },
    signInBtn: {
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
      padding: '8px 16px',
    },
    heroSection: {
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
    },
    heroSlide: {
      position: 'absolute',
      inset: 0,
      transition: 'opacity 1s',
    },
    heroGradient: {
      position: 'absolute',
      inset: 0,
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #000, transparent, transparent)',
    },
    heroContent: {
      position: 'relative',
      height: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    heroTitle: {
      fontSize: '80px',
      fontWeight: 'bold',
      marginBottom: '16px',
      animation: 'fadeIn 1s ease-out',
    },
    heroDesc: {
      fontSize: '24px',
      marginBottom: '32px',
      maxWidth: '600px',
      animation: 'fadeIn 1s ease-out',
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      animation: 'fadeIn 1s ease-out',
    },
    playBtn: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '12px 32px',
      borderRadius: '4px',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s',
    },
    infoBtn: {
      backgroundColor: 'rgba(109, 109, 110, 0.7)',
      color: '#fff',
      padding: '12px 32px',
      borderRadius: '4px',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s',
    },
    carouselBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0.5)',
      border: 'none',
      borderRadius: '50%',
      padding: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      zIndex: 10,
    },
    indicators: {
      position: 'absolute',
      bottom: '96px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '8px',
    },
    indicator: {
      height: '4px',
      borderRadius: '2px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    emailSection: {
      padding: '80px 16px',
      backgroundColor: '#000',
      borderTop: '8px solid #222',
      textAlign: 'center',
    },
    emailTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
    },
    emailSubtitle: {
      fontSize: '24px',
      marginBottom: '24px',
    },
    emailText: {
      fontSize: '18px',
      marginBottom: '24px',
    },
    emailForm: {
      display: 'flex',
      gap: '8px',
      maxWidth: '800px',
      margin: '0 auto',
      flexWrap: 'wrap',
    },
    emailInput: {
      flex: 1,
      minWidth: '250px',
      padding: '16px',
      backgroundColor: 'rgba(0,0,0,0.5)',
      border: '1px solid #555',
      borderRadius: '4px',
      color: '#fff',
      fontSize: '16px',
    },
    getStartedBtn: {
      backgroundColor: '#e50914',
      color: '#fff',
      padding: '16px 32px',
      borderRadius: '4px',
      border: 'none',
      fontSize: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    categoriesSection: {
      padding: '48px 16px',
    },
    categoriesContent: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    categoryTabs: {
      display: 'flex',
      gap: '16px',
      marginBottom: '32px',
      overflowX: 'auto',
      paddingBottom: '8px',
    },
    categoryTab: {
      padding: '8px 24px',
      borderRadius: '20px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background-color 0.3s',
    },
    moviesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '16px',
    },
    movieCard: {
      position: 'relative',
      aspectRatio: '2/3',
      borderRadius: '8px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s',
    },
    movieOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      transition: 'background-color 0.3s',
    },
    movieTitle: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    moviePlayIcon: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s',
    },
    footer: {
      padding: '48px 16px',
      borderTop: '8px solid #222',
      backgroundColor: '#000',
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      fontSize: '14px',
      color: '#808080',
    },
    footerLink: {
      marginBottom: '8px',
      cursor: 'pointer',
      transition: 'text-decoration 0.3s',
    },
    footerCopyright: {
      marginTop: '32px',
      color: '#808080',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <button style={styles.signInBtn} onMouseEnter={(e) => e.target.style.color = '#ccc'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            style={{...styles.heroSlide, opacity: idx === currentSlide ? 1 : 0}}
          >
            <div style={{...styles.heroGradient, background: slide.gradient}} />
            <div style={styles.heroOverlay} />
            <div style={styles.heroContent}>
              <h2 style={styles.heroTitle}>{slide.title}</h2>
              <p style={styles.heroDesc}>{slide.desc}</p>
              <div style={styles.heroButtons}>
                <button 
                  style={styles.playBtn}
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#e6e6e6'; e.target.style.transform = 'scale(1.05)'}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = '#fff'; e.target.style.transform = 'scale(1)'}}
                >
                  <PlayIcon size={24} fill="black" />
                  Play
                </button>
                <button 
                  style={styles.infoBtn}
                  onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(109, 109, 110, 1)'; e.target.style.transform = 'scale(1.05)'}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = 'rgba(109, 109, 110, 0.7)'; e.target.style.transform = 'scale(1)'}}
                >
                  <InfoIcon size={24} />
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          onClick={prevSlide} 
          style={{...styles.carouselBtn, left: '16px'}}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.8)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
        >
          <ChevronLeftIcon size={32} />
        </button>
        <button 
          onClick={nextSlide} 
          style={{...styles.carouselBtn, right: '16px'}}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.8)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
        >
          <ChevronRightIcon size={32} />
        </button>

        {/* Slide Indicators */}
        <div style={styles.indicators}>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                ...styles.indicator,
                width: idx === currentSlide ? '32px' : '24px',
                backgroundColor: idx === currentSlide ? '#e50914' : '#808080'
              }}
            />
          ))}
        </div>
      </div>

      {/* Email Signup */}
      <div style={styles.emailSection}>
        <h3 style={styles.emailTitle}>Unlimited movies, TV shows, and more</h3>
        <p style={styles.emailSubtitle}>Watch anywhere. Cancel anytime.</p>
        <p style={styles.emailText}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div style={styles.emailForm}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.emailInput}
            onFocus={(e) => e.target.style.borderColor = '#fff'}
            onBlur={(e) => e.target.style.borderColor = '#555'}
          />
          <button 
            style={styles.getStartedBtn}
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#f40612'; e.target.style.transform = 'scale(1.05)'}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = '#e50914'; e.target.style.transform = 'scale(1)'}}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Categories */}
      <div style={styles.categoriesSection}>
        <div style={styles.categoriesContent}>
          <div style={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  ...styles.categoryTab,
                  backgroundColor: selectedCategory === cat.id ? '#e50914' : '#333',
                  color: '#fff'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = selectedCategory === cat.id ? '#f40612' : '#444'}
                onMouseLeave={(e) => e.target.style.backgroundColor = selectedCategory === cat.id ? '#e50914' : '#333'}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div style={styles.moviesGrid}>
            {movies[selectedCategory].map((movie) => (
              <div
                key={movie.id}
                style={styles.movieCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.querySelector('.play-icon').style.opacity = '1';
                  e.currentTarget.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.querySelector('.play-icon').style.opacity = '0';
                  e.currentTarget.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.4)';
                }}
              >
                <div style={{position: 'absolute', inset: 0, background: movie.gradient}} />
                <div className="overlay" style={styles.movieOverlay} />
                <div style={styles.movieTitle}>
                  <h4>{movie.title}</h4>
                </div>
                <div className="play-icon" style={styles.moviePlayIcon}>
                  <PlayIcon size={48} fill="white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            <div>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>FAQ</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Investor Relations</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Privacy</p>
            </div>
            <div>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Help Center</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Jobs</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Cookie Preferences</p>
            </div>
            <div>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Account</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Ways to Watch</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Corporate Information</p>
            </div>
            <div>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Media Center</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Terms of Use</p>
              <p style={styles.footerLink} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Contact Us</p>
            </div>
          </div>
          <p style={styles.footerCopyright}>© 2025 Netflix Clone Demo</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}