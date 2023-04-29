import React from 'react'

import { IUIMenuTVPlus } from '../../../../models/uiMenu'

type TProps = {
    data: IUIMenuTVPlus[]
}

const MobileTvPopular: React.FC<TProps> = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <div key={item.title} className="dropdownTvPopular mobile">
                    <div className="dropdownTvPopular__title">{item.title}</div>
                    <div className="dropdownTvPopular__list">
                        {item.data.map(item => (
                            <div key={item.link} className="dropdownTvPopular__item">
                                <a
                                    href={item.link}
                                    className="nbl-poster nbl-poster_type_broadcastThumb"
                                >
                                    <div className="nbl-poster__imageWrapper">
                                        <img
                                            className="nbl-poster__image"
                                            data-stub="false"
                                            src={item.poster}
                                            alt={item.titleBroadcast}
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default MobileTvPopular