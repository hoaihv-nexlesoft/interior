import Layout from '../../components/layout/Layout';
import detail1 from '../../assets/detail1.jpg';
import detail2 from '../../assets/detail2.jpg'
import Image from 'next/image';
import './styles.css';
import { PiArrowLeftThin } from "react-icons/pi";
import FacebookShareButton from '../../components/facebook-share';
import PressSection from '../../components/out-press/OutPress';
import Link from 'next/link';

export default function DetailProject() {
   return (
      <Layout>
         <div className='container-global'>
            <h1 className="global-font-title">
               <strong>APEC MANDALA WYNDHAM PHU YEN - PUBLIC AREA</strong>
            </h1>
            <div><Link href="/" className="memberBack"><PiArrowLeftThin size={24} /> BACK</Link></div>
              <div className='source'>
               Source: <Link href="https://vnexpress.net/thiet-ke-khac-biet-cua-khu-nghi-duong-sailing-club-dau-tien-tai-mien-bac-4347719.html" target='_blank'>VNExpress dated 01.09.2021</Link>
            </div>
            <div className='detail-images'>
                <Image src={detail1} alt="detail1" />
                <Image src={detail2} alt="detail2" />
            </div>
            <div>
            <FacebookShareButton url={"https://example.com"} text={'Check out this awesome website!'} />
            </div>
            <div>
            <PressSection />   
            </div>
            <div className='right-banner'>
                <Image src={detail1}/>
            </div>
         </div>
      </Layout>
   )
}
