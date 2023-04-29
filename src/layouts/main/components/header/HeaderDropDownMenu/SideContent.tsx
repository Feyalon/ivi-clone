import React from 'react'

import { IUIMenu } from '../../../../../models/uiMenu'
import SideContentWidget from './SideContentWidget'
import {
    animationMenuItemsWidgetContent,
    moviesMenuItemsWidgetContent,
    seriesMenuItemsWidgetContent
} from '../../../../../data/dataMenus'

type TProps = {
    id: string
    items: IUIMenu[]
}

const SideContent: React.FC<TProps> = ({ id, items }) => {

    let posters: { id: number, path: string }[][] = []

    if (id === 'headerTop_movies_menu_item') {
        posters = moviesMenuItemsWidgetContent
    } else if (id === 'headerTop_series_menu_item') {
        posters = seriesMenuItemsWidgetContent
    } else if (id === 'headerTop_animation_menu_item') {
        posters = animationMenuItemsWidgetContent
    }

    return (
        <div className="dropdownContent__sideContent">
            <div
                className="nbl-tabs nbl-tabs_variation_molku nbl-tabs_style_rose nbl-tabs_hasNativeScroll dropdownContent__nbl-tabs">
                <div className="nbl-tabs__inner">
                    <div className="nbl-tabs__gutter">
                        <div className="nbl-tabs__gutterStripe" style={{height: '20px', transform: 'translateY(0px)'}}></div>
                    </div>
                    {items && items.map(item => (
                        <a
                            className="nbl-tabsItem nbl-tabs__nbl-tabsItem nbl-tabsItem_selected"
                            href={item.link}
                            title={item.title}
                            key={item.id}
                        >
                            <div className="nbl-tabsItem__textBlock">
                                <div className="nbl-tabsItem__captionRow">
                                    <div className="nbl-tabsItem__caption">{item.title}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <SideContentWidget data={posters}/>
        </div>
    )
}

export default SideContent