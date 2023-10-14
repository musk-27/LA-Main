import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";
// ===== Images ========
import BannerImg from "../public/Images/homeBanner.png";
import Banner1 from "../public/Images/Home/Banner1.png";
import Banner2 from "../public/Images/Home/Banner2.png";
import Banner3 from "../public/Images/Home/Banner3.png";
import Banner4 from "../public/Images/Home/Banner4.png";
import Banner5 from "../public/Images/Home/Banner5.png";
import VerticalLine from "../public/Images/VerticalLine.png";
// import Scribble from "../public/Images/ambernath-bottom.png";
import Scribble from "../public/Images/SVG/scribblePurple.svg";
import StartStrongImg from "../public/Images/admissionImg.png";
import SeeBeyondSelfImg from "../public/Images/seeBeyondSelfImg.png";
import OnlineLearningHomeImg from "../public/Images/OnlineLearningHomeImg.png";
import PedagogyHomeImg from "../public/Images/PedagogyHomeImg.png";
import CurriculumHomeImg from "../public/Images/curriculumHomeImg.png";
import Underline from "../public/Images/ambernath-bottom.png";
import HorizontalLine from "../public/Images/team-line.png";
import Arrow from "../public/Images/Arrow-right.png";
import Artwork from "../public/Images/Home/Artwork.png";
import VasudevKutumbhImg from "../public/Images/Home/work-with-us-wbg.png";

import StartStrong1 from "../public/Images/Home/StartStrong/img1.jpg";
import StartStrong2 from "../public/Images/Home/StartStrong/img2.jpg";
import StartStrong3 from "../public/Images/Home/StartStrong/img3.jpg";
import StartStrong4 from "../public/Images/Home/StartStrong/img4.jpg";

import Why1 from "../public/Images/Home/WhyUs/why1.jpg";
import Why2 from "../public/Images/Home/WhyUs/why2.jpg";
import Why3 from "../public/Images/Home/WhyUs/why3.jpg";
import Why4 from "../public/Images/Home/WhyUs/why4.jpg";

// ==== Swiper ======
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "@/useFetch";
import Countdown from "@/Components/Countdown";

const MainHomePage = () => {
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
      // https://developers.google.com/youtube/player_parameters
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
      // https://developers.google.com/youtube/player_parameters
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
      <div className="LAHome">
        {/* Tagline */}
        <div className="homeTitle">
          <h1>Setting the stage for a bright future</h1>
        </div>

        {/* Banner */}
        <div className="homeBanner">
          {/* <div className="homeBannerInner">
            <Image src={BannerImg} alt="little-aryans" />
          </div> */}
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
            {/* <SwiperSlide>
              <div className="VideoDemo">
                <YouTube
                  className="videotag"
                  videoId="T8WP0BE7u1w"
                  opts={opts}
                />
              </div>
            </SwiperSlide> */}

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
                  children&apos;s brains are growing fast and most neural
                  pathways are formed. When they are learning about the world
                  around them. Becoming self-aware and developing their
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
                <Image src={VerticalLine} alt="line" width={2} />
              </div>
            </div>
            {/* <div className="col-lg-2 d-flex justify-content-center d-block d-md-none">
              <div className="horizontalLine">
                <Image src={HorizontalLine} alt="line" />
              </div>
            </div> */}
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
                {/* <h4 className="mt-5">
                  Our curriculum covers all domains of learning. We offer a
                  variety of activities that help children to develop their
                  physical, emotional, social, and intellectual skills. We also
                  create a safe and supportive environment where children feel
                  comfortable taking risks and exploring their interests.
                  Everything we do, we do to make learning a truly joyous
                  experience for them.
                </h4> */}
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 d-flex  align-items-center">
              {/* <div className="startStrongImg">
                <Image src={StartStrongImg} alt="little-aryans" />
              </div> */}
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
          {/* <Swiper
            pagination={pagination}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={SeeBeyondSelfImg} alt="little-aryans" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={SeeBeyondSelfImg} alt="little-aryans" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeBannerInner">
                <Image src={SeeBeyondSelfImg} alt="little-aryans" />
              </div>
            </SwiperSlide>
          </Swiper> */}
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
              {/* <div className="startStrongImg">
                <Image src={StartStrongImg} alt="little-aryans" />
              </div> */}
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
                          <Image src={Arrow} alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="otherPageLink">
                  <div className="otherPageLinkImg">
                    {/* <Image src={PedagogyHomeImg} alt="little-aryans" /> */}
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
                          <Image src={Arrow} alt="" />
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
                          <Image src={Arrow} alt="" />
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
                  <Image src={Arrow} alt="" />
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
                      {/* <h3>{td.attributes.title}</h3> */}
                      {/* <h3>Testimonial {td.id}</h3> */}
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

export default MainHomePage;
