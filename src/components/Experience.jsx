import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const jobs = [
  {
    role: 'Junior Web Developer',
    company: 'CenoDigital',
    period: '2026 – Present',
    type: 'Part Time',
    color: 'var(--accent)',
    points: [
      'Built reusable UI components improving performance and maintainability.',
      'Converted Figma designs into fully functional web pages.',
      'Collaborated with designers & developers in an agile environment.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'IT Starter Pvt Ltd',
    period: 'Sep 2025 – Mar 2026',
    type: 'Internship',
    color: '#06b6d4',
    points: [
      'Integrated React components into a Laravel ecosystem.',
      'Implemented responsive, mobile-first UI with Tailwind CSS.',
      'Translated Figma mockups into pixel-perfect web pages.',
      'Managed Laravel backend — routing and form/database handling.',
    ],
  },
  {
    role: 'Graphic Design Trainee',
    company: 'Udaya Advertising',
    period: 'Apr 2023 – Sep 2023',
    type: 'Traineeship',
    color: '#38bdf8',
    points: [
      'Designed social media posts, banners and marketing creatives.',
      'Iterated on designs based on client feedback.',
      'Organised design assets and maintained project files.',
    ],
  },
];

const edu = [
  { degree: 'HND in Information Technology', school: 'SLIATE', period: '2023 – Present' },
  { degree: 'Diploma in English',             school: 'ICAS College', period: '2022' },
  { degree: 'Computer Graphic Designing',     school: 'Technical College, Wariyapola', period: '2022 – 2023' },
  { degree: 'Logo Designing Workshop',        school: 'Wellington International Campus', period: '2022' },
];

function SectionHead({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
      <span style={{ color: 'var(--accent)' }}>{icon}</span>
      <span style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text3)' }}>
        {label}
      </span>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <p className="section-eyebrow">My Background</p>
          <h2 className="section-heading">Experience & <em>Education</em></h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '64px', marginTop: '52px' }}>

          {/*WORK*/}
          <div>
            <SectionHead icon={<FiBriefcase size={18} />} label="Work Experience" />
            <div style={{ position: 'relative', paddingLeft: '28px', borderLeft: '2px solid var(--border)' }}>
              {jobs.map((j, i) => (
                <motion.div
                  key={j.role}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .1 * i, duration: .55 }}
                  style={{ marginBottom: '36px', position: 'relative' }}
                >
                  {/* Timeline */}
                  <div style={{
                    position: 'absolute', left: '-37px', top: '5px',
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: j.color, boxShadow: `0 0 0 4px var(--bg2), 0 0 12px ${j.color}60`,
                  }} />

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
                      {j.role}
                    </h3>
                    <span style={{
                      padding: '2px 10px', borderRadius: '30px', fontSize: '.68rem', fontWeight: 700,
                      background: `${j.color}18`, border: `1px solid ${j.color}40`, color: j.color,
                    }}>{j.type}</span>
                  </div>

                  <div style={{ fontSize: '.85rem', color: j.color, fontWeight: 600, marginBottom: '3px' }}>{j.company}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: '14px' }}>{j.period}</div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {j.points.map((pt, k) => (
                      <li key={k} style={{ fontSize: '.85rem', color: 'var(--text2)', lineHeight: 1.65, paddingLeft: '14px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: j.color, fontWeight: 700 }}>›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/*  EDUCATION*/}
          <div>
            <SectionHead icon={<FiBookOpen size={18} />} label="Education" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {edu.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .1 * i, duration: .5 }}
                  className="card"
                  style={{ padding: '20px', borderRadius: 'var(--radius)' }}
                >
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '.98rem', fontWeight: 700, color: 'var(--text)', marginBottom: '6px', lineHeight: 1.3 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: '.82rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '3px' }}>{e.school}</div>
                  <div style={{ fontSize: '.73rem', color: 'var(--text3)' }}>{e.period}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .container > div:last-child { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}