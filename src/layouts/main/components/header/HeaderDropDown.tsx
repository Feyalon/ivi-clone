import React from 'react'

import HeaderDropDownMenu from './HeaderDropDownMenu'
import Notify from './HeaderDropDownMenu/Notify'
import Profile from './HeaderDropDownMenu/Profile'
import TVPlus from './HeaderDropDownMenu/TVPlus'
import { IUIMenuData } from '../../../../models/uiMenu'
import {
    animationMenuItemsDoubleColumn,
    animationMenuItemsSideContent,
    animationMenuItemsSingleColumn,

    moviesMenuItemsDoubleColumn,
    moviesMenuItemsSideContent,
    moviesMenuItemsSingleColumn,

    seriesMenuItemsDoubleColumn,
    seriesMenuItemsSideContent,
    seriesMenuItemsSingleColumn
} from '../../../../data/dataMenus'

type TProps = {
    id: string
}

type TSubMenu = '' | 'menu' | 'menu-tv' | 'profile' | 'notify'

const HeaderDropDown: React.FC<TProps> = ({ id }) => {

    let typeSubMenu: TSubMenu = ''

    const dataMenu: IUIMenuData = {
        doubleColumn: { title: '', items: [] },
        singleColumn: [],
        sideContent: []
    }

    if (id === 'headerTop_movies_menu_item') {
        dataMenu.doubleColumn = moviesMenuItemsDoubleColumn
        dataMenu.singleColumn = moviesMenuItemsSingleColumn
        dataMenu.sideContent = moviesMenuItemsSideContent
        typeSubMenu = 'menu'
    } else if (id === 'headerTop_series_menu_item') {
        dataMenu.doubleColumn = seriesMenuItemsDoubleColumn
        dataMenu.singleColumn = seriesMenuItemsSingleColumn
        dataMenu.sideContent = seriesMenuItemsSideContent
        typeSubMenu = 'menu'
    } else if (id === 'headerTop_animation_menu_item') {
        dataMenu.doubleColumn = animationMenuItemsDoubleColumn
        dataMenu.singleColumn = animationMenuItemsSingleColumn
        dataMenu.sideContent = animationMenuItemsSideContent
        typeSubMenu = 'menu'
    } else if (id === 'headerTop_notify') {
        typeSubMenu = 'notify'
    } else if (id === 'headerTop_profile') {
        typeSubMenu = 'profile'
    } else if (id === 'headerTop_tvplus_menu_item') {
        typeSubMenu = 'menu-tv'
    }

    return (
        <>
            {typeSubMenu === 'menu' && <HeaderDropDownMenu id={id} data={dataMenu} />}
            {typeSubMenu === 'notify' && <Notify />}
            {typeSubMenu === 'profile' && <Profile />}
            {typeSubMenu === 'menu-tv' && <TVPlus />}
        </>
    )
}

export default HeaderDropDown