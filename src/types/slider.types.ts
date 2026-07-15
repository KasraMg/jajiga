type Breakpoints = {
    [key: number]: {
        slidesPerView: number,
        spaceBetween: number
    }
}
export interface SliderTypes {
    className?: string,
    breakPoints: Breakpoints,
    navigation:boolean,
    Card: React.ElementType,
    data?: any
}

