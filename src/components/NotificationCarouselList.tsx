import React from "react";
import {NotificationCarouselListItem} from "./NotificationCaouselListItem";
import {notificationCarouselProps} from "../interfaces";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiBell } from "react-icons/fi";
import { PiWaveformLight } from "react-icons/pi";
import { IoCheckbox } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import {motion} from "framer-motion";

export const NotificationCarouselList = () =>{

    const DownCarret : any = TiArrowSortedDown
    const Bell : any = FiBell
    const Lines : any = PiWaveformLight
    const Checkbox : any = IoCheckbox
    const Clock : any = GoClock
    const notificationList : notificationCarouselProps[] = [
        {
            children :<div className={"flex flex-col justify-between h-full"}>
                <div className={"flex items-start justify-between"}>
                    <div className={"text-2xl text-black"}>
                        <Bell/>
                    </div>
                    <p className={"text-black font-semibold"}>Save</p>
                </div>

                    <p className={"text-sm text-black font-medium"}>We’ll be sending
                        notifications to you
                        here</p>
                <div className={"bg-white p-3 border border-gray-200 rounded"}>
                        <p className={"text-xs font-medium text-black"}>hello@gmail.com</p>
                    </div>
            </div>
        },
        {
            children : <div className={"flex flex-col h-full justify-between"}>
                <div className={"flex items-start justify-between"}>
                    <div className={"text-black text-2xl"}>
                        <Lines/>
                    </div>
                    <p className={"text-blue-600 text-2xl"}>
                        <Checkbox/>
                    </p>
                </div>

                <div className={"flex flex-col"}>
                    <p  className={"text-xs font-medium text-black"}>
                        Notify me when any wallets
                        move more than
                    </p>
                    <div className={"flex self-start items-center bg-gray-200 p-2 rounded mt-4"}>
                        <p className={"text-black font-medium text-xs"}>$1,000.00</p>
                        <div className={"text-gray-400"}>
                            <DownCarret  />
                        </div>

                    </div>
                </div>

            </div>
        },
        {
            children : <div className={"flex flex-col h-full justify-between"}>
                <div className={"flex items-center justify-between"}>
                    <div className={"text-black text-2xl"}>
                        <Clock/>
                    </div>
                    <div className={"text-blue-600 text-2xl"}>
                        <Checkbox/>
                    </div>
                </div>

                <div className={"flex flex-col"}>
                    <p  className={"text-xs font-medium text-black"}>
                        Notify me when any wallet dormant for
                    </p>
                    <div className={"flex self-start items-center bg-gray-200 p-2 rounded mt-2"}>
                        <p className={"text-black font-medium text-xs"}>{"> 30 days"}</p>
                        <div className={"text-gray-400"}>
                            <DownCarret  />
                        </div>
                    </div>
                    <p className={"text-black text-xs font-medium mt-2"}>becomes active</p>

                </div>

            </div>
        }
    ]



    return <motion.div
                 className={"pl-2 flex items-stretch overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth h-[200px]"}>
        {
            notificationList?.map((item , index)=>{
                return <NotificationCarouselListItem item={item} index={index} />
            })
        }
    </motion.div>
}