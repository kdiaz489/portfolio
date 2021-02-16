import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      id='projects'
      data-aos='fade-up'
      className='box-border h-95vh flex justify-center items-center grid grid-cols-12 lg:py-80'>
      <p className='text-black text-7xl col-span-full mb-5'>Projects</p>
      <p className='text-blue-default text-lg col-span-full'>
        I have experience in both back end and front end development
      </p>
      <div className='col-span-4'>
        <div className='bg-brown w-24 h-24'></div>
      </div>
      <div className='col-span-4'>
        <div className='bg-brown w-24 h-24'></div>
      </div>
      <div className='col-span-4'>
        <div className='bg-brown w-24 h-24'></div>
      </div>
    </section>
  );
};

export default Projects;
