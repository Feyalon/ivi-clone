import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'

import BtnBigLeft from './BtnBigLeft'
import BtnBigRight from './BtnBigRight'
import BtnSmallRight from './BtnSmallRight'
import BtnSmallLeft from './BtnSmallLeft'

type TProps = {
    children: any
    size: {
        width: number
        padding: number
    }
    type: 'small' | 'big'
    viewMobile?: Boolean
}

const GalleryCarousel: React.FC<PropsWithChildren<TProps>> = ({ children, size, type, viewMobile }) => {

    const sizeItem = size.width + size.padding
    const [countItem, setCountItem] = useState<number>(Math.floor(window.innerWidth / sizeItem))
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const carouselRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const changeIndex = (value: number): void => {
        const newIndex = activeIndex + value * (countItem - 1)
        if (newIndex < 0) {
            setActiveIndex(0)
        } else if (newIndex + countItem > React.Children.count(children)) {
            setActiveIndex(React.Children.count(children) - countItem)
        } else {
            setActiveIndex(newIndex)
        }
    }

    useEffect(() => {
        if (carouselRef.current) {
            setCountItem(Math.floor(carouselRef.current.clientWidth / sizeItem))
        }
    }, [carouselRef])

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translate3d(${0 - sizeItem * activeIndex}px, 0px, 0px)`
            if (viewMobile) {
                containerRef.current.style.width = carouselRef.current && carouselRef.current.clientWidth < 900 ? 'auto' : `${React.Children.count(children) * sizeItem + 1000}px`
            } else {
                containerRef.current.style.width = `${React.Children.count(children) * sizeItem + 1000}px`
            }
            containerRef.current.style.transition = 'transform 0.5s'

        }
    }, [activeIndex])

    return (
        <div className="gallery__carousel">
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div
                        className="ivi-carousel"
                        ref={carouselRef}
                    >
                        {activeIndex
                            ?
                                type === 'big' ? <BtnBigLeft action={changeIndex} /> : <BtnSmallLeft action={changeIndex} />
                            :
                                null
                        }
                        <div className="ivi-carousel-viewport">
                            <div
                                className="ivi-carousel-container"
                                ref={containerRef}
                                // style={{
                                //     transform: `translate3d(${0 - sizeItem * activeIndex}px, 0px, 0px)`,
                                //     width: `${React.Children.count(children) * sizeItem + 1000}px`,
                                //     transition: 'transform 0.5s'
                                // }}
                            >
                                {React.Children.map(children, (child, index) => {
                                    return React.cloneElement(child, {size: size})
                                })}
                            </div>
                        </div>
                        {(activeIndex + countItem < React.Children.count(children))
                            ?
                                type === 'big' ? <BtnBigRight action={changeIndex} /> : <BtnSmallRight action={changeIndex} />
                            :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryCarousel