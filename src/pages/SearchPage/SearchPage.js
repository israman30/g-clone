import React from "react";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import Response from "../../response";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "../Search/Search";

export default function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  //  const { data } = useGoogleSearch(term)

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options"></div>
        </div>
      </div>
      <div className="searchPage__reuslt"></div>
    </div>
  );
}
