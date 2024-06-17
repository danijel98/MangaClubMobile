import { FC, useRef } from "react";

import SnapCarousel from 'react-native-snap-carousel';

interface ICarousel {
    sources: Array<Object>;
    sliderWidth: number;
    itemWidth: number;
    renderItem: any;
    loop?: boolean;
    setActive: any;
}

const Carousel: FC<ICarousel> = ({ sources, renderItem, sliderWidth, itemWidth, loop = true, setActive }) => {

    const carouselRef = useRef(null);

    return (
        <SnapCarousel
            ref={carouselRef}
            layout="default"
            data={sources}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            loop={loop}
            loopClonesPerSide={3}
            inactiveSlideScale={0.75}
            enableMomentum={true}
            decelerationRate="normal"
            onSnapToItem = { index => setActive({index}) } 

        />
    );
};

export default Carousel;
