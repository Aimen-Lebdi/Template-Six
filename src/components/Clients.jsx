import {clients} from '../constants/index'
import styles from '../style'
const Clients = () => (
    <section id='clients' className={`${styles.flexCenter} my-5`} >
      <div className={`${styles.flexCenter} flex-wrap w-full`} >
        {clients.map((client)=>(
          <div key={client.id} className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[192px] `} >
            <img src={client.logo} alt="client-logo" className=' w-[100px] sm:w-[192px] object-contain  ' />
          </div>
        ))}
      </div>
    </section>
  )


export default Clients