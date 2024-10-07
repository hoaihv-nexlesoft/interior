import Layout from '../../components/layout/Layout'
import detail1 from '../../assets/detail1.jpg'
import detail2 from '../../assets/detail2.jpg'
import Image from 'next/image'
import './styles.css'
import { PiArrowLeftThin } from 'react-icons/pi'
import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function DetailProject() {
   return (
      <Layout>
         <div className="container-global">
            <h1 className="global-font-title" style={{textAlign: 'center'}}>
               <strong>APPLY FOR</strong>
            </h1>
            <h1 className="global-font-title" style={{textAlign: 'center'}}>
               <strong>KAZE INTERIOR DESIGN STUDIO</strong>
            </h1>
            <h4 align="center" className='title-career-1' style={{marginBottom: '20px'}}>
               <strong>---- BE CREATIVE, BE PROFESSIONAL, BE KAZE ----</strong>
            </h4>

            <div className="global-font-text text-font-career">
               <p>
                  At KAZE Design Academy in Saigon, we give everyone an equal
                  opportunity to connect, create and contribute, regardless of
                  their genders, backgrounds or nationalities. We offer a
                  dynamic and innovative working environment that incubates the
                  love for design and awakes your hidden potentials.
               </p>
               <p>
                  Joining KAZE means becoming a part of our diverse,
                  multinational team members. You are up for actual exposures to
                  our interesting projects, direct work with well-known clients,
                  developers and hotel operators both locally and worldwide.
                  <br />
                  Professional working standards, competitive salary, on-the-job
                  training, company's study trip... are just some of the
                  benefits we offer in return!
               </p>
               <h4 style={{marginBottom: '10px'}}>
                  <strong>Have you got what it takes?</strong>
               </h4>
               <div className='ctn-table'>
               <table>
                  <tbody>
                     <tr style={{textAlign: 'center'}}>
                        <td>
                           <h4>
                              <strong>FOR DESIGNER POSITION</strong>
                           </h4>
                           <br />
                        </td>
                        <td >
                           <h4>
                              <strong>FOR 3D VISUALIZER POSITION</strong>
                           </h4>
                           <br />
                        </td>
                        <td >
                           <h4>
                              <strong>FOR CAD OPERATOR POSITION</strong>
                           </h4>
                           <br />
                        </td>
                     </tr>
                     <tr style={{textAlign: 'start'}}>
                        <td >
                           <strong>Background requirements:</strong>
                           <br />☑ 1- 4 years of relevant experience
                           <br />☑ Vision talent <br />☑ Challenge lovers with
                           an eagerness to grow
                           <br />☑ An open mind to modern office style
                           <br />☑ Detail-oriented, systematic and timely
                           <br />
                           &nbsp;
                           <br />
                           <strong>Tool &amp; skill requirements:</strong>
                           <br />
                           <strong>(The more you master the better)</strong>
                           <br />
                           ☑Hand sketching
                           <br />
                           ☑CAD, 3D MAX, Sketch-up, <br />
                           ☑Adobe Program. PS, AI, ID
                           <br />
                           ☑Microsoft package
                           <br />
                           <br />
                           <strong>Communications:&nbsp;</strong>
                           <br />☑ English <br />☑ Vietnamese
                           <br />
                           &nbsp;
                           <br />
                           &nbsp;----
                           <br />
                           <strong>SEND YOUR APPLICATION TO:&nbsp;</strong>
                           <br />
                           Email: career@kaze.com.vn
                           <br />
                           Subject: KAZE Design Academy
                           <br />
                           Attachment: CV &amp; Portfolio in English
                           <br />
                           &nbsp;
                           <br />
                           <strong>
                              Next steps (for selective candidates):
                           </strong>
                           &nbsp;
                           <br />
                           Personality Test
                           <br />
                           Design Test
                           <br />
                           Interview with the Directors
                           <br />
                        </td>
                        <td style={{ width: '34.2155%' }}>
                           <strong>Background requirements</strong>
                           <br />☑ Any level of relevant experience
                           <br />☑ Artistic photoshop flair
                           <br />☑ Challenge lovers with an eagerness to grow
                           <br />☑ An open mind to modern office style
                           <br />☑ Target to manage large scenery, decor and
                           stage scenery..
                           <br />
                           &nbsp;
                           <br />
                           <strong>Tool &amp; skill requirements:</strong>
                           <br />
                           <strong>(The more you master the better)</strong>
                           <br />
                           ☑3Ds Max
                           <br />
                           ☑Vray and/or Corona
                           <br />
                           ☑Photoshop
                           <br />
                           ☑After Effects
                           <br />
                           ☑Modeling, Lighting, Rendering, Texturing..
                           <br />
                           <br />
                           <strong>Communications:&nbsp;</strong>
                           <br />☑ English <br />☑ Vietnamese
                           <br />
                           &nbsp;
                           <br />
                           &nbsp;----
                           <br />
                           <strong>SEND YOUR APPLICATION TO:&nbsp;</strong>
                           <br />
                           Email: career@kaze.com.vn
                           <br />
                           Subject: KAZE Design Academy
                           <br />
                           Attachment: CV &amp; Portfolio in English
                           <br />
                           &nbsp;
                           <br />
                           <strong>
                              Next steps (for selective candidates):
                           </strong>
                           &nbsp;
                           <br />
                           Personality Test
                           <br />
                           Design Test
                           <br />
                           Interview with the Directors
                           <br />
                        </td>
                        <td style={{ width: '32.6347%' }}>
                           <strong>Background requirements:</strong>
                           <br />
                           ☑Education from a Technical school in Vietnam <br />
                           ☑5 years min. of technical background in Interior
                           Design construction
                           <br />
                           ☑Teamwork spirit
                           <br />
                           <br />
                           <strong>Tool &amp; skill requirements:</strong>
                           <br />
                           ☑Ability to read &amp; understand Architect/ MEP/
                           structure drawing
                           <br />
                           ☑Understanding of drawings setup/ using sheet set
                           management
                           <br />
                           ☑Knowledge of Interior constructs, material
                           specification
                           <br />
                           ☑Ability to work/ consult with designers to develop
                           Interior joinery detail
                           <br />
                           ☑ACAD 2D, Sketch-up
                           <br />
                           <br />
                           <strong>Tool &amp; skill preferred:&nbsp;</strong>
                           <br />
                           ☑Technical knowledge of Furniture
                           <br />
                           ☑Shop drawing experience
                           <br />
                           ☑MEP/ Structure knowledge
                           <br />
                           ☑Revit
                           <br />
                           ☑Photoshop
                           <br />
                           <br />
                           <strong>Communications:&nbsp;</strong>
                           <br />☑ Basic English <br />☑ Vietnamese
                           <br />
                           &nbsp;
                           <br />
                           &nbsp;----
                           <br />
                           <strong>SEND YOUR APPLICATION TO:&nbsp;</strong>
                           <br />
                           Email: career@kaze.com.vn
                           <br />
                           Subject: KAZE Design Academy
                           <br />
                           Attachment: CV &amp; Portfolio
                           <br />
                           &nbsp;
                           <br />
                           <strong>
                              Next steps (for selective candidates):
                           </strong>
                           &nbsp;
                           <br />
                           Personality Test
                           <br />
                           Interview with the Directors
                           <br />
                        </td>
                     </tr>
                  </tbody>
               </table>
               </div>
            </div>
            <div className="detail-image">
               <Image src={detail1} alt="detail1" />
            </div>
            <div className='form-recruitment'>
            <h2 className="global-font-title">
               <strong>APPLY NOW</strong>
            </h2>
               <form style={{padding: '20px'}}>
                  <div>
                     <Text className='label'>Name</Text>
                     <input required></input>
                  </div>
                 
                  <Box>
                     <Text className='label'>Email</Text>
                     <input required></input>
                  </Box>
                  <Box>
                     <Text className='label'>Phone</Text>
                     <input required></input>
                  </Box>
                  <Box>
                     <Text className='label'>Apply position</Text>
                     <input required></input>
                  </Box>
                  <Box>
                     <Text className='label'>Message</Text>
                     <textarea required placeholder="Reply to comment…" />
                  </Box>
                  <Box>
                  <Text className='label'>Attach CV</Text>
                  <input required type="file" placeholder="Reply to comment…" />
                  </Box>
                   
                  <div className="flex justify-end">
                  <Button className='button-submit' type="submit">
                     APPLY NOW <FaLongArrowAltRight />
                  </Button>
                  </div>
               </form>
            </div>
            <div className="right-banner">
               <Image src={detail1} />
            </div>
         </div>
      </Layout>
   )
}
