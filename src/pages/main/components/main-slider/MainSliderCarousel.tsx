import React, { PropsWithChildren, useEffect, useState } from 'react'

type TProps = {
    children: any
}

const MainSliderCarousel: React.FC<PropsWithChildren<TProps>> = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState<number>(1)
    const [paused, setPaused] = useState<boolean>(false)

    const sizeItem = window.innerWidth > 900 ? 1216 : window.innerWidth - 60
    const changeIndex = (newIndex: number): void => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) changeIndex(activeIndex + 1)
        }, 3000)

        return () => {
            if (interval) clearInterval(interval)
        }
    })

    return (
        <div
            className="promoSlider promoSlider_version_2 home__promoSlider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="ivi-carousel ivi-carousel-initialized">
                <div className="nbl-xArrowButton nbl-xArrowButton_direction_left gallery__nbl-xArrowButton gallery__nbl-xArrowButton_slimPosterBlock gallery__nbl-xArrowButton">
                    <div
                        className="nbl-icon nbl-xArrowButton__nbl-icon"
                        onClick={() => changeIndex(activeIndex - 1)}
                    ></div>
                </div>
                <div className="ivi-carousel-viewport ivi-carousel__promoMod">
                    <div
                        className="ivi-carousel-container"
                        style={{
                            transform: `translate3d(${0 - sizeItem * activeIndex}px, 0px, 0px)`,
                            width: `${React.Children.count(children) * sizeItem + 1000}px`,
                            transition: 'transform 0.5s'
                        }}
                    >
                        {React.Children.map(children, (child, index) => {
                            return React.cloneElement(child, {active: index === activeIndex})
                        })}
                    </div>
                </div>
                <div className="nbl-xArrowButton nbl-xArrowButton_direction_right gallery__nbl-xArrowButton gallery__nbl-xArrowButton_slimPosterBlock gallery__nbl-xArrowButton">
                    <div
                        className="nbl-icon nbl-xArrowButton__nbl-icon"
                        onClick={() => changeIndex(activeIndex + 1)}
                    ></div>
                </div>
                <div className="ivi-carousel__shadow_right"></div>
            </div>
        </div>
    )
}

export default MainSliderCarousel