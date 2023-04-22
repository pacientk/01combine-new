import vars from '@/assets/scss/custom/_vars.module.scss';

export default function Home() {

   return (
      <div id={'homeScreen'} className={'container-fluid cc-background-image'}>
         <div className={'container'} style={{ height: 1300, paddingTop: 64 }}>
            <div className={'row'}>
               <div className={'col-7 cc-main-banner-container'}>
                  <h1 style={{color: vars.brandColor}}>
                     CREATING<br />
                     SOFTWARE<br />
                     SOLUTIONS
                  </h1>
                  <p className={'mt-5'}>
                     We are is really the bests <br />
                     By providing an innovative work environment and encouraging original thinking, we support our development teams in creating beautifully powerful solutions. We love new technologies and provide our customers with the most modern, efficient and cutting-edge designs.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
