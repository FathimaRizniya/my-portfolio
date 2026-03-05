import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiDownload, FiSend } from 'react-icons/fi';
import myCv from '../assets/mycv.pdf';

const links = [
  { icon: <FiMail size={20} />,     label: 'Email',    sub: 'fathimarizniya792@gmail.com', href: 'mailto:fathimarizniya792@gmail.com', color: 'var(--accent)' },
  { icon: <FiPhone size={20} />,    label: 'Phone',    sub: '077-9331489',                  href: 'tel:0779331489',                    color: '#06b6d4' },
  { icon: <FiLinkedin size={20} />, label: 'LinkedIn', sub: '/fathimarizniya',              href: 'https://linkedin.com/in/fathimarizniya', color: '#0077b5' },
  { icon: <FiGithub size={20} />,   label: 'GitHub',   sub: '/FathimaRizniya',              href: 'https://github.com/FathimaRizniya',  color: 'var(--text2)' },
];

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
        
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '600px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(14,165,233,.1) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65 }}
          >
            <p className="section-eyebrow" style={{ justifyContent: 'center' }}>
              Contact Me
            </p>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>
              Let's build something <em>great</em>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto 52px', textAlign: 'center' }}>
              I'm open to new opportunities. If you have a project in mind or just want to connect, reach out  I'd love to hear from you!
            </p>
          </motion.div>

          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px', maxWidth: '860px', margin: '0 auto 48px',
          }}>
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .1 * i }}
                className="card"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: '10px', padding: '28px 20px', textDecoration: 'none',
                  color: 'var(--text)', borderRadius: 'var(--radius)',
                }}
              >
                <span style={{
                  width: '46px', height: '46px', borderRadius: '12px',
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: l.color, transition: 'all .25s',
                }}>{l.icon}</span>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '.95rem', color: 'var(--text)' }}>
                  {l.label}
                </div>
                <div style={{ fontSize: '.75rem', color: 'var(--text2)', textAlign: 'center', lineHeight: 1.4 }}>{l.sub}</div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: .92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .35 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href={myCv} download="Fathima_Risniya_CV.pdf" className="btn-primary"
              style={{ padding: '15px 34px', fontSize: '.95rem' }}>
              <FiDownload size={17} /> Download My CV
            </a>
            <a href="mailto:fathimarizniya792@gmail.com" className="btn-ghost"
              style={{ padding: '14px 30px', fontSize: '.95rem' }}>
              <FiSend size={17} /> Send an Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '30px 28px',
        textAlign: 'center',
        background: 'var(--bg)',
      }}>
        <p style={{ fontSize: '.83rem', color: 'var(--text3)' }}>
          Designed & built by{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Fathima Risniya</span>
          {' '}· {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}