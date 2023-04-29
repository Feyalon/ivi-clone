import React from 'react'

import { IUIMenu } from '../../../../../models/uiMenu'

type TProps = {
    data: {
        title: string
        items: IUIMenu[]
    }
}

const DoubleColumn: React.FC<TProps> = ({ data }) => {
    const { title, items } = data
    return (
        <div className="dropdownContent__doubleColumn">
            <div className="dropdownLinksList">
                <div className="dropdownLinksList__title">{title}</div>
                <div className="dropdownLinksList__list">
                    {items && items.map(item => (
                        <div key={item.id} className="dropdownLinksList__item">
                            <a
                                className="nbl-link nbl-link_style_reska"
                                href={item.link}
                                title={item.title}
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoubleColumn