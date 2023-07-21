import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Basket from './pages/Basket'
import Home from './pages/Home'

let tovar = [
    {
        id: 1,
        name: 'Игрушечный автомобиль',
        img: 'https://images.uzum.uz/ch361lng49devoaf11kg/t_product_540_high.jpg#1689916948746',
        estimates: '3.6 (7 оценок)',
        sale: '24 000сум',
        month: '1 920сум/мес',
        promotion: '16 000сум'
    }
]


function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={
                    tovar.map(item => (
                        <Home item={item} />
                    ))
                } />
                <Route path='/basket' element={<Basket />} />
            </Route>
        </Routes>
    )
}

export default App