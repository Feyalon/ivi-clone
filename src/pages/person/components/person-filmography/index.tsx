import React from 'react'

import { IMovie, IMovieCreator } from '../../../../models/Movie'
import PersonFilmographyItem from './PersonFilmographyItem'
import PersonBiography from '../PersonBiography'

type TProps = {
    persona: IMovieCreator
    movies: IMovie[]
}

const PersonFilmography: React.FC<TProps> = ({ persona, movies }) => {
    return (
        <section className="pageSection pageSection_noGap person__pageSection person__pageSection_noGap">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div id="person-content-column" className="person__contentColumn">
                        <div id="filmography" className="personFilmography person__personFilmography">
                            <div className="personFilmography__header">
                                <div className="personFilmography__title">Полная фильмография</div>
                                <div className="personFilmography__extraTitle">43 фильма</div>
                            </div>
                            <div className="personFilmography__content">
                                <div className="personFilmography__tabs">
                                    <div className="nbl-scrollableTabs nbl-scrollableTabs nbl-scrollableTabs_variation_vex personFilmography__scrollableTabsSection">
                                        <div className="nbl-scrollpane nbl-scrollpane nbl-scrollpane_variation_crein nbl-scrollpane_hasNativeScroll nbl-scrollableTabs__nbl-scrollpane">
                                            <div className="nbl-scrollpane__viewport">
                                                <div className="nbl-scrollpane__content">
                                                    <div className="nbl-tabs nbl-tabs_style_fir nbl-scrollableTabs__nbl-tabs">
                                                        <div className="nbl-tabs__inner">
                                                            <div className="nbl-tabs__gutter"></div>
                                                            <div className="nbl-tabsItem nbl-tabsItem_selected nbl-tabs__nbl-tabsItem">
                                                                <div className="nbl-tabsItem__textBlock">
                                                                    <div className="nbl-tabsItem__captionRow">
                                                                        <div className="nbl-tabsItem__caption">Всё</div>
                                                                    </div>
                                                                </div>
                                                                <div className="nbl-tabsItem__stripe" style={{ width: '27px' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="personFilmography__list">
                                    {movies && movies.map(movie => <PersonFilmographyItem key={movie.id} item={movie} /> )}
                                </div>
                                <div className="personFilmography__more">
                                    <button className="personFilmography__moreLink">Ещё 35 фильмов</button>
                                </div>
                            </div>
                        </div>
                        <PersonBiography biography={persona.biography} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonFilmography