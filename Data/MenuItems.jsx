import NavImage1 from "../public/Images/TeamDescImg.png";
// import NavImage2 from "../public/Images/navbar-explore.png";
import NavImage2 from "../public/Images/NavImage2Copy.jpg";
import ProgramNav1 from "../public/Images/programNav1.png";
import ProgramNav2 from "../public/Images/CurriculumImg.png";
import AdmissionNav1 from "../public/Images/AdmissionNav1.png";
import AdmissionNav2 from "../public/Images/AdmissionNav2.png";
// import GalleryNav1 from "../public/Images/GalleryNav1.png";
import GalleryNav1 from "../public/Images/janmastamiNav.png";
import GalleryNav2 from "../public/Images/GalleryNav2.png";
import parentsNav2 from "../public/Images/parentSupportImg.png";
import MainMenu from "@/Components/Header/MainMenu";

const MenuItems = [
  {
    id: 1,
    title: "ABOUT",
    leftImage: NavImage1,
    leftImgLink: "/OurTeam",
    leftText: "Meet our team",
    rightText: "Explore our centers",
    rightImg: NavImage2,
    rightImgLink: "/OurCenters",
    navClass: "aboutDropdowm",
    navItemClass: "aboutMenuItem",
    linkto: "/OurStory",
    subItems: [
      {
        id: 11,
        title: "Our Story",
        path: "/OurStory",
      },
      {
        id: 12,
        title: "Our Centers",
        path: "/OurCenters",
      },
      {
        id: 13,
        title: "Our Team",
        path: "/OurTeam",
      },
      {
        id: 14,
        title: "Transportation",
        path: "/Transportation",
      },
      {
        id: 15,
        title: "Work with Us",
        path: "/WorkWithUs",
      },
      {
        id: 16,
        title: "Contact Us",
        path: "/ContactUs",
      },
    ],
  },
  {
    id: 2,
    title: "PROGRAM",
    leftImage: ProgramNav1,
    leftText: "Find out about Online Learning",
    leftImgLink: "/OnlineLearning",
    rightText: "Explore our curriculum",
    rightImg: ProgramNav2,
    rightImgLink: "/Curriculum",
    navClass: "programDropdowm",
    navItemClass: "programMenuItem",
    linkto: "/Pedagogy",
    subItems: [
      {
        id: 21,
        title: "Pedagogy",
        path: "/Pedagogy",
      },
      {
        id: 22,
        title: "Curriculum",
        path: "/Curriculum",
      },
      {
        id: 23,
        title: "Online Learning",
        path: "/OnlineLearning",
      },
      {
        id: 24,
        title: "Staff Edurichment",
        path: "/StaffEdurichment",
      },
    ],
  },
  {
    id: 3,
    title: "ADMISSION",
    leftImage: AdmissionNav1,
    leftText: "Learn about Home Learning Kits",
    leftImgLink: "/HomeLearningKit",
    rightText: "How to enrol with us?",
    rightImg: AdmissionNav2,
    rightImgLink: "/ApplyNow",
    navClass: "admissionDropdowm",
    navItemClass: "admissionMenuItem",
    linkto: "/ApplyNow",
    subItems: [
      {
        id: 31,
        title: "Apply Now",
        path: "/ApplyNow",
      },
      {
        id: 32,
        title: "Home Learning Kit",
        path: "/HomeLearningKit",
      },
      {
        id: 33,
        title: "FAQs",
        path: "/Faqs",
      },
      {
        id: 34,
        title: "Policies",
        path: "/Policies",
      },
    ],
  },
  {
    id: 4,
    title: "GALLERY",
    leftImage: GalleryNav1,
    leftText: "How we celebrated Janmashthami",
    leftImgLink: "/Events",
    rightText: "Take a tour of LA Chakkinaka",
    rightImgLink: "/SchoolTour",
    rightImg: GalleryNav2,
    navClass: "galleryDropdowm",
    navItemClass: "galleryMenuItem",
    linkto: "/Scholastic",
    subItems: [
      {
        id: 41,
        title: "Scholastic",
        path: "/Scholastic",
      },
      {
        id: 42,
        title: "Co-Scholastic",
        path: "/CoScholastic",
      },
      {
        id: 43,
        title: "Awards",
        path: "/Awards",
      },
      {
        id: 44,
        title: "School Tour",
        path: "/SchoolTour",
      },
      {
        id: 45,
        title: "Digital Transformation",
        path: "/DigitalTransformation",
      },
      {
        id: 46,
        title: "Events",
        path: "/Events",
      },
      {
        id: 47,
        title: "Video Gallery",
        path: "/VideoGallery",
      },
    ],
  },
  {
    id: 5,
    title: "PARENTS",
    // title: <MainMenu title="PARENTS" path="/Parents" />,
    leftImage: NavImage1,
    leftText: "Meet our team",
    leftImgLink: "/Parents",
    rightText: "How we collaborate with parents",
    rightImgLink: "/Parents",
    rightImg: parentsNav2,
    navClass: "parentsDropdowm",
    navItemClass: "parentsMenuItems",
    linkto: "/Parents",
    subItems: [
      {
        id: 51,
        title: "Parents - Our Partners",
        path: "/Parents",
      },
      {
        id: 52,
        title: "Monthly Calendar",
        path: "/MonthlyCalendar",
      },
      {
        id: 53,
        title: "Our Blogs",
        path: "/OurBlogs",
      },
    ],
  },
];

export default MenuItems;
