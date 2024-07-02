import Image from "next/image";
import Link from "next/link";
import Heading from "../Components/Heading";
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
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import useFetch from "useFetch.js";

const EventsBackup = () => {
  const { data } = useFetch("/event-galleries?populate=*");

  return (
    <div>
      <div className="eventsPage">
        {/* Heading */}
        <Heading headTitle="Events" headBottomImg={HeadBottomImg} />

        {/*Events Description  */}
        <div className="infoSection">
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
              <Image src={CalendarImg} alt="Preschool Events" />
            </div>
          </div>
        </div>
        {/* End Events Description */}

        {/* =========== AMITY =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>AMITY</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    The special bonds of friendship are celebrated through
                    traditional Indian stories of legendary friendships such as
                    the one between Krishna and Sudama. Children enact these
                    stories, sing songs and wish each other on this day.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Language Development" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                    }}
                    speed={30000}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={"auto"}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={AwardsGal1}
                          alt="Motor Skills Development"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={CoScholasticGal2}
                          alt="Art and Craft Activities"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AwardsGal1} alt="Storytelling Sessions" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={CoScholasticGal2}
                          alt="Music and Movement"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== End AMITY ============ */}

        {/* =========== Ganesh Chaturthi =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>GANESH CHATURTHI</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    The auspicious festival of Ganesh Chaturthi is celebrated
                    with fervour by children creating their own Ganeshas using
                    eco- friendly material such as Sadhu matti. Children are
                    exposed to the entire cycle of the unique festival starting
                    from sthapana to the visarjan, using eco- friendly means
                    like reusing the flowers and offerings and performing
                    visarjan at a man-made pond inside the school premises. This
                    helps children understand the importance of celebrating
                    festivals without harming the environment.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Preschool Admissions" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AwardsGal1} alt="Kalyan" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={CoScholasticGal2} alt="thane" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AwardsGal1} alt="Kalyan west" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={CoScholasticGal2} alt="chakkinaka" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== End Ganesh Chaturthi ============ */}

        {/* =========== DIWALI =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>DIWALI</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>Need this write up</p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Ambernath" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AwardsGal1} alt="Happy child" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={CoScholasticGal2}
                          alt="Early Childhood Education"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AwardsGal1} alt="Best Preschool Programs" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={CoScholasticGal2} alt="Child Development" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== End DIWALI ============ */}

        {/* =========== JANMASTHAMI =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>JANMASTHAMI</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    The school gets a makeover as it looks like Vrindavan and
                    stories from Krishna’s life are recreated. Children engage
                    in various delightful activities such as butter making, head
                    gear making, handi decoration etc. This creates awareness in
                    children about our rich culture and tradition, along with a
                    sense of awe for Indian mythology.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Kindergarten Readiness" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="festivalImage">
                  <Image src={JanmastamiImg} alt="Play-Based Learning" />
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== End JANMASTHAMI ============ */}

        {/* =========== HOLI =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>HOLI</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>Need this write up</p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Nursery School" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="festivalImage">
                  <Image src={HoliImg} alt="Toddler Activities" />
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== End HOLI ============ */}

        {/* =========== GRANDPARENTS DAY =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>GRANDPARENTS DAY</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    A special, fun-filled day is organised for the loving
                    grandparents of Little Aryans. Children put up various
                    performances and welcome their grandparents to their school
                    creating memorable moments with them. Special health camps
                    and medical check-ups are also organised on this day. This
                    strengthens family bonds and gives children the pleasure of
                    showing off their skills in front of their grandparents.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Preschool Curriculum" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="festivalImage">
                  <Image src={GrandparentsImg} alt="Montessori Method" />
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== GRANDPARENTS DAY ============ */}

        {/* =========== ANNUAL DAY =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>ANNUAL DAY</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    The Little Aryans Annual Days help children showcase their
                    multiple talents, through music, acting, singing, dance or
                    through emceeing. Little children host the event from the
                    start to the end. 100% participation ensures that all
                    children get a chance to contribute to the event. Our
                    ‘book-based’ annual days are a treat to the audience’s eyes
                    and our parents vouch for the uniqueness of the event.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Daycare Services" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AnnualDayGal1} alt="After-School Care" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AnnualDayGal2} alt="Child Safety" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={AnnualDayGal1}
                          alt="Learning through Play"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AnnualDayGal2} alt="Preschool Enrollment" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== ANNUAL DAY ============ */}

        {/* =========== KHEL MELA =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>KHEL MELA</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    The Little Aryans Annual Days help children showcase their
                    multiple talents, through music, acting, singing, dance or
                    through emceeing. Little children host the event from the
                    start to the end. 100% participation ensures that all
                    children get a chance to contribute to the event. Our
                    ‘book-based’ annual days are a treat to the audience’s eyes
                    and our parents vouch for the uniqueness of the event.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image
                          src={ArrowRight}
                          alt="Parent-Teacher Communication"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={KhelMelaGal1}
                          alt="School Readiness Skills"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AnnualDayGal2} alt="Educational Games" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AnnualDayGal1} alt="Holistic Development" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={AnnualDayGal2} alt="Pre-K Education" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== KHEL MELA ============ */}

        {/* =========== INDEPENDENCE DAY =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>INDEPENDENCE DAY</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    This day is celebrated by hoisting the Indian Flag, singing
                    songs and listening to stories about our great freedom
                    fighters. Children engage in various activities that
                    facilitate their knowledge about the Indian tricolour and
                    creates a sense of love and respect for the nation.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Sensory Activities" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="festivalImage">
                  <Image src={IndependenceDayImg} alt="Cognitive Development" />
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== INDEPENDENCE DAY ============ */}

        {/* =========== VIDYA ARAMBHAM =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>VIDYA ARAMBHAM</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    This ancient practice denotes the initiation of learning and
                    is held on the day of Dussehra. Children seek the blessings
                    of Goddess Saraswati. The ritual consists of several steps
                    such as making a child write on sand, writing on grains of
                    rice and inscribing the powerful Ganesh mantra on the
                    child’s tongue with gold. Each step signifies a certain idea
                    such as practise, mastery over knowledge and wealth or
                    prosperity. Children also seek the blessings of their
                    parents.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="Social Skills" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={VidhyaArambhamImg} alt="Emotional Growth" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={VidhyaArambhamImg} alt="Preschool Events" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={VidhyaArambhamImg}
                          alt="Language Development"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image
                          src={VidhyaArambhamImg}
                          alt="Motor Skills Development"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== End VIDYA ARAMBHAM ============ */}

        {/* =========== NAVRATRI =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>NAVRATRI</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>Need this write up</p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image
                          src={ArrowRight}
                          alt="Art and Craft Activities"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={NavratriGal1} alt="Music and Movement" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={NavratriGal1} alt="Storytelling Sessions" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={NavratriGal1} alt="Kalyan" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={NavratriGal1} alt="Preschool Admissions" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== End NAVRATRI ============ */}

        {/* =========== CHILDRENS DAY =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>CHILDRENS DAY</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    This special day dedicated to children is celebrated in
                    various ways. Our newest practise is to hold a grand Singing
                    Competition, using the new-age digital platform, where
                    children upload their performances on YouTube and share on
                    social media platforms and our Website. Popular videos and
                    performance are recognised through awards and certificates.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image src={ArrowRight} alt="thane" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={ChildrensDayGal2} alt="Kalyan west" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={ChildrensDayGal1} alt="chakkinaka" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={ChildrensDayGal2} alt="Ambernath" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={ChildrensDayGal1} alt="Happy child" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== CHILDRENS DAY ============ */}

        {/* =========== MKP =============== */}
        <div className="amityDaySection">
          <div className="amityDayHead">
            <h3>MKP</h3>
          </div>
          <div className="amityDayDescImgs">
            <div className="row">
              {/*  Description */}
              <div className="col-md-4">
                <div className="amityDayDesc">
                  <p>
                    These are Bagless Days, where children come to school and
                    spend a few days doing activities that they love. Several
                    booths are created where children can try their hands at
                    fireless cooking, art and craft, don the hats of a
                    shopkeeper or a vegetable vendor. Children are given
                    absolute freedom to explore and express themselves as they
                    like. They also spend a night at school in a special event
                    called Nisha Swasthi. These activities help make children
                    independent, learn essential life-skills and helps them
                    express better.
                  </p>
                  <div className="knowMore">
                    <Link href="/">
                      <h6>KNOW MORE</h6>
                      <div className="knowMoreArrow">
                        <Image
                          src={ArrowRight}
                          alt="Early Childhood Education"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Description */}

              {/* Gallery */}
              <div className="col-md-8">
                <div className="amityGallerySwiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={MkpGal1} alt="Best Preschool Programs" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={MkpGal1} alt="Child Development" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={MkpGal1} alt="Kindergarten Readiness" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="galleryImage">
                        <Image src={MkpGal1} alt="Play-Based Learning" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/*End  Gallery  */}
            </div>
          </div>
        </div>
        {/* =========== MKP ============ */}
      </div>
    </div>
  );
};

export default EventsBackup;
