import { Sun, MoonStars } from 'react-bootstrap-icons'
import { HeaderLayout } from '../layouts/Header'

type Props = {
  switchMode: any
  darkMode: string|(() => void)
}

export default function Header({switchMode, darkMode}: Props) {
  return (
<HeaderLayout>
  <button className='p-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:shadow-white' onClick={switchMode}>
    { !darkMode && <Sun size={20}/> || <MoonStars size={20} color='white'/> }
  </button>
  <div className="flex">
    <div className="rounded-full bg-white h-12 w-12 border-blue border border-solid">
    </div>
  </div>
</HeaderLayout>
)}