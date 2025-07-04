import React from "react";

export interface  InfoCardProps {
    title: string;
    description: string;
    Icon?: any;
    style? : React.CSSProperties;
    direction? : "left" | "right"
}

export interface  notificationCarouselProps {
    leftIcon? : React.ReactNode;
    rightIcon? : React.ReactNode;
    children : React.ReactNode;

}