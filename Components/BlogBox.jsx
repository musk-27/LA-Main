import useFetch from "../useFetch";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import LimitedCharacters from "./LimitedCharacters"; // Import LimitedCharacters component
import { useRouter } from "next/router";

const BlogBox = ({ selectedCategory, currentPage, blogsPerPage }) => {
  const ImageApi = "https://strapi.littlearyans.in";
  const { data, loading, error } = useFetch(
    selectedCategory
      ? `/blogs?populate=*&filters[blog_category][Title][$eq]=${selectedCategory}&sort=BlogDate:DESC&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
      : `/blogs?populate=*&sort=BlogDate:DESC&pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}`
  );

  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs.</p>;

  return (
    <div>
      <div className="row">
        {data.length === 0 ? (
          <h1>No Blogs Available</h1>
        ) : (
          data.map((blogData, index) => (
            <div key={index} className="col-md-6">
              <div className="blogItemBox">
                <div className="blogItemImg">
                  <Image
                    src={`${ImageApi}${blogData.attributes.Image.data[0].attributes.url}`}
                    alt="Little Aryans Blog"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="blogItemText">
                  <h6>
                    {blogData.attributes.Type} /{" "}
                    {new Date(
                      blogData.attributes.BlogDate
                    ).toLocaleDateString()}
                  </h6>
                  <h4>
                    <ReactMarkdown>{blogData.attributes.Title}</ReactMarkdown>
                  </h4>
                  <p>
                    
                    <LimitedCharacters
                      text={blogData.attributes.Description}
                      maxLength={150} // Adjust as per your preference
                      blogSlug={blogData.attributes.slug} // Pass the slug for navigation
                    />
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogBox;





