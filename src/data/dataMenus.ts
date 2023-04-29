import { IUIMenu, IUIMenuMain, IUIMenuTVPlus } from '../models/uiMenu'

export const mainMenuItems: IUIMenuMain [] = [
    { id: 1, title: 'Мой Иви', addClass: '', link: 'https://www.ivi.ru/' },
    { id: 2, title: 'Что нового', addClass: '', link: 'https://www.ivi.ru/new' },
    { id: 3, title: 'Фильмы', addClass: 'headerTop_movies_menu_item', link: 'https://www.ivi.ru/movies' },
    { id: 4, title: 'Сериалы', addClass: 'headerTop_series_menu_item', link: 'https://www.ivi.ru/series' },
    { id: 5, title: 'Мультфильмы', addClass: 'headerTop_animation_menu_item', link: 'https://www.ivi.ru/animation' },
    { id: 6, title: 'TV+', addClass: 'headerTop_tvplus_menu_item', link: 'https://www.ivi.ru/tvplus' },
]

export const moviesMenuItemsDoubleColumn: { title: string, items: IUIMenu[] } = {
    title: 'Жанры',
    items: [
        { id: 1, title: 'Артхаус', link: '#' },
        { id: 2, title: 'Боевики', link: '#' },
        { id: 3, title: 'Вестерн', link: '#' },
        { id: 4, title: 'Военные', link: '#' },
        { id: 5, title: 'Детективы', link: '#' },
        { id: 6, title: 'Для всей семьи', link: '#' },
        { id: 7, title: 'Для детей', link: '#' },
        { id: 8, title: 'Документальные', link: '#' },
        { id: 9, title: 'Драмы', link: '#' },
        { id: 10, title: 'Исторические', link: '#' },
        { id: 11, title: 'Катастрофы', link: '#' },
        { id: 12, title: 'Комедии', link: '#' },
        { id: 13, title: 'Криминальные', link: '#' },
        { id: 14, title: 'Мелодрамы', link: '#' },
        { id: 15, title: 'Мистические', link: '#' },
        { id: 16, title: 'По комиксам', link: '#' },
        { id: 17, title: 'Приключения', link: '#' },
        { id: 18, title: 'Спорт', link: '#' },
        { id: 19, title: 'Триллеры', link: '#' },
        { id: 20, title: 'Ужасы', link: '#' },
        { id: 21, title: 'Фантастика', link: '#' },
        { id: 22, title: 'Фэнтези', link: '#' },
    ]
}

export const moviesMenuItemsSingleColumn: { title: string, items: IUIMenu[] }[] = [
    {title: 'Страны', items: [
        {id: 1, title: 'Русские', link: '#'},
        {id: 2, title: 'Зарубежные', link: '#'},
        {id: 3, title: 'Советское кино', link: '#'},
    ]},
    {title: 'Годы', items: [
        {id: 1, title: 'Фильмы 2023 года', link: '#'},
        {id: 2, title: 'Фильмы 2022 года', link: '#'},
        {id: 3, title: 'Фильмы 2021 года', link: '#'},
        {id: 4, title: 'Фильмы 2020 года', link: '#'},
    ]},
]

export const moviesMenuItemsSideContent: IUIMenu[] = [
    { id: 1, title: 'Новинки', link: '#' },
    { id: 2, title: 'Подборки', link: '#' },
    { id: 3, title: 'Иви.Рейтинг', link: '#' },
    { id: 4, title: 'Скоро на Иви', link: '#' },
    { id: 5, title: 'Трейлеры', link: '#' },
    { id: 6, title: 'Что посмотреть', link: '#' },
    { id: 7, title: 'Фильмы в HD', link: '#' },
    { id: 8, title: 'Выбор Иви', link: '#' },
    { id: 9, title: 'Новинки подписки', link: '#' },
    { id: 10, title: 'Фильмы Amediateka', link: '#' },
    { id: 11, title: 'Популярные фильмы', link: '#' },
    { id: 12, title: 'Фильмы Иви', link: '#' },
]

