import React from "react";
import "./styles.css";
import Row from "./component/Row/Row";
import { req } from "./api";
import Banner from "./component/Banner/Banner";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGNALS"
        fetchreq={req.fetchOrignals}
        issize={true}
      />
      <Row title="Trending" fetchreq={req.fetchtrending} />
      <Row title="Popular TV Shows" fetchreq={req.fetchtvPopular} />
      <Row title="Popular Movies" fetchreq={req.fetchmoviePolpular} />
      <Row title="Action " fetchreq={req.fetchAction} />
      <Row title="Comedy " fetchreq={req.fetchComedy} />
      <Footer></Footer>
    </div>
  );
}
