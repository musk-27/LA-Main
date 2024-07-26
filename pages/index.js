import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import YouTube from "react-youtube";
import { Facebook } from "../utils/Facebook";
import Arrow from "../public/Images/Arrow-right.png";
// import Banner1 from "../public/Images/Home/Banner1.png";
import Banner1 from "../public/Images/Home/Banner1.jpg";
// ===== Images ========
import BannerImg from "../public/Images/homeBanner.png";
import Banner2 from "../public/Images/Home/Banner2.jpg";
import Banner3 from "../public/Images/Home/Banner3.jpg";
import Banner4 from "../public/Images/Home/Banner4.jpg";
import Banner5 from "../public/Images/Home/Banner5.jpg";
import Artwork from "../public/Images/Home/Artwork.png";
import HorizontalLine from "../public/Images/team-line.png";
import VerticalLine from "../public/Images/VerticalLine.png";
import Underline from "../public/Images/ambernath-bottom.png";
import Scribble from "../public/Images/SVG/scribblePurple.svg";
import StartStrongImg from "../public/Images/admissionImg.png";
import PedagogyHomeImg from "../public/Images/PedagogyHomeImg.png";
import SeeBeyondSelfImg from "../public/Images/seeBeyondSelfImg.png";
import CurriculumHomeImg from "../public/Images/curriculumHomeImg.jpg";
import VasudevKutumbhImg from "../public/Images/Home/work-with-us-wbg.png";
import OnlineLearningHomeImg from "../public/Images/OnlineLearningHomeImg.jpg";

import StartStrong1 from "../public/Images/Home/StartStrong/img1.jpg";
import StartStrong2 from "../public/Images/Home/StartStrong/img2.jpg";
import StartStrong3 from "../public/Images/Home/StartStrong/img3.jpg";
import StartStrong4 from "../public/Images/Home/StartStrong/img4.jpg";

import Why1 from "../public/Images/Home/WhyUs/why1.jpg";
import Why2 from "../public/Images/Home/WhyUs/why2.jpg";
import Why3 from "../public/Images/Home/WhyUs/why3.jpg";
import Why4 from "../public/Images/Home/WhyUs/why4.jpg";

import Manthan from "../public/Images/Manthan/ManthanSlider.jpg";

