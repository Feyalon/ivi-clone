import React from 'react'
import {Link} from "react-router-dom";

const Profile: React.FC = () => {
    const cards: { id: number, icon: string, title: string, desc: string, bulb: boolean }[] = [
        { id: 1, icon: 'nbl-icon_multiseries_20', title: 'Покупки', desc: '', bulb: false },
        { id: 2, icon: 'nbl-icon_favoriteAdd_20', title: 'Смотреть позже', desc: '', bulb: false },
        { id: 3, icon: 'nbl-icon_history_20', title: 'История просмотров', desc: '', bulb: false },
        { id: 4, icon: 'nbl-icon_quality_20', title: 'Подписки', desc: 'Подключить', bulb: true },
        { id: 5, icon: 'nbl-icon_certificate_20', title: 'Активация сертификата', desc: '', bulb: false },
        { id: 6, icon: 'nbl-icon_tvchannels_20', title: 'Вход по коду', desc: '', bulb: false },
        { id: 7, icon: 'nbl-icon_card_20', title: 'Способы оплаты', desc: '', bulb: false },
        { id: 8, icon: 'nbl-icon_androidShare_20', title: 'Пригласить друзей', desc: '', bulb: false },
    ]
    return (
        <div className="headerDropdown profile">
            <div className="headerDropdown__body">
                <div className="headerDropdown__grid">
                    <div className="dropdownProfile">
                        <div className="dropdownProfile__mainContent">
                            {cards.map(card => (
                                <a
                                    key={card.id}
                                    className="dropdownProfile__tileItem"
                                    href="https://www.ivi.ru/profile/subscriptions"
                                >
                                    <div className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
                                        <div className={`nbl-icon ${card.icon} nbl-paymentTile__nbl-icon`}></div>
                                        {card.bulb && <div className="nbl-bulb nbl-bulb_style_dwafa nbl-bulb_size_mukos nbl-bulb_isShadowEnabled_1 nbl-paymentTile__nbl-bulb"></div>}
                                        <div className="nbl-paymentTile__textBlock">
                                            <div className="nbl-paymentTile__title">{card.title}</div>
                                            {card.desc && <div className="nbl-paymentTile__extra">{card.desc}</div>}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="dropdownProfile__sideContent">
                            <div className="dropdownProfile__sideContentInner">
                                <div className="dropdownProfile__authSection">
                                    <Link to={'auth'} className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_shinnok nbl-button_hasBadge_0">
                                        <div className="nbl-button__primaryText">
                                            Войти или зарегистрироваться
                                        </div>
                                    </Link>
                                    <div className="dropdownProfile__dropdownLinksList dropdownLinksList">
                                        <div className="dropdownLinksList__list">
                                            <div className="dropdownLinksList__item">
                                                <a
                                                    className="nbl-link nbl-link_style_reska"
                                                    href="https://www.ivi.ru/profile/settings"
                                                >
                                                    Настройки
                                                </a>
                                            </div>
                                            <div className="dropdownLinksList__item">
                                                <a
                                                    className="nbl-link nbl-link_style_reska"
                                                    href="https://ask.ivi.ru/"
                                                    target="_blank"
                                                >
                                                    Помощь
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile