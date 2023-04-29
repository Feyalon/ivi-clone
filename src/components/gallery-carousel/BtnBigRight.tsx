import React from 'react'

type TProps = {
    action: (value: number) => void
}

const BtnBigLeft: React.FC<TProps> = ({ action }) => {
    return (
        <>
            <span className="xArrowButton xArrowButton_top10 xArrowButton_direction_right gallery__xArrowButton">
                <div className="xArrowButton__iconWrapper">
                    <div
                        className="xArrowButton__icon"
                        onClick={() => action(1)}
                    ></div>
                </div>
            </span>
            <div className="ivi-carousel__shadow_right"></div>
        </>
    )
}

export default BtnBigLeft