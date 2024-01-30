import React from "react";
import Phone from './Phone'

let phones = [
    {
        id: 1,
        name: 'Redmi 12',
        img: 'https://vega.am/image/cache/catalog/1HRACH/2020/2021/2023/Ogostos/Smartfon/XIAOMI%20REDMI%2012%208GB%20256GB%20Black%20(1)-2000x1500.jpg',
        month: '1 920сум/мес',
        promotion: '16 000сум'
    },
    {
        id: 4,
        name: 'Samsung',
        img: 'https://vega.am/image/cache/catalog/1HRACH/2020/2021/2023/Ogostos/Smartfon/XIAOMI%20REDMI%2012%208GB%20256GB%20Black%20(1)-2000x1500.jpg',
        month: '1 920сум/мес',
        promotion: '16 000сум'
    },
    {
        id: 3,
        name: 'poco',
        img: 'https://vega.am/image/cache/catalog/1HRACH/2020/2021/2023/Ogostos/Smartfon/XIAOMI%20REDMI%2012%208GB%20256GB%20Black%20(1)-2000x1500.jpg',
        month: '1 920сум/мес',
        promotion: '16 000сум'
    },
    {
        id: 2,
        name: 'iPhone',
        img: 'https://vega.am/image/cache/catalog/1HRACH/2020/2021/2023/Ogostos/Smartfon/XIAOMI%20REDMI%2012%208GB%20256GB%20Black%20(1)-2000x1500.jpg',
        month: '1 920сум/мес',
        promotion: '16 000сум'
    },
]

export default function Home() {
    return (
        <div className="container">
            <div className="w=[90%] flex flex-wrap gap-20 mt-10 justify-center ">
                {
                    phones.map(item => (
                        <Phone key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}