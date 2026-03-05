import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: .65, delay, ease: [.4, 0, .2, 1] },
});

const contacts = [
  { icon: <FiMail size={15} />,     label: 'Email',    value: 'fathimarizniya792@gmail.com', href: 'mailto:fathimarizniya792@gmail.com' },
  { icon: <FiPhone size={15} />,    label: 'Phone',    value: '077-9331489',                  href: 'tel:0779331489' },
  { icon: <FiLinkedin size={15} />, label: 'LinkedIn', value: '/fathimarizniya',              href: 'https://linkedin.com/in/fathimarizniya' },
  { icon: <FiGithub size={15} />,   label: 'GitHub',   value: '/FathimaRizniya',              href: 'https://github.com/FathimaRizniya' },
  { icon: <FiMapPin size={15} />,   label: 'Location', value: 'Sri Lanka',                    href: null },
];

const highlights = [
  'Software design and application development',
  'Requirement analysis and technical documentation',
  'Testing and quality assurance fundamentals',
  'Agile-based development and team collaboration',
];

const stats = [
  { end: 6,  suffix: '+', label: 'Projects Completed' },
  { end: 1,  suffix: '+', label: 'Years Experience' },
  { end: 6,  suffix: '+', label: 'Industry Training (mo)' },
];

/* Counting number animation */
function CountUp({ end, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { duration: 1500, bounce: 0 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, { duration: 1.6, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, end, count]);

  useEffect(() => {
    return rounded.on('change', v => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(v) + suffix;
      }
    });
  }, [rounded, suffix]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <p className="section-eyebrow">Who I Am</p>
          <h2 className="section-heading">Personal <em>Profile</em></h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginTop: '52px',
          alignItems: 'stretch',
        }}>

          {/*  LEFT */}
          <motion.div
            {...fadeUp(.28)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '14px',
            }}
          >
            <p style={{ color: 'var(--text2)', lineHeight: 1.85, fontSize: '1rem' }}>
              I am an HNDIT undergraduate at the Sri Lanka Institute of Advanced Technological
              Education (SLIATE) and currently working as a Software Engineering Intern, gaining
              hands-on experience in real-world software development environments.
            </p>

            <p style={{ color: 'var(--text2)', lineHeight: 1.85, fontSize: '1rem' }}>
              As a Software Engineer, my primary focus is on designing and developing scalable,
              efficient, and user-centered applications. I am passionate about building reliable
              and maintainable systems that align with business goals and deliver meaningful user
              experiences.
            </p>

            <p style={{ color: 'var(--text2)', lineHeight: 1.85, fontSize: '1rem' }}>
              Through my academic projects and industry exposure, I have strengthened my skills in:
            </p>

           
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .3 + i * .08 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '9px 12px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '9px',
                    fontSize: '.85rem',
                    color: 'var(--text2)',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontSize: '.65rem', marginTop: '3px', flexShrink: 0 }}>◆</span>
                  {item}
                </motion.div>
              ))}
            </div>

            <p style={{ color: 'var(--text2)', lineHeight: 1.85, fontSize: '1rem' }}>
              My goal is to grow within a dynamic team while continuously learning and delivering
              high-quality digital solutions.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            {...fadeUp(.15)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .15 + i * .07, duration: .5 }}
                style={{ flex: 1 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="card"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      padding: '10px 14px', textDecoration: 'none',
                      color: 'var(--text)', borderRadius: 'var(--radius)',
                      height: '100%',
                    }}
                  >
                    <span style={{
                      width: '34px', height: '34px', flexShrink: 0, borderRadius: '8px',
                      background: 'rgba(14,165,233,.1)', border: '1px solid rgba(14,165,233,.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent)',
                    }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '.68rem', color: 'var(--text3)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: '2px' }}>
                        {c.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="card" style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '10px 14px', borderRadius: 'var(--radius)',
                    height: '100%',
                  }}>
                    <span style={{
                      width: '34px', height: '34px', flexShrink: 0, borderRadius: '8px',
                      background: 'rgba(14,165,233,.1)', border: '1px solid rgba(14,165,233,.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent)',
                    }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '.68rem', color: 'var(--text3)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: '2px' }}>
                        {c.value}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .5 + i * .1 }}
                  style={{
                    flex: 1, textAlign: 'center',
                    padding: '16px 8px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.9rem', fontWeight: 900,
                    color: 'var(--accent)', lineHeight: 1,
                  }}>
                    <CountUp end={s.end} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: '.65rem', color: 'var(--text2)', marginTop: '6px', fontWeight: 500, lineHeight: 1.3 }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}