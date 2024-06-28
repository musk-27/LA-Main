import React, { useState } from "react";
import Link from "next/link";
import Heading from "@/Components/Heading";
import PurpleHeader from "../public/Images/SVG/purpleHeader.svg";
import useFetch from "@/useFetch";
import Image from "next/image";

const PressRoom = () => {
  const ImageApi = "https://strapi.littlearyans.in";
  const { data } = useFetch("/press-rooms?populate=*");

  return (
    <div className="PressRoomPage">
      {/* Heading */}
      <Heading headTitle="Press Room" headBottomImg={PurpleHeader} />

      {/* Articles */}
      <div className="blogItemsSection pressArticlesList">
        <div className="row">
          {data.map((PressData, index) => (
            <div key={index} className="col-md-6">
              {/* <Link href={`/BlogDetail/${blogData.attributes.slug}`}> */}
              <div className="blogItemBox">
                <div className="blogItemImg">
                  <Image
                    src={`${ImageApi}${PressData.attributes.Article.data[0].attributes.url}`}
                    alt="Little Aryans Blog"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="blogItemText">
                  <h6> {PressData.attributes.Date}</h6>
                  <h4>{PressData.attributes.Title}</h4>
                  <p>{PressData.attributes.Description}</p>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressRoom;
