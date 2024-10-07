import Layout from '../../components/layout/Layout';
import detail1 from '../../assets/detail1.jpg';
import detail2 from '../../assets/detail2.jpg'
import Image from 'next/image';
import './styles.css';
import { PiArrowLeftThin } from "react-icons/pi";

export default function DetailProject() {
   return (
      <Layout>
         <div className='container-global'>
         <div className='global-h2 title-about'><span className='our'>ABOUT</span><span className='prj'>KAZE</span></div>
            <div className='detail-image'>
                <Image src={detail1} alt="detail1" />
            </div>
               <div className='introduce-about'>
                  <p className='global-font-text'>
                  With 18 years of experience in the fields of architecture, industrial and interior design, Danish-born and raised Fong-Chan Zeuthen has built up solid recognition for her work, and a reputation of keeping consistency in a rather fluctuated market of Vietnam. 2009 offered just the right opportunity, and with a great passion and substantial time of incubation, KAZE INTERIOR DESIGN STUDIO was born.
                  </p>{' '}
                  <p className='global-font-text'>
                  Since launched, the boutique studio has transformed the landscape of Vietnam with over 100 high-profile projects in Vietnam and Cambodia. KAZE's commitment to building well without sacrificing on design have made KAZE a sought after partner in a wide array of development projects that span the sectors of hospitality, F&B, and luxury residential buildings such as Le Meridien Cam Ranh Resort & Spa by Marriot, DIAMOND ISLAND PENTHOUSE & VILLAS by Kusto, and Liberty Central Saigon Citypoint in Ho Chi Minh City. For a full list of KAZE INTERIOR DESIGN STUDIO’S projects, click here.
                  </p>{' '}
                  <p className='global-font-text'>
                  KAZE INTERIOR DESIGN STUDIO creates buildings for humans. This concept may seem simple but, in fact, it is something that is often overlooked in the design process. The designers at KAZE constantly asking themselves questions such as: How will the light come in? Who will use this chair and for what purpose? The end goal is to create a space that is functional and comfortable; not just a pretty picture to be used on Instagram. 
                  </p>{' '}
                  <p className='global-font-text'>
                  KAZE’s job is to imagine the psychological effects of the proposed space and what it will feel like to be in it. The mood can shift simply by rethinking the types of textiles and materials that are used. Every choice is deliberate. 
                  </p>{' '}
                  <p className='global-font-text'>
                  This attention to excellence has been rewarded with numerous accolades in the fields of Interior Design and development. Most recently, KAZE INTERIOR DESIGN STUDIO was winner of Best Hotel Interior Design for Le Meridien Cam Ranh Resort & Spa in the 2018 Property awards in both Vietnam and Thailand. The boutique design firm also took home the award for Best Hotel Interior Design at the Asia Property Awards In 2016 for Renaissance Riverside Hotel Saigon. 
                  </p>{' '}
                  <p className='global-font-text'>
                  KAZE INTERIOR DESIGN STUDIO is an equal opportunity, an international workplace that erases the divisions between genders and nationalities. This all-inclusive space harnesses the team’s creativity and results in an innovative and passionate environment where the love of design always comes first.
                  </p>
               </div>
            <div className='detail-image'>
               <div className="proLeft"> <Image src={detail1} alt="detail1" /></div>
               <div className="proRight">  <Image src={detail2} alt="detail2" /></div>
            </div>
            <div className='detail-image'>
               <div className="proLeft"> <Image src={detail1} alt="detail1" /></div>
               <div className="proRight">  <Image src={detail2} alt="detail2" /></div>
            </div>
            <div className='detail-image'>
               <div className="proLeft"> <Image src={detail1} alt="detail1" /></div>
               <div className="proRight">  <Image src={detail2} alt="detail2" /></div>
            </div>
            <div>
               <p>
               + 2022 ATAP Design Award, Winner, Best Public Space Design, Sailing Club Signature Clubhouse, Phu Quoc
               </p>
               <p>
               + 2022 VMARK Vietnam Design Award, Silver Winner, Best F&B Concept Design, Sailing Club Ha Long Bay
                  </p>
                  <p>
                  + 2019 BCI Asia Interior Design Awards, Winner of Lodging Category, Liberty Quy Nhon Hotel
                  </p>
                  <p>
                  + 2018 Vietnam Property Awards, Best Hotel Interior Design, Le Meridien Cam Ranh Resort & Spa
                  </p>
            </div>
            <div className='right-banner'>
                <Image src={detail1}/>
            </div>
         </div>
      </Layout>
   )
}
