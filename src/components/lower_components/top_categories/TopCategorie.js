import React from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import TopCategorieItem from "../top_categories_item/TopCategorieItem";
export default function TopCategorie({secondaryColor}) {
  return (
    <div
      className="rounded p-2 my-2 col-11 col-sm-12 mx-auto"
      style={{ height: "250px" }}
    >
      <div className="d-flex justify-content-between">
        <p>Top categories</p>
        <TfiLayoutMenuSeparated size={25} />
      </div>
      <div className="d-flex flex-column">
        <TopCategorieItem title="Development" progressPercent="75%" secondaryColor={secondaryColor}/>
        <TopCategorieItem title="Web Design" progressPercent="50%" secondaryColor={secondaryColor}/>
        <TopCategorieItem title="Graphic Design" progressPercent="25%" secondaryColor={secondaryColor}/>
      </div>
    </div>
  );
}
