import React from 'react'

const MovieMainSection: React.FC = () => {
    return (
        <section className="pageSection pageSection_mGap contentCard__pageSection contentCard__pageSection_mGap">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="contentCard__mainContent">
                        <div className="contentCard__container">
                            <div className="contentCard__player">
                                <div className="watchTitle contentCard__watchTitle">
                                    <div className="watchTitle__title font-1160-42-44 font-600-46-46 font-320-32-36">
                                        Дублинские убийства (Сериал 2019)
                                    </div>
                                </div>
                                <div className="watchParams contentCard__watchParams">
                                    <ul className="watchParams__paramsList">
                                        <div className="watchParams__item">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
                                                href="https://www.ivi.ru/series/2019"
                                            >
                                                2019
                                            </a>
                                        </div>
                                        <div className="watchParams__item">
                                            <a className="nbl-link nbl-link_style_wovou nbl-link nbl-link_noLink">1 сезон</a>
                                        </div>
                                        <div className="watchParams__item">
                                            <a className="nbl-link nbl-link_style_wovou nbl-link nbl-link_noLink">18+</a>
                                        </div>
                                    </ul>
                                    <ul className="watchParams__paramsList">
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
                                                href="https://www.ivi.ru/series/ie"
                                            >
                                                Ирландия
                                            </a>
                                        </div>
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
                                                href="https://www.ivi.ru/series/detective"
                                            >
                                                Детективы
                                            </a>
                                        </div>
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
                                                href="https://www.ivi.ru/series/dramy"
                                            >
                                                Драмы
                                            </a>
                                        </div>
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
                                                href="https://www.ivi.ru/series/crime"
                                            >
                                                Криминал
                                            </a>
                                        </div>
                                    </ul>
                                    <ul className="watchParams__paramsList">
                                        <div className="watchParams__item">
                                            <div className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1">
                                                <div className="nbl-textBadge__text">FullHD</div>
                                            </div>
                                        </div>
                                        <div className="watchParams__item">
                                            <div className="watchParams__iconComponent">
                                                <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
                                                <div className="watchParams__iconComponentTitle">Рус · Eng</div>
                                            </div>
                                        </div>
                                        <div className="watchParams__item">
                                            <div className="watchParams__iconComponent">
                                                <div className="nbl-icon nbl-icon_player_subtitlesRegular_16 watchParams__nbl-icon"></div>
                                                <div className="watchParams__iconComponentTitle">Рус</div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div className="playerBlock contentCard__playerBlock">
                                    <div className="playerBlock__areaWrapper">
                                        <div className="playerBlock__area">
                                            <div className="playerBlock__wrapper">
                                                <div className="playerBlock__inner">
                                                    <div className="playerBlock__video">
                                                        <div className="stub playerBlock__stub"></div>
                                                        <video
                                                            className="playerBlock__trailer"
                                                            playsInline={false}
                                                            src="https://region.dfs.ivi.ru/mp4-hd720/DnsImrN6tb46WNCb0gXMxw,1682006616/storage2/contents/4/5/dd27652199bb6ac1494deba8cf0bd6.mp4"
                                                            style={{ display: 'block' }}
                                                        ></video>
                                                        <div
                                                            className="playerBlock__videoIframeWrapper js-player-wrapper"
                                                            style={{ display: 'none' }}
                                                        >
                                                            <div className="playerBlock__videoIframeWrapper" id="js-content-player-439608"></div>
                                                        </div>
                                                        <img
                                                            className="playerBlock__previewImg"
                                                            src="https://thumbs.dfs.ivi.ru/storage9/contents/8/f/5e5174201660cd6b405d2af22980e7.jpg/858x483/?q=85"
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>
                                                    <div className="playerBlock__overlay">
                                                        <div className="playerBlock__actionWrapper">
                                                            <div className="details__actionsInner" data-nosnippet="true">
                                                                <div
                                                                    className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_motaro nbl-button_hasBadge_0 playerBlock__nbl-button playerBlock__nbl-button_playerMainAction"
                                                                    data-test="buy_subscription"
                                                                >
                                                                    <div className="nbl-button__primaryText">Смотреть</div>
                                                                    <span className="nbl-button__secondaryText">по подписке Иви</span>
                                                                </div>
                                                                <div
                                                                    className="playerBlock__note"
                                                                    data-test="player_note"
                                                                    style={{ color: 'rgb(255, 255, 255)' }}
                                                                >
                                                                    Первые 30 дней подписки за 1 ₽
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="playerBlock__trailerLink" data-nosnippet="true">
                                                            Развернуть трейлер
                                                        </span>
                                                        <div className="nbl-ageBadge nbl-ageBadge nbl-ageBadge_value_18 playerBlock__nbl-ageBadge"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contentCard__userActions">
                                    <div className="userButtons userButtons_wide contentCard__userButtons">
                                        <div className="userButtons__hoard">
                                            <div className="userButtons__item userButtons__item_wide userButtons__item_play">
                                                <button className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button">
                                                    <div className="nbl-button__primaryText">
                                                        <div className="nbl-icon nbl-icon_playOutline_20 nbl-button__nbl-icon"></div>
                                                        Трейлер
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="userButtons__item userButtons__item_wide userButtons__item_favorite">
                                                <button
                                                    className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button"
                                                    data-test="favorite_button"
                                                >
                                                    <div className="nbl-button__primaryText">
                                                        <div className="nbl-icon nbl-icon_favoriteAdd_20 nbl-button__nbl-icon"></div>
                                                        Смотреть позже
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="userButtons__item userButtons__item_wide userButtons__item_share">
                                                <button
                                                    className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button"
                                                    data-test="share_button"
                                                >
                                                    <div className="nbl-button__primaryText">
                                                        <div className="nbl-icon nbl-icon_share_20 nbl-button__nbl-icon"></div>
                                                        Поделиться
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="userButtons__item userButtons__item_wide userButtons__item_freeCollection">
                                                <a
                                                    className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button"
                                                    data-test="free_collection_button"
                                                    href="/collections/free-series-ivi">
                                                    <div className="nbl-button__primaryText">
                                                        <div className="nbl-icon nbl-icon_catalog_16 nbl-button__nbl-icon"></div>
                                                        Бесплатные сериалы
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userButtons userButtons_narrow contentCard__userButtons">
                                        <div className="userButtons__hoard">
                                            <div className="userButtons__item userButtons__item_narrow userButtons__item_play">
                                                <div className="nbl-simpleControlButton nbl-simpleControlButton_size_shrub nbl-simpleControlButton_style_ned userButtons__nbl-simpleControlButton">
                                                    <div className="nbl-simpleControlButton__content">
                                                        <div className="nbl-icon nbl-icon_playOutline_20 nbl-simpleControlButton__nbl-icon"></div>
                                                        <div className="nbl-simpleControlButton__caption">Трейлер</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userButtons__item userButtons__item_narrow userButtons__item_favorite">
                                                <div className="nbl-simpleControlButton nbl-simpleControlButton_size_shrub nbl-simpleControlButton_style_ned userButtons__nbl-simpleControlButton">
                                                    <div className="nbl-simpleControlButton__content">
                                                        <div className="nbl-icon nbl-icon_favoriteAdd_20 nbl-simpleControlButton__nbl-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userButtons__item userButtons__item_narrow userButtons__item_share">
                                                <div className="nbl-simpleControlButton nbl-simpleControlButton_size_shrub nbl-simpleControlButton_style_ned userButtons__nbl-simpleControlButton">
                                                    <div className="nbl-simpleControlButton__content">
                                                        <div className="nbl-icon nbl-icon_share_20 nbl-simpleControlButton__nbl-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userButtons__item userButtons__item_narrow userButtons__item_freeCollection">
                                                <div className="nbl-simpleControlButton nbl-simpleControlButton_size_shrub nbl-simpleControlButton_style_ned userButtons__nbl-simpleControlButton">
                                                    <div className="nbl-simpleControlButton__content">
                                                        <div className="nbl-icon nbl-icon_catalog_16 nbl-simpleControlButton__nbl-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contentCard__info">
                                <div className="watchTitle contentCard__watchTitle">
                                    <h1
                                        className="watchTitle__title font-1160-42-44 font-600-46-46 font-320-32-36"
                                    >
                                        Дублинские убийства (Сериал 2019)
                                    </h1>
                                </div>
                                <div className="watchParams contentCard__watchParams">
                                    <ul className="watchParams__paramsList">
                                        <div className="watchParams__item">
                                            <a
                                                className="nbl-link nbl-link_style_wovou"
                                                href="https://www.ivi.ru/series/2019"
                                            >
                                                2019
                                            </a>
                                        </div>
                                        <div className="watchParams__item">
                                            <a
                                                className="nbl-link nbl-link_style_wovou nbl-link nbl-link_noLink"
                                            >
                                                1 сезон
                                            </a>
                                        </div>
                                        <div className="watchParams__item">
                                            <a className="nbl-link nbl-link_style_wovou nbl-link nbl-link_noLink">18+</a>
                                        </div>
                                    </ul>
                                    <ul className="watchParams__paramsList">
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a className="nbl-link nbl-link_style_wovou" href="https://www.ivi.ru/series/ie">Ирландия</a>
                                        </div>
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a className="nbl-link nbl-link_style_wovou" href="https://www.ivi.ru/series/detective">Детективы</a>
                                        </div>
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a className="nbl-link nbl-link_style_wovou" href="https://www.ivi.ru/series/dramy">Драмы</a>
                                        </div>
                                        <div className="watchParams__item watchParams__item_hasDot">
                                            <a className="nbl-link nbl-link_style_wovou" href="https://www.ivi.ru/series/crime">Криминал</a>
                                        </div>
                                    </ul>
                                    <ul className="watchParams__paramsList">
                                        <div className="watchParams__item">
                                            <div className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1">
                                                <div className="nbl-textBadge__text">FullHD</div>
                                            </div>
                                        </div>
                                        <div className="watchParams__item">
                                            <div className="watchParams__iconComponent">
                                                <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
                                                <div className="watchParams__iconComponentTitle">Рус · Eng</div>
                                            </div>
                                        </div>
                                        <div className="watchParams__item">
                                            <div className="watchParams__iconComponent">
                                                <div className="nbl-icon nbl-icon_player_subtitlesRegular_16 watchParams__nbl-icon"></div>
                                                <div className="watchParams__iconComponentTitle">Рус</div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div className="watchMedallions contentCard__watchMedallions">
                                    <div className="watchMedallions__content">
                                        <div className="nbl-medallion nbl-medallion_rating nbl-medallion_size_cobra watchMedallions__nbl-medallion">
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-ratingPlate">
                                                    <div className="nbl-ratingPlate__value">7,7</div>
                                                </div>
                                                <div className="nbl-medallion__value">7,7</div>
                                            </div>
                                            <div className="nbl-medallion__caption">
                                                <div className="nbl-medallion__captionItem">Рейтинг</div>
                                                <div className="nbl-medallion__captionItem">Иви</div>
                                            </div>
                                        </div>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/sara-grin"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage31/contents/1/c/b7197c28ac4aff0957011c7bc2a2c8.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Сара Грин</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/killian-skott"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage4/contents/6/4/67a03bc08ac52c0bf374d963e448f8.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Киллиан Скотт</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/tom-von-lolor"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/d/caa0f4f8c4b20daa05d2e88b8cb1ce.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Том Вон-Лолор</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/mo-danford"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage23/contents/c/e/29903b7945b84a34dd3db52f228f01.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Мо Данфорд</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/sem-kili"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage28/contents/6/c/c724945ccbc86bba0b9dd9bfeb964f.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Сэм Кили</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/antonio-aakil"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage28/contents/5/e/da38ff9a3f5f20b2782fa4f5d19b54.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Антонио Аакил</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/charli-kelli"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage33/contents/2/8/7cc18e49c4203b261e73b83c79269d.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Чарли Келли</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/aleksandra-moen"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage3/contents/2/a/ea8924924b7b3fa5a9f10b750e703f.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Александра Моэн</div>
                                        </a>
                                        <a
                                            className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                                            href="/person/lea-maknamara"
                                        >
                                            <div className="nbl-medallion__content">
                                                <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                    <div className="nbl-avatar__body">
                                                        <img
                                                            alt=""
                                                            className="nbl-avatar__image"
                                                            src="https://thumbs.dfs.ivi.ru/storage28/contents/e/1/0a5f01a129987af503b81941334a46.jpg/44x44/?q=85"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nbl-medallion__caption">Леа Макнамара</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="contentCard__freeCollectionsButton">
                                    <div className="userButtons__item userButtons__item_wide userButtons__item_freeCollection">
                                        <a
                                            className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button"
                                            data-test="free_collection_button"
                                            href="/collections/free-series-ivi"
                                        >
                                            <div className="nbl-button__primaryText">
                                                <div className="nbl-icon nbl-icon_catalog_16 nbl-button__nbl-icon"></div>
                                                Бесплатные сериалы
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="watchDescription contentCard__watchDescription isCompilation">
                                    <div className="clause clause_is-native watchDescription__clause">
                                        <div className="clause__text is-truncated">
                                            <div
                                                className="clause__text-inner hidden-children"
                                                data-test="details_text"
                                            >
                                                <p>
                                                    Полицейские Кэсси Мэддокс и Роб Райли расследуют убийство ребёнка, чьё
                                                    тело
                                                    нашли в лесу в пригороде Дублина. Детективы связывают страшное
                                                    происшествие
                                                    с загадочным исчезновением троих детей больше двадцати лет назад.
                                                </p>
                                                <p>
                                                    Когда в густом лесу на окраине Дублина находят тело убитой
                                                    девочки-подростка, дело поручают детективам Райли и Мэддокс.
                                                    Напарники
                                                    пытаются сделать всё, что от них зависит, чтобы раскрыть это мрачное
                                                    преступление, но тайны их прошлого встают на пути расследования.
                                                    Много
                                                    лет назад Райли, будучи ребёнком, пережил травмирующий опыт, из-за
                                                    которого родители надолго отправили его заграницу. Мэддокс
                                                    столкнулась в
                                                    детстве с большой трагедией, последствия которой преследуют её до
                                                    сих
                                                    пор. Смогут ли детективы победить своих внутренних демонов, чтобы
                                                    найти
                                                    убийцу, или их личные переживания помешают им увидеть правду? </p>
                                                <p>Чтобы узнать, как завершится расследование, смотри онлайн на Иви
                                                    сериал
                                                    «Дублинские убийства», основанный на романах писательницы Таны
                                                    Френч. </p>
                                                <p>Приглашаем посмотреть сериал «Дублинские убийства» в нашем
                                                    онлайн-кинотеатре совершенно бесплатно в хорошем HD качестве.
                                                    Приятного
                                                    просмотра!</p>
                                            </div>
                                            <div className="clause__bottomComponent">
                                                <div className="watchOptions watchDescription__watchOptions isCompilation">
                                                    <div className="watchOptions__container">
                                                        <div className="watchOptions__options" data-test="languages_info_block">
                                                            <div className="watchOptions__title">Языки</div>
                                                            <div className="watchOptions__values">Русский, Английский</div>
                                                        </div>
                                                        <div className="watchOptions__options" data-test="subtitles_info_block">
                                                            <div className="watchOptions__title">Субтитры</div>
                                                            <div className="watchOptions__values">Русский</div>
                                                        </div>
                                                        <div className="watchOptions__options watchOptions__options_qualities" data-test="quality_info_block">
                                                            <div className="watchOptions__title watchOptions__title_narrow">
                                                                Качество
                                                            </div>
                                                            <div className="watchOptions__title watchOptions__title_wide">
                                                                Изображение и звук.<span> Фактическое качество зависит от устройства и ограничений правообладателя.</span>
                                                            </div>
                                                            <div className="watchOptions__iconsList">
                                                                <div className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                                                                    <div className="nbl-textBadge__text">FullHD</div>
                                                                </div>
                                                                <div className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                                                                    <div className="nbl-textBadge__text">HD</div>
                                                                </div>
                                                                <div className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                                                                    <div className="nbl-textBadge__text">1080</div>
                                                                </div>
                                                                <div className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1 watchOptions__nbl-textBadge">
                                                                    <div className="nbl-textBadge__text">720</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="clause__toggle">
                                                <a className="nbl-link nbl-link_style_reska">Детали о сериале</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ratingMobile contentCard__ratingMobile">
                                    <div className="ratingMobile__container">
                                        <div className="ratingMobile__nbl-ratingPlate nbl-ratingPlate nbl-ratingPlate_style_xadus nbl-ratingPlate_size_wyrms">
                                            <div className="nbl-ratingPlate__value">7,7</div>
                                        </div>
                                        <div className="ratingMobile__textBlock">
                                            <div className="ratingMobile__title">Рейтинг Иви</div>
                                            <div className="ratingMobile__subtitle">Интересный сюжет</div>
                                            <div className="ratingMobile__extra">8 355 оценок</div>
                                        </div>
                                        <button
                                            className="nbl-button nbl-button_style_ran nbl-button_size_sindel nbl-button_hasBadge_0 ratingMobile__nbl-button"
                                            data-test="rate_button"
                                        >
                                            <div className="nbl-button__primaryText">Оценить</div>
                                        </button>
                                    </div>
                                </div>
                                <div className="userButtons userButtons_wide contentCard__userButtons">
                                    <div className="userButtons__hoard">
                                        <div className="userButtons__item userButtons__item_wide userButtons__item_play">
                                            <button className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button">
                                                <div className="nbl-button__primaryText">
                                                    <div className="nbl-icon nbl-icon_playOutline_20 nbl-button__nbl-icon"></div>
                                                    Трейлер
                                                </div>
                                            </button>
                                        </div>
                                        <div className="userButtons__item userButtons__item_wide userButtons__item_favorite">
                                            <button
                                                className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button"
                                                data-test="favorite_button"
                                            >
                                                <div className="nbl-button__primaryText">
                                                    <div className="nbl-icon nbl-icon_favoriteAdd_20 nbl-button__nbl-icon"></div>
                                                    Смотреть позже
                                                </div>
                                            </button>
                                        </div>
                                        <div className="userButtons__item userButtons__item_wide userButtons__item_share">
                                            <button
                                                className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button"
                                                data-test="share_button"
                                            >
                                                <div className="nbl-button__primaryText">
                                                    <div className="nbl-icon nbl-icon_share_20 nbl-button__nbl-icon"></div>
                                                    Поделиться
                                                </div>
                                            </button>
                                        </div>
                                        <div className="userButtons__item userButtons__item_wide userButtons__item_freeCollection">
                                            <a
                                                className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_dafu nbl-button_size_drahmin nbl-button_hasBadge_0 userButtons__nbl-button"
                                                data-test="free_collection_button"
                                                href="/collections/free-series-ivi"
                                            >
                                                <div className="nbl-button__primaryText">
                                                    <div className="nbl-icon nbl-icon_catalog_16 nbl-button__nbl-icon"></div>
                                                    Бесплатные сериалы
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieMainSection