import React from 'react'

type TProps = {
    title?: string
    link?: string
    addClass?: string
    subTitle?: string
    icon?: string
    handlerClick?: () => void
}

const ButtonLink: React.FC<TProps> = ({ title, link, addClass,  subTitle, icon, handlerClick }) => {

    let resClass = 'nbl-button nbl-button_style_makoto nbl-button_hasBadge_0'
    if (!title || !icon) resClass += ' nbl-button_textAlign_center nbl-button_size_shinnok'
    if (!title && icon) resClass += ' nbl-button_iconMode_onlyIcon'
    if (title && icon) resClass += ' nbl-button_iconMode_withIcon nbl-button_size_brant'

    resClass += addClass ? ` ${addClass}` : ''

    return (
        subTitle
            ?
                <a
                    href={link}
                    className="nbl-overturnButton nbl-overturnButton_style_aumiro nbl-overturnButton_size_wiz"
                >
                    {icon?.includes('http')
                        ?
                            <img
                                className="nbl-picture nbl-overturnButton__nbl-picture"
                                src={icon}
                                alt={title}
                            />
                        :
                            <div className={`nbl-icon ${icon} nbl-overturnButton__nbl-icon`}></div>
                    }
                    <div className="nbl-overturnButton__textBlock">
                        <div className="nbl-overturnButton__preamble">{subTitle}</div>
                        <div className="nbl-overturnButton__caption">{title}</div>
                    </div>
                </a>
            :
                handlerClick
                    ?
                    <button
                        className={resClass}
                        onClick={handlerClick}
                    >
                        <div className="nbl-button__primaryText">
                            {icon && <div className={`nbl-icon ${icon} nbl-button__nbl-icon`}></div>}
                            {title}
                        </div>
                    </button>

                    :
                <a
                    className={resClass}
                    href={link}
                    target="_blank"
                >
                    <div className="nbl-button__primaryText">
                        {icon && <div className={`nbl-icon ${icon} nbl-button__nbl-icon`}></div>}
                        {title}
                    </div>
                </a>
    )
}

export default ButtonLink