// ==== Swiper ======
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "useFetch.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const LAHome = () => {
  // Banner Pagination
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>'; // Return an empty span
    },
  };

  // Testimonials
  const { data } = useFetch("/testimonials?populate=*");

  // Banner Video
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0, // Hide video controls
      disablekb: 1, // Disable keyboard controls
      fs: 0, // Hide fullscreen button
      rel: 0, // Don't show related videos at the end
      showinfo: 0, // Hide video title and uploader information
    },
  };

  const optsLinks = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0, // Hide video controls
      disablekb: 1, // Disable keyboard controls
      fs: 0, // Hide fullscreen button
      rel: 0, // Don't show related videos at the end
      showinfo: 0, // Hide video title and uploader information
      mute: 1, // Mute the video (disable sound)
    },
  };

  return (
    <div>
      <Facebook />
      <div className="LAHome">
        {/* Tagline */}
        <div className="homeTitle">
          <h1>Setting the stage for a bright future</h1>
        </div>

        {/* Banner */}
        <div className="homeBanner">
          <Swiper
            pagination={pagination}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="mySwiper"
          >
            {/* Manthan Slider */}
            <SwiperSlide>
              <div className="homeBannerInner">
                <Link href="/Manthan">
                <Image src={Manthan} alt="little-aryans" /></Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={Banner2} alt="little-aryans" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={Banner3} alt="little-aryans" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={Banner4} alt="little-aryans" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={Banner5} alt="little-aryans" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={Banner1} alt="little-aryans" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="belowBannerSection">
          <div className="row">
            <div className="col-lg-5">
              <div className="leftBelowBanner">
                <h4>
                  Early childhood is a crucial time. This is when
                  children&apos;s brains are growing rapidly, and most neural
                  pathways are formed. They are learning about the world around
                  them, becoming self-aware, and developing their self-esteem.
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
                <Image src={VerticalLine} alt="line" width={2} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rightBelowBanner">
                <h3>
                  To reach their full potential in the future, even outside of
                  school, every child needs to start with holistic education.
                </h3>
                <div className="rightBelowBannerImg">
                  <Image src={Artwork} alt="artwork" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ScribbleUnderline d-flex justify-content-center">
          <div className="scribbleInner">
            <Image src={Scribble} alt="scribble" />
          </div>
        </div>

        {/* Starting Strong */}
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
            <div className="col-lg-5 d-flex  align-items-center">
              <Swiper
                pagination={pagination}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={StartStrong1} alt="little-aryans" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={StartStrong2} alt="little-aryans" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={StartStrong3} alt="little-aryans" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={StartStrong4} alt="little-aryans" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="ScribbleUnderline d-flex justify-content-center">
          <div className="scribbleInner">
            <Image src={Scribble} alt="scribble" />
          </div>
        </div>

        {/* Seeing Beyond Self */}
        <div className="homeTitle mt-md-5">
          <h1>Seeing beyond the self</h1>
        </div>

        <div className="homeBanner">
          <div className="homeBannerInner">
            <div className="VideoDemo">
              <YouTube className="videotag" videoId="T8WP0BE7u1w" opts={opts} />
            </div>
          </div>
        </div>
        <div className="belowBannerSection">
          <div className="row">
            <div className="col-lg-5  d-flex align-items-center ">
              <div className="rightBelowBanner">
                <h2>
                  Little Aryans Pre-K is one big family. And we all live by
                  Vasudeva Kutumbakam.
                </h2>
                <div className="rightBelowBannerImg rightBannerEarth">
                  <Image src={VasudevKutumbhImg} alt="artwork" />
                </div>
              </div>
            </div>

            <div className="col-lg-2 d-flex justify-content-center d-none d-lg-block">
              <div className="verticalLine">
                <Image src={VerticalLine} alt="line" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="leftBelowBanner">
                <h4>
                  It is a Sanskrit phrase that translates to, “the world is one
                  family &quot;. It is based on the belief that all living
                  beings are interconnected. Meaning, we have a responsibility
                  to care for each other and to work together for the common
                  good.
                </h4>
                <h4 className="mt-5">
                  We teach every child that they are part of something bigger
                  than themselves because it
                </h4>
                <ul>
                  <li>Instils empathy and compassion in them</li>
                  <li>Encourages cooperation and collaboration</li>
                  <li>Makes them appreciate our differences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ScribbleUnderline d-flex justify-content-center">
          <div className="scribbleInner">
            <Image src={Scribble} alt="scribble" />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="startingStrong">
          <div className="row">
            <div className="col-lg-5">
              <div className="startingStrongText">
                <h3>Why choose Little Aryans Pre-K?</h3>
                <ol className="mt-5">
                  <li className="mt-4">
                    <h4>
                      We offer high-quality education, tailored to the
                      individual needs of each child.
                    </h4>
                  </li>
                  <li className="mt-4">
                    <h4>
                      We have a nurturing environment where children feel safe
                      and supported.
                    </h4>
                  </li>
                  <li className="mt-4">
                    <h4>
                      We have an experienced staff dedicated to helping your
                      child succeed.
                    </h4>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5 d-flex  align-items-center">
              <Swiper
                pagination={pagination}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={Why1} alt="little-aryans" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={Why2} alt="little-aryans" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={Why3} alt="little-aryans" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="startStrongImg">
                    <Image src={Why4} alt="little-aryans" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        {/* Other Page Links */}
        <div className="otherPageLinks d-flex justify-content-center">
          <div className="otherPageLinksInner">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 d-flex justify-content-center">
                <div className="otherPageLink">
                  <div className="otherPageLinkImg">
                    <Image src={CurriculumHomeImg} alt="little-aryans" />
                  </div>
                  <div className="otherPageLinkText">
                    <h3>Curriculum</h3>
                    <p>
                      Thoughtfully designed to encourage children’s holistic
                      development. Combines a play-based approach with
                      social-emotional learning, creativity and exploration.
                    </p>
                    <Link href="/Curriculum">
                      <div className="knowMoreBtn">
                        <h6>KNOW MORE</h6>
                        <div className="arrowImg">
                          <Image src={Arrow} alt="Nursery School" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="otherPageLink">
                  <div className="otherPageLinkImg">
                    <YouTube
                      className="videotag"
                      videoId="4KKqEkjOVzI"
                      opts={optsLinks}
                    />
                  </div>
                  <div className="otherPageLinkText">
                    <h3>Pedagogy</h3>
                    <p>
                      Our approach is built on learnings from various pedagogies
                      like Montessori and Kindergarten. All for promoting
                      self-learning and self-discovery.
                    </p>
                    <Link href="/Pedagogy">
                      <div className="knowMoreBtn">
                        <h6>KNOW MORE</h6>
                        <div className="arrowImg">
                          <Image src={Arrow} alt="Toddler Activities" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="otherPageLink">
                  <div className="otherPageLinkImg">
                    <Image src={OnlineLearningHomeImg} alt="little-aryans" />
                  </div>
                  <div className="otherPageLinkText">
                    <h3>Online Learning</h3>
                    <p>
                      An online learning programme that goes beyond screens,
                      with experiential hands-on learning kits. For children who
                      can’t go to school for some reason.
                    </p>
                    <Link href="/OnlineLearning">
                      <div className="knowMoreBtn">
                        <h6>KNOW MORE</h6>
                        <div className="arrowImg">
                          <Image src={Arrow} alt="Preschool Curriculum" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Apply Now  */}
        <div className="homeApplyNow">
          <div className="homeApplyHead">
            <h1>Apply Now</h1>
            <h4>
              Get your child started on the journey to become the best version
              of themselves.Get them to be a Little Aryan.
            </h4>
            <Link href="/ApplyNow">
              <div className="knowMoreBtn">
                <h6>KNOW MORE</h6>
                <div className="arrowImg">
                  <Image src={Arrow} alt="Montessori Method" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="scribbleEffSection">
          <div className="ParentUnderlineImg scribbleEff ">
            <Image src={Scribble} alt="little-aryans" />
          </div>
        </div>

        {/* ============= Testimonials =================== */}

        <div className="testimonialHead">
          <h1>From Our Community</h1>
        </div>

        {/* Testimonials Boxes */}
        <div className="testimonalSection">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {data.map((td, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="testimonialBox">
                    <div className="testimonalBoxHead">
                      <h4 className="testimonalText">
                        {td.attributes.testimonial_text}
                      </h4>
                      <div className="d-flex justify-content-center">
                        -
                        <h4 className="custom-testimonial-text">
                          {td.attributes.testimonial_by}
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* End Testimonials Boxes */}

        <div className="scribbleEffSection">
          <div className="ParentUnderlineImg scribbleEff d-flex justify-content-center">
            <Image src={Scribble} alt="little-aryans" />
          </div>
        </div>

        {/* === */}
      </div>
    </div>
  );
};

export default LAHome;
