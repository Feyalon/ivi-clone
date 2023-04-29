import React from 'react'

const TopHeader: React.FC = () => {
    return (
        <div className="gallery__blockHeader">
            <div className="gallery__imageHeader">
                <img
                    className="nbl-picture"
                    src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg"
                    alt={'TOP-10'}
                />
                <span>за неделю</span>
            </div>
        </div>
    )
}

export default TopHeader