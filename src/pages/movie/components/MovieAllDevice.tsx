import React from 'react'

const MovieAllDevice: React.FC = () => {
    return (
        <section className="pageSection contentCard__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="watchAllDevices contentCard__watchAllDevices">
                        <div className="watchAllDevices__wrapper">
                            <div className="watchAllDevices__appeal">
                                <h2 className="watchAllDevices__title">
                                    Cмотреть «Дублинские убийства» на всех устройствах
                                </h2>
                                <p className="watchAllDevices__subtitle">
                                    Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
                                </p>
                                <a
                                    className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_withIcon nbl-button_style_kioshi nbl-button_size_shinnok nbl-button_hasBadge_0 watchAllDevices__nbl-button"
                                    rel="nofollow"
                                >
                                    <div className="nbl-button__primaryText">Подключить устройства</div>
                                </a>
                            </div>
                            <div className="watchAllDevices__devices">
                                <div className="watchAllDevices__image-container">
                                    <img
                                        alt="Устройства для просмотра Иви"
                                        className="watchAllDevices__image-tv"
                                        src="https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png"
                                    />
                                    <img
                                        alt="Устройства для просмотра Иви"
                                        className="watchAllDevices__image-tablet"
                                        src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png"
                                    />
                                    <img
                                        alt="Постер Дублинские убийства"
                                        className="watchAllDevices__poster-image watchAllDevices__poster-image_tv"
                                        src="https://thumbs.dfs.ivi.ru/storage38/contents/7/2/1cfb79e2f02c25ac3eb3df25778957.jpg/400x226/"
                                    />
                                    <img
                                        alt="Постер Дублинские убийства"
                                        className="watchAllDevices__poster-image watchAllDevices__poster-image_tablet"
                                        src="https://thumbs.dfs.ivi.ru/storage38/contents/7/2/1cfb79e2f02c25ac3eb3df25778957.jpg/400x226/"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieAllDevice