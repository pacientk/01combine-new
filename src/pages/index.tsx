import { Inter } from 'next/font/google';
import HeadHtml from '@/components/Head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   return (
      <div className={'container-fluid cc-bacground-image'}>
         <HeadHtml />

         <nav className='navbar fixed-top navbar-expand-lg '>
            <div className='container'>
               <a className="navbar-brand" href="#">
                  <img src="/assets/images/logo.png" alt="Bootstrap" width="180" />
               </a>
               <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
               </button>
               <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav'>
                     <li className='nav-item'>
                        <a className='nav-link active' aria-current='page' href='/about'>About us</a>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='#'>Projects</a>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='#'>Contacts</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>

         <main className={'container'} style={{ height: 1300, paddingTop: 64 }}>
            <div className={'row'}>
              <div className={'col'} style={{
                 marginTop: 160,
                 marginInlineStart: 100
              }}>
                 <h1 style={{
                    fontSize: 60,
                    lineHeight: .95
                 }}>
                    CREATE<br />SOFTWARE<br />SOLUTION
                 </h1>
                 <h6>
                    We are creating<br/>a software solution
                 </h6>
              </div>
            </div>
            {/*<div className={styles.center}>*/}
            {/*   <Image*/}
            {/*      className={styles.logo}*/}
            {/*      src='/next.svg'*/}
            {/*      alt='Next.js Logo'*/}
            {/*      width={180}*/}
            {/*      height={37}*/}
            {/*      priority*/}
            {/*   />*/}
            {/*   <div className={styles.thirteen}>*/}
            {/*      <Image src='/thirteen.svg' alt='13' width={40} height={31} priority />*/}
            {/*   </div>*/}
            {/*</div>*/}
         </main>
      </div>
   );
}
