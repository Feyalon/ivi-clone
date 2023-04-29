import React from 'react'

type TProps = {
    action: (value: number) => void
}

const BtnSmallRight: React.FC<TProps> = ({ action }) => {
    return (
        <>
            <div className="nbl-xArrowButton nbl-xArrowButton_direction_right gallery__nbl-xArrowButton">
                <div
                    className="nbl-icon nbl-xArrowButton__nbl-icon"
                    onClick={() => action(1)}
                ></div>
            </div>
            <div className="ivi-carousel__shadow_right"></div>
        </>
    )
}

export default BtnSmallRight