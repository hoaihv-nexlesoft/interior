'use client'

import Image from 'next/image'
import './styles.css'
import { useEffect, useState } from 'react'
import bg from '../../assets/pattent1.png'
import prj1 from '../../assets/prj1.jpg'
import prj2 from '../../assets/prj2.jpg'
import prj3 from '../../assets/prj3.jpg'
import prj4 from '../../assets/prj4.jpg'
import prj5 from '../../assets/prj5.jpg'
import prj6 from '../../assets/prj6.jpg'
import Link from 'next/link'

export default function ProjectSection() {
   

   return (
      <>
      <div className="project-container">
         <div className='h2'><span className='our'>OUR</span><span className='prj'>PROJECTS</span></div>
         <div className='items-container'>
            <div className='item margin-bottom'>
            <Link href="/detail-project" className="img-prj"><Image src={prj1}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-project">L'AURORA RESORT - CLUBHOUSE</Link></p>
            <Link href="/detail-project" className='category'>GPA</Link>
            </div>
            <div className='item margin-bottom'>
            <Link href="/detail-project" className="img-prj"><Image src={prj2}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-project">L'AURORA RESORT - CLUBHOUSE</Link></p>
            <Link href="/detail-project" className='category'>GPA</Link>
            </div>
            <div className='item margin-bottom'>
            <Link href="/detail-project" className="img-prj"><Image src={prj3}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-project">L'AURORA RESORT - CLUBHOUSE</Link></p>
            <Link href="/detail-project" className='category'>GPA</Link>
            </div>
            <div className='item margin-bottom'>
            <Link href="/detail-project" className="img-prj"><Image src={prj4}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-project">L'AURORA RESORT - CLUBHOUSE</Link></p>
            <Link href="/detail-project" className='category'>GPA</Link>
            </div>
            <div className='item margin-bottom'>
            <Link href="/detail-project" className="img-prj"><Image src={prj5}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-project">L'AURORA RESORT - CLUBHOUSE</Link></p>
            <Link href="/detail-project" className='category'>GPA</Link>
            </div>
            <div className='item margin-bottom'>
            <Link href="/detail-project" className="img-prj"><Image src={prj6}  alt='img Project'/></Link>
            <Image src={bg}  className="bg" alt='bg'/>
            <p className='title'><Link href="/detail-project">L'AURORA RESORT - CLUBHOUSE</Link></p>
            <Link href="/detail-project" className='category'>GPA</Link>
            </div>
         </div>
      </div>
      </>
   )
}
