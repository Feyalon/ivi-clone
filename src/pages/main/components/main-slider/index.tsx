import React from 'react'

import { IMainBanner } from '../../../../models/Movie'
import { mainSliders } from '../../../../data/dataMovie'
import MainSliderItem from './MainSliderItem'
import MainSliderCarousel from './MainSliderCarousel'

const MainSlider: React.FC = () => {

    const data: IMainBanner[] = mainSliders

    return (
        <MainSliderCarousel>
            {data && data.map(banner => <MainSliderItem key={banner.id} data={banner} />)}
        </MainSliderCarousel>
    )
}

export default MainSlider