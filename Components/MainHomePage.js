import Image from "next/image";
import { useMemo } from "react";
import useFetch from "@/useFetch";
import dynamic from "next/dynamic";
import YouTube from "react-youtube";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Combined Swiper CSS imports

// Dynamically import components only when needed
const Layout = dynamic(() => import("../Components/layout"), { ssr: true });
const Footer = dynamic(() => import("../Components/Footer/footer"), {
  ssr: true,
});
const Header = dynamic(() => import("../Components/Header/header"), {
  ssr: true,
});
const MobileNavbar = dynamic(
  () => import("../Components/Header/mobileNavbar"),
  { ssr: true }
);

const MainHomePage = () => {
  // Memoized metadata
  const metaData = useMemo(
    () => ({
      title: `Little Aryan's Pre K`,
      description: `Little Aryan's Pre K offers a nurturing and stimulating environment for early childhood education.`,
      keywords: "Kindergarten Readiness, Play-Based Learning, Nursery School",
    }),
    []
  );

  // Memoized Swiper pagination options
  const pagination = useMemo(
    () => ({
      clickable: true,
      renderBullet: (index, className) => `<span class="${className}"></span>`,
    }),
    []
  );

  // Memoized YouTube player options
  const opts = useMemo(
    () => ({
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
      },
    }),
    []
  );

  // Fetch data from API
  const { data } = useFetch("/testimonials?populate=*");

  // Memoized image URLs
  const images = useMemo(
    () => ({
      banners: [
        "/Images/Home/Banner1.png",
        "/Images/Home/Banner2.png",
        "/Images/Home/Banner3.png",
        "/Images/Home/Banner4.png",
        "/Images/Home/Banner5.png",
      ],
      startStrongImages: [
        "/Images/Home/StartStrong/img1.jpg",
        "/Images/Home/StartStrong/img2.jpg",
        "/Images/Home/StartStrong/img3.jpg",
        "/Images/Home/StartStrong/img4.jpg",
      ],
      otherImages: {
        artwork: "/Images/Home/Artwork.png",
        verticalLine: "/Images/VerticalLine.png",
        scribble: "/Images/SVG/scribblePurple.svg",
        vasudevKutumbh: "/Images/Home/work-with-us-wbg.png",
        curriculumHome: "/Images/curriculumHomeImg.png",
        pedagogyHome: "/Images/PedagogyHomeImg.png",
        onlineLearningHome: "/Images/OnlineLearningHomeImg.png",
      },
    }),
    []
  );

  return (
    <>
      <Header />
      <MobileNavbar />
      <Layout metaData={metaData}>
        <div className="LAHome">
          <div className="homeTitle">
            <h1>Setting the stage for a bright future</h1>
          </div>

          <div className="homeBanner">
            <Swiper
              pagination={pagination}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              modules={[Autoplay, Pagination]}
              loop={true}
              className="mySwiper"
            >
              {images.banners.map((banner, index) => (
                <SwiperSlide key={index}>
                  <div className="homeBannerInner">
                    <Image
                      src={banner}
                      alt={`Banner ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="belowBannerSection">
            <div className="row">
              <div className="col-lg-5">
                <div className="leftBelowBanner">
                  <h4>
                    Early childhood is a crucial time. This is when
                    children&apos;s brains are growing rapidly, and most neural
                    pathways are formed. They are learning about the world
                    around them, becoming self-aware, and developing their
                    self-esteem.
                  </h4>
                  <h4 className="mt-5">
                    This stage in their lives charts the course of their future.
                    This is also when they’ll be most adaptable to new
                    experiences.
                  </h4>
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-center d-none d-lg-block">
                <div className="verticalLine">
                  <Image
                    src={images.otherImages.verticalLine}
                    alt="line"
                    width={2}
                    height={1000}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rightBelowBanner">
                  <h3>
                    To reach their full potential in the future, even outside of
                    school, every child needs to start with holistic education.
                  </h3>
                  <div className="rightBelowBannerImg">
                    <Image
                      src={images.otherImages.artwork}
                      alt="artwork"
                      layout="responsive"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ScribbleUnderline d-flex justify-content-center">
            <div className="scribbleInner">
              <Image
                src={images.otherImages.scribble}
                alt="scribble"
                layout="intrinsic"
                loading="lazy"
              />
            </div>
          </div>

          <div className="startingStrong">
            <div className="row">
              <div className="col-lg-6">
                <div className="startingStrongText ">
                  <h3>Starting strong at Little Aryans Pre-K</h3>
                  <h3 className="mt-lg-5">
                    At Little Aryans Pre-K, each one of us is committed to
                    providing a nurturing environment where every child can
                    thrive. We truly believe that each one of them has what it
                    takes and more to succeed. Not just in school, but also in
                    life.
                  </h3>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 d-flex align-items-center">
                <Swiper
                  pagination={pagination}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  className="mySwiper"
                >
                  {images.startStrongImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="startStrongImg">
                        <Image
                          src={img}
                          alt={`Start Strong ${index + 1}`}
                          layout="responsive"
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="ScribbleUnderline d-flex justify-content-center">
            <div className="scribbleInner">
              <Image
                src={images.otherImages.scribble}
                alt="scribble"
                layout="intrinsic"
                loading="lazy"
              />
            </div>
          </div>

          <div className="homeTitle mt-md-5">
            <h1>Seeing beyond the self</h1>
          </div>

          <div className="homeBanner">
            <div className="homeBannerInner">
              <div className="VideoDemo">
                <YouTube
                  className="videotag"
                  videoId="T8WP0BE7u1w"
                  opts={opts}
                />
              </div>
            </div>
          </div>

          <div className="belowBannerSection">
            <div className="row">
              <div className="col-lg-5 d-flex align-items-center">
                <div className="rightBelowBanner">
                  <h2>
                    Little Aryans Pre-K is one big family. And we all live by
                    Vasudeva Kutumbakam.
                  </h2>
                  <div className="rightBelowBannerImg rightBannerEarth">
                    <Image
                      src={images.otherImages.vasudevKutumbh}
                      alt="artwork"
                      layout="responsive"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-center d-none d-lg-block">
                <div className="verticalLine">
                  <Image
                    src={images.otherImages.verticalLine}
                    alt="line"
                    width={2}
                    height={1000}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="leftBelowBanner">
                  <h4>
                    It is a Sanskrit phrase that translates to, “the world is
                    one family”. It is based on the belief that all beings are
                    interconnected. The world we live in is one big family, and
                    we all have a role to play. We take great pride in living
                    this ethos and ensuring that our students understand the
                    importance of caring for one another.
                  </h4>
                  <h4 className="mt-5">
                    Our vision and values include imparting lessons of empathy,
                    compassion, and respect. We hope to instill a sense of
                    togetherness and community among our students so that they
                    grow up to be responsible global citizens.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="homeTitle">
            <h1>Our Curriculum</h1>
          </div>

          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="CurriculumItem">
                <div className="CurriculumImg">
                  <Image
                    src={images.otherImages.curriculumHome}
                    alt="curriculum"
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
                <h3>Our Curriculum</h3>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="CurriculumItem">
                <div className="CurriculumImg">
                  <Image
                    src={images.otherImages.pedagogyHome}
                    alt="pedagogy"
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
                <h3>Our Pedagogy</h3>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="CurriculumItem">
                <div className="CurriculumImg">
                  <Image
                    src={images.otherImages.onlineLearningHome}
                    alt="online learning"
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
                <h3>Online Learning</h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default MainHomePage;
