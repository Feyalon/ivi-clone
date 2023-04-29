import React from 'react'

import { HeaderSearchContext } from './index'

const HeaderSearch: React.FC = () => {
    return (
        <div className="headerTop__headerSearch">
            <HeaderSearchContext.Consumer>
                {({ toggleSearch }) => (
                    <button
                        data-test="header_search"
                        className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_sairo nbl-button_size_stryker nbl-button_hasBadge_0"
                        onClick={toggleSearch}
                    >
                        <div className="nbl-button__primaryText">
                            <div className="nbl-icon nbl-icon_search_16 nbl-button__nbl-icon"></div>
                            Поиск
                        </div>
                    </button>
                )}
            </HeaderSearchContext.Consumer>
        </div>
    )
}

export default HeaderSearch