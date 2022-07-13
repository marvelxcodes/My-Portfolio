import { FC, ReactNode } from 'react'

export const HeaderLayout: FC<{children: ReactNode}> = (props) => {
    return (
<div className='min-h-[calc(100vh-5rem)] dark:bg-black dark:shadow-gray-700 bg-white flex justify-center items-center'>
    {props.children}
</div>
)}