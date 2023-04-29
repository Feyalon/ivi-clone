import React from 'react'

type TProps = {
    data: {
        link: string
        title: string
    }
}

const NavigationListItem: React.FC<TProps> = ({ data }) => {

    const { title, link } = data

    return (
        <li className="mobileNavigation__list-item">
            <a
                className="nbl-link nbl-link_style_wovou mobileNavigation__link"
                href={link}
            >
                <p className="mobileNavigation__paragraphTitle">{title}</p>
            </a>
        </li>
    )
}

export default NavigationListItem