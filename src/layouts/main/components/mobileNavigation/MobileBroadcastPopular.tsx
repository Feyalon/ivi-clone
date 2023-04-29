import React from 'react'

import { IUIMenuTVPlus } from '../../../../models/uiMenu'

type TProps = {
    data: IUIMenuTVPlus
}

const MobileBroadcastPopular: React.FC<TProps> = ({ data }) => {
    return (
        <div className="dropdownBroadcastPopular mobile">
            <div className="dropdownBroadcastPopular__title">{data.title}</div>
            <div className="dropdownBroadcastPopular__list">
                {data.data.map(item => (
                    <div key={item.titleBroadcast} className="dropdownBroadcastPopular__item">
                        <a
                            className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
                            href={item.link}
                        >
                            <div className="nbl-posterSidewardBlock__bodyWrapper">
                                <div className="nbl-posterSidewardBlock__body">
                                    <div className="nbl-posterSidewardBlock__imageSection">
                                        <div className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
                                            <div className="nbl-poster__imageWrapper">
                                                <img
                                                    className="nbl-poster__image"
                                                    data-stub="false"
                                                    src={item.poster}
                                                    alt={item.titleBroadcast}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nbl-posterSidewardBlock__textSection">
                                        <div className="nbl-posterSidewardBlock__titleRow">
                                            <div className="nbl-posterSidewardBlock__title">
                                                {item.titleBroadcast}
                                            </div>
                                        </div>
                                        <div className="nbl-posterSidewardBlock__extraRow">
                                            <span className="nbl-posterSidewardBlock__extraItem">
                                                {item.timeBroadcast}
                                            </span>
                                            <span className="nbl-posterSidewardBlock__extraSeparator">•</span>
                                            <span className="nbl-posterSidewardBlock__extraItem">
                                                {item.typeBroadcast}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileBroadcastPopular