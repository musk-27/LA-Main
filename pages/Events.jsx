import Image from "next/image";
import Link from "next/link";
import Heading from "@/Components/Heading";
// Images
import HeadBottomImg from "../public/Images/pink-head-underline.png";
import CalendarImg from "../public/Images/CalendarImg.png";
import ArrowRight from "../public/Images/Arrow-right.png";
import AwardsGal1 from "../public/Images/AwardsGal1.png";
import CoScholasticGal2 from "../public/Images/coScholasticGal2.png";
import JanmastamiImg from "../public/Images/janmastamiImg.png";
import HoliImg from "../public/Images/holiImg.png";
import GrandparentsImg from "../public/Images/grandparentsImg.png";
import AnnualDayGal1 from "../public/Images/AnnualDayGal1.png";
import AnnualDayGal2 from "../public/Images/AnnualDayGal1.png";
import KhelMelaGal1 from "../public/Images/KhelMelaGal1.png";
import IndependenceDayImg from "../public/Images/IndependenceDayImg.png";
import VidhyaArambhamImg from "../public/Images/VidhyaArambhamImg.png";
import NavratriGal1 from "../public/Images/NavratriGal1.png";
import ChildrensDayGal2 from "../public/Images/ChildrensDayGal2.png";
import ChildrensDayGal1 from "../public/Images/ChildrensDayGal1.png";
import MkpGal1 from "../public/Images/MkpGal1.png";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import useFetch from "@/useFetch";

const Events = () => {
  const { data } = useFetch("/event-galleries?populate=*");
  const ImageApi = "https://meet.littlearyans.in";

  return (
    <div>
      <div className="eventsPage">
        {/* Heading */}
        <Heading headTitle="Events" headBottomImg={PinkHeader} />

        {/*Events Description  */}
        <div className="lessPaddingInfoSection">
          <div className="infoSectionInner">
            <div className="eventsDescText">
              <p>
                At Little Aryans we celebrate a plethora of events that garner
                100% participation from students. Our events centre around
                Indian culture, patriotism and global events. Each event is
                unique in the way it is conducted and gives the child the
                freedom to express.
              </p>
            </div>
            <div className="eventsDescImage">
              <Image src={CalendarImg} alt="" />
            </div>
          </div>
        </div>
        {/* End Events Description */}

        {/* =========== AMITY =============== */}
        {data.map((db, i) => {
          return (
            <div className="amityDaySection" key={i}>
              <div className="amityDayHead">
                <h3>{db.attributes.Title}</h3>
              </div>
              <div className="amityDayDescImgs">
                {/* <div className="row"> */}
                {/*  Description */}
                {/* <div className="col-md-4">
                  <div className="amityDayDesc">
                    <p>{db.attributes.Description}</p>
                    <div className="knowMore">
                      <Link href="/">
                        <h6>KNOW MORE</h6>
                        <div className="knowMoreArrow">
                          <Image src={ArrowRight} alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div> */}
                {/* End Description */}

                {/* Gallery */}
                {/* <div className="col-md-8"> */}
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                    }}
                    speed={3000}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={"auto"}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                  >
                    {db.attributes.Images.data.map((image, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="galleryImage">
                            <Image
                              src={`${ImageApi}${image.attributes.url}`}
                              alt=""
                              width={400}
                              height={400}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                {/* </div> */}
                {/*End  Gallery  */}
                {/* </div> */}
              </div>
            </div>
          );
        })}

        {/* =========== End AMITY ============ */}
      </div>
    </div>
  );
};

export default Events;
