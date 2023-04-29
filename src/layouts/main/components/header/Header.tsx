import React, { useState } from 'react'

import {
    HeaderDropDown,
    HeaderLogo,
    HeaderMenu,
    HeaderNotify,
    HeaderBtnPaySubscription,
    HeaderSearch,
    HeaderAvatar
} from './index'
import { mainMenuItems } from '../../../../data/dataMenus'

const Header: React.FC = () => {

    const headerTopClassNameDefault: string = 'headerTop headerTop_withoutBorder headerTop_state_init headerTop_hasDropdownMenu'
    const [headerTopClassName, setHeaderTopClassName] = useState<string | null>(null)

    const menuItemHover = (id: string | null) => {
        setHeaderTopClassName(id)
    }

    return (
        <header className="headerTop__innerWrapper">
            <div id="headerTop" className={headerTopClassName ? `${headerTopClassNameDefault} headerTop_isHovered ${headerTopClassName}` : headerTopClassNameDefault}>
                <div className="headerTop__grid">
                    <div className="headerTop__grid-inner">
                        <div className="headerTop__body">
                            <div className="headerTop__content">
                                <HeaderLogo />
                                <HeaderMenu items={mainMenuItems} handlerHover={menuItemHover} />
                                <div className="headerTop__wideArea">
                                    <HeaderBtnPaySubscription />
                                    <HeaderSearch />
                                </div>
                                <HeaderNotify handlerHover={menuItemHover} />
                                <HeaderAvatar handlerHover={menuItemHover} />
                            </div>
                            {headerTopClassName &&
                                <div
                                    className="headerDropdownBody"
                                    id="headerDropdownBody"
                                    style={{ height: '460px' }}
                                    onMouseLeave={() => menuItemHover(null)}
                                >
                                    <HeaderDropDown id={headerTopClassName} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header