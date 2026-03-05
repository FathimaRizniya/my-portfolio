import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

import libraryImg   from '../assets/projects/schoollibrarymanagementsystem.png';
import taskImg      from '../assets/projects/taskmanagementwebapplication.png';
import posImg       from '../assets/projects/possystem.png';
import pharmacyImg  from '../assets/projects/medicalpharmacysystem.png';
import bookshopImg  from '../assets/projects/bookshopmanagementsystem.png';
import studentImg   from '../assets/projects/studentmanagementsystem.png';
import whaterImg    from '../assets/projects/watherapplication.png';
import todoImg      from '../assets/projects/tamatowebsite.png';
import blomixImg   from '../assets/projects/bloomix.png';
import rebuilt  from '../assets/projects/rebuildwebsite.png';
import appli     from '../assets/projects/to-Do.png';
import graphic1Img  from '../assets/projects/graphic1.jpg';
import graphic2Img  from '../assets/projects/graphic2.jpg';
import graphic3Img  from '../assets/projects/graphic3.jpg';
import grapic4Img  from '../assets/projects/graphic4.jpg';
import grapic5Img  from '../assets/projects/graphic5.jpg';
import grapic6Img  from '../assets/projects/graphic6.jpg';
import grapic7Img  from '../assets/projects/graphic7.jpg';
import grapic8Img  from '../assets/projects/graphic8.jpg';
import grapic9Img  from '../assets/projects/graphic9.jpg';
import grapic10Img from '../assets/projects/graphic10.jpg';
import grapic11Img from '../assets/projects/graphic11.jpg';
import grapic12Img from '../assets/projects/graphic12.jpg';
import grapic13Img from '../assets/projects/graphic13.jpg';
import grapic14Img from '../assets/projects/graphic14.jpg';
import grapic15Img from '../assets/projects/graphic15.jpg';
import grapic16Img from '../assets/projects/graphic16.jpg';
import grapic17Img from '../assets/projects/graphic17.jpg';
import grapic18Img from '../assets/projects/graphic18.jpg';
import grapic19Img from '../assets/projects/graphic19.jpg';
import grapic20Img from '../assets/projects/graphic20.jpg';

import grapic22Img from '../assets/projects/graphic22.jpg';


const projects = [
  {
    title: 'School Library Management System',
    desc: 'Developed a library management web application that enables students to search and request books and allows librarians to manage inventory and borrowing activities. Developed as my final year individual project',
    img: libraryImg,
    tags: ['React.js', 'Laravel', 'MySQL'],
    live: '#',
    code: 'https://github.com/FathimaRizniya/school-library-management-system.git',
    featured: true,
  },
  {
    title: 'Task Management',
    desc: 'A web-based task management system built with Laravel and Blade templates. It features secure user authentication, role-based access, and full CRUD functionality for tasks and categories, with a clean and professional interface.',
    img: taskImg,
    tags: ['Laravel', 'PHP', 'MySQL'],
    live: '#',
    code: 'https://github.com/FathimaRizniya/task-m',
  },
  {
    title: 'POS System | Product Module',
    desc: 'Developed the Product module for a POS system using React and Laravel, featuring full CRUD functionality, clean management interfaces, and seamless frontend-backend integration. Collaborated in a team environment and used Git for version control.',
    img: posImg,
    tags: ['React', 'Laravel', 'Git'],
    live: '#',
    code: '#',
  },
  {
    title: 'Medical Pharmacy System',
    desc: 'A web-based pharmacy management system built with PHP, MySQL, HTML, CSS, and Bootstrap. It features user and admin logins, prescription uploads, quotation generation, and an approval/rejection workflow with a simple dashboard interface.',
    img: pharmacyImg,
    tags: ['PHP', 'MySQL'],
    live: '#',
    code: '#',
  },
  {
    title: 'Bookshop Management System - Group Project',
    desc: 'A desktop booksshop management system built with C#, designed to streamline inventory management, sales processing, customer relationships, and reporting. The system improves operational efficiency, data accuracy, and overall business performance.',
    img: bookshopImg,
    tags: ['C#', 'Visual Studio', 'MySQL'],
    live: '#',
    code: 'https://github.com/FathimaRizniya/Bookshop-Management-System.git',
  },
  {
    title: 'Student Management System',
    desc: 'A web-based student management system that handles personal details, exam records, staff information, and student marks. It streamlines previously manual processes, integrates different sections of the organization, and allows smooth operation for both technical and non-technical users.',
    img: studentImg,
    tags: ['Microsoft Access'],
    live: '#',
    code: '#',
  },
  {
    title: 'Weather Dashboard',
    desc: ' A simple web app where users can search any city and instantly see live weather with icons. Developed using HTML, CSS, JavaScript (Fetch API), and OpenWeather API. Perfect for quick weather checks without installing apps!',
    img: whaterImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: 'https://fathimarizniya.github.io/weather-dashboard/',
  },

   {
    title: 'to-Do Web Application',
    desc: ' Developed a simple and interactive To-Do List web application using HTML, CSS, and JavaScript. The project allows users to add, edit, complete, and delete tasks to manage their daily activities efficiently. It features a clean and responsive user interface, making task management easy and user-friendly.',
    img: appli,
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: '#',
  },

  {
    title: 'Tamato Website',
    desc: ' Developed a frontend-only React website for a personal project called Tomato, using React.js and MySQL for learning purposes. The site showcases modern web design techniques and interactive features while practicing frontend development skills.',
    img: todoImg,
    tags: ['React.js', 'MySQL'],
    live: '#',
    code: 'https://github.com/FathimaRizniya/food-delivery.git',
  },

   {
    title: 'Blomix Website',
    desc: ' Built a flower shop website using HTML, CSS, and JavaScript. This project improved my frontend skills and taught me how to create responsive and interactive web designs. The site features a clean layout, smooth animations, and a user-friendly interface, making it an enjoyable experience for visitors.',
    img: blomixImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://fathimarizniya.github.io/Flower-shop-web/',
    code: 'https://fathimarizniya.github.io/Flower-shop-web/',
  },
  {
    title: 'Rebuilt Company Website | Group Project',
    desc: 'Rebuilt and modernized an existing company website as part of a group project using React for the frontend and Laravel for the backend. The goal of the project was to improve the website’s performance, design, and user experience while implementing a more scalable and maintainable architecture.',
    img: rebuilt,
    tags: ['React', 'Laravel', 'JavaScript'],
    live: '#',
    code: '#',
  },

 
];

const graphicProjects = [
  { img: graphic1Img, title: 'Cake Logo Design' },
  { img: graphic2Img, title: 'Academic Poster Design' },
  { img: graphic3Img, title: 'Academic poster' },
  { img: grapic4Img, title: 'Combo poster' },
  { img: grapic5Img, title: 'poster' },
  { img: grapic6Img, title: 'Bank details for class' },
  { img: grapic7Img, title: 'Class Post' },
  { img: grapic8Img, title: 'Class Post' },
  { img: grapic9Img, title: 'Logo Design' },
  { img: grapic10Img, title: 'Gift shop post' },
  { img: grapic11Img, title: 'Photoshop Art ' },
  { img: grapic12Img, title: 'Hair combo poster' },
  { img: grapic13Img, title: 'Cofee shop logo' },
  { img: grapic14Img, title: 'Photoshop Art' },
  { img: grapic15Img, title: 'Business Card Design' },
  { img: grapic16Img, title: 'post -practice' },
  { img: grapic17Img, title: 'practice' },
  { img: grapic18Img, title: 'Art' },
  { img: grapic19Img, title: 'Event Card' },
  { img: grapic20Img, title: 'Business Card' },
 
  { img: grapic22Img, title: 'UI/UX Design' },
];


function Lightbox({ img, title, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,.88)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px',
          cursor: 'zoom-out',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
            color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <FiX size={18} />
        </button>

        {/* Image */}
        <motion.img
          initial={{ scale: .85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .3 }}
          src={img}
          alt={title}
          onClick={e => e.stopPropagation()}
          style={{
            maxWidth: '90vw', maxHeight: '88vh',
            objectFit: 'contain', borderRadius: '12px',
            boxShadow: '0 32px 80px rgba(0,0,0,.6)',
            cursor: 'default',
          }}
        />

        {/* Title */}
        <div style={{
          position: 'absolute', bottom: '24px',
          color: 'rgba(255,255,255,.7)', fontSize: '.88rem', fontWeight: 500,
        }}>{title}</div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: .55, delay: i * .08 }}
      className="card"
      style={{ borderRadius: 'var(--radius)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden', background: 'var(--surface2)', flexShrink: 0 }}>
        <img
          src={p.img}
          alt={p.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {p.featured && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            padding: '4px 10px', background: 'var(--accent)', color: '#fff',
            borderRadius: '6px', fontSize: '.68rem', fontWeight: 700, letterSpacing: '.04em',
          }}>Featured</div>
        )}
      </div>

      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.05rem', fontWeight: 700,
          color: 'var(--text)', marginBottom: '10px', lineHeight: 1.3,
        }}>{p.title}</h3>
        <p style={{ fontSize: '.84rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '18px' }}>
          {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary"
            style={{ padding: '9px 18px', fontSize: '.78rem', flex: 1, justifyContent: 'center' }}>
            <FiExternalLink size={13} /> Live Demo
          </a>
          <a href={p.code} target="_blank" rel="noreferrer" className="btn-ghost"
            style={{ padding: '9px 18px', fontSize: '.78rem' }}>
            <FiGithub size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function GraphicCard({ item, i, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: .55, delay: i * .1 }}
      className="card"
      onClick={onClick}
      style={{ borderRadius: 'var(--radius)', overflow: 'hidden', cursor: 'zoom-in' }}
    >
      <div style={{ height: '260px', overflow: 'hidden', background: 'var(--surface2)', position: 'relative' }}>
        <img
          src={item.img}
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Hover overlay hint */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(14,165,233,.0)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .3s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(14,165,233,.15)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(14,165,233,.0)'}
        >
          <span style={{
            background: 'rgba(0,0,0,.5)', color: '#fff',
            padding: '6px 14px', borderRadius: '20px',
            fontSize: '.75rem', fontWeight: 600,
            opacity: 0, transition: 'opacity .3s',
            pointerEvents: 'none',
          }}
            className="graphic-hint"
          >Click to expand</span>
        </div>
      </div>
      <div style={{ padding: '14px 18px' }}>
        <p style={{ fontSize: '.88rem', color: 'var(--text2)', fontWeight: 500 }}>{item.title}</p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="projects">
      <div className="container">

        {/* Dev Projects */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-heading">Things I've <em>built</em></h2>
          <p className="section-sub">
            A selection of full-stack projects showcasing my skills across frontend, backend, and database design.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '22px',
          marginTop: '52px',
        }}>
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>

        {/* Graphic Design */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          style={{ marginTop: '88px' }}
        >
          <p className="section-eyebrow">Creative Work</p>
          <h2 className="section-heading">Graphic <em>Design</em></h2>
          <p className="section-sub">
            A collection of graphic design and visual creative works. Click any image to view full size.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '22px',
          marginTop: '40px',
        }}>
          {graphicProjects.map((item, i) => (
            <GraphicCard
              key={item.title}
              item={item}
              i={i}
              onClick={() => setLightbox(item)}
            />
          ))}
        </div>

      </div>

      
      {lightbox && (
        <Lightbox
          img={lightbox.img}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}

      <style>{`
        .graphic-hint { opacity: 0 !important; }
        .card:hover .graphic-hint { opacity: 1 !important; }
      `}</style>
    </section>
  );
}