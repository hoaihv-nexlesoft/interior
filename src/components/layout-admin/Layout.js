'use client'
import { useState, useEffect } from 'react'
import styles from './Layout.module.css'
import logo from '../../assets/logo5.png';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'

export default function Layout({ children }) {
   const [isMobile, setIsMobile] = useState(false)
   const [menuOpen, setMenuOpen] = useState(false)
   const router = useRouter();
   const onLockout = async () => {
      Cookies.remove("user_data");
      Cookies.remove("token");
      Cookies.remove("refresh_token");
      router.push('/');
   }

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 1000)
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return (
      <div className={styles.layout}>
         {!isMobile && (
            <div className={styles.sidebar}>
               <div className="menuLeftMain">
                  <Link href="./" className="logo">
                     <Image src={logo} alt="369design" />
                  </Link>
                  <div className="menuLeft">
                     <ul>
                        <li>
                           <Link href="/" title="">
                              Home
                           </Link>
                        </li>
                        <li className="sub">
                           <Link href="/about-us" title="">
                              Project
                           </Link>
                        </li>
                        <li>
                           <Link href="/all-project">
                              Press
                           </Link>
                        </li>
                        <li>
                           <Link href="/all-press">Banner</Link>
                        </li>
                        <li>
                           <div style={{cursor: 'pointer'}} onClick={onLockout}>
                              Logout
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footer}>
                    <div className={styles.social}><FaFacebookF size={18}/><MdOutlineMailOutline size={18}/></div>
                    <div className="follow">
                      <Link target="_blank" href="https://www.facebook.com/Kazedesignstudio" className="fa fa-facebook"></Link> 
                      <Link href="mailto:info@kaze.com.vn" className="fa fa-envelope"></Link>
                    </div>
                    <p>Hotline: 0975090793/0939397133 3.6.9 DESIGN CONS CO.,LTD, 11 Lê Thước, Thảo Điền, Quận 2, Hồ Chí Minh.</p>
                    <Link href="http://kaze.com.vn/contact.html" className="viewmap">Contact us</Link>	<div className="copyright">© COPYRIGHT 2024</div>
               </div>
               </div>
            </div>
         )}
         <div className={styles.content}>
            {isMobile && (
               <div className={styles.navbar}>
                  <div className={styles.logo}> 
                     <Link href="./" className={styles.mobileLogo}>
                     <Image src={logo} className={styles.imgLg} alt="369design" />
                  </Link></div>
                  <button
                     className={styles.expander}
                     onClick={() => setMenuOpen(!menuOpen)}
                  >
                     ☰
                  </button>
               </div>
            )}

            {menuOpen && (
               <div className={styles.mobileMenu}>
                  <ul>
                  <ul style={{textAlign: 'center'}}>
                        <li>
                           <Link href="/" title="">
                              Home
                           </Link>
                        </li>
                        <li className="sub">
                           <Link href="/about-us" title="">
                              Project
                           </Link>
                        </li>
                        <li>
                           <Link href="/all-project">
                              Press
                           </Link>
                        </li>
                        <li>
                           <Link href="/all-press">Banner</Link>
                        </li>
                        <li>
                           <div style={{cursor: 'pointer'}} onClick={onLockout}>
                              Logout
                           </div>
                        </li>
                     </ul>
                  </ul>
               </div>
            )}
            <main className={styles.main}>
               {children}
               <div className={styles.footerMobile}>
               <div className={styles.footer}>
                    <div className={styles.social}><FaFacebookF size={18}/><MdOutlineMailOutline size={18}/></div>
                    <div className="follow">
                      <Link target="_blank" href="https://www.facebook.com/Kazedesignstudio" className="fa fa-facebook"></Link> 
                      <Link href="mailto:info@kaze.com.vn" className="fa fa-envelope"></Link>
                    </div>
                    <p>Hotline: 0975090793/0939397133 - 3.6.9 DESIGN CONS CO.,LTD, 11 Lê Thước, Thảo Điền, Quận 2, Hồ Chí Minh.</p>
                    <Link href="http://kaze.com.vn/contact.html" className="viewmap">Contact us</Link>	<div className="copyright">© COPYRIGHT 2024</div>
               </div>
            </div>
            </main>
            
         </div>
      </div>
   )
}
