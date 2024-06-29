// import Heading from "../../Components/Heading";
// import useFetch from "useFetch.js";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import React from "react";
// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Navigation } from "swiper";
// // Icons
// import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
// // Images

// import RedHeadBottom from "../../public/Images/red-head-underline.png";
// import Janmastami1 from "../../public/Images/janmastami1.png";
// import Janmastami3 from "../../public/Images/janmastami3.png";
// import Janmastami2 from "../../public/Images/janmastami2.png";
// import BlogDetailBorder from "../../public/Images/blogDetailBorder.png";
// import News1 from "../../public/Images/news1.png";

// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// import YouTube from "react-youtube";



// // const remarkGfm = require('remark-gfm');



// const BlogDetail = ({ data }) => {
//   // const router = useRouter();
//   // const blogId = router.query.id;
//   // const slug = router.query.slug;
//   // const ImageUrl = "https://strapi.littlearyans.in/";
//   // const { slug } = router.query;
//   // const { data, loading } = useFetch(`/blogs/?populate=*&[slug][$eq]=${slug}`);
//   // const url = `/blogs/?populate=*&slug_eq=${encodeURIComponent(slug)}`;
//   // let url = "/blogs/?populate=*";

//   // if (slug) {
//   // url += `&slug_eq=${encodeURIComponent(slug)}`;
//   // }
//   // const { data, loading } = useFetch(url);
//   // const { data, loading } = useFetch(url);
//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   const Title = data[0].attributes?.Title;
//   const Image1 = data[0].attributes?.Image?.data[0].attributes.url;
//   const ImageUrl = "https://strapi.littlearyans.in";
//   // const VideoId = data.VideoId;
//   const VideoId = data[0].attributes?.VideoId || null;

//   const renderers = {
//     // Handle images using Next.js Image component
//     img: ({ src, alt }) => (
//       <div className="markdown-image">
//         <Image src={`${ImageUrl}${src}`} alt={alt} width={600} height={400} />
//       </div>
//     ),
//     // Example: Handle headings
//     heading: ({ level, children }) => {
//       const Tag = `h${level}`;
//       return <Tag>{children}</Tag>;
//     },
//     // Example: Handle paragraphs
//     paragraph: ({ children }) => <div>{children}</div>,
//     // Example: Handle links
//     link: ({ href, children }) => (
//       <a href={href} target="_blank" rel="noopener noreferrer">
//         {children}
//       </a>
//     ),
//     // Add more custom renderers as needed
//   };

//   const opts = {
//     width: "auto",
//     height: "auto",
//     playerVars: {
//       autoplay: 0, // Auto-play off
//       controls: 0, // Hide player controls
//       modestbranding: 1, // Show minimal YouTube branding
//       rel: 0, // Do not show related videos at the end
//     },
//   };



//   return (
//     <div>
//       <div>
//         {/* {loading && <p>Loading...</p>} */}

//         {/* {data && ( */}
//         <React.Fragment>
//           <div className="BlogDetailPage">
//             {/* Header */}
//             <Heading
//               headTitle="Good Reads / Our Blog"
//               headBottomImg={RedHeadBottom}
//             />
//             {/* Blog Head  */}
//             {/* Images Swiper */}

//             {/* <div className="blogImagesSwiper">
//               <Swiper
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{
//                   delay: 2500,
//                   disableOnInteraction: false,
//                 }}
//                 pagination={{
//                   clickable: true,
//                 }}
//                 slidesPerView={1}
//                 navigation={true}
//                 modules={[Autoplay, Navigation]}
//                 breakpoints={{
//                   640: {
//                     slidesPerView: 1,
//                     spaceBetween: 40,
//                   },
//                   768: {
//                     slidesPerView: 2,
//                     spaceBetween: 40,
//                   },
//                   1024: {
//                     slidesPerView: 3,
//                     spaceBetween: 50,
//                   },
//                 }}
//                 className="ScholasticSwiper"
//               >
//                 <SwiperSlide>
//                   <div className="galleryImage">
//                     <Image
//                       src={`${ImageUrl}${Image1}`}
//                       alt=""
//                       width={450}
//                       height={450}
//                     />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="galleryImage">
//                     <Image src={Janmastami2} alt="" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="galleryImage">
//                     <Image src={Janmastami3} alt="" />
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="galleryImage">
//                     <Image src={Janmastami1} alt="" />
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div> */}

//             <div className="container">
//               <div className="blogHeadImg">
//                 {/* <Image src="/trialBlog.jpeg" alt="" height={400} width={1000}/> */}
//                 <Image
//                   src={`${ImageUrl}${Image1}`}
//                   alt="School Readiness Skills"
//                   width={900}
//                   height={450}
//                 />
//               </div>
//             </div>

//             {/* <div className="blogCenterImg">
//               <Image
//                       src={`${ImageUrl}${Image1}`}
//                       alt=""
//                       layout="responsive"
//                       width={450}
//                       height={450}
//                     />
//               </div> */}

//             {/* Blog Detail Text */}
//             <div className="blogDetailText">
//               <div className="row">
//                 <div className="col-md-5">
//                   <div className="blogDetailTextLeft">
//                     <h6>
//                       {data[0].attributes.Type} / {data[0].attributes.Date}
//                     </h6>
//                     <h5>
//                       {/* <ReactMarkdown>{
//                         data[0].attributes.Description
//                       }</ReactMarkdown> */}
//                       <ReactMarkdown>
//                         {data[0].attributes.Description}
//                       </ReactMarkdown>
//                     </h5>
//                     {/* <div className="youtube-video">
//                       <YouTube videoId="4vs9fbLBI4o?" opts={{ width: "auto", height: "auto" }} />
//                     </div> */}
//                     {VideoId && (
//                       <div className="youtube-video">
//                         <YouTube videoId={VideoId} opts={opts} />
//                       </div>
//                     )}
//                     {/* {VideoId ? ( // Check if VideoId exists
//                     <div className="youtube-video">
//                       <YouTube videoId={VideoId} opts={opts} />
//                     </div>
//                   ) : (
//                     <p>No video available</p>
//                   )} */}
//                     {/* {VideoId && ( // Check if VideoId exists
//                     <div className="youtube-video">
//                       <YouTube videoId={VideoId} opts={opts} />
//                     </div>
//                   )}
//                   {!VideoId && ( // Check if VideoId does not exist
//                     <p>No video available</p>
//                   )} */}

//                   </div>
//                 </div>
//                 <div className="col-md-7">
//                   <div className="blogDetailsTextRight">
//                     {/* <h3>{Title}</h3> */}
//                     <h3>{Title}</h3>
//                     {/* Render Description2 with ReactMarkdown */}
//                     {/* <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm]} >
//                       {data[0].attributes.Description2}
//                     </ReactMarkdown> */}
//                     <ReactMarkdown
//                       components={renderers}
//                       remarkPlugins={[remarkGfm]}
//                     >
//                       {data[0].attributes.Description2}
//                     </ReactMarkdown>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Blog Detail Border */}
//             <div className="blogDetailBorder">
//               <div className="row">
//                 <div className="col-md-4 d-flex align-items-center">
//                   <div className="borderSocialLinks">
//                     <div className="borderSocialText">
//                       <h5>SHARE</h5>
//                     </div>
//                     <div className="borderSocialLink">
//                       <BsFacebook />
//                     </div>
//                     <div className="borderSocialLink">
//                       <BsWhatsapp />
//                     </div>
//                     <div className="borderSocialLink">
//                       <BsInstagram />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-8 d-flex justify-content-end">
//                   <div className="blogDetailBorderImgs d-flex">
//                     <div className="blogDetailBorderImg">
//                       <Image src={BlogDetailBorder} alt="Educational Games" />
//                     </div>
//                     <div className="blogDetailBorderImg">
//                       <Image
//                         src={BlogDetailBorder}
//                         alt="Holistic Development"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Next Posts */}
//             <div className="nextPostHead">
//               <h3>NEXT POSTS</h3>
//             </div>
//             <div className="latestNewsSection nextPosts">
//               <div className="latestNewsInner nextPostsInner">
//                 {/* Box 1 */}
//                 <div className="latestNewsBox">
//                   <div className="newsBoxImg imageHoverEff">
//                     <Image src={News1} alt="Pre-K Education" />
//                   </div>
//                   <div className="newsBoxText">
//                   <h6>
//                       {data[0].attributes.Type} / {data[0].attributes.Date}
//                     </h6>
//                     <h4>{data[0].attributes.Title}</h4>
//                     <p>
//                     {data[0].attributes.Description}
//                     </p>
//                   </div>
//                 </div>
//                 {/* Box 2 */}
//                 <div className="latestNewsBox">
//                   <div className="newsBoxImg imageHoverEff">
//                     <Image src={News1} alt="Sensory Activities" />
//                   </div>
//                   <div className="newsBoxText">
//                   <h6>
//                       {data[0].attributes.Type} / {data[0].attributes.Date}
//                     </h6>
//                     <h4>{data[0].attributes.Title}</h4>
//                     <p>
//                     {data[0].attributes.Description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>

//         {/* )} */}
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

// export async function getStaticProps({ params }) {
//   try {
//     const slug = params.slug;
//     const res = await fetch(
//       `https://strapi.littlearyans.in/api/blogs?populate=*&filters[slug][$eq]=${slug}`
//     );
//     if (!res.ok) {
//       throw new Error("Failed to fetch data from the API");
//     }
//     const { data } = await res.json();

//     return {
//       props: {
//         data,
//         // data: {
//         //   ...data,
//         //   VideoId: data[0].attributes?.VideoId || null, // Assuming VideoId is stored under attributes
//         // },
//       },
//       revalidate: 10,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         data: null,
//       },
//       revalidate: 10,
//     };
//   }
// }

// export async function getStaticPaths() {
//   try {
//     const res = await fetch(
//       "https://strapi.littlearyans.in/api/blogs?populate=*"
//     );
//     if (!res.ok) {
//       throw new Error("Failed to fetch data from the API");
//     }
//     const posts = await res.json();

//     const paths = posts.data.map((post) => ({
//       params: { slug: post.attributes.slug.toString() },
//     }));

//     return { paths, fallback: "blocking" };
//     console.log(paths);
//   } catch (error) {
//     console.error(error);

//     return {
//       paths: [], // Return an empty array if there is an error
//       fallback: "blocking",
//     };
//   }
// }

// // Import necessary modules and functions

// // export async function getStaticPaths() {
// //   try {
// //     const res = await fetch("https://strapi.littlearyans.in/api/blogs?populate=*");
// //     if (!res.ok) {
// //       throw new Error("Failed to fetch data from the API");
// //     }
// //     const { data } = await res.json();

// //     // Map data to paths
// //     const paths = data.map((post) => ({
// //       params: { slug: post.attributes.slug.toString() }, // Ensure slug is converted to string if necessary
// //     }));

// //     return { paths, fallback: "blocking" }; // Ensure fallback mode is correctly set
// //   } catch (error) {
// //     console.error(error);
// //     return {
// //       paths: [], // Return an empty array if there is an error
// //       fallback: "blocking",
// //     };
// //   }
// // }

// // export async function getStaticPath() {
// //   const { data } = await useFetch("/blogs?populate=*");

// //   const paths = data.map((b) => {
// //     params: {
// //       slug: b.attributes.slug;
// //     }
// //   });

// //   return {
// //     paths,
// //     fallback: flase,
// //   };
// // }

// // // 'getStaticPath' requires using
// // export async function getStaticProps({ parmas: { slug } }) {
// //   const { data } = await useFetch(
// //     `/blogs?populate=*&filters[slug][$eq]=${slug}`
// //   );

// //   return {
// //     props: {
// //       data,
// //       slug,
// //     },
// //   };
// // }

// // export async function getStaticProps({ slug }) {
// //   const res = await fetch(
// //     `https://strapi.littlearyans.in/api/blogs?populate=*&filters[slug][$eq]=${slug}`
// //   );
// //   const posts = await res.json();

// //   return {
// //     props: {
// //       posts,
// //     },
// //     // Next.js will attempt to re-generate the page:
// //     // - When a request comes in
// //     // - At most once every 10 seconds
// //     revalidate: 10, // In seconds
// //   };
// // }

// // ================= New Method =====================
// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // the path has not been generated.
// // export async function getStaticPaths() {
// //   const res = await fetch("https://strapi.littlearyans.in/api/blogs?populate=*");
// //   const posts = await res.json();
// //   console.log(posts);

// // Get the paths we want to pre-render based on posts
// // const paths = posts.map((post) => ({
// //   params: { slug: post.attributes.slug },
// // }));

// // We'll pre-render only these paths at build time.
// // { fallback: 'blocking' } will server-render pages
// // on-demand if the path doesn't exist.
// // return { paths, fallback: "blocking" };
// // }





import Heading from "../../Components/Heading";
import useFetch from "useFetch.js";
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

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import YouTube from "react-youtube";

// const remarkGfm = require('remark-gfm');

const BlogDetail = ({ data, allBlogs }) => {
  const router = useRouter();
  const { slug } = router.query;
  
  if (!data) {
    return <p>Loading...</p>;
  }

  const blogIndex = allBlogs.findIndex(blog => blog.attributes.slug === slug);
  const nextBlog = allBlogs[blogIndex + 1] || null;
  const prevBlog = allBlogs[blogIndex - 1] || null;

  const Title = data[0].attributes?.Title;
  const Image1 = data[0].attributes?.Image?.data[0].attributes.url;
  const ImageUrl = "https://strapi.littlearyans.in";
  const VideoId = data[0].attributes?.VideoId || null;

  const renderers = {
    img: ({ src, alt }) => (
      <div className="markdown-image">
        <Image src={`${ImageUrl}${src}`} alt={alt} width={600} height={400} />
      </div>
    ),
    heading: ({ level, children }) => {
      const Tag = `h${level}`;
      return <Tag>{children}</Tag>;
    },
    paragraph: ({ children }) => <div>{children}</div>,
    link: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  const opts = {
    width: "auto",
    height: "auto",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  const handleNavigation = (slug) => {
    router.push(`/BlogDetail/${slug}`);
  };

  return (
    <div>
      <div>
        <React.Fragment>
          <div className="BlogDetailPage">
            <Heading
              headTitle="Good Reads / Our Blog"
              headBottomImg={RedHeadBottom}
            />

            <div className="container">
              <div className="blogHeadImg">
                <Image
                  src={`${ImageUrl}${Image1}`}
                  alt="School Readiness Skills"
                  width={900}
                  height={450}
                />
              </div>
            </div>

            <div className="blogDetailText">
              <div className="row">
                <div className="col-md-5">
                  <div className="blogDetailTextLeft">
                    <h6>
                      {data[0].attributes.Type} / {data[0].attributes.Date}
                    </h6>
                    <h5>
                      <ReactMarkdown>
                        {data[0].attributes.Description}
                      </ReactMarkdown>
                    </h5>
                    {VideoId && (
                      <div className="youtube-video">
                        <YouTube videoId={VideoId} opts={opts} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="blogDetailsTextRight">
                    <h3>{Title}</h3>
                    <ReactMarkdown
                      components={renderers}
                      remarkPlugins={[remarkGfm]}
                    >
                      {data[0].attributes.Description2}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogDetailBorder">
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
                      <Image src={BlogDetailBorder} alt="Educational Games" />
                    </div>
                    <div className="blogDetailBorderImg">
                      <Image
                        src={BlogDetailBorder}
                        alt="Holistic Development"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nextPostHead">
              <h3>NEXT POSTS</h3>
            </div>
            <div className="latestNewsSection nextPosts">
              <div className="latestNewsInner nextPostsInner">
                {nextBlog && (
    <div
      className="latestNewsBox"
      onClick={() => handleNavigation(nextBlog.attributes.slug)}
    >
      <div className="newsBoxImg imageHoverEff">
        <Image src={News1} alt={nextBlog.attributes.Title} />
      </div>
      <div className="newsBoxText">
        <h6>
          {nextBlog.attributes.Type} / {nextBlog.attributes.Date}
        </h6>
        <h4>{nextBlog.attributes.Title}</h4>
        <p>{nextBlog.attributes.Description}</p>
      </div>
    </div>
  )}
  {/* BOX 2 */}
  {prevBlog && (
    <div
      className="latestNewsBox"
      onClick={() => handleNavigation(prevBlog.attributes.slug)}
    >
      <div className="newsBoxImg imageHoverEff">
        <Image src={News1} alt={prevBlog.attributes.Title} />
      </div>
      <div className="newsBoxText">
        <h6>
          {prevBlog.attributes.Type} / {prevBlog.attributes.Date}
        </h6>
        <h4>{prevBlog.attributes.Title}</h4>
        <p>{prevBlog.attributes.Description}</p>
      </div>
    </div>
  )}
</div>
            </div>
          </div>
        </React.Fragment>
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
    
    const allRes = await fetch("https://strapi.littlearyans.in/api/blogs?populate=*");
    if (!allRes.ok) {
      throw new Error("Failed to fetch all blogs data from the API");
    }
    const allData = await allRes.json();

    return {
      props: {
        data,
        allBlogs: allData.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
        allBlogs: [],
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
      params: { slug: post.attributes.slug.toString() },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}
