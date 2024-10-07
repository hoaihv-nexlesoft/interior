import Layout from '../../components/layout/Layout';
import detail1 from '../../assets/detail1.jpg';
import detail2 from '../../assets/detail2.jpg';
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
         
              <Link href="/" className="memberBack"><PiArrowLeftThin size={24} /> BACK</Link>
        
            <div className='introduce'>
               <div className="proLeft">
                  <p>
                     <strong>ADDRESS</strong>Tuy Hoa, Phu Yen
                  </p>{' '}
                  <p>
                     <strong>DEVELOPER</strong>APEC GROUP
                  </p>{' '}
                  <p>
                     <strong>YEAR</strong>2021
                  </p>{' '}
                  <p>
                     <strong>STATUS</strong>COMPLETED
                  </p>{' '}
                  <p>
                     <strong>MEMBER</strong>DANG VIET KHOA - NGUYEN MY HANH -
                     DANG LUU DIEM PHUONG - LE MINH HOANG
                  </p>{' '}
               </div>
               <div class="proRight">
                  <p className='global-font-text'>A place to keep the cultural imprints of Phu Yen</p>
                  <p className='global-font-text'>
                     The Art Gallery is a place that preserves the cultural
                     imprints of Phu Yen. The hotel lobby embodies the spirit of
                     a miniature museum, safeguarding and reviving the Champa
                     culture through its exhibition spaces; paintings, graphics;
                     through materials and colors selected for interior design.
                     The ancient atmosphere blends into the modern architectural
                     space, where the soft patterns characteristic of
                     traditional culture are delicately combined with the
                     strong, minimalist lines of contemporary design - creating
                     a memorable destination in Phu Yen.
                  </p>
                  <p></p>{' '}
               </div>
            </div>
            <div className='detail-image'>
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
