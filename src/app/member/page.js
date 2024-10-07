import Layout from '../../components/layout/Layout';
import detail1 from '../../assets/detail1.jpg';
import detail2 from '../../assets/detail2.jpg'
import Image from 'next/image';
import './styles.css';
import { Box, Text } from '@radix-ui/themes';

export default function DetailProject() {
   return (
      <Layout>
         <div className='container-global'>
            <h1 className="global-font-title title-member">
               <strong>APEC MANDALA WYNDHAM PHU YEN - PUBLIC AREA</strong>
            </h1>
          
            <div className='container-member'>
            <Box width="100%" height="210px" className='box-member'>
                <Image src={detail1}/>
                <Text weight="bold">
                FONG-CHAN PAW ZEUTHEN</Text>
                <Box width="100%"><Text weight="light">Founder & Chairwoman</Text></Box>
            </Box>
            <Box width="100%" height="210px" className='box-member'>
                <Image src={detail1}/>
                <Text weight="bold">
                FONG-CHAN PAW ZEUTHEN</Text>
                <Box width="100%"><Text weight="light">Founder & Chairwoman</Text></Box>
            </Box>
            <Box width="100%" height="210px" className='box-member'>
                <Image src={detail1}/>
                <Text weight="bold">
                FONG-CHAN PAW ZEUTHEN</Text>
                <Box width="100%"><Text weight="light">Founder & Chairwoman</Text></Box>
            </Box>
            <Box width="100%" height="210px" className='box-member'>
                <Image src={detail1}/>
                <Text weight="bold">
                FONG-CHAN PAW ZEUTHEN</Text>
                <Box width="100%"><Text weight="light">Founder & Chairwoman</Text></Box>
            </Box>
            <Box width="100%" height="210px" className='box-member'>
                <Image src={detail1}/>
                <Text weight="bold">
                FONG-CHAN PAW ZEUTHEN</Text>
                <Box width="100%"><Text weight="light">Founder & Chairwoman</Text></Box>
            </Box>
            <Box width="100%" height="210px" className='box-member'>
                <Image src={detail1}/>
                <Text weight="bold">
                FONG-CHAN PAW ZEUTHEN</Text>
                <Box width="100%"><Text weight="light">Founder & Chairwoman</Text></Box>
            </Box>
            </div>
           
            <div className='right-banner'>
                <Image src={detail1}/>
            </div>
         </div>
      </Layout>
   )
}
