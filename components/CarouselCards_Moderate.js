import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem_Moderate, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem_Moderate'
import data_Moderate from './data_Moderate'


const CarouselCards_Moderate = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)


    return (
        <View>
            <Carousel
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data_Moderate={data_Moderate}
                renderItem={CarouselCardItem_Moderate}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={data_Moderate.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>

    )
}



export default CarouselCards_Moderate