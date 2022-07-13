import { FC } from 'react'
import Tilt from 'react-parallax-tilt'

const Home : FC = () => {
  return(
<div className='dark:bg-black flex lg:flex-row flex-col items-center min-h-screen'>
  <ProfileImg />
  <div className="flex flex-col items-center justify-center">
    <h1 className='font-extrabold text-4xl dark:text-white'>This is</h1>
    <h1 className='font-extrabold text-7xl dark:text-white'>Rama Krishnan V</h1>
  </div>
</div>
)}

export default Home

const ProfileImg: FC = () => {
  return(
<Tilt>
  <div className='aspect-square rounded-full flex items-center bg-gray-500 h-72'>
    <img src="/mypic.png" alt="" className='w-full h-full rounded-full filter drop-shadow-lg drop-red' />
  </div>
</Tilt>
)}