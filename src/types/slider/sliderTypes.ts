import { HTMLAttributes, DetailedHTMLProps} from "react";
import { BonusCardProps } from "../bonus/bonusCardTypes";

export interface SliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    bonuses: BonusCardProps[];
}