import {InfoCardProps} from "../../interfaces";


export function InfoCard({Icon , title , description , style , direction} : InfoCardProps ){

    let textAlignment = direction === "left" ? "text-left" : "text-right"
    return <div className={`flex flex-col gap-2 ${direction === "left" ? "items-start" : "items-end"}`} style={{...style}} >
        <div className={`text-3xl self-center ${direction === "left" ? "lg:self-start" : "lg:self-end"}`}>
            <Icon/>
        </div>
        <div className={`w-full h-full flex flex-col gap-2`}>
            <p className={`text-center text-3xl font-medium drop-shadow-[0_0_4px_black] lg:${textAlignment}`}>{title}</p>
            <p className={`text-center text-base font-medium text-gray-300 lg:${textAlignment}`}>{description}</p>
        </div>
    </div>
}