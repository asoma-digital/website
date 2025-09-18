// src/pages/Home.jsx

import BackgroundBlobs from '../components/shared/BackgroundBlobs';
import '../styles/pages/homepage.css';
import { Hero, CoreFeatures, AboutAsoma, ActionAsoma, Connect, Facts, Testimonials} from '../components/homepage'

export default function Home() {
  return (
    <main className="main">
      <BackgroundBlobs />

      <Hero />
      <Facts />
      {/* <ActionAsoma /> */}
      <CoreFeatures />
      <AboutAsoma />
      {/* <Testimonials /> */}
      {/* <Connect /> */}
    </main>
  );
}