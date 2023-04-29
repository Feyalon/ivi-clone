import React from 'react'

type TProps = {
    item: { img: string, title: string, meta: string }
}

const MovieAdditionalItem: React.FC<TProps> = ({ item }) => {
    return (
        <div className="ivi-carousel-item" style={{ width: '286px', paddingRight: '24px' }}>
            <div className="nbl-posterUprightDetailBlock nbl-posterUprightDetailBlock_type_trailer nbl-posterUprightDetailBlock_status_default">
                <div className="nbl-posterUprightDetailBlock__imageSection">
                    <div className="nbl-posterUprightDetailBlock__posterOutline"></div>
                    <div className="nbl-poster nbl-poster_type_thumbnail nbl-poster_extrasMode_berth nbl-posterUprightDetailBlock__nbl-poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                className="nbl-poster__image"
                                data-stub="false"
                                src={item.img}
                            />
                        </div>
                    </div>
                </div>
                <div className="nbl-posterUprightDetailBlock__textSection">
                    <div className="nbl-posterUprightDetailBlock__title">
                        <span className="nbl-posterUprightDetailBlock__titleText">{item.title}</span>
                    </div>
                    <div className="nbl-posterUprightDetailBlock__metaBlock">
                        <div className="nbl-posterUprightDetailBlock__meta">{item.meta}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieAdditionalItem