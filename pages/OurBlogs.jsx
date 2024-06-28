import Image from "next/image";
import Heading from "../Components/Heading";
import useFetch from "useFetch.js";
import React, { useState } from "react";
// Images
import RedHeadBottom from "../public/Images/red-head-underline.png";
import BorderLine from "../public/Images/team-line.png";
import BlogBox from "../Components/BlogBox";
import RedHeader from "../public/Images/SVG/redHeader.svg";

const OurBlogs = () => {
  const { data } = useFetch("/blog-categories");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <div className="ourBlogsPag">
        {/* Heading */}
        <Heading headTitle="Our Blogs" headBottomImg={RedHeader} />

        {/* Blogs Filter */}
        <div className="blogsFilterSection">
          <div className="row">
            <div className="col-md-6">
              <div className="filterElement">
                <div className="filterElementBorder">
                  <Image src={BorderLine} alt="After-School Care" />
                </div>

                <div className="filterElementOption">
                  <select
                    name="category"
                    id="category"
                    onChange={handleCategoryChange}
                  >
                    <option value="">Select by Category</option>
                    {data.map((categ, i) => {
                      return (
                        <option value={categ.attributes.Title} key={i}>
                          {categ.attributes.Title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="filterElementBorder">
                  <Image src={BorderLine} alt="Child Safety" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="filterElement">
                <div className="filterElementBorder">
                  <Image src={BorderLine} alt="Learning through Play" />
                </div>
                <div className="filterElementOption">
                  <input
                    type="Text"
                    placeholder="Select by Date"
                    onFocus={(e) => {
                      e.currentTarget.type = "date";
                      e.currentTarget.focus();
                    }}
                    onBlur={(e) => {
                      e.currentTarget.type = "text";
                      setDate(e.currentTarget.value);
                    }}
                  />
                  {/* <input type="text" /> */}
                </div>
                <div className="filterElementBorder">
                  <Image src={BorderLine} alt="Preschool Enrollment" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blogs Filter */}

        {/* Blog Items */}
        <div className="blogItemsSection">
          <BlogBox selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = async () => {

//     const { data } = fetchBlogs();

//     return {
//         props: {
//             blogs: {
//                 items: []
//             }
//         }
//     }
// }

export default OurBlogs;
