import React from "react";
import {motion} from "framer-motion";
import LochLogo from "../assets/LochLogo.png";

export function Testimonials() {

    const testimonials = [
        {
            name: "Jack F",
            designation: "Ex Blackrock PM",
            testimonial: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
        },
        {
            name: "Yash P",
            designation: "Research, 3poch Crypto Hedge Fund",
            testimonial: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
        },
        {
            name: "Shiv S",
            designation: "Co-Founder Magik Labs",
            testimonial: "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
        }
    ]

    return <div className={"container mx-auto mt-8"}>
        <h3 className="text-2xl text-center lg:text-right font-semibold mb-4">Testimonials</h3>
        <div className={"w-full h-[1px] bg-gray-300"}></div>
        <div className={"flex flex-row items-end"}>
            <div className={"hidden md:block h-[80px] w-[120px] mr-8"}>
                <img src={LochLogo} alt={"logo"} className={"w-full h-full object-contain"}/>
            </div>
            <motion.div
                        className={"mt-16 flex items-stretch overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-2"}>
                {
                    testimonials.map((item, index) => {
                        return <motion.div
                            whileHover={{scale: 0.9}}
                            whileTap={{scale: 0.95}}
                            className={"self-stretch bg-white rounded-xl p-4 w-[300px] lg:w-[350px] flex-shrink-0"}>
                            <div className={"flex flex-row items-center"}>
                                <p className={"text-black text-base font-semibold"}>{item.name}</p>
                                <p className={"text-gray-500 text-xs font-medium ml-2"}>{item.designation}</p>

                            </div>
                            <p className={"text-black text-base font-medium mt-4"}>{item.testimonial}</p>
                        </motion.div>
                    })
                }
            </motion.div>

        </div>

    </div>
}