import React from 'react'

type TProps = {
    data: {
        poster: string,
        link: string,
        titleBroadcast?: string,
        timeBroadcast?: string,
        typeBroadcast?: string,
    },
    size?: {
        width: number
        padding: number
    }
}

const TvPlusPopularItem: React.FC<TProps> = ({ data, size }) => {
    return (
        <div
            key={data.link}
            className="ivi-carousel-item"
            style={{ width: `${size?.width}px`, paddingRight: `${size?.padding}px` }}
        >
            <div className="dropdownTvPopular__item">
                <a
                    className="nbl-poster nbl-poster_type_broadcastThumb"
                    href={data.link}
                >
                    <div className="nbl-poster__imageWrapper">
                        <img
                            className="nbl-poster__image"
                            data-stub="false"
                            src={data.poster}
                            alt={'poster'}
                        />
                    </div>
                </a>
            </div>
        </div>

    )
}

export default TvPlusPopularItem