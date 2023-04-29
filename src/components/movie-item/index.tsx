import React from 'react'

import { IMovie } from '../../models/Movie'

type TProps = {
    data: IMovie,
    size?: {
        width: number
        padding: number
    }
}

const MovieItem: React.FC<TProps> = ({ data, size }) => {

    const bestIndex: { name: string, value: number } = data.detailRating.reduce((acc, curr) => acc.value > curr.value ? acc : curr)
    const hoards = [
        { id: 1, name: 'favorite', icon: 'favoriteAdd' },
        { id: 2, name: 'similar', icon: 'similar' },
        { id: 3, name: 'rate', icon: 'rating' },
        { id: 4, name: 'dislike', icon: 'dislike' },
    ]
    return (
        <div
            className="ivi-carousel-item"
            style={{ width: `${size?.width}px`, paddingRight: `${size?.padding}px` }}
        >
            <a
                href={'#'}
                data-content-id={data.id}
                className="nbl-slimPosterBlock nbl-slimPosterBlock_type_poster nbl-slimPosterBlock_status_default nbl-slimPosterBlock_iconStatus_none nbl-slimPosterBlock_available home__nbl-slimPosterBlock"
            >
                <div className="nbl-slimPosterBlock__imageSection">
                    <div className="nbl-poster nbl-poster_type_poster nbl-poster_extrasMode_rusk nbl-slimPosterBlock__nbl-poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                className="nbl-poster__image"
                                alt={data.name}
                                data-stub="false"
                                src={data.poster}
                            />
                        </div>
                        <div className="nbl-poster__properties">
                            <div className="nbl-poster__hoards">
                                {hoards.map(hoard => (
                                    <div key={hoard.id} className={`hoard hoard_style_kaera hoard_iconOnly nbl-poster__hoard hoard_view_${hoard.name}`}>
                                        <div
                                            className={`nbl-icon nbl-icon_${hoard.icon}_20 hoard__nbl-icon hoard__icon`}
                                            style={{ width: '20px', height: '20px', fontSize: '20px', lineHeight: '20px' }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            <div className="nbl-poster__properties-inner">
                                <div className="nbl-poster__propertiesRow">
                                    <div className="nbl-poster__nbl-ratingCompact nbl-ratingCompact nbl-ratingCompact_style_utis nbl-ratingCompact_hasExtra_0">
                                        <div className="nbl-ratingCompact__value">
                                            <div className="nbl-ratingCompact__valueInteger">{data.rating.valueInt}</div>
                                            <div className="nbl-ratingCompact__valueFraction">,{data.rating.valueFract}</div>
                                        </div>
                                        <div className="nbl-ratingCompact__graph nbl-ratingCompact__graph_filled">
                                            {data.detailRating.map(detail => (
                                                <div key={detail.name} className="nbl-progressBar nbl-progressBar_isRoundingEnabled_0 nbl-progressBar_hasHoverBar_0 nbl-progressBar_direction_leftToRight nbl-ratingCompact__nbl-progressBar">
                                                    <div className="nbl-progressBar__backBar"></div>
                                                    <div className="nbl-progressBar__valueBar" style={{ width: `${detail.value}%` }}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="nbl-poster__propertiesRow">
                                    <div className="barChart nbl-poster__barChart">
                                        <div className="barChart__name">{bestIndex.name}</div>
                                        <div className="barChart__graph">
                                            <div className="barChart__graphProgress" style={{ width: `${bestIndex.value}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nbl-poster__propertiesInfo">
                                    <div className="nbl-poster__propertiesRow">
                                        {`${data.yearRelease.start}${data.yearRelease.finish ? '-' + data.yearRelease.finish : ''}, ${data.country[0].name}, ${data.genres[0].name}`}
                                    </div>
                                    <div className="nbl-poster__propertiesRow">{data.duration}</div>
                                </div>
                            </div>
                        </div>
                        {data.feature &&
                            <>
                                <div className="nbl-textBadge nbl-textBadge_size_dadom nbl-textBadge_style_surin nbl-textBadge_isShadowEnabled_1 nbl-poster__nbl-textBadge nbl-poster__mainTextBadge">
                                    <div className="nbl-textBadge__text">{data.feature}</div>
                                </div>
                                <div className="nbl-ageBadge nbl-ageBadge nbl-ageBadge_value_16 nbl-poster__nbl-ageBadge"></div>
                            </>
                        }
                    </div>
                </div>
                <div className="nbl-slimPosterBlock__textSection">
                    <div className="nbl-slimPosterBlock__title">
                        <span className="nbl-slimPosterBlock__titleText">{data.name}</span>
                    </div>
                    <div className="nbl-slimPosterBlock__extra">
                        <div className="nbl-slimPosterBlock__extraItem">
                            <span className="priceBadge" data-shield-text={data.price.priceType}></span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default MovieItem