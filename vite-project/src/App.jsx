import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Tovar from './pages/Tovar'



function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={
                    <Home/>
                } />
                <Route path='/tovar' element={<Tovar />} />
            </Route>
        </Routes>
    )
}

export default App