import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import { req } from "../../api";
import styles from "./banner.module.css";

import YouTube from "react-youtube";
import getTrailer from "movie-trailer";

function Banner() {
  const [movie, setmovie] = useState([]);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  const [trailerURL, settrailerURL] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const getMovie = () => {
    axios.get(req.fetchOrignals).then((res) => {
      setmovie(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );
    });
  };

  // let i = 0;

  useEffect(() => {
    getMovie();
    console.log("1st");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getMovie();

      console.log("mmmmmmm", movie);
    }, 10000);
  }, [movie]);

  const handleclick = (res) => {
    console.log(res);
    if (trailerURL) {
      settrailerURL("");
    } else {
      console.log("res?.original_name of", typeof res.id);
      console.log("ressss", res);

      getTrailer(res?.original_name || res?.original_title || res?.name || "")
        .then((url) => {
          console.log("url", url);
          const params = new URLSearchParams(new URL(url).search);
          settrailerURL(params.get("v"));
        })
        .catch((err) => settrailerURL(err));
    }
    console.log("clicked", res);
  };

  // console.log(movie);

  // switch (isLoggedIn) {
  //   case true:
  //     return <button>Logout</button>;
  //     break;
  //   case false:
  //     return <button>Login</button>;
  //     break;
  //   default:
  //     return null;

  return (
    <>
      <div
        className={styles.header}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center"
        }}
      >
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{movie.name}</h1>
          <button className={styles.btn} onClick={() => handleclick(movie)}>
            Watch
          </button>
          <button className={styles.btn}>List</button>
          <h1 className={styles.desc}>{truncate(movie?.overview, 249)}</h1>
        </div>
        <div className={styles.bannerBottom}></div>
      </div>

      {(() => {
        if (trailerURL !== "err" && trailerURL !== "") {
          console.log("errrr", trailerURL);
          return <YouTube videoId={trailerURL} opts={opts} />;
        } else if (trailerURL === "err") {
          console.log("Noooo  errrr", trailerURL);
          return (
            <YouTube videoId="qqyrL70By2w" opts={opts} />
            // <div>
            //   <img src="" alt="404 Error"></img>
            // </div>
          );
        } else return <div></div>;
      })()}
    </>
  );
}
export default Banner;
