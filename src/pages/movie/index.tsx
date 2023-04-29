import React from 'react'

import '../../assets/css/page-details.css'
import { addClass } from '../../utils/bodyClass'
import {
    MovieBackgroundContainer,
    MovieBreadCrumbsHeader,
    MovieMainSection,
    MovieCompilation,
    MovieCreators,
    MovieAdditional,
    MovieReviews,
    MovieAllDevice
} from './components'

const MoviePage: React.FC = () => {

    addClass('body', 'details')
    addClass('body', 'contentCard')
    addClass('root', 'basePage__inner')

    const breadcrumbsHeader: { title: string, link: string }[] = [
        { title: 'Сериалы', link: '/' },
        { title: 'Детективы', link: '/' },
    ]

    return (
        <>
            <MovieBreadCrumbsHeader breadcrumbs={breadcrumbsHeader} />
            <MovieBackgroundContainer />
            <MovieMainSection />
            <div className="contentCard__underside">
                <MovieCompilation title={'С сериалом «Дублинские убийства» смотрят'} />
                <MovieCreators />
                <MovieAdditional />
                <MovieReviews />
                <MovieAllDevice />
            </div>
        </>
    )
}

export default MoviePage