import React from 'react'

type TProps = {
    breadcrumbs: {
        title: string
        link: string
    }[]
}

const MovieBreadCrumbsHeader: React.FC<TProps> = ({ breadcrumbs }) => {
    return (
        <div className="watchHeader contentCard__watchHeader">
            <div className="headerBar headerBar_playerPage watchHeader__headerBar">
                <div className="headerBar__container">
                    <div className="headerBar__container-inner">
                        <div className="headerBar__controls">
                            <div className="headerBar__nav">
                                <ul className="breadCrumbs breadCrumbs_modern headerBar__breadCrumbs"
                                    data-test="bread_crumbs_block"
                                >
                                    {breadcrumbs.map((breadcrumb, index) => (
                                        <li
                                            key={index}
                                            className="breadCrumbs__item"
                                            data-test="bread_crumbs_item"
                                            itemProp="itemListElement"
                                        >
                                            <a
                                                className="nbl-link nbl-link_style_wovou breadCrumbs__nbl-link"
                                                href={breadcrumb.link}
                                                itemProp="item"
                                            >
                                                <span itemProp="name">{breadcrumb.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <span className="headerBar__link headerBar__link_back">Назад</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBreadCrumbsHeader