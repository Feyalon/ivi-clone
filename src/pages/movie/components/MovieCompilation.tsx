import React from 'react'

import { CompilationHeader, GalleryCarousel, MovieItem } from '../../../components'
import { dataMovies } from '../../../data/dataMovie'

type TProps = {
    title: string
}

const MovieCompilation: React.FC<TProps> = ({ title }) => {

    const animations = dataMovies

    return (
        <section className="pageSection pageSection_detailsSelection contentCard__pageSection contentCard__pageSection_detailsSelection" id="relatedList">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery gallery gallery_dark gallery_ivi-carousel pageSection__gallery">
                        <CompilationHeader title={title} />
                        <GalleryCarousel type={'big'} size={{ width: 153.12, padding: 24 }} viewMobile={true} >
                            {animations && animations.map(item => <MovieItem key={item.id} data={item} />)}
                        </GalleryCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieCompilation