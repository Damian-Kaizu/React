import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'
const CardDeal = () => 
   (
    <section className={layout.section}>
      <div className={`cardDeal-left ${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Dolore ex tempor dolor elit nostrud ad anim aute adipisicing officia id. Aute id laboris irure duis non tempor. Elit culpa velit esse incididunt nostrud. Aliqua id velit consequat laborum.</p>
        <Button styles="mt-10"/>
        </div>
        <div className={`cardDeal-right ${layout.sectionImg}`}>
          <img src={card} alt="card" className='w-[100%] h-[100%]'/>
        </div>
    </section>
  )


export default CardDeal