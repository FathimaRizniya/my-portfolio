import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'HTML & CSS',   pct: 90 },
  { name: 'PHP',          pct: 75 },
  { name: 'JavaScript',   pct: 60 },
  { name: 'React.js',     pct: 70 },
  { name: 'Laravel',      pct: 72 },
  { name: 'MySQL',        pct: 90 },
  { name: 'Tailwind CSS', pct: 75 },
  { name: 'Node.js',      pct: 55 },
  { name: 'Java',         pct: 50 },
  { name: 'C#',           pct: 55 },
  { name: 'MVC Architecture', pct: 70 },
];

const tools = ['VS Code', 'Visual Studio', 'NetBeans', 'Git', 'GitHub', 'Figma','XAMPP','Adobe Photoshop'];
const soft  = ['Analytical Thinking', 'Problem Solving', 'Quick Learner', 'Attention to Detail', 'Team Collaboration', 'Adaptability','Communication','Time Management',
  'Critical Thinking','Creativity','Leadership','Project Management','SEO Knowledge'
];

function Bar({ name, pct, i, inView }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ marginBottom: '7px' }}>
        <span style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--text)' }}>{name}</span>
      </div>
      <div style={{ height: '5px', background: 'var(--surface2)', borderRadius: '5px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: .06 * i, ease: [.4, 0, .2, 1] }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
            borderRadius: '5px',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <p className="section-eyebrow">Expertise</p>
          <h2 className="section-heading">My <em>Technical</em>  Capabilities</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '60px', marginTop: '52px' }}>

          {/* Skill */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65, delay: .15 }}
          >
            <h3 style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '26px' }}>
              Languages & Frameworks
            </h3>
            {skills.map((s, i) => <Bar key={s.name} {...s} i={i} inView={inView} />)}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '18px' }}>
                Tools & IDEs
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                {tools.map(t => (
                  <span key={t} style={{
                    padding: '7px 16px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '.8rem', fontWeight: 600, color: 'var(--text2)',
                    transition: 'all .2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(14,165,233,.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65, delay: .25 }}
          >
            

            <div>
              <h3 style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '18px' }}>
                Soft Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {soft.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .3 + i * .06 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '10px 14px',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '9px',
                      fontSize: '.85rem', fontWeight: 500, color: 'var(--text2)',
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: '.7rem' }}>◆</span>
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}