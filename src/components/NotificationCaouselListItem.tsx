import React from "react";
import {notificationCarouselProps} from "../interfaces";
import {motion} from "framer-motion";

export const NotificationCarouselListItem = ({item , index}: { item: notificationCarouselProps  , index : number}) => {
    return <motion.div
        whileHover={{scale: 0.9}}
        whileTap={{scale: 0.95}}
        className={"ml-2 self-stretch bg-white rounded-xl p-4 lg:w-[200px] flex-shrink-0"}>
        {item.children}
    </motion.div>
}