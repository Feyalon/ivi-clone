import React from 'react'

import TopHeader from './TopHeader'
import TopGallery from './TopGallery'

const TopMain: React.FC = () => {
    return (
        <section className="pageSection home__pageSection" data-test="top10Block">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery gallery_hasNewCarousel gallery gallery_ivi-carousel gallery_top10">
                        <TopHeader />
                        <TopGallery />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopMain