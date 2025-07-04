import React from "react";
import {GoBell} from "react-icons/go";
import {InfoCard} from "./base/InfoCard";
import {NotificationCarouselList} from "./NotificationCarouselList";

export function NotificationSection() {
    return <div className={"flex flex-col w-full items-center container mx-auto gap-4 lg:flex-row mb-8 lg:mb-0"}>
        <div className={"flex flex-1"}>
            <InfoCard direction={"left"} Icon={GoBell} title="Get notified when a highly correlated whale makes a move"
                      description="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."/>
        </div>

        <div className={"flex flex-1 overflow-hidden mt-4 lg:mt-0 "}>
            <NotificationCarouselList/>
        </div>

    </div>
}