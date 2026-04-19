import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './views/login/Index'
import Layout from './views/layout/Index'
import Home from './views/home/Index'
import Public from './views/public/Index'

    function App() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/layout' element={<Layout />}>
                            <Route path='' element={<Home />}></Route>
                            <Route path='public' element={<Public />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }

export default App
