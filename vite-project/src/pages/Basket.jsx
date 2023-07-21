import React from 'react'
import '../index.css'


export default function Basket() {
    return(
        <div className="container" id='container'>
            <img className='w-3' src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="" />
            <h4>В корзине пока нет товаров</h4>
            <h5>Начните с подборок на главной странице или найдите нужный товар через поиск</h5>
            <button>На главную</button>
        </div>
    )
}