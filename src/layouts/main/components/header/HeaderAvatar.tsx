import React from 'react'

type TProps = {
    handlerHover: (id: string | null) => void
}

const HeaderAvatar: React.FC<TProps> = ({ handlerHover }) => {
    return (
        <div
            data-test="header_avatar"
            className="headerTop__headerAvatar headerAvatar"
            onMouseEnter={() => handlerHover('headerTop_profile')}
        >
            <a
                className="headerAvatar__link" href="https://www.ivi.ru/profile"
                title="Войти в профиль"
            >
                <div className="nbl-button nbl-button_iconMode_onlyIcon nbl-button_style_unu nbl-button_size_blaze nbl-button_hasBadge_0">
                    <div className="nbl-icon nbl-icon_avatar_20 nbl-button__nbl-icon"></div>
                </div>
            </a>
        </div>
    )
}

export default HeaderAvatar