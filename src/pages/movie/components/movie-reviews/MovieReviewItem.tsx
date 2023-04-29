import React from 'react'

import { IMovieReview } from '../../../../models/Movie'

type TProps = {
    review: IMovieReview
}

const MovieReviewItem: React.FC<TProps> = ({ review }) => {
    return (
        <div
            className="ivi-carousel-item"
            style={{ width: '286px', paddingRight: '24px' }}
        >
            <a
                className="ugcTile gallery__ugcTile"
                href="/watch/dublinskie-ubiystva/comments?commentId=778391"
            >
                <div className="vote vote_status_positive ugcTile__vote">
                    <button className="vote__buttonUp" type="button">
                        <div className="nbl-icon nbl-icon_thumbUp_16 vote__nbl-icon"></div>
                    </button>
                    <div className="vote__value">{review.vote}</div>
                    <button className="vote__buttonDown" type="button">
                        <div className="nbl-icon nbl-icon_thumbDown_16 vote__nbl-icon"></div>
                    </button>
                </div>
                <div className="ugcTile__inner">
                    <div className="ugcTile__author">{review.author}</div>
                    <div className="ugcTile__textBlock">{review.content}</div>
                    <div className="ugcTile__date">{review.date.toString()}</div>
                </div>
            </a>
        </div>
    )
}

export default MovieReviewItem