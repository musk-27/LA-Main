// import Image from "next/image";
// import Heading from "../Components/Heading";
// import useFetch from "../useFetch";
// import React, { useState, useEffect } from "react";
// import RedHeadBottom from "../public/Images/red-head-underline.png";
// import BorderLine from "../public/Images/team-line.png";
// import BlogBox from "../Components/BlogBox";
// import RedHeader from "../public/Images/SVG/redHeader.svg";
// import Layout from "../Components/layout";
// import PaginationControls from "../Components/PaginationControls";
// import makeRequest from "../makeRequest"; // Make sure to import makeRequest correctly



// const OurBlogs = () => {
//   const metaData = {
//     title: `Little Aryan's Pre K`,
//         description:
//           `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
//     keywords:
//       "Early Childhood Education, Best Preschool Programs, Child Development",
//   };

//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [blogsPerPage] = useState(5);
//   const [totalBlogs, setTotalBlogs] = useState(0);
//   const [currentBlogs, setCurrentBlogs] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const {
//     categData,
//     loading: categLoading,
//     error: categError,
//   } = useFetch("/blog-categories");


//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//     setCurrentPage(1); // Reset current page when category changes
//   };

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//     setCurrentPage(1); // Reset current page when date changes
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   useEffect(() => {
//     // const fetchTotalBlogs = async () => {
//     //   try {
//     //     const response = await makeRequest.get(
//     //       `/blogs?populate=*`
//     //       // selectedCategory
//     //       //   ? `/blogs/count?filters[blog_category][Title][$eq]=${selectedCategory}`
//     //       //   : selectedDate
//     //       //     ? `/blogs/count?filters[date][$gte]=${selectedDate}-01&filters[date][$lte]=${selectedDate}-31`
//     //       //     : "/blogs/count"
//     //     );
//     //     setTotalBlogs(response.data.length);
//     //     setTotalPages(Math.ceil(totalBlogs / blogsPerPage));
//     //     console.log("Total", Math.ceil(totalBlogs / blogsPerPage))
//     //   } catch (err) {
//     //     console.error("Error fetching total blogs:", err);
//     //   }
//     // };
//     const fetchTotalBlogs = async () => {
//       try {
//         const data = await fetch(
//           "https://strapi.littlearyans.in/api/blogs?populate=*"
//         );
//         const response = await data.json();
//         // setTotalBlogs(response.data.length);
//         setTotalPages(Math.ceil(response.data.length / blogsPerPage));
//         console.log(totalPages, "totalPages")

//         // console.log("Total", Math.ceil(totalBlogs / blogsPerPage))
//       } catch (err) {
//         console.error("Error fetching total blogs:", err);
//       }
//     };



//     const fetchCurrentBlogs = async () => {
//       try {
//         const response = await makeRequest.get(
//           selectedCategory
//             ? `/blogs?populate=*&filters[blog_category][Title][$eq]=${selectedCategory}&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
//             : selectedDate
//               ? `/blogs?populate=*&filters[BlogDate][$gte]=${selectedDate}-01&filters[BlogDate][$lte]=${selectedDate}-31&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
//               : `/blogs?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
//         );
//         setCurrentBlogs(response.data.data);
//       } catch (err) {
//         console.error("Error fetching current blogs:", err);
//       }
//     };

//     fetchTotalBlogs();
//     fetchCurrentBlogs();
//   }, [selectedCategory, selectedDate, currentPage]);


//   const hasNextPage = currentPage < totalPages;
//   const hasPrevPage = currentPage > 1;

//   return (
//     <>
//       <Layout metaData={metaData} includeHeaderFooter={false}>
//         <div className="ourBlogsPag">
//           <Heading headTitle="Our Blogs" headBottomImg={RedHeader} />
//           <div className="blogsFilterSection">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="filterElement">
//                   <div className="filterElementBorder">
//                     <Image src={BorderLine} alt="After-School Care" />
//                   </div>
//                   <div className="filterElementOption">
//                     <select
//                       name="category"
//                       id="category"
//                       onChange={handleCategoryChange}
//                     >
//                       <option value="">Select by Category</option>
//                       {categLoading ? (
//                         <option>Loading Categories...</option>
//                       ) : categError ? (
//                         <option>Error loading categories</option>
//                       ) : (
//                         categData.map((categ, i) => (
//                           <option value={categ.attributes.Title} key={i}>
//                             {categ.attributes.Title}
//                           </option>
//                         ))
//                       )}
//                     </select>
//                   </div>
//                   <div className="filterElementBorder">
//                     <Image src={BorderLine} alt="Child Safety" />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="filterElement">
//                   <div className="filterElementBorder">
//                     <Image src={BorderLine} alt="Learning through Play" />
//                   </div>
//                   <div className="filterElementOption">
//                     <input
//                       type="month"
//                       placeholder="Select by Date"
//                       onChange={handleDateChange}
//                     />
//                   </div>
//                   <div className="filterElementBorder">
//                     <Image src={BorderLine} alt="Preschool Enrollment" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="blogItemsSection">
//             <BlogBox
//               selectedCategory={selectedCategory}
//               currentPage={currentPage}
//               blogsPerPage={blogsPerPage}
//               currentBlogs={currentBlogs}
//             />
//           </div>
//           <PaginationControls
//             hasNextPage={hasNextPage}
//             hasPrevPage={hasPrevPage}
//             currentPage={currentPage}
//             onPageChange={handlePageChange}
//             totalPages={totalPages}
//           />
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default OurBlogs;




import React, { useState, useEffect } from "react";
import Image from "next/image";
import Heading from "../Components/Heading";
import useFetch from "../useFetch";
import RedHeadBottom from "../public/Images/red-head-underline.png";
import BorderLine from "../public/Images/team-line.png";
import BlogBox from "../Components/BlogBox";
import RedHeader from "../public/Images/SVG/redHeader.svg";
import Layout from "../Components/layout";
import PaginationControls from "../Components/PaginationControls";
import { makeRequest } from "../makeRequest"; // Import makeRequest here

const OurBlogs = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
    description: `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
    keywords: "Early Childhood Education, Best Preschool Programs, Child Development",
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { categData, loading: categLoading, error: categError } = useFetch("/blog-categories");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset current page when category changes
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setCurrentPage(1); // Reset current page when date changes
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchTotalBlogs = async () => {
      try {
        const response = await makeRequest.get(
          selectedCategory
            ? `/blogs?filters[blog_category][Title][$eq]=${selectedCategory}`
            : selectedDate
              ? `/blogs?filters[BlogDate][$gte]=${selectedDate}-01&filters[BlogDate][$lte]=${selectedDate}-31`
              : "/blogs"
        );
        setTotalBlogs(response.data.length);
        setTotalPages(Math.ceil(response.data.length / blogsPerPage));
      } catch (err) {
        console.error("Error fetching total blogs:", err);
      }
    };

    const fetchCurrentBlogs = async () => {
      try {
        const response = await makeRequest.get(
          selectedCategory
            ? `/blogs?populate=*&filters[blog_category][Title][$eq]=${selectedCategory}&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
            : selectedDate
              ? `/blogs?populate=*&filters[BlogDate][$gte]=${selectedDate}-01&filters[BlogDate][$lte]=${selectedDate}-31&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
              : `/blogs?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
        );
        setCurrentBlogs(response.data.data);
      } catch (err) {
        console.error("Error fetching current blogs:", err);
      }
    };

    fetchTotalBlogs();
    fetchCurrentBlogs();
  }, [selectedCategory, selectedDate, currentPage]);

  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  return (
    <>
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div className="ourBlogsPag">
          <Heading headTitle="Our Blogs" headBottomImg={RedHeader} />
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
                      {categLoading ? (
                        <option>Loading Categories...</option>
                      ) : categError ? (
                        <option>Error loading categories</option>
                      ) : (
                        categData.map((categ, i) => (
                          <option value={categ.attributes.Title} key={i}>
                            {categ.attributes.Title}
                          </option>
                        ))
                      )}
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
                      type="month"
                      placeholder="Select by Date"
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className="filterElementBorder">
                    <Image src={BorderLine} alt="Preschool Enrollment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blogItemsSection">
            <BlogBox
              selectedCategory={selectedCategory}
              selectedDate={selectedDate}
              currentPage={currentPage}
              blogsPerPage={blogsPerPage}
              currentBlogs={currentBlogs}
            />
          </div>
          <PaginationControls
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      </Layout>
    </>
  );
};

export default OurBlogs;
