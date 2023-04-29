import React from 'react'

const MovieBackgroundContainer: React.FC = () => {
    return (
        <div
            className="contentCard__backgroundContainer contentCard__backgroundContainer_visible"
            style={{ background: 'linear-gradient(rgb(98, 121, 127) 0%, rgba(98, 121, 127, 0) 100%)' }}
        ></div>
    )
}

export default MovieBackgroundContainer