export const moviesMenuItemsWidgetContent: { id: number, path: string }[][] = [
    [
        { id: 1, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/e/e/f45510cadb236a7ef2ec1c4b503e3e.jpg/256x144/?q=85' },
        { id: 2, path: 'https://thumbs.dfs.ivi.ru/storage23/contents/4/9/cff474cf1021d15a0bd3ee5edb6dbf.jpg/256x144/?q=85' },
        { id: 3, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/7/f/6995ed12714c9d6be4b191494123e7.jpg/256x144/?q=85' },
        { id: 4, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/6/b/ad0776e1c421a1789d423cbb5fcc05.jpg/256x144/?q=85' },
        { id: 5, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/c/0/450a20a46a872c0be2e3f8f405b730.jpg/256x144/?q=85' },
        { id: 6, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/b/9/6f769044188519e5b50bf082b69ec7.jpg/256x144/?q=85' },
        { id: 7, path: 'https://thumbs.dfs.ivi.ru/storage38/contents/b/6/bdf3c1576cb29d0168dcc9ac261f07.jpg/256x144/?q=85' },
        { id: 8, path: 'https://thumbs.dfs.ivi.ru/storage29/contents/f/a/7b9ca2b4f8b19b78370b39394bc746.jpg/256x144/?q=85' },
        { id: 9, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/e/4/51f60917dd234d5663f2d64db3cc34.jpg/256x144/?q=85' },
        { id: 10, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/e/2/f47fbe3a6c17a1773fa472ab0e5f58.jpg/256x144/?q=85' },
        { id: 11, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/e/e/f45510cadb236a7ef2ec1c4b503e3e.jpg/256x144/?q=85' },
        { id: 12, path: 'https://thumbs.dfs.ivi.ru/storage23/contents/4/9/cff474cf1021d15a0bd3ee5edb6dbf.jpg/256x144/?q=85' },
        { id: 13, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/7/f/6995ed12714c9d6be4b191494123e7.jpg/256x144/?q=85' },

    ],
    [
        { id: 14, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 15, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 16, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
        { id: 17, path: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/d/6a49825e0acd92abc38a77b880c046.jpg/256x144/?q=85' },
        { id: 18, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/19c40f1e16b60642d64eb04296f73c.jpg/256x144/?q=85' },
        { id: 19, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/e/4a53c1b4bbb8b12081d7eb62c395bd.jpg/256x144/?q=85' },
        { id: 20, path: 'https://thumbs.dfs.ivi.ru/storage31/contents/4/6/76a9e0b320115aa54d7dc84af6ec0d.jpg/256x144/?q=85' },
        { id: 21, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/9/da03b947c85a5401a70e62249e2b51.jpg/256x144/?q=85' },
        { id: 22, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/4/b/b85fca1d2bac8f9e84fee8345530d2.jpg/256x144/?q=85' },
        { id: 23, path: 'https://thumbs.dfs.ivi.ru/storage3/contents/0/4/5a1d322912c1e1d5730ac045f4189c.jpg/256x144/?q=85' },
        { id: 24, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 25, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 26, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
    ],
    [
        { id: 27, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 28, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 29, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
        { id: 30, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/5/c/f0f2a0157c970bf5dfa4c9792f4f8d.jpg/256x144/?q=85' },
        { id: 31, path: 'https://thumbs.dfs.ivi.ru/storage38/contents/c/1/9a226d400475c4cf4d142e72fb478f.jpg/256x144/?q=85' },
        { id: 32, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/44a17b753786fca4268a0682479888.jpg/256x144/?q=85' },
        { id: 33, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/1/c563d1ac2534cda357165503fad820.jpg/256x144/?q=85' },
        { id: 34, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/8/f/a994322549791d967d55029291f89d.jpg/256x144/?q=85' },
        { id: 35, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/7/9/e82835fba14b23e57bc794a54c3f7a.jpg/256x144/?q=85' },
        { id: 36, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/c/b/fef4aab9acd803353d140bcb5f2556.jpg/256x144/?q=85' },
        { id: 37, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 38, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 39, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
    ]
]

export const seriesMenuItemsDoubleColumn: { title: string, items: IUIMenu[] } = {
    title: 'Жанры',
    items: [
        { id: 1, title: 'Биография', link: '#' },
        { id: 2, title: 'Боевики', link: '#' },
        { id: 3, title: 'Военные', link: '#' },
        { id: 4, title: 'Детективы', link: '#' },
        { id: 5, title: 'Документальные', link: '#' },
        { id: 6, title: 'Драмы', link: '#' },
        { id: 7, title: 'Исторические', link: '#' },
        { id: 8, title: 'Комедийные', link: '#' },
        { id: 9, title: 'Криминальные', link: '#' },
        { id: 10, title: 'Медицинские', link: '#' },
        { id: 11, title: 'Мелодрамы', link: '#' },
        { id: 12, title: 'Мистические', link: '#' },
        { id: 13, title: 'Приключения', link: '#' },
        { id: 14, title: 'Романтические', link: '#' },
        { id: 15, title: 'Триллеры', link: '#' },
        { id: 16, title: 'Турецкие', link: '#' },
        { id: 17, title: 'Ужасы', link: '#' },
        { id: 18, title: 'Фантастические', link: '#' },
        { id: 19, title: 'Фэнтези', link: '#' },
    ]
}

export const seriesMenuItemsSingleColumn: { title: string, items: IUIMenu[] }[] = [
    {title: 'Страны', items: [
            {id: 1, title: 'Русские', link: '#'},
            {id: 2, title: 'Зарубежные', link: '#'},
            {id: 3, title: 'Американские', link: '#'},
            {id: 4, title: 'Украинские', link: '#'},
            {id: 5, title: 'Корейские', link: '#'},
            {id: 6, title: 'Турецкие', link: '#'},
        ]},
    {title: 'Годы', items: [
            {id: 1, title: 'Сериалы 2023 года', link: '#'},
            {id: 2, title: 'Сериалы 2022 года', link: '#'},
            {id: 3, title: 'Сериалы 2021 года', link: '#'},
            {id: 4, title: 'Сериалы 2020 года', link: '#'},
        ]},
]

export const seriesMenuItemsSideContent: IUIMenu[] = [
    { id: 1, title: 'Новинки', link: '#' },
    { id: 2, title: 'Иви.Рейтинг', link: '#' },
    { id: 3, title: 'Сериалы в HD', link: '#' },
    { id: 4, title: 'Бесплатные сериалы', link: '#' },
    { id: 5, title: 'Сериалы Amediateka', link: '#' },
    { id: 6, title: 'Сериалы Paramount Play', link: '#' },
]

export const seriesMenuItemsWidgetContent: { id: number, path: string }[][] = [
    [
        { id: 14, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 15, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 16, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
        { id: 17, path: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/d/6a49825e0acd92abc38a77b880c046.jpg/256x144/?q=85' },
        { id: 18, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/19c40f1e16b60642d64eb04296f73c.jpg/256x144/?q=85' },
        { id: 19, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/e/4a53c1b4bbb8b12081d7eb62c395bd.jpg/256x144/?q=85' },
        { id: 20, path: 'https://thumbs.dfs.ivi.ru/storage31/contents/4/6/76a9e0b320115aa54d7dc84af6ec0d.jpg/256x144/?q=85' },
        { id: 21, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/9/da03b947c85a5401a70e62249e2b51.jpg/256x144/?q=85' },
        { id: 22, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/4/b/b85fca1d2bac8f9e84fee8345530d2.jpg/256x144/?q=85' },
        { id: 23, path: 'https://thumbs.dfs.ivi.ru/storage3/contents/0/4/5a1d322912c1e1d5730ac045f4189c.jpg/256x144/?q=85' },
        { id: 24, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 25, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 26, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
    ],
    [
        { id: 1, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/0/3/00ac5cb403a3940adb58f626e118a5.jpg/256x144/?q=85' },
        { id: 2, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/e/8/2b4e7b9b5772409d93378defc76952.jpg/256x144/?q=85' },
        { id: 3, path: 'https://thumbs.dfs.ivi.ru/storage28/contents/1/b/8b2349835d6cce669daf4e042ffe18.jpg/256x144/?q=85' },
        { id: 4, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/7/a/bd738c0827eaf1c3fbf8db84cd9fbc.jpg/256x144/?q=85' },
        { id: 5, path: 'https://thumbs.dfs.ivi.ru/storage38/contents/f/a/a25381d01e30e5a608e8039cdaee15.jpg/256x144/?q=85' },
        { id: 6, path: 'https://thumbs.dfs.ivi.ru/storage37/contents/2/2/698f28968cdc928d009538cfbca520.jpg/256x144/?q=85' },
        { id: 7, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/2/54e2284df9981527ed7dbb110c34c2.jpg/256x144/?q=85' },
        { id: 8, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/b/9/6e42951d4ce5d629db11c35fd8997c.jpg/256x144/?q=85' },
        { id: 9, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/f/9/458a15d9a66341a6b30102aca93937.jpg/256x144/?q=85' },
        { id: 10, path: 'https://thumbs.dfs.ivi.ru/storage8/contents/8/b/8b6b69cbd7177ac06a17a49e6baba8.jpg/256x144/?q=85' },
        { id: 11, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/0/3/00ac5cb403a3940adb58f626e118a5.jpg/256x144/?q=85' },
        { id: 12, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/e/8/2b4e7b9b5772409d93378defc76952.jpg/256x144/?q=85' },
        { id: 13, path: 'https://thumbs.dfs.ivi.ru/storage28/contents/1/b/8b2349835d6cce669daf4e042ffe18.jpg/256x144/?q=85' },

    ],
    [
        { id: 27, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 28, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 29, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
        { id: 30, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/5/c/f0f2a0157c970bf5dfa4c9792f4f8d.jpg/256x144/?q=85' },
        { id: 31, path: 'https://thumbs.dfs.ivi.ru/storage38/contents/c/1/9a226d400475c4cf4d142e72fb478f.jpg/256x144/?q=85' },
        { id: 32, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/44a17b753786fca4268a0682479888.jpg/256x144/?q=85' },
        { id: 33, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/1/c563d1ac2534cda357165503fad820.jpg/256x144/?q=85' },
        { id: 34, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/8/f/a994322549791d967d55029291f89d.jpg/256x144/?q=85' },
        { id: 35, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/7/9/e82835fba14b23e57bc794a54c3f7a.jpg/256x144/?q=85' },
        { id: 36, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/c/b/fef4aab9acd803353d140bcb5f2556.jpg/256x144/?q=85' },
        { id: 37, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 38, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 39, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
    ]
]

export const animationMenuItemsDoubleColumn: { title: string, items: IUIMenu[] } = {
    title: 'Жанры',
    items: [
        { id: 1, title: 'Аниме', link: '#' },
        { id: 2, title: 'Боевик', link: '#' },
        { id: 3, title: 'Детектив', link: '#' },
        { id: 4, title: 'Для взрослых', link: '#' },
        { id: 5, title: 'Для всей семьи', link: '#' },
        { id: 6, title: 'Для детей', link: '#' },
        { id: 7, title: 'Драма', link: '#' },
        { id: 8, title: 'История', link: '#' },
        { id: 9, title: 'Комедия', link: '#' },
        { id: 10, title: 'Криминальные', link: '#' },
        { id: 11, title: 'Мюзикл', link: '#' },
        { id: 12, title: 'Полнометражные', link: '#' },
        { id: 13, title: 'Приключения', link: '#' },
        { id: 14, title: 'Развивающие', link: '#' },
        { id: 15, title: 'Сериалы', link: '#' },
        { id: 16, title: 'Спорт', link: '#' },
        { id: 17, title: 'Триллер', link: '#' },
        { id: 18, title: 'Ужасы', link: '#' },
        { id: 19, title: 'Фантастика', link: '#' },
        { id: 20, title: 'Фэнтези', link: '#' },
    ]
}

export const animationMenuItemsSingleColumn: { title: string, items: IUIMenu[] }[] = [
    {title: 'Страны', items: [
            {id: 1, title: 'Советские', link: '#'},
            {id: 2, title: 'Русские', link: '#'},
            {id: 3, title: 'Американские', link: '#'},
            {id: 4, title: 'Зарубежные', link: '#'},
        ]},
    {title: 'Годы', items: [
            {id: 1, title: 'Мультики 2023 года', link: '#'},
            {id: 2, title: 'Мультики 2022 года', link: '#'},
            {id: 3, title: 'Мультики 2021 года', link: '#'},
            {id: 4, title: 'Мультики 2020 года', link: '#'},
        ]},
]

export const animationMenuItemsSideContent: IUIMenu[] = [
    { id: 1, title: 'Новинки', link: '#' },
    { id: 2, title: 'Мультики в HD', link: '#' },
    { id: 3, title: 'Мультфильмы Paramount Play / Nickelodeon', link: '#' },
    { id: 4, title: 'Мультфильмы Dreamworks', link: '#' },
    { id: 5, title: 'Мультфильмы СТС Kids', link: '#' },
]

export const animationMenuItemsWidgetContent: { id: number, path: string }[][] = [
    [
        { id: 14, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 15, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 16, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
        { id: 17, path: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/d/6a49825e0acd92abc38a77b880c046.jpg/256x144/?q=85' },
        { id: 18, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/19c40f1e16b60642d64eb04296f73c.jpg/256x144/?q=85' },
        { id: 19, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/e/4a53c1b4bbb8b12081d7eb62c395bd.jpg/256x144/?q=85' },
        { id: 20, path: 'https://thumbs.dfs.ivi.ru/storage31/contents/4/6/76a9e0b320115aa54d7dc84af6ec0d.jpg/256x144/?q=85' },
        { id: 21, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/9/da03b947c85a5401a70e62249e2b51.jpg/256x144/?q=85' },
        { id: 22, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/4/b/b85fca1d2bac8f9e84fee8345530d2.jpg/256x144/?q=85' },
        { id: 23, path: 'https://thumbs.dfs.ivi.ru/storage3/contents/0/4/5a1d322912c1e1d5730ac045f4189c.jpg/256x144/?q=85' },
        { id: 24, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 25, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 26, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
    ],
    [
        { id: 1, path: 'https://thumbs.dfs.ivi.ru/storage26/contents/d/8/bdc43d82f687b08fb6beba2bb248fe.jpg/256x144/?q=85' },
        { id: 2, path: 'https://thumbs.dfs.ivi.ru/storage23/contents/e/5/5d053ae43492633643c5958ab431bc.jpg/256x144/?q=85' },
        { id: 3, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/f/4/c3a43b5ffdfbed575294e5c29527eb.jpg/256x144/?q=85' },
        { id: 4, path: 'https://thumbs.dfs.ivi.ru/storage26/contents/e/8/26997cf51b0fd7cc32647c716ba563.jpg/256x144/?q=85' },
        { id: 5, path: 'https://thumbs.dfs.ivi.ru/storage8/contents/5/a/12da2c16df9428296df918bb1413cc.jpg/256x144/?q=85' },
        { id: 6, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/a/45fe781b43e701a076424db22033f8.jpg/256x144/?q=85' },
        { id: 7, path: 'https://thumbs.dfs.ivi.ru/storage39/contents/9/d/0974d0c1482aa0d41acdc29dbec752.jpg/256x144/?q=85' },
        { id: 8, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/d/2/722ca040ba4228c9911c0b3c82a193.jpg/256x144/?q=85' },
        { id: 9, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/e/1/1cd583be8f86d9b5836b03cdf9164b.jpg/256x144/?q=85' },
        { id: 10, path: 'https://thumbs.dfs.ivi.ru/storage31/contents/e/4/f91db2d8919af763a79487f598e2f5.jpg/256x144/?q=85' },
        { id: 11, path: 'https://thumbs.dfs.ivi.ru/storage26/contents/d/8/bdc43d82f687b08fb6beba2bb248fe.jpg/256x144/?q=85' },
        { id: 12, path: 'https://thumbs.dfs.ivi.ru/storage23/contents/e/5/5d053ae43492633643c5958ab431bc.jpg/256x144/?q=85' },
        { id: 13, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/f/4/c3a43b5ffdfbed575294e5c29527eb.jpg/256x144/?q=85' },
    ],
    [
        { id: 27, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 28, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 29, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
        { id: 30, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/5/c/f0f2a0157c970bf5dfa4c9792f4f8d.jpg/256x144/?q=85' },
        { id: 31, path: 'https://thumbs.dfs.ivi.ru/storage38/contents/c/1/9a226d400475c4cf4d142e72fb478f.jpg/256x144/?q=85' },
        { id: 32, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/44a17b753786fca4268a0682479888.jpg/256x144/?q=85' },
        { id: 33, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/1/c563d1ac2534cda357165503fad820.jpg/256x144/?q=85' },
        { id: 34, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/8/f/a994322549791d967d55029291f89d.jpg/256x144/?q=85' },
        { id: 35, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/7/9/e82835fba14b23e57bc794a54c3f7a.jpg/256x144/?q=85' },
        { id: 36, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/c/b/fef4aab9acd803353d140bcb5f2556.jpg/256x144/?q=85' },
        { id: 37, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 38, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 39, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
    ]
]

export const tvplusMenuItems: { title: string, items: IUIMenu[] } = {
    title: 'ТВ онлайн',
    items: [
        { id: 1, title: 'ТВ-каналы', link: '#' },
        { id: 2, title: 'Развлекательное', link: '#' },
        { id: 3, title: 'Дети', link: '#' },
        { id: 4, title: 'Спортивное ТВ', link: '#' },
        { id: 5, title: 'Документальное', link: '#' },
    ]
}

export const tvplusSlider: IUIMenuTVPlus[] = [
    {
        title: 'Федеральные каналы',
        data: [
            { poster: 'https://thumbs.dfs.ivi.ru/storage2/contents/5/5/f1e86a30aa3728b2b939bb60a3e204.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/1tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage23/contents/5/e/24b2db1593647813cc3189270023e8.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/russia1' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage39/contents/6/3/94247f8de64c29e262c4cb828bbd40.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/match-tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/2/3/c3862f7e847f614447a942101fa6ea.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/ntv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/4/7/5257a323a5973d1fba6c2c7c732df5.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/5tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage37/contents/6/2/0c7666fb8fe6e9212642e35a4cab79.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/russia-k' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage39/contents/3/f/539284adaee9d9295f74bd00f01926.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/russia24' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/d/8877979f667c7a2b8971bd5664e1c6.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/karusel' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage8/contents/7/1/02e7a45684bce5e260db53bd8e2909.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/otr' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/f/0/1f1e940991bc937fafcca0ea7b1a0f.png/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/tvc' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage15/contents/d/e/9add40cf95adca0fae2facab5a02cc.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/ren-tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage31/contents/a/5/258e8c8c7d7dfc8d6009acf1d15bdc.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/spas' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/b/f/05472f724170015bfa7e11dff70bbe.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/sts' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/1/0f02fb558583c27c5cf48205a2c1a3.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/domashniy' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/a/b26214743e63e2de2a400d08b21204.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/tv3' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/8/d/2da99a9daaa442c5a28a9596cd9308.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/friday' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage6/contents/8/9/8ae0931918a105b0267a307d514a38.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/zvezda' },
        ]
    },
    {
        title: 'Спортивные каналы',
        data: [
            { poster: 'https://thumbs.dfs.ivi.ru/storage2/contents/5/5/f1e86a30aa3728b2b939bb60a3e204.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/1tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage23/contents/5/e/24b2db1593647813cc3189270023e8.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/russia1' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage39/contents/6/3/94247f8de64c29e262c4cb828bbd40.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/match-tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/2/3/c3862f7e847f614447a942101fa6ea.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/ntv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/4/7/5257a323a5973d1fba6c2c7c732df5.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/5tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage37/contents/6/2/0c7666fb8fe6e9212642e35a4cab79.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/russia-k' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage39/contents/3/f/539284adaee9d9295f74bd00f01926.jpg/182x118/?q=85', link: 'https://www.ivi.ru/tvchannels/watch/russia24' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/d/8877979f667c7a2b8971bd5664e1c6.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/karusel' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage8/contents/7/1/02e7a45684bce5e260db53bd8e2909.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/otr' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/f/0/1f1e940991bc937fafcca0ea7b1a0f.png/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/tvc' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage15/contents/d/e/9add40cf95adca0fae2facab5a02cc.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/ren-tv' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage31/contents/a/5/258e8c8c7d7dfc8d6009acf1d15bdc.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/spas' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/b/f/05472f724170015bfa7e11dff70bbe.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/sts' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/1/0f02fb558583c27c5cf48205a2c1a3.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/domashniy' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/a/b26214743e63e2de2a400d08b21204.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/tv3' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/8/d/2da99a9daaa442c5a28a9596cd9308.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/friday' },
            { poster: 'https://thumbs.dfs.ivi.ru/storage6/contents/8/9/8ae0931918a105b0267a307d514a38.jpg/182x118//?q=85', link: 'https://www.ivi.ru/tvchannels/watch/zvezda' },
        ]
    },
]

export const tvplusBroadcast: IUIMenuTVPlus = {
    title: 'Популярные трансляции',
    data: [
        { link: 'https://www.ivi.ru/broadcast/7867', poster: 'https://thumbs.dfs.ivi.ru/storage15/contents/9/0/52e1fdaf18ef2767ed78b54b33c730.jpg/116x76/?q=85', titleBroadcast: 'Сувон — Чеджу', timeBroadcast: 'Завтра 07:55', typeBroadcast: 'Общее' },
        { link: 'https://www.ivi.ru/broadcast/7870', poster: 'https://thumbs.dfs.ivi.ru/storage8/contents/a/6/a753ff6e452069fdace50917d79bef.jpg/116x76/?q=85', titleBroadcast: 'Шальке 04 — Герта', timeBroadcast: 'Сегодня 21:25', typeBroadcast: 'Общее' },
        { link: 'https://www.ivi.ru/broadcast/7871', poster: 'https://thumbs.dfs.ivi.ru/storage29/contents/0/d/67e2be591905ab2ff3a292f4c099ad.jpg/116x76/?q=85', titleBroadcast: 'Бавария — Хоффенхайм', timeBroadcast: 'Завтра 16:25', typeBroadcast: 'Общее' },
        { link: 'https://www.ivi.ru/broadcast/7876', poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/c/9/84f27ba45305d609985b10ce1ed646.jpg/116x76/?q=85', titleBroadcast: 'Алания — Волгарь', timeBroadcast: 'Сегодня 18:55', typeBroadcast: 'Общее' },
        { link: 'https://www.ivi.ru/broadcast/7883', poster: 'https://thumbs.dfs.ivi.ru/storage8/contents/b/d/430dd527d78813ed82e20cbe460a21.jpg/116x76/?q=85', titleBroadcast: 'Кремонезе – Эмполи', timeBroadcast: 'Сегодня 19:25', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7884', poster: 'https://thumbs.dfs.ivi.ru/storage39/contents/2/0/c9381d59f75c41e536fa3ff88eac6d.jpg/116x76/?q=85', titleBroadcast: 'Специя – Лацио', timeBroadcast: 'Сегодня 21:40', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7885', poster: 'https://thumbs.dfs.ivi.ru/storage3/contents/c/9/b94b5845698129565f92abd50cdd47.jpg/116x76/?q=85', titleBroadcast: 'Болонья – Милан', timeBroadcast: 'Завтра 15:55', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7886', poster: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/0/d3009dff6896d44b0eb1f4de67deba.jpg/116x76/?q=85', titleBroadcast: 'Наполи – Верона', timeBroadcast: 'Завтра 18:55', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7890', poster: 'https://thumbs.dfs.ivi.ru/storage30/contents/d/d/55d77743362e90cfff283ee323e078.jpg/116x76/?q=85', titleBroadcast: 'Крылья Советом – Химки', timeBroadcast: 'Завтра 13:45', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7891', poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/5/2/04607bb73c0403e6687a8d9876ceb5.jpg/116x76/?q=85', titleBroadcast: 'Динамо – Пари НН', timeBroadcast: 'Завтра 13:55', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7892', poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/2/8c2f980871f505f7291b9b2352dff6.jpg/116x76/?q=85', titleBroadcast: 'Урал – ЦСКА', timeBroadcast: 'Завтра 16:15', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7893', poster: 'https://thumbs.dfs.ivi.ru/storage39/contents/1/f/8f39e52d93a9f467596ebc4f551e90.jpg/116x76/?q=85', titleBroadcast: 'Сочи – Краснодар', timeBroadcast: 'Завтра 16:25', typeBroadcast: 'Футбол' },
        { link: 'https://www.ivi.ru/broadcast/7894', poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/5/7/842fe0cdcf9749ccd45a26d05afcac.jpg/116x76/?q=85', titleBroadcast: 'Торпедо – Спартак', timeBroadcast: 'Завтра 18:55', typeBroadcast: 'Общее' },
        { link: 'https://www.ivi.ru/broadcast/7898', poster: 'https://thumbs.dfs.ivi.ru/storage26/contents/b/d/430dd527d78813ed82e20cbe460a21.jpg/116x76/?q=85', titleBroadcast: 'Кремонезе — Эмполи', timeBroadcast: 'Сегодня 19:25', typeBroadcast: 'Общее' },
        { link: 'https://www.ivi.ru/broadcast/7899', poster: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/0/c9381d59f75c41e536fa3ff88eac6d.jpg/116x76/?q=85', titleBroadcast: 'Специя — Лацио', timeBroadcast: 'Сегодня 21:40', typeBroadcast: 'Общее' },
    ]
}

export const tvplusMenuItemsWidgetContent: { id: number, path: string }[][] = [
    [
        { id: 14, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 15, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 16, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
        { id: 17, path: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/d/6a49825e0acd92abc38a77b880c046.jpg/256x144/?q=85' },
        { id: 18, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/19c40f1e16b60642d64eb04296f73c.jpg/256x144/?q=85' },
        { id: 19, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/e/4a53c1b4bbb8b12081d7eb62c395bd.jpg/256x144/?q=85' },
        { id: 20, path: 'https://thumbs.dfs.ivi.ru/storage31/contents/4/6/76a9e0b320115aa54d7dc84af6ec0d.jpg/256x144/?q=85' },
        { id: 21, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/0/9/da03b947c85a5401a70e62249e2b51.jpg/256x144/?q=85' },
        { id: 22, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/4/b/b85fca1d2bac8f9e84fee8345530d2.jpg/256x144/?q=85' },
        { id: 23, path: 'https://thumbs.dfs.ivi.ru/storage3/contents/0/4/5a1d322912c1e1d5730ac045f4189c.jpg/256x144/?q=85' },
        { id: 24, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85' },
        { id: 25, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85' },
        { id: 26, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85' },
    ],
    [
        { id: 1, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/7/f/3f945a0f21ed0463cd3ec19ba7d3a2.jpg/256x144/?q=85' },
        { id: 2, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/4/5/bd9f95d4542f33492ffe23146da9f5.jpg/256x144/?q=85' },
        { id: 3, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/2/a/c2112668e261a83c8e0f09c45d2fee.jpg/256x144/?q=85' },
        { id: 4, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/e/f/c854b3cd29301d953a91ed3ab3b920.jpg/256x144/?q=85' },
        { id: 5, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/1/2/453cd955b11a566fbdb2b871335e5a.jpg/256x144/?q=85' },
        { id: 6, path: 'https://thumbs.dfs.ivi.ru/storage28/contents/b/6/7fc99f9e8d8a57cbbb311fda8ca8d0.jpg/256x144/?q=85' },
        { id: 7, path: 'https://thumbs.dfs.ivi.ru/storage8/contents/8/8/94a52694a1e2913d3404c19b99be30.jpg/256x144/?q=85' },
        { id: 8, path: 'https://thumbs.dfs.ivi.ru/storage4/contents/b/6/a42f53788bc8073c79d61fc9c920e7.jpg/256x144/?q=85' },
        { id: 9, path: 'https://thumbs.dfs.ivi.ru/storage4/contents/7/e/a17bf5edbe438675ea59f87861ee06.jpg/256x144/?q=85' },
        { id: 10, path: 'https://thumbs.dfs.ivi.ru/storage3/contents/9/8/2a6b6aa99d674ab3cb2017997bfe6d.jpg/256x144/?q=85' },
        { id: 11, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/7/f/3f945a0f21ed0463cd3ec19ba7d3a2.jpg/256x144/?q=85' },
        { id: 12, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/4/5/bd9f95d4542f33492ffe23146da9f5.jpg/256x144/?q=85' },
        { id: 13, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/2/a/c2112668e261a83c8e0f09c45d2fee.jpg/256x144/?q=85' },
    ],
    [
        { id: 27, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 28, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 29, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
        { id: 30, path: 'https://thumbs.dfs.ivi.ru/storage15/contents/5/c/f0f2a0157c970bf5dfa4c9792f4f8d.jpg/256x144/?q=85' },
        { id: 31, path: 'https://thumbs.dfs.ivi.ru/storage38/contents/c/1/9a226d400475c4cf4d142e72fb478f.jpg/256x144/?q=85' },
        { id: 32, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/5/f/44a17b753786fca4268a0682479888.jpg/256x144/?q=85' },
        { id: 33, path: 'https://thumbs.dfs.ivi.ru/storage6/contents/5/1/c563d1ac2534cda357165503fad820.jpg/256x144/?q=85' },
        { id: 34, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/8/f/a994322549791d967d55029291f89d.jpg/256x144/?q=85' },
        { id: 35, path: 'https://thumbs.dfs.ivi.ru/storage30/contents/7/9/e82835fba14b23e57bc794a54c3f7a.jpg/256x144/?q=85' },
        { id: 36, path: 'https://thumbs.dfs.ivi.ru/storage9/contents/c/b/fef4aab9acd803353d140bcb5f2556.jpg/256x144/?q=85' },
        { id: 37, path: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85' },
        { id: 38, path: 'https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85' },
        { id: 39, path: 'https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85' },
    ]
]

export const footerMenuAbout: { title: string, items: IUIMenu[] } = {
    title: 'О нас',
    items: [
        { id: 1, title: 'О компании', link: 'https://corp.ivi.ru/' },
        { id: 2, title: 'Вакансии', link: 'https://corp.ivi.ru/career/#career-vacancy-block' },
        { id: 3, title: 'Программа бета-тестирования', link: 'https://www.ivi.ru/pages/beta' },
        { id: 4, title: 'Информация для партнёров', link: 'https://www.ivi.ru/info/partners' },
        { id: 5, title: 'Размещение рекламы', link: 'https://corp.ivi.ru/advertisers/' },
        { id: 6, title: 'Пользовательское соглашение', link: 'https://www.ivi.ru/info/agreement' },
        { id: 7, title: 'Политика конфиденциальности', link: 'https://www.ivi.ru/info/confidential' },
        { id: 8, title: 'Комплаенс', link: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens' },
    ]
}

export const footerMenuSections: { title: string, items: IUIMenu[] } = {
    title: 'Разделы',
    items: [
        { id: 1, title: 'Мой Иви', link: 'https://www.ivi.ru/' },
        { id: 2, title: 'Что нового', link: 'https://www.ivi.ru/new' },
        { id: 3, title: 'Фильмы', link: 'https://www.ivi.ru/movies' },
        { id: 4, title: 'Сериалы', link: 'https://www.ivi.ru/series' },
        { id: 5, title: 'Мультфильмы', link: 'https://www.ivi.ru/animation' },
        { id: 6, title: 'TV+', link: 'https://www.ivi.ru/tvplus' },
        { id: 7, title: 'Что посмотреть', link: 'https://www.ivi.ru/goodmovies' },
    ]
}

export const btnsCommunity: { link: string, icon: string }[] = [
    { link: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg' },
    { link: 'https://ok.ru/ivi.ru', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg' },
    { link: 'https://twitter.com/ivi_ru', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg' },
    { link: 'https://vb.me/a0544c', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg' },
    { link: 'https://www.linkedin.com/company/2543415/', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg' },
    { link: 'https://t.me/official_iviru', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg' },
]
