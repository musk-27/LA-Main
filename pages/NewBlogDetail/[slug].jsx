import Heading from "@/Components/Heading";
import useFetch from "@/useFetch";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
// Icons
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
// Images

import RedHeadBottom from "../../public/Images/red-head-underline.png";
import Janmastami1 from "../../public/Images/janmastami1.png";
import Janmastami3 from "../../public/Images/janmastami3.png";
import Janmastami2 from "../../public/Images/janmastami2.png";
import BlogDetailBorder from "../../public/Images/blogDetailBorder.png";
import News1 from "../../public/Images/news1.png";


const BlogDetail = ({ data }) => {
  // const router = useRouter();
  // const blogId = router.query.id;
  // const slug = router.query.slug;
  // const ImageUrl = "https://strapi.littlearyans.in/";
  // const { slug } = router.query;
  // const { data, loading } = useFetch(`/blogs/?populate=*&[slug][$eq]=${slug}`);
  // const url = `/blogs/?populate=*&slug_eq=${encodeURIComponent(slug)}`;
  // let url = "/blogs/?populate=*";

  // if (slug) {
  //   url += `&slug_eq=${encodeURIComponent(slug)}`;
  // }
  // const { data, loading } = useFetch(url);
  // const { data, loading } = useFetch(url);
  if (!data) {
    return <p>Loading...</p>;
  }

  const Title = data[0].attributes?.Title;
  const Image1 = data[0].attributes?.Image?.data[0].attributes.url;
  const ImageUrl = "https://strapi.littlearyans.in";

  return (
    <div>
      <div>
        {/* {loading && <p>Loading...</p>} */}

        {/* {data && ( */}
        <React.Fragment>
          <div className="BlogDetailPage">
            {/* Header */}
            <Heading
              headTitle="Good Reads / Our Blog"
              headBottomImg={RedHeadBottom}
            />
            {/* Blog Head  */}

            <div className="blogDetailHead">
              <h6>NEWS / AUGUST 2020</h6>
              <h2>{Title}</h2>
            </div>

            {/* Images Swiper */}

            {/* <div className="blogImagesSwiper">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                navigation={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                className="ScholasticSwiper"
              >
                <SwiperSlide>
                  <div className="galleryImage">
                    <Image
                      src={`${ImageUrl}${Image1}`}
                      alt=""
                      width={450}
                      height={450}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="galleryImage">
                    <Image src={Janmastami2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="galleryImage">
                    <Image src={Janmastami3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="galleryImage">
                    <Image src={Janmastami1} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div> */}

            {/* Blog Detail Text */}
            <div className="blogDetailText">
              <div className="row">
                {/* <div className="col-md-5">
                  <div className="blogDetailTextLeft">
                    <h5>
                      {
                        data[0].attributes.Description

                      }
                    </h5>
                    
                  </div>
                </div> */}
                <div className="col-lg-10">
                  <div className="blogDetailsTextRight">
                    {/* <h3>{data[0].attributes.Title}</h3> */}
                    <p className="des1RightText">
                      {
                        data[0].attributes.Description
                      }
                    </p>
                    {/* <h3>{data[0].attributes.Title}</h3> */}
                    <Image
                      src={`${ImageUrl}${Image1}`}
                      alt="Little Aryans Blog"
                      width={400}
                      height={400}
                      className="blogCenterImg"
                    />
                    <p>
                      {
                        data[0].attributes.Description2
                      }
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Detail Border */}
            {/* <div className="blogDetailBorder">
              <div className="row">
                <div className="col-md-4 d-flex align-items-center">
                  <div className="borderSocialLinks">
                    <div className="borderSocialText">
                      <h5>SHARE</h5>
                    </div>
                    <div className="borderSocialLink">
                      <BsFacebook />
                    </div>
                    <div className="borderSocialLink">
                      <BsWhatsapp />
                    </div>
                    <div className="borderSocialLink">
                      <BsInstagram />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 d-flex justify-content-end">
                  <div className="blogDetailBorderImgs d-flex">
                    <div className="blogDetailBorderImg">
                      <Image src={BlogDetailBorder} alt="" />
                    </div>
                    <div className="blogDetailBorderImg">
                      <Image src={BlogDetailBorder} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Next Posts */}
        
           
          </div>
        </React.Fragment>
        {/* )} */}
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps({ params }) {
  try {
    const slug = params.slug;
    const res = await fetch(
      `https://strapi.littlearyans.in/api/blogs?populate=*&filters[slug][$eq]=${slug}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const { data } = await res.json();

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
      revalidate: 10,
    };
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://strapi.littlearyans.in/api/blogs?populate=*"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const posts = await res.json();

    const paths = posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error(error);
    return {
      paths: [], // Return an empty array if there is an error
      fallback: "blocking",
    };
  }
}

// export async function getStaticPath() {
//   const { data } = await useFetch("/blogs?populate=*");

//   const paths = data.map((b) => {
//     params: {
//       slug: b.attributes.slug;
//     }
//   });

//   return {
//     paths,
//     fallback: flase,
//   };
// }

// // 'getStaticPath' requires using
// export async function getStaticProps({ parmas: { slug } }) {
//   const { data } = await useFetch(
//     `/blogs?populate=*&filters[slug][$eq]=${slug}`
//   );

//   return {
//     props: {
//       data,
//       slug,
//     },
//   };
// }

// export async function getStaticProps({ slug }) {
//   const res = await fetch(
//     `https://strapi.littlearyans.in/api/blogs?populate=*&filters[slug][$eq]=${slug}`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   };
// }

// ================= New Method =====================
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
// export async function getStaticPaths() {
//   const res = await fetch("https://strapi.littlearyans.in/api/blogs?populate=*");
//   const posts = await res.json();
//   console.log(posts);

// Get the paths we want to pre-render based on posts
// const paths = posts.map((post) => ({
//   params: { slug: post.attributes.slug },
// }));

// We'll pre-render only these paths at build time.
// { fallback: 'blocking' } will server-render pages
// on-demand if the path doesn't exist.
// return { paths, fallback: "blocking" };
// }
