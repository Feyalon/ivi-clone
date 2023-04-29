import React from 'react'

import { IUIMenu } from '../../../../models/uiMenu'

interface IColumnData {
    title: string
    items: IUIMenu[]
}

type TProps = {
    title: { main: string, all: string }
    firstColumnData: IColumnData
    secondColumnData: IColumnData[]
    widgetData: IUIMenu[]
}

const MobileMovies: React.FC<TProps> = ({ title, firstColumnData, secondColumnData, widgetData }) => {
    return (
        <div className="mobileNavigation__item">
            <div className="nbl-arrowButton nbl-arrowButton_variation_zozon nbl-arrowButton_collapsed">
                <div className="nbl-icon nbl-icon_films_20 nbl-icon_customExtraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_customExtraIcon"></div>
                <div className="nbl-arrowButton__caption">{title.main}</div>
                <div className="nbl-icon nbl-icon_arrowIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_arrowIcon"></div>
            </div>
            <div className="mobileNavigation__dropdown">
                <ul className="mobileNavigation__list media">
                    <div className="mobileNavigation__groupItem">
                        <a
                            className="nbl-link nbl-link_style_wovou"
                            href="https://www.ivi.ru/movies"
                        >
                            {title.all}
                        </a>
                    </div>
                    <div className="mobileNavigation__columnWrapper">
                        <div className="mobileNavigation__firstColumn">
                            <div className="dropdownLinksList">
                                <div className="dropdownLinksList__title">{firstColumnData.title}</div>
                                <div className="dropdownLinksList__list">
                                    {firstColumnData.items.map(item => (
                                        <div key={item.id} className="dropdownLinksList__item">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
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
                        <div className="mobileNavigation__secondColumn">
                            <div className="mobileNavigation__secondColumn_wrapper">
                                {secondColumnData.map(section => (
                                    <div key={section.title} className="dropdownLinksList">
                                        <div className="dropdownLinksList__title">{section.title}</div>
                                        <div className="dropdownLinksList__list">
                                            {section.items.map(item => (
                                                <div key={item.id} className="dropdownLinksList__item">
                                                    <a
                                                        className="nbl-link nbl-link_style_wovou"
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
                            <div className="dropdownLinksList widget">
                                <div className="dropdownLinksList__list">
                                    {widgetData.map(item => (
                                        <div key={item.id} className="dropdownLinksList__item">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
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
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default MobileMovies