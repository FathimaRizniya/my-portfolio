import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../ThemeContext';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navBg = scrolled
    ? theme === 'dark'
      ? 'rgba(6,9,16,.92)'
      : 'rgba(248,250,252,.92)'
    : 'transparent';

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 28px',
        height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        background: navBg,
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'background .4s ease, border-color .4s ease',
      }}
    >
      {/* Logo */}
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        fontSize: '1.45rem',
        color: 'var(--text)',
        letterSpacing: '-.02em',
      }}>
        FR<span style={{ color: 'var(--accent)' }}>.</span>
      </span>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hide-mobile">
        {navLinks.map(l => (
          <Link key={l} to={l.toLowerCase()} smooth duration={600} offset={-68}
            style={{
              cursor: 'pointer', fontSize: '.875rem', fontWeight: 600,
              color: 'var(--text2)', transition: 'color .25s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >
            {l}
          </Link>
        ))}
      </nav>

      {/* Right*/}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Theme toggle */}
        <button onClick={toggle} style={{
          width: '40px', height: '40px', borderRadius: '10px',
          background: 'var(--surface2)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'var(--text2)',
          transition: 'all .25s',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(14,165,233,.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
        >
          {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
        </button>

        {/* Mobile menu btn */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', width: '40px', height: '40px', borderRadius: '10px',
          background: 'var(--surface2)', border: '1px solid var(--border)',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'var(--text)',
        }} className="mobile-menu-btn">
          {open ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{
              position: 'absolute', top: '68px', left: 0, right: 0,
              background: theme === 'dark' ? 'rgba(6,9,16,.97)' : 'rgba(248,250,252,.97)',
              backdropFilter: 'blur(20px)',
              padding: '20px 28px 28px',
              borderBottom: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}
          >
            {navLinks.map(l => (
              <Link key={l} to={l.toLowerCase()} smooth duration={600} offset={-68}
                onClick={() => setOpen(false)}
                style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text2)', cursor: 'pointer' }}
              >
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}