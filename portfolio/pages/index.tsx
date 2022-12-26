import type { NextPage } from 'next';
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import { HiChevronDoubleUp } from "react-icons/hi2";


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#0a71f7]/80">
      <Head>
        <title>Romain GARNIER</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HiChevronDoubleUp 
              className="h-10 w-10 hover:text-[#0a71f7] cursor-pointer"/>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

