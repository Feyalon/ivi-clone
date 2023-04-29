import React from 'react'

import { MobileHeaderItems, MobileMovies, MobileSubscription, MobileTVPlus, NavigationItem } from './index'
import {
    animationMenuItemsDoubleColumn,
    animationMenuItemsSideContent,
    animationMenuItemsSingleColumn,

    moviesMenuItemsDoubleColumn,
    moviesMenuItemsSideContent,
    moviesMenuItemsSingleColumn,

    seriesMenuItemsDoubleColumn,
    seriesMenuItemsSideContent,
    seriesMenuItemsSingleColumn,

    tvplusMenuItems,
    btnsCommunity,
    footerMenuAbout
} from '../../../../data/dataMenus'
import { ButtonCommunityLink } from '../../../../components'

const MobileNavigation = () => {
    return (
        <div className="drawer drawer_isOpen isAbTest">
            <div className="drawer__inner isAbTest">
                <div className="mobileNavigation isAbTest">
                    <div className="mobileNavigation__lists__container">
                        <MobileSubscription />
                        <div className="mobileNavigation-group">
                            <MobileHeaderItems />
                            <MobileMovies
                                title={{ main: 'Фильмы', all: 'Все фильмы' }}
                                firstColumnData={moviesMenuItemsDoubleColumn}
                                secondColumnData={moviesMenuItemsSingleColumn}
                                widgetData={moviesMenuItemsSideContent}
                            />
                            <MobileMovies
                                title={{ main: 'Сериалы', all: 'Все сериалы' }}
                                firstColumnData={seriesMenuItemsDoubleColumn}
                                secondColumnData={seriesMenuItemsSingleColumn}
                                widgetData={seriesMenuItemsSideContent}
                            />
                            <MobileMovies
                                title={{ main: 'Мультфильмы', all: 'Все мультфильмы' }}
                                firstColumnData={animationMenuItemsDoubleColumn}
                                secondColumnData={animationMenuItemsSingleColumn}
                                widgetData={animationMenuItemsSideContent}
                            />
                            <MobileTVPlus title={'TV+'} items={tvplusMenuItems} />
                            <div className="mobileNavigation__item">
                                <a
                                    className="nbl-arrowButton nbl-arrowButton_variation_zozon nbl-arrowButton_expanded"
                                    href="https://www.ivi.ru/goodmovies"
                                >
                                    <div className="nbl-arrowButton__caption">Что посмотреть</div>
                                </a>
                            </div>
                        </div>
                        <div className="mobileNavigation-group">
                            <div className="mobileNavigation__item">
                                <ul className="mobileNavigation__linkSection">
                                    <li className="mobileNavigation__linkSectionItem">
                                        <a
                                            className="nbl-link nbl-link_style_baf"
                                            href="https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready"
                                        >
                                            Иви.Рейтинг фильмы
                                        </a>
                                    </li>
                                    <li className="mobileNavigation__linkSectionItem">
                                        <a
                                            className="nbl-link nbl-link_style_baf"
                                            href="https://www.ivi.ru/series/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready"
                                        >
                                            Иви.Рейтинг сериалы
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobileNavigation-group">
                            <NavigationItem data={footerMenuAbout} />
                            <div className="mobileNavigation__item">
                                <ul className="mobileNavigation__linkSection">
                                    <li className="mobileNavigation__linkSectionItem">
                                        <a
                                            className="nbl-arrowButton nbl-arrowButton_variation_zozon nbl-arrowButton_expanded"
                                            href="https://www.ivi.ru/code"
                                        >
                                            <div className="nbl-icon nbl-icon_tvchannels_20 nbl-icon_customExtraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_customExtraIcon"></div>
                                            <div className="nbl-arrowButton__caption">Вход по коду</div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="mobileNavigation__stores">
                                    <div className="mobileNavigation__storesItem"><a
                                        className="storeButton storeButton_view_dark"
                                        href="https://go.onelink.me/app/devicesAndroid"><span
                                        className="storeButton__googlePlayIcon"></span>
                                        <div className="storeButton__buttonText"><span
                                            className="storeButton__buttonPrimaryText">Доступно в</span><span
                                            className="storeButton__buttonSecondaryText">Google Play</span></div>
                                    </a></div>
                                    <div className="mobileNavigation__storesItem"><a
                                        className="storeButton storeButton_view_dark"
                                        href="https://www.ivi.ru/pages/tvsmart"><span
                                        className="storeButton__smartTvIcon"></span>
                                        <div className="storeButton__buttonText"><span
                                            className="storeButton__buttonPrimaryText">Смотрите на</span><span
                                            className="storeButton__buttonSecondaryText">Smart TV</span></div>
                                    </a></div>
                                    <div className="mobileNavigation__storesItem"><a
                                        className="storeButton storeButton_view_dark"
                                        href="https://www.ivi.ru/devices"><span
                                        className="storeButton__allDevicesIcon"></span>
                                        <div className="storeButton__buttonText"><span
                                            className="storeButton__buttonSecondaryText">Все устройства</span>
                                        </div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="mobileNavigation-group">
                            <div className="mobileNavigation__item support">
                                <div
                                    className="nbl-arrowButton nbl-arrowButton_variation_zozon nbl-arrowButton_collapsed">
                                    <div
                                        className="nbl-icon nbl-icon_message_20 nbl-icon_customExtraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_customExtraIcon"></div>
                                    <div className="nbl-arrowButton__caption">Служба поддержки</div>
                                    <div
                                        className="nbl-icon nbl-icon_arrowIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_arrowIcon"></div>
                                </div>
                                <div className="mobileNavigation__dropdown">
                                    <div className="mobileNavigation__paragraph">
                                        <span>Мы всегда готовы вам помочь.</span><span>Наши операторы онлайн 24/7</span>
                                    </div>
                                    <div className="mobileNavigation__support">
                                        <div className="mobileNavigation__supportGrid">
                                            <div className="mobileNavigation__supportGridItem"><a
                                                className="nbl-button nbl-button_textAlign_center nbl-button_style_makoto nbl-button_size_shinnok nbl-button_hasBadge_0 chatButton"
                                                href="https://www.ivi.ru/profile"
                                                target="_blank">
                                                <div className="nbl-button__primaryText">Написать в чате</div>
                                            </a></div>
                                            <div className="mobileNavigation__supportGridItem">
                                                <div className="mobileNavigation__supportButtons"><a
                                                    className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_onlyIcon nbl-button_style_makoto nbl-button_size_shinnok nbl-button_hasBadge_0"
                                                    href="mailto:support@ivi.ru">
                                                    <div
                                                        className="nbl-icon nbl-icon_email_16 nbl-button__nbl-icon"></div>
                                                </a>
                                                    <button
                                                        className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_onlyIcon nbl-button_style_makoto nbl-button_size_shinnok nbl-button_hasBadge_0"
                                                        id="supportPhonesButton">
                                                        <div
                                                            className="nbl-icon nbl-icon_call_16 nbl-button__nbl-icon"></div>
                                                    </button>
                                                </div>
                                                <div className="mobileNavigation__supportPhones "
                                                     id="supportPhonesList"><a
                                                    className="mobileNavigation__phoneItem" href="tel:+78612176920"
                                                    rel="nofollow">
                                                    <div className="mobileNavigation__phoneNumber">+7 861 217-69-20
                                                    </div>
                                                    <div className="mobileNavigation__description"></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <ul className="mobileNavigation__questions">
                                            <li><a className="nbl-link nbl-link_style_baf" href="https://ask.ivi.ru/"
                                                   id="bottom_support_link" target="_blank">ask.ivi.ru</a>
                                                <p className="mobileNavigation__description">Ответы на вопросы</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobileNavigation__footer">
                        <div className="mobileNavigation__community">
                            {btnsCommunity.map(btn =>
                                <ButtonCommunityLink
                                    key={btn.link}
                                    link={btn.link}
                                    icon={btn.icon}
                                />
                            )}
                        </div>
                        <div className="mobileNavigation__copyrights">
                            <p className="mobileNavigation__paragraph">
                                © 2023 ООО «Иви.ру»
                            </p>
                            <p className="mobileNavigation__paragraph">
                                HBO ® and related service marks are the property of Home Box Office, Inc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigation