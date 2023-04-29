import React from 'react'

import { IMovie } from '../../../../models/Movie'

type TProps = {
    data: { id: number, movie: IMovie, logo: string },
    size?: {
        width: number
        padding: number
    }
}

const TopGalleryItem: React.FC<TProps> = ({ data, size }) => {

    const { id, movie, logo} = data

    return (
        <div
            className="ivi-carousel-item"
            style={{ width: `${size?.width}px`, paddingRight: `${size?.padding}px` }}
        >
            <a
                className="nbl-posterUprightBlock nbl-posterUprightBlock_type_godun nbl-posterUprightBlock_status_default home__nbl-posterUprightBlock"
                href={'#'}
            >
                <div className="nbl-posterUprightBlock__imageSection">
                    <div className="nbl-poster nbl-poster_type_godun nbl-posterUprightBlock__nbl-poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                alt={movie.name}
                                className="nbl-poster__image"
                                data-stub="false"
                                src={movie.poster}
                            />
                            <div className="nbl-poster__imageFade"></div>
                            <div className="nbl-poster__imageFadeFooter"></div>
                            <div className="nbl-poster__imageLogoArea">
                                <img
                                    alt="" className="nbl-poster__imageLogo"
                                    data-stub="false"
                                    src={logo}
                                />
                            </div>
                            <div className="nbl-poster__placeNumber">
                                {id < 10
                                    ?
                                        <img
                                            className="nbl-picture nbl-poster__nbl-picture"
                                            src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number${id}.svg`}
                                            alt={`top-${id}`}
                                        />
                                    :
                                        <>
                                            <img
                                                className="nbl-picture nbl-poster__nbl-picture"
                                                src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg`}
                                                alt={'top-10'}
                                            />
                                            <img
                                                className="nbl-picture nbl-poster__nbl-picture"
                                                src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number0.svg`}
                                                alt={'top-10'}
                                            />

                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nbl-posterUprightBlock__textSection"></div>
            </a>
        </div>
    )
}

export default TopGalleryItem