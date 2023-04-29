import React from 'react'

import { IMovieCreator } from '../../../../models/Movie'

type TProps = {
    data: { creator: IMovieCreator, role: string }
}

const MovieCreatorCard: React.FC<TProps> = ({ data }) => {

    const nameParts = data.creator.name.rus.split(' ')

    return (
        <div className="gallery__item" data-test="persons_item">
            <a
                className="fixedSlimPosterBlock fixedSlimPosterBlock_type_person gallery__fixedSlimPosterBlock"
                href={'#'}
            >
                <div className="fixedSlimPosterBlock__imageSection">
                {data.creator.poster
                    ?
                        <div className="poster poster_type_person fixedSlimPosterBlock__poster">
                            <div className="poster__imagePersonWrapper">
                                <img
                                    className="poster__image" data-stub="false"
                                    src={data.creator.poster}
                                    alt={data.creator.name.rus}
                                />
                            </div>
                        </div>
                    :
                        <div className="nbl-noPhotoPersonPoster nbl-noPhotoPersonPoster_sizing_heishe">
                            <div className="nbl-icon nbl-noPhotoPersonPoster__nbl-icon"></div>
                        </div>
                }
                </div>
                <div className="fixedSlimPosterBlock__textSection">
                    <div className="fixedSlimPosterBlock__title">{nameParts[0]}</div>
                    <div className="fixedSlimPosterBlock__secondTitle">{nameParts[1]}</div>
                    <div className="fixedSlimPosterBlock__extra">{data.role}</div>
                </div>
            </a>
        </div>
    )
}

export default MovieCreatorCard