import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
   const [scrollTop, setScrollTop] = useState(0);

   useEffect(() => {
      const handleScroll = (event: EventInit) => {
         setScrollTop(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <nav className={`navbar fixed-top navbar-expand-lg ${scrollTop > 50 ? 'cc-navbar-bg' : ''}`}>
         <div className='container'>
            <Link className={'navbar-brand'} href='/'>
               <Image style={{ marginInlineEnd: 30 }} src={'/assets/images/01combine_logo.svg'} alt={'0/1 COMBINE'} width={200} height={20}/>
            </Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
               <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
               <ul className='navbar-nav'>
                  <li className='nav-item'>
                     <Link className='nav-link active' aria-current='page' href='/about'>About us</Link>
                  </li>
                  <li className='nav-item'>
                     <Link className='nav-link' href='#'>Services</Link>
                  </li>
                  <li className='nav-item'>
                     <Link className='nav-link' href='#'>Contacts</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
