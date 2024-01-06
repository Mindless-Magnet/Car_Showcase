import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface searchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps { 
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year:1993;
}

export interface Filterprops {
    manufacturer: string;
    model: string;
    fuel: string;
    year: number; 
    limit: number;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}