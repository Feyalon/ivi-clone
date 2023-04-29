import React from 'react'

import { IMovieReview } from '../../../../models/Movie'
import MovieReviewItem from './MovieReviewItem'
import { dataReviews } from '../../../../data/dataMovie'

const MovieReviews: React.FC = () => {

    const reviews: IMovieReview[] = dataReviews

    return (
        <section className="pageSection contentCard__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="comments contentCard__comments">
                        <header className="comments__header">
                            <div className="comments__links">
                                <div className="extraLinks comments__extraLinks">
                                    <ul className="extraLinks__list">
                                        <li className="extraLinks__item">
                                            <a
                                                className="nbl-link nbl-link_style_paxe extraLinks__nbl-link"
                                                data-test="comments_title"
                                                href="/watch/dublinskie-ubiystva/comments"
                                            >
                                                Отзывы
                                            </a>
                                            <div className="nbl-superscript nbl-superscript_style_default nbl-superscript_size_sheicu extraLinks__nbl-superscript">
                                                <div className="nbl-superscript__text">5</div>
                                            </div>
                                        </li>
                                        <div className="extraLinks__subtitle">о сериале «Дублинские убийства»</div>
                                    </ul>
                                </div>
                                <a href="/watch/dublinskie-ubiystva/comments">
                                    <button className="nbl-button nbl-button_textAlign_left nbl-button_style_ran nbl-button_size_cyrax nbl-button_hasBadge_0">
                                        <div className="nbl-button__primaryText">Оставить отзыв</div>
                                    </button>
                                </a>
                            </div>
                        </header>
                        <div className="gallery gallery_ivi-carousel">
                            <div className="gallery__carousel">
                                <div className="gallery__viewport">
                                    <div className="gallery__viewport-inner">
                                        <div className="ivi-carousel">
                                            <div className="ivi-carousel-viewport">
                                                <div className="ivi-carousel-container">
                                                    {reviews && reviews.map(review =>
                                                        <MovieReviewItem key={review.id} review={review} />
                                                    )}
                                                </div>
                                            </div>
                                            <span className="xArrowButton xArrowButton_ugcTile xArrowButton_direction_right gallery__xArrowButton">
                                                <div className="xArrowButton__iconWrapper">
                                                    <div className="xArrowButton__icon"></div>
                                                </div>
                                            </span>
                                            <div className="ivi-carousel__shadow_right"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comments__actions">
                            <a href="/watch/dublinskie-ubiystva/comments">
                                <button className="nbl-button nbl-button_textAlign_center nbl-button_style_ran nbl-button_size_cyrax nbl-button_hasBadge_0">
                                    <div className="nbl-button__primaryText">Оставить отзыв</div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieReviews