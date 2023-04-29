import React from 'react'

import { IMovieCreator } from '../../../models/Movie'

type TProps = {
    persona: IMovieCreator
}

const PersonMainSection: React.FC<TProps> = ({ persona }) => {
    return (
        <section className="pageSection pageSection_noGap person__pageSection person__pageSection_noGap">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="person__contentColumn">
                        <div className="person__personHeader personHeader personHeader_hasPosterImage">
                            <div className="personHeader__figure">
                                <div className="nbl-poster nbl-poster_type_person personHeader__nbl-poster">
                                    <div className="nbl-poster__imageWrapper">
                                        <div className="nbl-poster__imagePersonWrapper">
                                            <img
                                                className="nbl-poster__image"
                                                data-stub="false"
                                                src={persona.poster}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="personHeader__alternate">{persona.name.eng}</div>
                            <h1 className="personHeader__title">{persona.name.rus}</h1>
                            <div className="personHeader__story">
                                <div className="clause personHeader__clause">
                                    <div className="clause__text is-truncated">
                                        {persona.description}
                                        <span className="clause__toggle">Развернуть</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="personAnchorLink person__personAnchorLink">
                            <ul className="personAnchorLink__list">
                                <li className="personAnchorLink__item">
                                    <a href="#filmography" className="personAnchorLink__link">
                                        43 фильма
                                    </a>
                                </li>
                                <li className="personAnchorLink__item">
                                    <a href="#biography"className="personAnchorLink__link">
                                        Биография
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonMainSection