import React from 'react'

import { dataMoviesTop } from '../../../../data/dataMovie'
import { GalleryCarousel } from '../../../../components'
import TopGalleryItem from './TopGalleryItem'


const TopGallery: React.FC = () => {

    const tops = dataMoviesTop

    return (
        <GalleryCarousel type={'big'} size={{ width: 224, padding: 24 }} viewMobile={true}>
            {tops && tops.map((top, index) =>
                <TopGalleryItem key={top.movie.id} data={{ id: index + 1, ...top }} />)}
        </GalleryCarousel>
    )
}

export default TopGallery