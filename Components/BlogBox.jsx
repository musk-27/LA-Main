import useFetch from "useFetch.js";
import Link from "next/link";
import Image from "next/image";

const BlogBox = ({ selectedCategory }) => {
  // Data From Starpi
  const ImageApi = "https://strapi.littlearyans.in";
  const { data, loading, error } = useFetch(
    selectedCategory
      ? `/blogs?populate=*&filters[blog_category][Title][$eq]=${selectedCategory}`
      : "/blogs?populate=*"
  );
  return (
    <div>
      <div className="row">
        {data.lenght === 0 ? (
          <>
            <h1>No Blogs Available</h1>
          </>
        ) : (
          data.map((blogData, index) => (
            <div key={index} className="col-md-6">
              <Link href={`/BlogDetail/${blogData.attributes.slug}`}>
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
                      {blogData.attributes.Type} / {blogData.attributes.Date}
                    </h6>
                    <h4>{blogData.attributes.Title}</h4>
                    <p>{blogData.attributes.Description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogBox;
