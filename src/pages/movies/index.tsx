import React from "react";

import "../../assets/css/movies.css";
import { Card, CategoryMovies, Persons } from "./components";
const premerMoviesList = [
  {
    name: "Нюрнберг",
    id: 123,
    description:
      "За кулисами самого громкого и важного судебного процесса ХХ века разворачивается опасный заговор и одна пронзительная история любви.",
    year: 2023,
    rating: "7,4",
    country: "Россия",
    type: "Исторические",
    time: "130 минуты",
    isPaid: "Подписка",
    isRatedByIvi: false,
    textRatingByIvi: "",
    age: 18,
    urlImg:
      "https://upload.wikimedia.org/wikipedia/ru/1/17/%D0%9D%D1%8E%D1%80%D0%BD%D0%B1%D0%B5%D1%80%D0%B3_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2023%29.webp",
  },
  {
    name: "Паразит",
    id: 163,
    description:
      "Серхио прячется от разгневанного босса в шкафу, который служба достав",
    year: 2022,
    rating: "8,1",
    country: "Испания",
    type: "Драмы",
    time: "106 минуты",
    isPaid: "Подписка",
    isRatedByIvi: false,
    textRatingByIvi: "",
    age: 18,
    urlImg:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/28acf858-a38d-4a27-be83-2eedd27684ba/600x900",
  },
];
const bestMovies = [
  {
    name: "Бойцовский клуб",
    id: 113,
    description:
      "Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности.",
    year: 1999,
    rating: "8,6",
    country: "США",
    type: "Триллеры",
    time: "133 минуты",
    isPaid: "Подписка",
    age: 18,
    isRatedByIvi: true,
    textRatingByIvi: "Выбор Иви",
    urlImg:
      "https://thumbs.dfs.ivi.ru/storage31/contents/5/1/c23b80232cc5e860c961239788e811.jpg/234x360/?q=85",
  },
  {
    name: "Зеленая миля",
    id: 143,
    description:
      "США, Луизина, 1935 год. В тюрьму «Холодная гора» привозят огромного чернокожего Джона Коффи, обвиненного в ужасающем преступлении. Этот необъятный гигант был найден с трупами двух девочек-близняшек на руках.",
    year: 1999,
    rating: "9,2",
    country: "США",
    type: "Драма",
    time: "188 минуты",
    isPaid: "Подписка",
    isRatedByIvi: true,
    textRatingByIvi: "Выбор Иви",
    age: 18,
    urlImg:
      "https://thumbs.dfs.ivi.ru/storage5/contents/1/f/f2fd089c17dda7acb09a4667151b72.jpg/234x360/?q=85",
  },
];

