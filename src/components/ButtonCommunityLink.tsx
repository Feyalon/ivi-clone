import React from 'react'

type TProps = {
    link: string
    icon: string
    isMobile?: boolean
}

const ButtonCommunityLink: React.FC<TProps> = ({ link, icon, isMobile }) => {
    return (
        <a
            className={isMobile ? 'mobileNavigation__communityLink' : 'iviFooter__communityLink'}
            href={link}
            target="_blank"
        >
            <div className="nbl-knob nbl-knob nbl-knob_size_sandy nbl-knob_style_seshi">
                <img
                    className="nbl-picture nbl-knob__nbl-picture"
                    src={icon}
                    alt={'community'}
                />
            </div>
        </a>
    )
}

export default ButtonCommunityLink