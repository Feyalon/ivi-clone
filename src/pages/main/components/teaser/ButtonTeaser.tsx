import React from 'react'

type TProps = {
    data: {
        addClass: string
        title: string
        img: string
    }
}

const ButtonTeaser: React.FC<TProps> = ({ data }) => {

    const { addClass, title, img } = data

    return (
        <li className="home__teaserPlate">
            <div className={`nbl-teaserTile ${addClass} nbl-teaserTile_size_avatu teaserPlate__nbl-teaserTile`}>
                <div className="nbl-teaserTile__bgImage"></div>
                <div className="nbl-teaserTile__content">
                    <img
                        className="nbl-picture nbl-teaserTile__nbl-picture"
                        src={img}
                        alt={title}
                    />
                    <div className="nbl-teaserTile__caption">{title}</div>
                </div>
            </div>
        </li>
    )
}

export default ButtonTeaser