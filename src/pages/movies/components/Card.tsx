import React from "react";
import { Cards } from "../../../models/Movies";

interface Movies {
  Imovies: Cards;
}
const Card: React.FC<Movies> = ({ Imovies }) => {
  console.log(Imovies.name);

  return (
    <>
      <div
        aria-hidden="false"
        className="slick-slide slick-active slick-current"
        data-index="0"
        style={{ outline: "none", width: "177px" }}
      >
        <div>
          <div className="gallery__item" data-test="collection_gallery_item">
            <a
              className="nbl-slimPosterBlock nbl-slimPosterBlock_type_poster nbl-slimPosterBlock_status_default nbl-slimPosterBlock_iconStatus_none nbl-slimPosterBlock_available gallery__nbl-slimPosterBlock"
              data-content-id="9218"
              href="/watch/pin_kod"
            >
              <div className="nbl-slimPosterBlock__imageSection">
                <div className="nbl-poster nbl-poster_type_poster nbl-poster_extrasMode_rusk nbl-slimPosterBlock__nbl-poster">
                  <div className="nbl-poster__imageWrapper">
                    <img
                      alt={Imovies.name}
                      className="nbl-poster__image"
                      data-stub="false"
                      src={Imovies.urlImg}
                    />
                  </div>
                  {Imovies.isRatedByIvi && (
                    <div className="nbl-textBadge nbl-textBadge_size_dadom nbl-textBadge_style_alli nbl-textBadge_isShadowEnabled_1 nbl-poster__nbl-textBadge nbl-poster__mainTextBadge">
                      <div className="nbl-textBadge__text">
                        {Imovies.textRatingByIvi}
                      </div>
                    </div>
                  )}
                  <div className="nbl-poster__properties">
                    <div className="nbl-poster__hoards">
                      <div className="hoard hoard_type_favorite hoard_style_kaera hoard_iconOnly nbl-poster__hoard">
                        <div className="hoard__icon"></div>
                      </div>

                      <div
                        className="hoard hoard_type_similar hoard_style_kaera hoard_iconOnly nbl-poster__hoard"
                        style={{ marginTop: "25px" }}
                      >
                        <div className="hoard__icon"></div>
                      </div>
                      <div
                        className="hoard hoard_type_rate hoard_style_kaera hoard_iconOnly nbl-poster__hoard"
                        style={{ marginTop: "50px" }}
                      >
                        <div
                          className="nbl-icon nbl-icon_rating_20 hoard__nbl-icon hoard__icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            fontSize: "20px",
                            lineHeight: "20px",
                          }}
                        ></div>
                      </div>
                      <div
                        className="hoard hoard_type_dislike hoard_style_dislike hoard_iconOnly nbl-poster__hoard"
                        style={{ marginTop: "75px" }}
                      >
                        <div className="hoard__icon"></div>
                      </div>
                    </div>
                    <div className="nbl-poster__properties-inner">
                      <div className="nbl-poster__propertiesRow">
                        <div className="nbl-poster__nbl-ratingCompact nbl-ratingCompact nbl-ratingCompact_style_utis nbl-ratingCompact_hasExtra_0">
                          <div className="nbl-ratingCompact__value">
                            <div className="nbl-ratingCompact__valueInteger">
                              {Imovies.rating}
                            </div>
                          </div>
                          <div className="nbl-ratingCompact__graph nbl-ratingCompact__graph_filled">
                            <div className="nbl-progressBar nbl-progressBar_isRoundingEnabled_0 nbl-progressBar_hasHoverBar_0 nbl-progressBar_direction_leftToRight nbl-ratingCompact__nbl-progressBar">
                              <div className="nbl-progressBar__backBar"></div>
                              <div
                                className="nbl-progressBar__valueBar"
                                style={{ width: "59%" }}
                              ></div>
                            </div>
                            <div className="nbl-progressBar nbl-progressBar_isRoundingEnabled_0 nbl-progressBar_hasHoverBar_0 nbl-progressBar_direction_leftToRight nbl-ratingCompact__nbl-progressBar">
                              <div className="nbl-progressBar__backBar"></div>
                              <div
                                className="nbl-progressBar__valueBar"
                                style={{ width: "65%" }}
                              ></div>
                            </div>
                            <div className="nbl-progressBar nbl-progressBar_isRoundingEnabled_0 nbl-progressBar_hasHoverBar_0 nbl-progressBar_direction_leftToRight nbl-ratingCompact__nbl-progressBar">
                              <div className="nbl-progressBar__backBar"></div>
                              <div
                                className="nbl-progressBar__valueBar"
                                style={{ width: "55%" }}
                              ></div>
                            </div>
                            <div className="nbl-progressBar nbl-progressBar_isRoundingEnabled_0 nbl-progressBar_hasHoverBar_0 nbl-progressBar_direction_leftToRight nbl-ratingCompact__nbl-progressBar">
                              <div className="nbl-progressBar__backBar"></div>
                              <div
                                className="nbl-progressBar__valueBar"
                                style={{ width: "56%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nbl-poster__propertiesRow">
                        <div className="barChart nbl-poster__barChart">
                          <div className="barChart__name">сюжет</div>
                          <div className="barChart__graph">
                            <div
                              className="barChart__graphProgress"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="nbl-poster__propertiesInfo">
                        <div className="nbl-poster__propertiesRow">
                          {Imovies.year}, {Imovies.country}, {Imovies.type}
                        </div>
                        <div className="nbl-poster__propertiesRow">
                          {Imovies.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`nbl-ageBadge nbl-ageBadge nbl-ageBadge_value_${Imovies.age} nbl-poster__nbl-ageBadge`}
                  ></div>
                </div>
              </div>
              <div className="nbl-slimPosterBlock__textSection">
                <div className="nbl-slimPosterBlock__title">
                  <span className="nbl-slimPosterBlock__titleText">
                    {Imovies.name}
                  </span>
                </div>
                <div className="nbl-slimPosterBlock__extra">
                  <div className="nbl-slimPosterBlock__extraItem">
                    {Imovies.isPaid === "Подписка" ? (
                      <span className="priceBadge" style={{ color: "red" }}>
                        {Imovies.isPaid}
                      </span>
                    ) : Imovies.isPaid === "Покупка" ? (
                      <span className="priceBadge" style={{ color: "#00a5ff" }}>
                        {Imovies.isPaid}
                      </span>
                    ) : (
                      <span className="priceBadge">{Imovies.isPaid}</span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
