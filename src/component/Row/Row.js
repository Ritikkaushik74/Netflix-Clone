import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import styles from "./row.module.css";
import { useHorizontalScroll } from "../Utilities/horizontallScroll";
import classNames from "classnames";
import YouTube from "react-youtube";
import getTrailer from "movie-trailer";

function Row({ title, fetchreq, issize }) {
  const [data, setdata] = useState([]);
  const [trailerURL, settrailerURL] = useState("");

  const baseURL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    axios.get(fetchreq).then((res) => {
      setdata(res.data.results);
    });
  }, [fetchreq]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const handleclick = (res) => {
    if (trailerURL) {
      settrailerURL("");
    } else {
      getTrailer(res?.original_name || res?.original_title || res?.name || "")
        .then((url) => {
          console.log("url", url);
          const params = new URLSearchParams(new URL(url).search);
          settrailerURL(params.get("v"));
        })
        .catch((err) => settrailerURL("err"));
    }
    console.log("clicked", res);
  };

  const scrollRef = useHorizontalScroll();
  return (
    <>
      <h2 className={styles.title}>{title} </h2>
      <div ref={scrollRef} className={styles.container}>
        {data.map((res) => {
          // console.log(res);

          // console.log(videoid);
          return (
            <img
              className={classNames(styles.row, issize && styles.bigsize)}
              key={res.id}
              onClick={() => handleclick(res)}
              src={`${baseURL}${issize ? res.poster_path : res.backdrop_path}`}
              alt={res.name}
            />
          );
        })}
      </div>
      {(() => {
        if (trailerURL !== "err" && trailerURL !== "") {
          console.log("errrr", trailerURL);
          return <YouTube videoId={trailerURL} opts={opts} />;
        } else if (trailerURL === "err") {
          console.log("Noooo  errrr", trailerURL);
          return <YouTube videoId={trailerURL} opts={opts} />;
        } else return <div></div>;
      })()}
      {/* {trailerURL && <YouTube videoId={trailerURL} opts={opts} />} */}
    </>
  );
}

export default Row;
// backdrop_path
