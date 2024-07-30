// import Heading from "../../Components/Heading";
// import useFetch from "useFetch.js";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import React from "react";
// import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
// import RedHeadBottom from "../../public/Images/red-head-underline.png";
// import BlogDetailBorder from "../../public/Images/blogDetailBorder.png";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import YouTube from "react-youtube";
// import LimitedCharacters from "../../Components/LimitedCharacters"; // Import LimitedCharacters component

// const BlogDetail = ({ data, allBlogs }) => {
//   const router = useRouter();
//   const { slug } = router.query;

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   const currentBlogIndex = allBlogs.findIndex((blog) => blog.slug === slug);
//   const nextBlog = allBlogs[currentBlogIndex - 1] || null;
//   const prevBlog = allBlogs[currentBlogIndex + 1] || null;

//   const Title = data[0].attributes?.Title;
//   const Image1 = data[0].attributes?.Image?.data[0].attributes.url;
//   const ImageUrl = "https://strapi.littlearyans.in";
//   const VideoId = data[0].attributes?.VideoId || null;

//   const renderers = {
//     img: ({ src, alt }) => (
//       <div className="markdown-image">
//         <Image src={`${ImageUrl}${src}`} alt={alt} width={600} height={400} />
//       </div>
//     ),
//     heading: ({ level, children }) => {
//       const Tag = `h${level}`;
//       return <Tag>{children}</Tag>;
//     },
//     paragraph: ({ children }) => <div>{children}</div>,
//     link: ({ href, children }) => (
//       <a href={href} target="_blank" rel="noopener noreferrer">
//         {children}
//       </a>
//     ),
//   };

//   const opts = {
//     width: "auto",
//     height: "auto",
//     playerVars: {
//       autoplay: 0,
//       controls: 0,
//       modestbranding: 1,
//       rel: 0,
//     },
//   };

//   const handleNavigation = (slug) => {
//     router.push(`/BlogDetail/${slug}`);
//   };

//   return (
//     <div>
//       <div>
//         <React.Fragment>
//           <div className="BlogDetailPage">
//             <Heading
//               headTitle="Good Reads / Our Blog"
//               headBottomImg={RedHeadBottom}
//             />

//             <div className="container">
//               <div className="blogHeadImg">
//                 <Image
//                   src={`${ImageUrl}${Image1}`}
//                   alt="School Readiness Skills"
//                   width={900}
//                   height={450}
//                   loading="lazy"
//                 />
//               </div>
//             </div>

//             <div className="blogDetailText">
//               <div className="row">
//                 <div className="col-md-5">
//                   <div className="blogDetailTextLeft">
//                     <h6>
//                       {data[0].attributes.Type} / {data[0].attributes.BlogDate}
//                     </h6>

//                     <h5>
//                       <ReactMarkdown>
//                         {data[0].attributes.Description}
//                       </ReactMarkdown>
//                     </h5>
//                     {VideoId && (
//                       <div className="youtube-video">
//                         <YouTube
//                           videoId={data[0].attributes.VideoId}
//                           opts={opts}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="col-md-7">
//                   <div className="blogDetailsTextRight">
//                     <h3>{Title}</h3>
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
//             <div className="nextPostHead">
//               <h3>NEXT POSTS</h3>
//             </div>
//             <div className="latestNewsSection nextPosts">
//               <div className="latestNewsInner nextPostsInner">
//                 {nextBlog && (
//                   <div
//                     className="latestNewsBox"
//                     onClick={() => handleNavigation(nextBlog.slug)}
//                   >
//                     <div className="newsBoxImg imageHoverEff">
//                       <Image
//                         src={`${ImageUrl}${nextBlog.image}`}
//                         alt={nextBlog.title}
//                         width={900}
//                         height={450}
//                         loading="lazy"
//                       />
//                     </div>
//                     <div className="newsBoxText">
//                       <h6>
//                         {nextBlog.type} / {nextBlog.BlogDate}
//                       </h6>
//                       <h4>{nextBlog.title}</h4>
//                       <LimitedCharacters
//                         text={nextBlog.description}
//                         maxLength={150} // Adjust as per your preference
//                         blogSlug={nextBlog.slug} // Pass the slug for navigation
//                       />
//                     </div>
//                   </div>
//                 )}
//                 {prevBlog && (
//                   <div
//                     className="latestNewsBox"
//                     onClick={() => handleNavigation(prevBlog.slug)}
//                   >
//                     <div className="newsBoxImg imageHoverEff">
//                       <Image
//                         src={`${ImageUrl}${prevBlog.image}`}
//                         alt={prevBlog.title}
//                         width={900}
//                         height={450}
//                         loading="lazy"
//                       />
//                     </div>
//                     <div className="newsBoxText">
//                       <h6>
//                         {prevBlog.type} / {prevBlog.BlogDate}
//                       </h6>
//                       <h4>{prevBlog.title}</h4>
//                       <LimitedCharacters
//                         text={prevBlog.description}
//                         maxLength={150} // Adjust as per your preference
//                         blogSlug={prevBlog.slug} // Pass the slug for navigation
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </React.Fragment>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

// export async function getStaticProps({ params }) {
//   try {
//     const slug = params.slug;
//     const res = await fetch(
//       `https://strapi.littlearyans.in/api/blogs?populate[Image]=*&populate[VideoId]=*&populate[Type]=*&filters[slug][$eq]=${slug}`
//     );
//     if (!res.ok) {
//       throw new Error("Failed to fetch data from the API");
//     }
//     const { data } = await res.json();

//     const allRes = await fetch(
//       "https://strapi.littlearyans.in/api/blogs?populate[Image]=*&populate[Type]=*&populate[Date]=*&populate[Title]=*&populate[Description]=*&populate[slug]=*"
//     );
//     if (!allRes.ok) {
//       throw new Error("Failed to fetch all blogs data from the API");
//     }
//     const allData = await allRes.json();

//     // Sort allData.data by BlogDate in descending order
//     const sortedAllBlogs = allData.data.sort((a, b) => {
//       const dateA = new Date(a.attributes.BlogDate);
//       const dateB = new Date(b.attributes.BlogDate);
//       return dateB - dateA; // Sort descending
//     });

//     const cleanedAllBlogs = sortedAllBlogs.map((blog) => ({
//       slug: blog.attributes.slug,
//       title: blog.attributes.Title,
//       type: blog.attributes.Type,
//       BlogDate: blog.attributes.BlogDate,
//       image: blog.attributes.Image?.data[0]?.attributes?.url,
//       description: blog.attributes.Description,
//     }));

//     return {
//       props: {
//         data,
//         allBlogs: cleanedAllBlogs,
//       },
//       revalidate: 10,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         data: null,
//         allBlogs: [],
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
//   } catch (error) {
//     console.error(error);

//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }
// }




import Heading from "../../Components/Heading";
import useFetch from "useFetch.js";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import RedHeadBottom from "../../public/Images/red-head-underline.png";
import BlogDetailBorder from "../../public/Images/blogDetailBorder.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import YouTube from "react-youtube";
import LimitedCharacters from "../../Components/LimitedCharacters"; // Import LimitedCharacters component

const BlogDetail = ({ data, allBlogs }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!data) {
    return <p>Loading...</p>;
  }

  const currentBlogIndex = allBlogs.findIndex((blog) => blog.slug === slug);
  const nextBlog = allBlogs[currentBlogIndex - 1] || null;
  const prevBlog = allBlogs[currentBlogIndex + 1] || null;

  const Title = data[0].attributes?.Title;
  const Image1 = data[0].attributes?.Image?.data[0].attributes.url;
  const ImageUrl = "https://strapi.littlearyans.in";
  const VideoId = data[0].attributes?.VideoId || null;

  const renderers = {
    img: ({ src, alt }) => (
      <div className="markdown-image">
        <Image
          src={`${ImageUrl}${src}`}
          alt={alt}
          width={600} // You can adjust this value as needed
          height={400} // You can adjust this value as needed
          style={{ objectFit: "contain" }}
        />
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
      <React.Fragment>
        <div className="BlogDetailPage">
          <Heading headTitle="Good Reads / Our Blog" headBottomImg={RedHeadBottom} />

          <div className="container">
            <div className="blogHeadImg">
              <Image
                src={`${ImageUrl}${Image1}`}
                alt="School Readiness Skills"
                width={900}
                height={450}
                loading="lazy"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="blogDetailText">
            <div className="row">
              <div className="col-md-5">
                <div className="blogDetailTextLeft">
                  <h6>{data[0].attributes.Type} / {data[0].attributes.BlogDate}</h6>
                  <h5>
                    <ReactMarkdown>{data[0].attributes.Description}</ReactMarkdown>
                  </h5>
                  {VideoId && (
                    <div className="youtube-video">
                      <YouTube videoId={data[0].attributes.VideoId} opts={opts} />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-7">
                <div className="blogDetailsTextRight">
                  <h3>{Title}</h3>
                  <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm]}>
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
                    <Image src={BlogDetailBorder} alt="Holistic Development" />
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
                <div className="latestNewsBox" onClick={() => handleNavigation(nextBlog.slug)}>
                  <div className="newsBoxImg imageHoverEff">
                    <Image
                      src={`${ImageUrl}${nextBlog.image}`}
                      alt={nextBlog.title}
                      width={900}
                      height={450}
                      loading="lazy"
                    />
                  </div>
                  <div className="newsBoxText">
                    <h6>{nextBlog.type} / {nextBlog.BlogDate}</h6>
                    <h4>{nextBlog.title}</h4>
                    <LimitedCharacters
                      text={nextBlog.description}
                      maxLength={150} // Adjust as per your preference
                      blogSlug={nextBlog.slug} // Pass the slug for navigation
                    />
                  </div>
                </div>
              )}
              {prevBlog && (
                <div className="latestNewsBox" onClick={() => handleNavigation(prevBlog.slug)}>
                  <div className="newsBoxImg imageHoverEff">
                    <Image
                      src={`${ImageUrl}${prevBlog.image}`}
                      alt={prevBlog.title}
                      width={900}
                      height={450}
                      loading="lazy"
                    />
                  </div>
                  <div className="newsBoxText">
                    <h6>{prevBlog.type} / {prevBlog.BlogDate}</h6>
                    <h4>{prevBlog.title}</h4>
                    <LimitedCharacters
                      text={prevBlog.description}
                      maxLength={150} // Adjust as per your preference
                      blogSlug={prevBlog.slug} // Pass the slug for navigation
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps({ params }) {
  try {
    const slug = params.slug;
    const res = await fetch(
      `https://strapi.littlearyans.in/api/blogs?populate[Image]=*&populate[VideoId]=*&populate[Type]=*&filters[slug][$eq]=${slug}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const { data } = await res.json();

    const allRes = await fetch(
      "https://strapi.littlearyans.in/api/blogs?populate[Image]=*&populate[Type]=*&populate[Date]=*&populate[Title]=*&populate[Description]=*&populate[slug]=*"
    );
    if (!allRes.ok) {
      throw new Error("Failed to fetch all blogs data from the API");
    }
    const allData = await allRes.json();

    // Sort allData.data by BlogDate in descending order
    const sortedAllBlogs = allData.data.sort((a, b) => {
      const dateA = new Date(a.attributes.BlogDate);
      const dateB = new Date(b.attributes.BlogDate);
      return dateB - dateA; // Sort descending
    });

    const cleanedAllBlogs = sortedAllBlogs.map((blog) => ({
      slug: blog.attributes.slug,
      title: blog.attributes.Title,
      type: blog.attributes.Type,
      BlogDate: blog.attributes.BlogDate,
      image: blog.attributes.Image?.data[0]?.attributes?.url,
      description: blog.attributes.Description,
    }));

    return {
      props: {
        data,
        allBlogs: cleanedAllBlogs,
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
      params: { slug: post.attributes.slug },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