const choisedByIvi = [
  {
    name: "Монах и бес",
    id: 313,
    description:
      "Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности.",
    year: 2016,
    rating: "7,7",
    country: "Россия",
    type: "Комедия",
    time: "113 минуты",
    isPaid: "Подписка",
    age: 12,
    isRatedByIvi: true,
    textRatingByIvi: "Выбор Иви",
    urlImg:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Зеленая миля",
    id: 143,
    description:
      "США, Луизина, 1935 год. В тюрьму «Холодная гора» привозят огромного чернокожего Джона Коффи, обвиненного в ужасающем преступлении. Этот необъятный гигант был найден с трупами двух девочек-близняшек на руках.",
    year: 1999,
    rating: "9,2",
    country: "США",
    type: "Драма",
    time: "188 минуты",
    isPaid: "Подписка",
    isRatedByIvi: true,
    textRatingByIvi: "Выбор Иви",
    age: 16,
    urlImg:
      "https://thumbs.dfs.ivi.ru/storage5/contents/1/f/f2fd089c17dda7acb09a4667151b72.jpg/234x360/?q=85",
  },
  {
    name: "Бойцовский клуб",
    id: 113,
    description:
      "Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности.",
    year: 1999,
    rating: "8,6",
    country: "США",
    type: "Триллеры",
    time: "133 минуты",
    isPaid: "Подписка",
    age: 18,
    isRatedByIvi: true,
    textRatingByIvi: "Выбор Иви",
    urlImg:
      "https://thumbs.dfs.ivi.ru/storage31/contents/5/1/c23b80232cc5e860c961239788e811.jpg/234x360/?q=85",
  },
];
const fourKMovies = [
  {
    name: "[4k] Красотка на взводе",
    id: 3156,
    description:
      "Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности.",
    year: 2021,
    rating: "7,0",
    country: "США",
    type: "Боевики",
    time: "87 минуты",
    isPaid: "Подписка",
    age: 18,
    isRatedByIvi: false,
    textRatingByIvi: "",
    urlImg:
      "https://thumbs.dfs.ivi.ru/storage29/contents/d/e/1d4ce6ef882bc605f1081ba84eec30.jpg/234x360/?q=85",
  },
  {
    name: "[4k] Пила: Спираль",
    id: 3156,
    description:
      "Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности.",
    year: 2021,
    rating: "6,6",
    country: "США",
    type: "Ужасы",
    time: "93 минуты",
    isPaid: "Подписка",
    age: 18,
    isRatedByIvi: false,
    textRatingByIvi: "",
    urlImg:
      "https://thumbs.dfs.ivi.ru/storage9/contents/2/c/3576f3c2811c5f9ced8970a18d7d0d.jpg/234x360/?q=85",
  },
  {
    name: "[4k] Достать ножи",
    id: 3156,
    description:
      "Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности.",
    year: 2019,
    rating: "8,5",
    country: "США",
    type: "Детективы",
    time: "124 минуты",
    isPaid: "Бесплатно",
    age: 18,
    isRatedByIvi: false,
    textRatingByIvi: "",
    urlImg:
      "https://thumbs.dfs.ivi.ru/storage31/contents/8/d/37e31ce69d259359f9727ee6e2c27c.jpg/234x360/?q=85",
  },
];
const dataActors = [
  {
    id: 405,
    name: "Руперт Гринт",
    countMovies: 2,
    poster:
      "https://thumbs.dfs.ivi.ru/storage30/contents/1/c/b7ffb89db5ccb05eb0a565b3f5f8f4.jpg/153x183/?q=85",
  },
  {
    id: 406,
    name: "Том Фелтон",
    countMovies: 2,
    poster:
      "https://thumbs.dfs.ivi.ru/storage29/contents/4/d/f82823da4c37a42a210605da618318.jpg/153x183/?q=85",
  },
  {
    id: 407,
    name: "Сэмюэл Л.Джексон",
    countMovies: 18,
    poster:
      "https://thumbs.dfs.ivi.ru/storage23/contents/a/e/2d9c7984b2a598f898b84f07c82ee4.jpg/153x183/?q=85",
  },
  {
    id: 408,
    name: "Дэниэл Рэдклифф",
    countMovies: 5,
    poster:
      "https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85",
  },
];

const MoviesPage: React.FC = () => {
  return (
    <>
      <CategoryMovies />
      <div className="moviesMain">
        <div className="PremersList">
          <div className="NameListMovies">
            <h2>Премьера фильмов</h2>
            <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
          </div>
          <div className="MoviesCards">
            {premerMoviesList.map((movies) => (
              <Card Imovies={movies} />
            ))}
          </div>
        </div>
        <div className="bestMovies">
          <div className="NameListMovies">
            <h2>Лучшие фильмы</h2>
            <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
          </div>
          <div className="MoviesCards">
            {bestMovies.map((movies) => (
              <Card Imovies={movies} />
            ))}
          </div>
        </div>
        <div className="bestMovies">
          <div className="NameListMovies">
            <h2>Выбор Иви</h2>
            <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
          </div>
          <div className="MoviesCards">
            {choisedByIvi.map((movies) => (
              <Card Imovies={movies} />
            ))}
          </div>
        </div>

        <div className="actorsMain">
          <h2>Персоны</h2>
          <div className="actorsList">
            {dataActors.map((data) => (
              <Persons data={data} />
            ))}
          </div>
        </div>
        <div className="fourKMovies">
          <div className="NameListMovies">
            <h2>Фильмы в 4K UHD</h2>
            <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
          </div>

          <div className="MoviesCards">
            {fourKMovies.map((movies) => (
              <Card Imovies={movies} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
