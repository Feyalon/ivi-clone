import React, { useState } from "react";
const CategoryMovies: React.FC = () => {
  const [openGenre, setOpenGenre] = useState(false);
  const [openSubGenre, setOpenSubGenre] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [isActivedGenres, setIsActivedGenres] = useState(false);
  const genresListCol1 = [
    "Артхаус",
    "Вестерн",
    "Для детей",
    "Зарубежные",
    "Комедии",
    "Мистические",
    "Приключения",
    "Советские",
    "Ужасы",
  ];
  const genresListCol2 = [
    "Биография",
    "Военные",
    "Документальные",
    "Исторические",
    "Криминал",
    "Музыкальные",
    "Русские",
    "Спорт",
    "Фантастика",
  ];
  const genresListCol3 = [
    "Боевики",
    "Детективы",
    "Драмы",
    "Катастрофы",
    "Мелодрамы",
    "По комиксам",
    "Семейные",
    "Триллеры",
    "Фэнтези",
  ];
  const countriesHeaderCol = [
    "Россия",
    "США",
    "Великобритания",
    "Франция",
    "СССР",
    "Италия",
    "Канада",
    "Испания",
    "Германия",
    "Индия",
  ];
  const years = [
    "Все годы",
    "2023 год",
    "2022 год",
    "2021 год",
    "2020 год",
    "2023 год",
    "2022 год",
    "2021 год",
    "2020 год",
    "2019 год",
    "2018 год",
    "2017 год",
    "2016 год",
    "2022-2023",
    "2021-2022",
    "2020-2022",
    "2019-2020",
    "2010-2020",
    "2010-2015",
    "2000-2010",
    "1990-2000",
    "1980-1990",
    "до 1980",
  ];
  let active = "genreMovies";
  const [actived, setActived] = useState(false);
  const [subActived, setSubActived] = useState(false);
  if (actived) {
    active = "categoryActived";
  }
  return (
    <>
      <div className="categoryMovies">
        <div className="rootMovie">
          <a href="">Мой Иви </a>
          <span> / Фильмы</span>
          <div className="rootNameMovie">
            <h1>Фильмы</h1>
          </div>
          <div className="rootTagsMovie">
            <div className="filtersYear">
              <button>2022 год</button>
              <button className="categorySecondButton">2021 год</button>
              <button className="categorySecondButton">2020 год</button>
              <button className="categorySecondButton">2019 год</button>
              <button className="categorySecondButton">2018 год</button>
              <button className="categorySecondButton">2017 год</button>
            </div>
            <div className="filterFilms">
              <button>Русские фильмы</button>
              <button>Советские фильмы</button>
              <button>Американские фильмы</button>
            </div>
          </div>
          <div className="sortingMovieBy"></div>
        </div>
        <div className="categoryMovieMain">
          <div className="categoriesMovies">
            <ul>
              <li
                onClick={() => {
                  setOpenGenre(!openGenre);
                  setActived(!actived);
                }}
                className={active}
              >
                <div className="genreMoviesContent">
                  <p>Жанры</p>
                </div>
                {openGenre && (
                  <div className="genreDropDown">
                    <div className="dropDownHeader">
                      <div className="dropDownHeaderContent">
                        <div className="dropDownHeaderContainer">
                          <div
                            className="nbl-icon nbl-icon_genre_drama_32"
                            style={{
                              width: "32px",
                              height: "32px",
                              fontSize: "32px",
                              lineHeight: "32px",
                              color: "white",
                            }}
                          ></div>
                          <a href="">Драмы</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <div
                            className="nbl-icon nbl-icon_genre_comedy_32"
                            style={{
                              width: "32px",
                              height: "32px",
                              fontSize: "32px",
                              lineHeight: "32px",
                              color: "white",
                            }}
                          ></div>
                          <a href="">Комедии</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <div
                            className="nbl-icon nbl-icon_genre_action_32"
                            style={{
                              width: "32px",
                              height: "32px",
                              fontSize: "32px",
                              lineHeight: "32px",
                              color: "white",
                            }}
                          ></div>
                          <a href="">Боевеки</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <div
                            className="nbl-icon nbl-icon_genre_triller_32"
                            style={{
                              width: "32px",
                              height: "32px",
                              fontSize: "32px",
                              lineHeight: "32px",
                              color: "white",
                            }}
                          ></div>
                          <a href="">Триллеры</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <div
                            className="nbl-icon nbl-icon_genre_adventure_32"
                            style={{
                              width: "32px",
                              height: "32px",
                              fontSize: "32px",
                              lineHeight: "32px",
                              color: "white",
                            }}
                          ></div>
                          <a href="">Приключения</a>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="dropDownContent">
                      <div className="dropDownContentList">
                        <div className="dropDownListElements">
                          {genresListCol1.map((name, i) => (
                            <p>{name}</p>
                          ))}
                        </div>
                        <div className="dropDownListElements">
                          {genresListCol2.map((name, i) => (
                            <p>{name}</p>
                          ))}
                        </div>
                        <div className="dropDownListElements">
                          {genresListCol3.map((name, i) => (
                            <p>{name}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="DisabledsubGenreMovies">
                <div className="DisabledgenreMoviesContent">
                  <p>Поджанры</p>
                </div>
              </li>
              {isActivedGenres && (
                <li
                  className="subGenreMovies"
                  onClick={() => {
                    setOpenSubGenre(!openSubGenre);
                    setSubActived(!subActived);
                  }}
                >
                  <div className="genreMoviesContent">
                    <p>Поджанры</p>
                  </div>
                  {openSubGenre && (
                    <div className="genreDropDown">
                      <div className="dropDownHeader">
                        <div className="dropDownHeaderContent">
                          <div className="dropDownHeaderContainer">
                            <div
                              className="nbl-icon nbl-icon_genre_drama_32"
                              style={{
                                width: "32px",
                                height: "32px",
                                fontSize: "32px",
                                lineHeight: "32px",
                                color: "white",
                              }}
                            ></div>
                            <a href="">Драмы</a>
                          </div>
                          <div className="dropDownHeaderContainer">
                            <div
                              className="nbl-icon nbl-icon_genre_comedy_32"
                              style={{
                                width: "32px",
                                height: "32px",
                                fontSize: "32px",
                                lineHeight: "32px",
                                color: "white",
                              }}
                            ></div>
                            <a href="">Комедии</a>
                          </div>
                          <div className="dropDownHeaderContainer">
                            <div
                              className="nbl-icon nbl-icon_genre_action_32"
                              style={{
                                width: "32px",
                                height: "32px",
                                fontSize: "32px",
                                lineHeight: "32px",
                                color: "white",
                              }}
                            ></div>
                            <a href="">Боевеки</a>
                          </div>
                          <div className="dropDownHeaderContainer">
                            <div
                              className="nbl-icon nbl-icon_genre_triller_32"
                              style={{
                                width: "32px",
                                height: "32px",
                                fontSize: "32px",
                                lineHeight: "32px",
                                color: "white",
                              }}
                            ></div>
                            <a href="">Триллеры</a>
                          </div>
                          <div className="dropDownHeaderContainer">
                            <div
                              className="nbl-icon nbl-icon_genre_adventure_32"
                              style={{
                                width: "32px",
                                height: "32px",
                                fontSize: "32px",
                                lineHeight: "32px",
                                color: "white",
                              }}
                            ></div>
                            <a href="">Приключения</a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="dropDownContent">
                        <div className="dropDownContentList">
                          <div className="dropDownListElements">
                            {genresListCol1.map((name, i) => (
                              <p>{name}</p>
                            ))}
                          </div>
                          <div className="dropDownListElements">
                            {genresListCol2.map((name, i) => (
                              <p>{name}</p>
                            ))}
                          </div>
                          <div className="dropDownListElements">
                            {genresListCol3.map((name, i) => (
                              <p>{name}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              )}
              <li className="countryMovies">
                <div
                  className="genreMoviesContent"
                  onClick={() => {
                    setOpenCountry(!openCountry);
                  }}
                >
                  <p>Страны</p>
                </div>
                {openCountry && (
                  <div className="countryListDropdown">
                    <div className="countryListHeader">
                      <span className="arrow arrow-left"></span>
                      <div className="countryListHeaderContent">
                        {countriesHeaderCol.map((name) => (
                          <div>{name}</div>
                        ))}
                      </div>
                      <span className="arrow arrow-right"></span>
                    </div>
                  </div>
                )}
              </li>
              <li
                className="yearMovies"
                onClick={() => {
                  setOpenYear(!openYear);
                }}
              >
                <div className="genreMoviesContent">
                  <p>Годы</p>
                </div>
                {openYear && (
                  <div className="yearListDropdown">
                    <div className="yearListDropdownContent">
                      <ul>
                        {years.map((name) => (
                          <li>
                            <p>{name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="ratingMovies">
                <p>Рейтинг</p>
              </li>
            </ul>
          </div>
          <div className="sausage sausage_type_dark filtersDesktop__sausage">
            <div className="sausage__icon-add">
              <div
                className="nbl-icon nbl-icon_add_16"
                style={{
                  width: "11px",
                  height: "11px",
                  fontSize: "11px",
                  lineHeight: "11px",
                }}
              ></div>
            </div>
            <div className="sausage__title">Бесплатные</div>
          </div>
          <div className="sausage sausage_type_dark filtersDesktop__sausage">
            <div className="sausage__icon-add">
              <div
                className="nbl-icon nbl-icon_add_16"
                style={{
                  width: "11px",
                  height: "11px",
                  fontSize: "11px",
                  lineHeight: "11px",
                }}
              ></div>
            </div>
            <div className="sausage__title">По подписке</div>
          </div>
          <div className="sausage sausage_type_dark filtersDesktop__sausage">
            <div className="sausage__icon-add">
              <div
                className="nbl-icon nbl-icon_add_16"
                style={{
                  width: "11px",
                  height: "11px",
                  fontSize: "11px",
                  lineHeight: "11px",
                }}
              ></div>
            </div>
            <div className="sausage__title">На языке оригинала</div>
          </div>
          <div className="sausage sausage_type_dark filtersDesktop__sausage">
            <div className="sausage__icon-add">
              <div
                className="nbl-icon nbl-icon_add_16"
                style={{
                  width: "11px",
                  height: "11px",
                  fontSize: "11px",
                  lineHeight: "11px",
                }}
              ></div>
            </div>
            <div className="sausage__title">С субтитрами</div>
          </div>
          <div className="sausage sausage_type_dark filtersDesktop__sausage">
            <div className="sausage__icon-add">
              <div
                className="nbl-icon nbl-icon_add_16"
                style={{
                  width: "11px",
                  height: "11px",
                  fontSize: "11px",
                  lineHeight: "11px",
                }}
              ></div>
            </div>
            <div className="sausage__title">Объёмный звук</div>
          </div>
          <div className="deleteOptions">
            <a className="deleteOptionsText">Cбросить фильтры</a>
          </div>
        </div>
      </div>
      <div className="openCategory"></div>
    </>
  );
};
export default CategoryMovies;
