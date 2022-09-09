import { StaticImageData } from "next/image";
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface BonusCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    casinoName: string;
    exclusive: boolean;
    bonusValue: number;
    countFreeSpins: number;
    logoSrc: StaticImageData;
    typeOfBonus: string;
}