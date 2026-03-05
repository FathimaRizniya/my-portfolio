import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-scroll';
import profileImg from '../assets/Profile.Jpg';
import myCv from '../assets/mycv.pdf';

function Particle({ x, y, size, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay }}
      style={{
        position: 'absolute', left: x, top: y,
        width: size, height: size, borderRadius: '50%',
        background: 'var(--accent)', opacity: 0.35,
        filter: 'blur(1px)', pointerEvents: 'none',
      }}
    />
  );
}

const particles = [
  { x: '8%',  y: '20%', size: 5, delay: 0   },
  { x: '90%', y: '15%', size: 4, delay: 0.8 },
  { x: '75%', y: '70%', size: 6, delay: 1.5 },
  { x: '15%', y: '75%', size: 4, delay: 2   },
  { x: '50%', y: '88%', size: 3, delay: 0.5 },
  { x: '92%', y: '50%', size: 5, delay: 1.2 },
];

export default function Hero() {

  
  const [firstDisplayed, setFirstDisplayed] = useState('');
  const [firstIndex, setFirstIndex] = useState(0);
  const [firstDone, setFirstDone] = useState(false);

  
  const [secondDisplayed, setSecondDisplayed] = useState('');
  const [secondIndex, setSecondIndex] = useState(0);
  const [secondDone, setSecondDone] = useState(false);

  
  useEffect(() => {
    if (firstIndex < 'Fathima'.length) {
      const t = setTimeout(() => {
        setFirstDisplayed('Fathima'.substring(0, firstIndex + 1));
        setFirstIndex(i => i + 1);
      }, 120);
      return () => clearTimeout(t);
    } else {
      setFirstDone(true);
    }
  }, [firstIndex]);

  
  useEffect(() => {
    if (firstDone && secondIndex < 'Risniya'.length) {
      const t = setTimeout(() => {
        setSecondDisplayed('Risniya'.substring(0, secondIndex + 1));
        setSecondIndex(i => i + 1);
      }, 120);
      return () => clearTimeout(t);
    } else if (firstDone && secondIndex === 'Risniya'.length) {
      setSecondDone(true);
    }
  }, [firstDone, secondIndex]);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', paddingTop: '68px',
    }}>

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '30%', right: '15%',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,.18) 0%, transparent 70%)',
        filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
      }} />

      {particles.map((p, i) => <Particle key={i} {...p} />)}

      <div className="container" style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        
        gridTemplateColumns: '1fr auto',
        gap: '64px', alignItems: 'center',
      }}>

      
        <div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .15 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px 6px 8px',
              background: 'rgba(14,165,233,.1)',
              border: '1px solid rgba(14,165,233,.25)',
              borderRadius: '40px',
              fontSize: '.78rem', fontWeight: 600,
              color: 'var(--accent)', marginBottom: '28px',
            }}
          >
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 0 3px rgba(34,197,94,.25)',
              animation: 'pulse-green 2s infinite',
            }} />
            Available for opportunities
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2, duration: .6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '20px',
              minHeight: '2.4em',
            }}
          >
            
            <span style={{ display: 'block', color: 'var(--text)' }}>
              {firstDisplayed}
              {!firstDone && (
                <span style={{
                  display: 'inline-block',
                  width: '4px', height: '0.8em',
                  background: 'var(--text)',
                  marginLeft: '4px',
                  verticalAlign: 'middle',
                  borderRadius: '2px',
                  animation: 'blink .75s step-end infinite',
                }} />
              )}
            </span>

           
            <span style={{ display: 'block', color: 'var(--accent)', minHeight: '1.1em' }}>
              {firstDone ? secondDisplayed : ''}
              {firstDone && !secondDone && (
                <span style={{
                  display: 'inline-block',
                  width: '4px', height: '0.8em',
                  background: 'var(--accent)',
                  marginLeft: '4px',
                  verticalAlign: 'middle',
                  borderRadius: '2px',
                  animation: 'blink .75s step-end infinite',
                  
                }} />
              )}
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .38 }}
            style={{ display: 'flex', alignItems: 'center',  gap: '14px', marginBottom: '24px' }}
          >
            <div style={{ height: '2px', width: '36px', background: 'var(--accent)', borderRadius: '2px' }} />
            <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text2)', letterSpacing: '.04em' }}>
              Software Engineer 
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .48 }}
            style={{
              fontSize: '1.02rem', color: 'var(--text2)',
              lineHeight: 1.82, maxWidth: '480px', marginBottom: '40px',
            }}
          >
            I’m a motivated undergraduate with hands-on experience from a 6-month Software Engineering internship. 
            I enjoy building modern web applications and solving real-world problems through technology. Passionate 
            about learning new tools and creating efficient, user-focused digital solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .58 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}
          >
            <a href={myCv} download="Fathima_Risniya_CV.pdf" className="btn-primary">
              <FiDownload size={15} /> Download CV
            </a>
            <Link to="projects" smooth duration={800} offset={-68}>
              <button className="btn-ghost">
                View Projects <FiArrowRight size={15} />
              </button>
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
            style={{ display: 'flex', gap: '14px' }}
          >
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com/FathimaRizniya', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/fathimarizniya', label: 'LinkedIn' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  color: 'var(--text2)', textDecoration: 'none', transition: 'all .25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'rgba(14,165,233,.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text2)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: .85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .3, duration: .8 }}
          className="hide-mobile"
          style={{ position: 'relative', width: '300px', height: '300px', flexShrink: 0 }}
        >
          {/* Orbiting ring 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: '-22px', borderRadius: '50%',
              border: '1.5px solid rgba(14,165,233,.25)',
              borderTopColor: 'var(--accent)',
            }}
          />
          {/* Orbiting ring 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: '-46px', borderRadius: '50%',
              border: '1px dashed rgba(14,165,233,.15)',
              borderRightColor: 'rgba(14,165,233,.5)',
            }}
          />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', inset: '-22px', borderRadius: '50%' }}
          >
            <div style={{
              position: 'absolute', top: '50%', left: '-3px',
              width: '10px', height: '10px',
              background: 'var(--accent)', borderRadius: '50%',
              boxShadow: '0 0 12px var(--accent)',
              transform: 'translateY(-50%)',
            }} />
          </motion.div>

        
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [.4, .7, .4] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: 'absolute', inset: '-10px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(14,165,233,.3) 0%, transparent 68%)',
              filter: 'blur(20px)',
            }}
          />

          
          <div style={{
            width: '300px', height: '300px',
            clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, var(--surface), var(--surface2))',
            position: 'relative', zIndex: 1,
          }}>
            <img
              src={profileImg}
              alt="Fathima Risniya"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

         
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            border: '2.5px solid rgba(14,165,233,.5)',
            pointerEvents: 'none',
          }} />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%,100%{ box-shadow:0 0 0 3px rgba(34,197,94,.25); }
          50%{ box-shadow:0 0 0 6px rgba(34,197,94,.1); }
        }
        @keyframes blink {
          0%,100%{ opacity: 1; }
          50%{ opacity: 0; }
        }
        @media (max-width: 900px) {
          #hero .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}