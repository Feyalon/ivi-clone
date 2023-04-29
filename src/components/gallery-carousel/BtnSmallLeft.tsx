import React from 'react'

type TProps = {
    action: (value: number) => void
}

const BtnSmallLeft: React.FC<TProps> = ({ action }) => {
    return (
        <div className="nbl-xArrowButton nbl-xArrowButton_direction_left gallery__nbl-xArrowButton">
            <div
                className="nbl-icon nbl-xArrowButton__nbl-icon"
                onClick={() => action(-1)}
            ></div>
        </div>
    )
}

export default BtnSmallLeft