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

const TvPlusBroadcastItem: React.FC<TProps> = ({ data, size }) => {
    //  * 16
    return (
        <div
            key={data.link}
            className="ivi-carousel-item"
            style={{ width: `${size?.width}px`, paddingRight: `${size?.padding}px` }}
        >
            <div className="dropdownBroadcastPopular__item">
                <a
                    className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
                    href={data.link}
                >
                    <div className="nbl-posterSidewardBlock__bodyWrapper">
                        <div className="nbl-posterSidewardBlock__body">
                            <div className="nbl-posterSidewardBlock__imageSection">
                                <div className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
                                    <div className="nbl-poster__imageWrapper">
                                        <img
                                            className="nbl-poster__image"
                                            data-stub="false"
                                            src={data.poster}
                                            alt={'broadcast'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="nbl-posterSidewardBlock__textSection">
                                <div className="nbl-posterSidewardBlock__titleRow">
                                    <div className="nbl-posterSidewardBlock__title">
                                        {data.titleBroadcast}
                                    </div>
                                </div>
                                <div className="nbl-posterSidewardBlock__extraRow">
                                    <span className="nbl-posterSidewardBlock__extraItem">{data.timeBroadcast}</span>
                                    <span className="nbl-posterSidewardBlock__extraSeparator">•</span>
                                    <span className="nbl-posterSidewardBlock__extraItem">{data.typeBroadcast}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default TvPlusBroadcastItem