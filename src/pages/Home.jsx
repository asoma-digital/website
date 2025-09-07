// src/pages/Home.jsx

import BackgroundBlobs from '../components/shared/BackgroundBlobs';
import '../styles/pages/homepage.css';
import { Hero, CoreFeatures, AboutAsoma, JoinBeta, Newsletter, GetTouch } from '../components/homepage'

export default function Home() {
  return (
    <main className="main">
      <BackgroundBlobs />
      <Hero />
      <CoreFeatures />
      {/* <AboutAsoma />
      <JoinBeta />
      <Newsletter />
      <GetTouch /> */}
    </main>
  );
}