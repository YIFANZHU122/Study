import {Route,Switch, BrowserRouter, Routes,Link} from 'react-router-dom'
import Home from './views/Home.jsx'
import About from './views/About.jsx'
import User from './views/User.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Link to='/home'>home</Link>
          <Link to='/about'>about</Link>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/user' element={<User/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App