import Home from './pages/Home'
import Work from './pages/Work'
import Agency from './pages/Agency'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader_Animation from './components/Loader_Animation'

const App= () => {
  return (
    <>
      {/* <Loader_Animation/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/' element={<Menu/>}/> */}
          <Route path='/work' element={<Work/>}/>
          <Route path='/about' element={<Agency/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
