import React from 'react'

import {
    tvplusBroadcast,
    tvplusMenuItems,
    tvplusMenuItemsWidgetContent,
    tvplusSlider
} from '../../../../../data/dataMenus'
import SideContentWidget from './SideContentWidget'
import TVPlusBroadcastItem from './TVPlusBroadcastItem'
import GalleryCarousel from '../../../../../components/gallery-carousel/GalleryCarousel'
import TvPlusPopularItem from './TvPlusPopularItem'

const TvPlus: React.FC = () => {
    const tvplusMenu = tvplusMenuItems
    const tvplusPopular = tvplusSlider
    const broadcast = tvplusBroadcast

    return (
        <div className="headerDropdown tvplus_menu_item">
            <div className="headerDropdown__body">
                <div className="headerDropdown__grid">
                    <div className="dropdownTv">
                        <div className="dropdownTv__sideContent">
                            <div className="dropdownLinksList">
                                <div className="dropdownLinksList__title">{tvplusMenu.title}</div>
                                <div className="dropdownLinksList__list">
                                    {tvplusMenu.items.map(item => (
                                        <div key={item.id} className="dropdownLinksList__item">
                                            <a
                                                className="nbl-link nbl-link_style_reska"
                                                href={item.link}
                                                title={item.title}
                                            >
                                                {item.title}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a className="nbl-button nbl-button_textAlign_center nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
                               href="https://www.ivi.ru/tvplus/tv-schedule-today"
                            >
                                <div className="nbl-button__primaryText">Телепрограмма</div>
                            </a>
                        </div>
                        <div className="dropdownTv__mainContent">
                            <div className="dropdownTv__mainContentInner">
                                <div className="dropdownTv__mainContentPopulars">
                                    {tvplusPopular.map(popular => (
                                        <div key={popular.title} className="dropdownTvPopular">
                                            <div className="dropdownTvPopular__title">{popular.title}</div>
                                            <div className="gallery gallery gallery_ivi-carousel">
                                                <GalleryCarousel size={{ width: 88.1538, padding: 16 }} type={'small'}>
                                                    {popular.data.map(item => <TvPlusPopularItem key={item.link} data={item} />)}
                                                </GalleryCarousel>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="dropdownBroadcastPopular">
                                        <div className="dropdownBroadcastPopular__title">{broadcast.title}</div>
                                            <div className="gallery gallery gallery_ivi-carousel">
                                                <GalleryCarousel type={'small'} size={{ width: 254.8, padding: 16 }}>
                                                    {broadcast.data.map(item => <TVPlusBroadcastItem key={item.link} data={item} />)}
                                                </GalleryCarousel>
                                            </div>
                                        </div>
                                    </div>
                                    <SideContentWidget data={tvplusMenuItemsWidgetContent} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TvPlus