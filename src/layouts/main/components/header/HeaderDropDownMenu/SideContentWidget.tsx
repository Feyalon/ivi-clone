import React, { CSSProperties } from 'react'

type TProps = {
    data: { id: number, path: string}[][]
}

interface MyCustomCSS extends CSSProperties {
    '--posters-count': number
}

const SideContentWidget: React.FC<TProps> = ({ data }) => {
    return (
        <div className="dropdownContent__sideContentWidget dropdownContent__sideContentWidget">
            <div className="nbl-subscriptionTeaser nbl-subscriptionTeaser_hasAnimation nbl-subscriptionTeaser_isShownElements">
                <div className="nbl-subscriptionTeaser__posterBlock">
                    <div
                        className="nbl-subscriptionTeaser__posterBlockWrapper"
                        style={{'--posters-count': 10} as MyCustomCSS}
                    >
                        {data && data.map(line => (
                            <div key={line[0].id} className="nbl-subscriptionTeaser__posterLane">
                                {line.map(poster => (
                                    <a
                                        key={poster.id}
                                        className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
                                        href="/watch/506055"
                                    >
                                        <div className="nbl-poster__imageWrapper">
                                            <img className="nbl-poster__image" data-stub="false" src={poster.path} alt={'poster'} />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="nbl-subscriptionTeaser__leftFade"></div>
                <div className="nbl-subscriptionTeaser__rightFade"></div>
                <div className="nbl-subscriptionTeaser__bottomPanel">
                    <div className="nbl-subscriptionTeaser__bottomFade"></div>
                    <div className="nbl-subscriptionTeaser__detailsBlock">
                        <div className="nbl-subscriptionBadge nbl-subscriptionBadge_size_azom nbl-subscriptionBadge_brand_ivi nbl-subscriptionBadge_style_linus nbl-subscriptionTeaser__nbl-subscriptionBadge">
                            <div className="nbl-subscriptionBadge__logo"></div>
                        </div>
                        <div className="nbl-subscriptionTeaser__detailsTextBlock">
                            <div className="nbl-subscriptionTeaser__detailsTitle">
                                Подписка Иви
                            </div>
                            <div className="nbl-subscriptionTeaser__detailsExtra">
                                От 199&nbsp;₽ за месяц
                            </div>
                        </div>
                    </div>
                    <div className="nbl-subscriptionTeaser__buttonWrapper">
                        <button className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_cyrax nbl-button_hasBadge_0 nbl-subscriptionTeaser__nbl-button">
                            <div className="nbl-button__primaryText">
                                Подключить
                            </div>
                        </button>
                    </div>
                    <div className="nbl-subscriptionTeaser__note">
                        Отключить можно в любой момент
                    </div>
                </div>
            </div>
            <a className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_withIcon nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
               href="https://www.ivi.ru/pages/tvsmart/">
                <div className="nbl-button__primaryText">
                    <div className="nbl-icon nbl-icon_smartTvPromo_16 nbl-button__nbl-icon"></div>
                    Смотреть на SmartTV
                </div>
            </a>
        </div>
    )
}

export default SideContentWidget