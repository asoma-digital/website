// src/pages/Home.jsx

import BackgroundBlobs from '../components/shared/BackgroundBlobs';
import '../styles/pages/homepage.css';

export default function Home() {
  return (
    <main className="main">
      <BackgroundBlobs />
      <p className="stay-connected">stay connected. stay focused.</p>
      <p>clarifi by asoma digital LTD empowers ADHD students with science-backed tools for focus, time management, and self advocacy, </p>
    </main>
  );
}