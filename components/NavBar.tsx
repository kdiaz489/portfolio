import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const toggleMenu = (e) => {
    e.preventDefault();
    let classList = document.querySelector('#navigation').classList;
    if (classList.contains('hidden')) {
      classList.remove('hidden');
    } else {
      classList.add('hidden');
    }
  };

  const smoothScroll = (e): void => {
    e.preventDefault();
    let path: string = e.target.textContent.toLowerCase();
    if (path) {
      setTimeout(() => {
        const el = window.document.getElementById(path);
        const r = el.getBoundingClientRect();
        window.top.scroll({
          top: pageYOffset + r.top,
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  return (
    <nav className='py-8 flex items-center bg-brown-light flex-wrap'>
      <span className='text-xl text-black'>Karen S Diaz</span>
      <button
        onClick={toggleMenu}
        className='inline-flex p-3 hover:bg-brown rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler'
        data-target='#navigation'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          className='w-6 h-6 text-black'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      <div
        className='hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto'
        id='navigation'>
        <div className='lg:inline-flex lg:flex-row lg:ml-auto flex flex-col'>
          <Link href='#projects' replace>
            <a
              onClick={smoothScroll}
              href='#projects'
              className='text-xl lg:inline-flex lg:w-auto lg:px-3 py-2 rounded text-black hover:text-blue'>
              <span>Projects</span>
            </a>
          </Link>
          <Link href='/contact'>
            <a className='text-xl lg:inline-flex lg:w-auto lg:px-3 py-2 rounded text-black hover:text-blue'>
              <span>Contact</span>
            </a>
          </Link>
          <Link href='/cv'>
            <a className='text-xl lg:inline-flex lg:w-auto lg:px-3 py-2 rounded text-black hover:text-blue'>
              <span>CV</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
