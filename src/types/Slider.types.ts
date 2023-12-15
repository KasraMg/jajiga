type Breakpoints = {
    [key: number]: {
        slidesPerView: number,
        spaceBetween: number
    }
}
export interface SliderProps {
    className?: string,
    breakPoints: Breakpoints,
    navigation:boolean,
    Card: React.ElementType,
    datas?: any
}

