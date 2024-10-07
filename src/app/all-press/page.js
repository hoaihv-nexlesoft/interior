import Layout from '../../components/layout/Layout';
import detail1 from '../../assets/detail1.jpg';
import detail2 from '../../assets/detail2.jpg'
import Image from 'next/image';
import './styles.css';
import { PiArrowLeftThin } from "react-icons/pi";
import Link from 'next/link';
import bg from '../../assets/pattent1.png'
import prj1 from '../../assets/prj1.jpg'
import prj2 from '../../assets/prj2.jpg'
import prj3 from '../../assets/prj3.jpg'
import prj4 from '../../assets/prj4.jpg'
import prj5 from '../../assets/prj5.jpg'
import prj6 from '../../assets/prj6.jpg'

export default function AllProject() {
   return (
      <Layout>
         <div className='container-all-project'>
         <div className='header'>
            <div className='global-h2 title-about'><span className='our'>ALL</span><span className='prj'>PRESS</span></div>
         </div> 
            <div className="horzi">
            </div>
         <div className='items-container'>
            <div className='item'>
            <Link href="/detail-press" className="img-prj"><Image src={prj1}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-press">L'AURORA RESORT - CLUBHOUSE</Link></p>
            
            </div>
            <div className='item'>
            <Link href="/detail-press" className="img-prj"><Image src={prj2}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-press">L'AURORA RESORT - CLUBHOUSE</Link></p>
            
            </div>
            <div className='item'>
            <Link href="/detail-press" className="img-prj"><Image src={prj3}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-press">L'AURORA RESORT - CLUBHOUSE</Link></p>
            
            </div>
            <div className='item'>
            <Link href="/detail-press" className="img-prj"><Image src={prj4}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-press">L'AURORA RESORT - CLUBHOUSE</Link></p>
            
            </div>
            <div className='item'>
            <Link href="/detail-press" className="img-prj"><Image src={prj5}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-press">L'AURORA RESORT - CLUBHOUSE</Link></p>
            
            </div>
            <div className='item'>
            <Link href="/detail-press" className="img-prj"><Image src={prj6}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-press">L'AURORA RESORT - CLUBHOUSE</Link></p>
            
            </div>
         </div>
         </div>
      </Layout>
   )
}
