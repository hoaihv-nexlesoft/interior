"use client"
import Cookies from 'js-cookie'
import { Box, Button, Text } from '@radix-ui/themes'
import { FaLongArrowAltRight } from 'react-icons/fa'
import logo from '../../assets/logo5.png';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { signInUser} from '../../api/user/action';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const { handleSubmit, register} = useForm()
    const onFinish = async (value) => {
      const response = await signInUser({data: value})
      Cookies.set("user_data", response.data?.user?.id, { expires: 7 });
      Cookies.set("token", response.data?.accessToken, { expires: 7 });
      Cookies.set("refresh_token", response.data?.refreshToken, { expires: 30 });
      router.push('/admin');
   }
  
   return (
      <div className="w-screen h-screen grid place-items-center bg-gradient-to-r from-gray-500 to-gray-300">
         <div className="h-screen flex justify-center items-center self-center">
            <div className="bg-white p-[10px] py-[40px] md:p-[60px] rounded-[20px]">
            <div className='grid place-items-center'><Image className="text-center" src={logo} alt="369design" width="150" height="auto" /></div>
               <p className="text-center font-dm text-xl md:text-5xl mb-[30px] leading-9">
                  LOGIN-ADMIN
               </p>
               <form onSubmit={handleSubmit(onFinish)}>
                  {' '}
                  <Box>
                     <Text className="label">Username</Text>
                     <input required {...register('username')}></input>
                  </Box>
                  <Box>
                     <Text className="label">Password</Text>
                     <input required {...register('password')}></input>
                  </Box>
                  <div className="flex justify-end">
                     <Button className="button-submit" type="submit">
                        LOGIN <FaLongArrowAltRight />
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}
export default Login
