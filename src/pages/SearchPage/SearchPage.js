import React from "react";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import Response from "../../response";
import "./SearchPage.css";

export default function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  //  const { data } = useGoogleSearch(term)

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__reuslt"></div>
    </div>
  );
}
