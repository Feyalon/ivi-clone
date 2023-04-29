import React from 'react'

import '../../../../assets/css/main.mobile.css'
import { addClass } from '../../../../utils/bodyClass'

type TProps = {
    toggleSearch: () => void
    toggleMobileNav: () => void
}

const TabBarPlate: React.FC<TProps> = ({ toggleSearch, toggleMobileNav }) => {

    addClass('body', 'touch')
    addClass('body', 'has-mobile-navigation')
    addClass('body', 'hasOpenAppBar')

    //nbl-tabBar__item_selected
    const menuItems = [
        { id: 1, name: 'Мой Иви', icon: 'nbl-icon_home_20', link: 'https://www.ivi.ru/' },
        { id: 2, name: 'Каталог', icon: 'nbl-icon_catalog_20', link: 'https://www.ivi.ru/movies' },
        { id: 3, name: 'Поиск', icon: 'nbl-icon_search_20', link: null, action: toggleSearch },
        { id: 4, name: 'TV+', icon: 'nbl-icon_tvPlus_20', link: 'https://www.ivi.ru/tvplus' },
        { id: 5, name: 'Ещё', icon: 'nbl-icon_more_20', link: null, action: toggleMobileNav },
    ]

    return (
        <div className="tabBarPlate">
            <div className="nbl-tabBar">
                {menuItems.map(item => (
                    item.link
                        ?
                            <a key={item.id} className="nbl-tabBar__item" href={item.link}>
                                <div className="nbl-tabBar__itemGlowImage"></div>
                                <div className="nbl-tabBar__itemIcon">
                                    <div className={`nbl-icon ${item.icon} nbl-tabBar__itemIconGlyph`}></div>
                                </div>
                                <div className="nbl-tabBar__itemCaption">{item.name}</div>
                            </a>
                        :
                            <div key={item.id} className="nbl-tabBar__item" onClick={item.action}>
                                <div className="nbl-tabBar__itemGlowImage"></div>
                                <div className="nbl-tabBar__itemIcon">
                                    <div className={`nbl-icon ${item.icon} nbl-tabBar__itemIconGlyph`}></div>
                                </div>
                                <div className="nbl-tabBar__itemCaption">{item.name}</div>
                            </div>
                ))}
            </div>
        </div>
    )
}

export default TabBarPlate