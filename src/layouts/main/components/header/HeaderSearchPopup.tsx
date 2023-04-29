import React from 'react'

import { HeaderSearchContext } from './index'

const HeaderSearchPopup = () => {
    return (
        <div id="search-root">
            <div className="fullscreen-popup fullscreen-popup_active fullscreen-popup fullscreen-popup_has-close-view-button">
                <div className="fullscreen-popup__overlay"></div>
                <div className="fullscreen-popup__scroll-wrapper">
                    <div className="fullscreen-popup__wrapper">
                        <HeaderSearchContext.Consumer>
                            {({ toggleSearch }) => (
                                <button
                                    className="fullscreen-popup__close-view-button"
                                    title="Нажмите, чтобы закрыть форму"
                                    onClick={toggleSearch}
                                >
                                    Закрыть окно
                                </button>
                            )}
                        </HeaderSearchContext.Consumer>
                        <div className="search">
                            <section className="searchInput">
                                <div className="searchInput__container">
                                    <div className="searchInput__container-inner">
                                        <h1 className="searchInput__title">Поиск</h1>
                                        <form autoComplete="off" className="searchInput__form">
                                            <div className="nbl-input nbl-input_style_xenon nbl-input_type_pascal nbl-input_iconType_button">
                                                <div className="nbl-input__body">
                                                    <input
                                                        className="nbl-input__editbox"
                                                        data-focus="true"
                                                        type="text"
                                                        value=""
                                                        readOnly={true}
                                                    />
                                                    <div className="nbl-input__button nbl-input__button_disabled">
                                                        <div className="nbl-icon nbl-icon_search_20 nbl-input__nbl-icon"></div>
                                                    </div>
                                                    <div className="nbl-input__overlays">
                                                        <div className="nbl-input__placeholder">Фильмы, персоны, жанры</div>
                                                        <div className="nbl-input__stripe"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section className="searchBlock searchBlock_presets">
                                <div className="searchBlock__container">
                                    <div className="searchBlock__container-inner">
                                        <div className="searchBlock__content">
                                            <div className="presets">
                                                <div className="preset">
                                                    <div className="preset__inner" data-focus="true">
                                                        <a className="nbl-link nbl-link_style_chaf">Премьеры фильмов</a>
                                                    </div>
                                                </div>
                                                <div className="preset">
                                                    <div className="preset__inner" data-focus="true">
                                                        <a className="nbl-link nbl-link_style_chaf">Новинки подписки</a>
                                                    </div>
                                                </div>
                                                <div className="preset">
                                                    <div className="preset__inner" data-focus="true">
                                                        <a className="nbl-link nbl-link_style_chaf">Сериалы Amediateka</a>
                                                    </div>
                                                </div>
                                                <div className="preset">
                                                    <div className="preset__inner" data-focus="true">
                                                        <a className="nbl-link nbl-link_style_chaf">Высокий рейтинг</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearchPopup