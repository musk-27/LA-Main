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

            <div className="blogImagesSwiper">
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
            </div>

            {/* Blog Detail Text */}
            <div className="blogDetailText">
              <div className="row">
                <div className="col-md-5">
                  <div className="blogDetailTextLeft">
                    <h5>
                      Janmashthami, the birth of Lord Krishna is celebrated with
                      complete reverence in most parts of our country. This year
                      Janmasthami was on 11th August and Little Aryans Pre- K,
                      the ideal pre-school in Kalyan, Dombivali, and Ambernath,
                      celebrated the occasion with immense enthusiasm. The fact
                      that children are not attending school physically did not
                      deter the celebrations, as Little Aryans celebrated a
                      virtual Janmasthami. All the children dressed up as Gopis
                      and Krishnas. They all looked radiant and overjoyed. As
                      children are confined to their homes, this was a welcome
                      break for them as it gave them an opportunity to dress up
                      and engage in a fun-filled remote- learning session.
                    </h5>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="blogDetailsTextRight">
                    <h3>Little Aryans’ virtual Janmasthami celebrations</h3>
                    <p>
                      On the auspicious occasion, the children of Little Aryans
                      Pre- K watched and listened to stories about the birth of
                      Gopala. Children engaged in a butter-making activity.
                      Children learnt that butter was the favourite food of Lord
                      Krishna. Butter also represents our Karma and our Ego.
                      This was explained to children in an easy to understand
                      manner. Children recited a ‘Bhajan’, a hymn worshiping
                      Lord Krishna. This made children aware of our rich
                      culture. The tiny Gopis and Gopas also participated in
                      some dance, which they thoroughly enjoyed.
                    </p>
                    <h3>Importance of celebrating festivals</h3>
                    <p>
                      India is a country with diverse religions and a rich
                      tradition. Children learn various aspects of our culture
                      when festivals are celebrated in a meaningful way by
                      involving them in fun-filled activities. Listening to
                      stories helps instill pride and love for our rich
                      heritage. These keep our traditions alive. Today, it is
                      becoming more and more important to pass on knowledge
                      about our traditions to the next generation as the West
                      too has realized the wealth of information that Indians
                      possess. The diverse nature of the Little Aryans family
                      allows us to celebrate many festivals and the idea of “All
                      are One” is the core of all the celebrations. This is how
                      children learn and grow at Little Aryans Pre K.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Detail Border */}
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
                      <Image src={BlogDetailBorder} alt="" />
                    </div>
                    <div className="blogDetailBorderImg">
                      <Image src={BlogDetailBorder} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Next Posts */}
            <div className="nextPostHead">
              <h3>NEXT POSTS</h3>
            </div>
            <div className="latestNewsSection nextPosts">
              <div className="latestNewsInner nextPostsInner">
                {/* Box 1 */}
                <div className="latestNewsBox">
                  <div className="newsBoxImg imageHoverEff">
                    <Image src={News1} alt="" />
                  </div>
                  <div className="newsBoxText">
                    <h6>NEWS / AUGUST 2020</h6>
                    <h4>Janmashthami with Little Aryans</h4>
                    <p>
                      Janmashthami, the birth of Lord Krishna is celebrated with
                      complete reverence in most parts of our country. This year
                      Janmasthami was on 11th....
                    </p>
                  </div>
                </div>
                {/* Box 2 */}
                <div className="latestNewsBox">
                  <div className="newsBoxImg imageHoverEff">
                    <Image src={News1} alt="" />
                  </div>
                  <div className="newsBoxText">
                    <h6>NEWS / AUGUST 2020</h6>
                    <h4>Janmashthami with Little Aryans</h4>
                    <p>
                      Janmashthami, the birth of Lord Krishna is celebrated with
                      complete reverence in most parts of our country. This year
                      Janmasthami was on 11th....
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* == */}
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
