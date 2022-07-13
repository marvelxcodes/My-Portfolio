import { FC, ReactNode } from 'react'

export const HeaderLayout: FC<{children: ReactNode}> = (props) => {
    return (
<div className='h-20 z-50 dark:bg-black w-full dark:shadow-gray-700 bg-white flex items-center px-10 shadow-lg fixed top-0'>
    {props.children}
</div>
)}