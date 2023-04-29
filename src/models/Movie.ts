export interface IMainBanner {
    id: number
    banner: {
        wide: string
        narrow: string
        logo: string
    }
    title: string
    desc: string
    link: string
}

export interface IMovie {
    id: number                                                                  // ID
    name: string                                                                // Наименование
    movieType: 'Фильмы' | 'Мультфильмы' | 'Сериалы'                             // Тип видео
    genres: { id: number, name: string }[]                                      // Список жанров
    yearRelease: { start: number, finish: number }                              // Даты видео
    duration: string                                                            // Продолжительность в часах или сезонах
    ageLimit: number                                                            // Ограничение по возрасту
    quality: { id: number, name: string }[]                                     // Доступное качество видео
    voice: { id: number, voiceType: 'voice' | 'subtitle', language: string }[]  // Озвучка
    rating: { valueInt: number, valueFract: number }                            // Рейтинг - целая часть и дробная
    detailRating: { name: string, value: number }[]                             // Детальный рейтинг по различным видам
    trailer: string                                                             // Трейлер
    poster: string                                                              // Постер
    description: string                                                         // Описание
    country: { id: number, name: string }[]                                     // Список стран
    price: { id: number, priceType: string }                                    // Цена
    feature: string                                                             // Особенный признак - эксклюзив, Выбор Иви и т.д.
    creators: {
        id: number,
        creator: IMovieCreator,
        role: 'Режиссёр' | 'Актёр' | 'Актёр дубляжа' } []                       // Актеры и создатели
    reviews: IMovieReview[]                                                     // Комментарии
}

export interface IMovieCreator {
    id: number
    name: { rus: string, eng: string }
    poster: string
    description: string
    biography: string
}

export interface IMovieReview {
    id: number
    parentId: number
    author: string
    content: string
    date: Date
    vote: number
}