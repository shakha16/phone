import React from "react";
import like from '../img/like.svg'
import bask from '../img/bask.svg'

export default function Home(props) {
    return (
        <div className="container">
            <h1 className="pt-5 pb-5 text-[25px]">Чилля Базар ❯</h1>
            <div className="flex flex-wrap justify-between">
                <div className="w-[232px] h-[456px] flex flex-col rounded overflow-hidden">
                    <div className="w-full h-[309px] relative rounded overflow-hidden">
                        <img className="w-[100%] object-cover" src={props.item.img} alt="" />
                        <span className="absolute left-0 bottom-0 text-xs text-white bg-indigo-400 rounded p-1">Чилля Базар</span>
                        <img className="absolute right-2 top-2" src={like} alt="" />
                    </div>
                    <div className="relative">
                        <div className="p-2 flex flex-col justify-between gap-1">
                            <h3>{props.item.name}</h3>
                            <div className="flex items-center gap-2">
                                <img src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e" alt="" />
                                <h3 className="text-[11px] text-slate-500">3{props.item.estimates}</h3>
                            </div>
                            <h3 className="w-[100px] bg-yellow-300 rounded p-1 text-sm">{props.item.month}</h3>
                            <s className="text-[11px] pt-2">{props.item.sale}</s>
                            <h3 className="text-base">{props.item.promotion}</h3>
                            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center absolute bottom-2 right-2">
                                <img src={bask} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}