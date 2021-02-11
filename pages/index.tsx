import Link from 'next/link';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import { useEffect } from 'react';
export default function Home() {
  // useEffect((): void => {
  //   const path = window.location.hash;
  //   if (path && path.includes('#')) {
  //     setTimeout(() => {
  //       const id = path.replace('#', '');
  //       const el = window.document.getElementById(id);
  //       const r = el.getBoundingClientRect();
  //       window.top.scroll({
  //         top: pageYOffset + r.top,
  //         behavior: 'smooth',
  //       });
  //     }, 600);
  //   }
  // });
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
    </>
  );
}
