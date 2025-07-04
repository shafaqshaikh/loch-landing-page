import React from "react";
import {InfoCard} from "./base/InfoCard";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import Cohorts from '../assets/Cohorts.png'

export function PortfolioSection() {
    return <div className={"flex flex-col-reverse items-center  container mx-auto gap-4 lg:flex-row mb-4 lg:mt-0"}>
        <div className={"flex-1 w-[500px] h-[400px] lg:w-[700px] lg:h-[400px]"}>
            <img src={Cohorts} alt={"whale"} className={"w-full h-full object-contain"}/>
        </div>
        <div className={"flex-1"}>
            <InfoCard direction={"right"} Icon={MdOutlineRemoveRedEye} title="Watch what the whales are doing"
                      description="All whales are not equal. Know z what the whales impacting YOUR portfolio are doing."/>

        </div>


    </div>
}