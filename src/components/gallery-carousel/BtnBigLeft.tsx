import React from 'react'

type TProps = {
    action: (value: number) => void
}

const BtnBigLeft: React.FC<TProps> = ({ action }) => {

    return (
        <span className={`xArrowButton xArrowButton_nbl-posterUprightBlock xArrowButton_direction_left gallery__xArrowButton`}>
            <div className="xArrowButton__iconWrapper">
                <div
                    className="nbl-icon nbl-icon_arrowLeft_8x20 xArrowButton__arrowIcon"
                    onClick={() => action(-1)}
                ></div>
            </div>
        </span>
    )
}

export default BtnBigLeft