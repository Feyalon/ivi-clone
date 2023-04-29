import React from 'react'

import { IUIMenuMain } from '../../../../models/uiMenu'

type TProps = {
    items: IUIMenuMain []
    handlerHover: (id: string | null) => void
}

const HeaderMenu: React.FC<TProps> = ({ items, handlerHover }) => {
    return (
        <div
            data-test="header_menu_container"
            className="headerTop__headerMenu headerMenu headerMenu_hasFullDropdown"
        >
            <nav className="headerMenu__navigation">
                <ul className="headerMenu__list">
                    <>
                        {items && items.map(item => (
                            <li
                                key={item.id}
                                className="headerMenu__listItem"
                                onMouseEnter={() => handlerHover(item.addClass)}
                            >
                                <a
                                    href={item.link}
                                    title={item.title}
                                    data-test="menu_section_my_ivi"
                                    className="nbl-button nbl-button_style_sairo nbl-button_size_stryker nbl-button_hasBadge_0"
                                >
                                    <div className="nbl-button__primaryText">{item.title}</div>
                                </a>
                            </li>
                        ))}
                    </>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu