import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () =>
(
  <section id='product' className={layout.sectionReverse}>
    <div className={`billing-left ${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
    </div>
    <div className={` billing-right ${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} font-confortaa`}>Easily control your  <br className='sm:block hidden' /> billing & invoicing.</h2>
      <p className={`font-confortaa ${styles.paragraph} max-w-[470px] mt-5`}>
        Id adipisicing reprehenderit sit velit esse. Qui elit dolor mollit deserunt exercitation Lorem. Culpa ad velit deserunt laboris fugiat qui anim labore et. Ut aliquip ad aliquip ipsum anim enim. Eu ullamco voluptate dolor fugiat consectetur ut dolor.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="google" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
      </div>
    </div>
  </section>
)


export default Billing