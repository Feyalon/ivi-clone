import React from 'react'

import { IUIMenu } from '../../../../models/uiMenu'

type TProps = {
    data: {
        title: string
        items: IUIMenu[]
        cert?: {
            title: string
            link: string
        }
    }
}

const FooterMenu: React.FC<TProps> = ({ data }) => {

    const { title, items, cert } = data

    return (
        <div className="iviFooter__column iviFooter__column_narrow">
            <span className="iviFooter__title">{title}</span>
            <ul className="iviFooter__linkList">
                {items.map(item => (
                    <li key={item.id} className="iviFooter__linkItem">
                        <a
                            className={'nbl-link nbl-link_style_reska'}
                            href={item.link}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
            {cert &&
                <div className="iviFooter__certificateLinkWrapper">
                    <a
                        className="iviFooter__certificateLink"
                        href={cert.link}
                    >
                        {cert.title}
                    </a>
                </div>
            }
        </div>
    )
}

export default FooterMenu