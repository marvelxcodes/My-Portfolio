import ReactDOM from 'react-dom/client'
import { AppContext } from './utils/AppContext'
import './libs/Tailwind.css'
import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import useDarkMode from './hooks/darkMode'

const App: FC = () => {
  const [darkMode, switchMode ] = useDarkMode()
  return (
<div className={`pt-20 ${darkMode?"dark":""}`}>
  <AppContext.Provider value={[ darkMode, switchMode ]}>
    <BrowserRouter>
      <Header switchMode={switchMode} darkMode={darkMode} />
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  </AppContext.Provider>
</div>
)}

const Root = ReactDOM.createRoot(document.getElementById('root')!)
Root.render(<App />)