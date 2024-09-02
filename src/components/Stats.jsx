import {stats} from'../constants/index.js'
import styles from'../style.js'


const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
      {stats.map((stat)=>(
        <div key={stat.id} className='flex justify-start items-center m-3 flex-1 flex-row'>
          <h4 className=' font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] text-white '>{stat.value}</h4>
          <p className=' font-poppins font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-gradient ml-3 uppercase '>{stat.title}</p>
        </div>
      ))}
    </section>
  )


export default Stats