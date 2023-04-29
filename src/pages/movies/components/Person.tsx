import React from "react";
import { IMovieCreator } from "./../../../models/Movie";
import { Actors } from "./../../../models/Movies";
interface Iactors {
  data: Actors;
}

const Persons: React.FC<Iactors> = ({ data }) => {
  const num = String(data.countMovies);
  let text = "";
  const end = Number([num[num.length - 1]]);
  const penult = Number([num[num.length - 2]]);

  if (
    (end >= 5 && end <= 9) ||
    end === 0 ||
    (end == 1 && penult == 1) ||
    (end >= 2 && end <= 4 && penult == 1)
  ) {
    text = "фильмов";
  }
  if (end == 1 && penult != 1) {
    text = "фильм";
  }
  if (end >= 2 && end <= 4 && penult != 1) {
    text = "фильма";
  }
  return (
    <>
      <div className="personItem">
        <div className="personImagePoster">
          <div className="personImagePosterContent">
            <img className="personImage" src={data.poster} alt="" />
            <div className="personCoutenrPoster">
              <p>{data.countMovies}</p>
            </div>
          </div>
        </div>
        <div className="personPosterContent">
          <div className="personActorName">
            <p>{data.name}</p>
          </div>
          <div className="personCounter">
            {data.countMovies} {text}
          </div>
        </div>
      </div>
    </>
  );
};
interface Iint {
  int: number;
}

export default Persons;
