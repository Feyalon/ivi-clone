import React from 'react'

type TProps = {
    handlerHover: (id: string | null) => void
}

const HeaderNotify: React.FC<TProps> = ({ handlerHover }) => {
    return (
        <div data-test="header_pull_notifications"
             className="headerTop__headerNotify headerNotify"
             onMouseEnter={() => handlerHover('headerTop_notify')}
        >
            <a
                className="headerNotify__link"
                href="https://www.ivi.ru/profile/pull_notifications"
            >
                <div className="nbl-simpleControlButton nbl-simpleControlButton_size_quill nbl-simpleControlButton_style_mali">
                    <div className="nbl-simpleControlButton__content">
                        <div className="nbl-icon nbl-icon_pull_16 nbl-simpleControlButton__nbl-icon"></div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default HeaderNotify