import React from 'react'

import { IUIMenu } from '../../../../../models/uiMenu'

type TProps = {
    data: { title: string, items: IUIMenu[] }[]
}

const SingleColumn: React.FC<TProps> = ({ data }) => {
    return (
        <div className="dropdownContent__singleColumn">
            {data && data.map(d => (
                <div key={d.title} className="dropdownLinksList">
                    <div className="dropdownLinksList__title">{d.title}</div>
                        <div className="dropdownLinksList__list">
                            {d.items && d.items.map(item => (
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
            ))}
        </div>
    )
}

export default SingleColumn