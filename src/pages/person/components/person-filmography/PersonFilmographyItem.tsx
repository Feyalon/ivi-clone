import React from 'react'

import { IMovie } from '../../../../models/Movie'

type TProps = {
    item: IMovie
}

const PersonFilmographyItem: React.FC<TProps> = ({ item }) => {
    return (
        <div data-contentid={item.id} className="personFilmographyItem personFilmography__personFilmographyItem">
            <a href="/watch/494515" className="personFilmographyItem__body">
                <div className="personFilmographyItem__figure">
                    <div className="nbl-poster nbl-poster_type_poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                className="nbl-poster__image" data-stub="false"
                                src={item.poster}
                            />
                        </div>
                    </div>
                </div>
                <div className="personFilmographyItem__main">
                    <div className="personFilmographyItem__info">
                        <div className="personFilmographyItem__year">
                            <span>{item.yearRelease.start}</span>
                        </div>
                        <div
                            className="personFilmographyItem__title"
                            title={item.name}
                        >
                            {item.name}
                        </div>
                        <div className="personFilmographyItem__rating">
                            <span className="personFilmographyItem__ratingLabel">Рейтинг Иви:</span>
                            <span className="personFilmographyItem__ratingValue">
                                <span className="personFilmographyItem__ratingvalueInteger">{item.rating.valueInt}</span>
                                <span className="personFilmographyItem__ratingvalueFraction">,{item.rating.valueFract}</span>
                            </span>
                        </div>
                    </div>
                    <div className="personFilmographyItem__action">
                        <div className="nbl-button nbl-button_textAlign_center nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0">
                            <div className="nbl-button__primaryText">Подробнее</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default PersonFilmographyItem