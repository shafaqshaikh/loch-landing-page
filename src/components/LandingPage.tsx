import React, {useRef} from "react";
import {NotificationSection} from "./NotificationSection";
import {PortfolioSection} from "./PortfolioSection";
import {Testimonials} from "./Testimonials";
import {Login} from "./Login";
import LochLogo from '../../src/assets/LochLogo.png'

export const LandingPage = () => {

    const sectionRef = useRef<HTMLDivElement>(null);

    const onClickExploreNow = () => {
        sectionRef.current?.scrollIntoView({behavior: "smooth"});

    }


    return <div className="lg:flex min-h-screen text-white font-sans">
        <div className="w-full lg:w-2/3 p-8" style={{
            background: "radial-gradient(circle at 100% 5%, #000000 20%, #2F15D0 40%, #1FA911CF)"
        }}>
            <div className={"flex flex-row justify-between items-start mb-14 lg:hidden"}>
                <div className={"w-[60px] h-[60px]"}>
                    <img src={LochLogo} alt={"logo"} className={"w-full h-full"}/>
                </div>
                <button onClick={onClickExploreNow}
                        className={"bg-white p-2 rounded-lg text-black text-base font-semibold"}>Explore now
                </button>
            </div>
            <NotificationSection/>
            <PortfolioSection/>
            <Testimonials/>
        </div>
        <div
            className={"hidden lg:flex flex-col justify-center items-center w-1/3 bg-white text-gray-800 px-10"}>
            <Login/>
        </div>
        <div ref={sectionRef} className={"px-4 lg:px-0 py-4 flex flex-col items-center bg-white lg:hidden"}>
            <Login/>
        </div>
    </div>
}