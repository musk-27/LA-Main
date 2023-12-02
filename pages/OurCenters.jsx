import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
// Images
import HeadUnderline from '../public/Images/head-bottom.png';
import YellowHeader from '../public/Images/SVG/yellowHeader.svg';
import Center1 from '../public/Images/center1.png';
import NandivaliBottom from '../public/Images/SVG/scribbleDarkGreen.svg';
import NandivaliImg from '../public/Images/nandivali.png';
import ChakkinakaBottom from '../public/Images/chakkinaka-bottom.png';
import ChakkinakaImg from '../public/Images/chakkinaka.png';
import AmbernathBottom from '../public/Images/ambernath-bottom.png';
import AmbernathImg from '../public/Images/ambernath.png';
import KhelMela from '../public/Images/Khel-Mela.gif';
import ArtImg from '../public/Images/Art.gif';
import ScienceImg from '../public/Images/Science.gif';
import useFetch from '@/useFetch';
import BorderImg from '../public/Images/footer-border.png';

const OurCenters = () => {
  const { data } = useFetch('/centers?populate=*');
  // centers Images
  const ImageUrl = 'https://strapi.littlearyans.in';
  // const NandivaliImage = `"https://strapi.littlearyans.in"${data?.attributes?.Images?.data[0]?.attributes?.url}`;
  // console.log(data[0].attributes);
  // const [image, setImage] = useState(NandivaliImage);
  const [image, setImage] = useState(null);
  const [chakkinakaImage, setChakkinakaImage] = useState(ChakkinakaImg);

  const [ambernathImage, setAmbernathImage] = useState(AmbernathImg);

  // ========== For onClick Image Change ==========
  const [centerImages, setCenterImages] = useState({}); // Object to store main images for each center

  // Function to update the main image for a specific center
  const updateMainImage = (centerId, imageUrl) => {
    setCenterImages((prevImages) => ({
      ...prevImages,
      [centerId]: imageUrl,
    }));
  };

  return (
    <div className="ourCentersPage">
      {/* Heading */}
      <div className="centersHead">
        <h1>Our Centers</h1>
        <div className="centerHeadImg">
          <Image src={YellowHeader} alt="underlnine" />
        </div>
      </div>

      {/* Centers Description */}
      <div className="centersDesc">
        <div className="row">
          <div className="col-lg-6">
            <div className="centerDescText">
              <h4>
                We set out to be a haven for joy. A safe space that fosters
                creativity, curiosity and independence. And to do that, we had
                to get the basics right. Well-ventilated classrooms. Non-toxic
                playthings designed to aid in learning. Interactive boards and
                other digital teaching tools. An extensive library of books,
                magazines, periodicals and educational DVDs. A medical area for
                any emergency. We’ve considered every little thing a Little
                Aryan needs to get creative and learn better.
              </h4>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 d-flex justify-content-end align-items-center">
            <div className="centersDescImg centersDescImg1 ">
              <Image src={Center1} alt="underline" />
            </div>
          </div>
        </div>
      </div>

      {/* Center Experience */}
      <div className="centersExperience">
        <div className="centerExpHead">
          <h3>
            The best of technology meets inventive teaching methods for a truly{' '}
            <br />
            joyous learning experience.
          </h3>
        </div>
        <div className="centerExpImages">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className="centerExpImg mb-5">
                <Image src={KhelMela} alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="centerExpImg">
                <Image src={ArtImg} alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="centerExpImg">
                <Image src={ScienceImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Nandivali =================== */}

      {data.map((center, index) => {
        const centerId = center.id; // Assuming you have an ID property in your center data
        const centerMainImage = centerImages[centerId] || ''; // Get the main image for the center
        return (
          <div key={index}>
            <div className="sectionHead">
              <h3>Little Aryans {center.attributes.title}</h3>
              <div className="centerHeadImg">
                <Image src={NandivaliBottom} alt="" />
              </div>
            </div>
            <div className="centersDesc">
              <div className="row">
                <div className="col-lg-5  d-flex flex-column justify-content-start align-items-center">
                  {center.attributes.Images?.data &&
                    center.attributes.Images.data[0] && (
                      <div className="centersDescImg">
                        {/* Main Image */}
                        <Image
                          src={
                            centerMainImage ||
                            `${ImageUrl}${center.attributes.Images.data[0].attributes?.url}`
                          }
                          alt="Little Aryans Infrastructure"
                          width={500}
                          height={500}
                        />
                        {/* Pagination Boxes */}
                        <div className="centerImgBoxes">
                          {center.attributes.Images?.data?.map(
                            (centerImg, i) => (
                              <div
                                className="centerImgBox"
                                key={i}
                                onClick={() =>
                                  updateMainImage(
                                    centerId,
                                    `${ImageUrl}${centerImg.attributes?.url}`
                                  )
                                }
                              >
                                <Image
                                  src={`${ImageUrl}${centerImg.attributes?.url}`}
                                  alt=""
                                  width={400}
                                  height={400}
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 ">
                  <div className="centerDescText topMarginDescText">
                    <p>{center.attributes.Description1}</p>
                    <p>{center.attributes.Description2}</p>
                    <p>{center.attributes.Description3}</p>
                    <div className="descButtons">
                      <Link
                        target="_blank"
                        href={center.attributes.map_location}
                      >
                        <div className="descBtn">
                          <button>Our Location</button>
                        </div>
                      </Link>
                      <Link
                        target="_blank"
                        href="https://online.littlearyans.in/"
                      >
                        <div className="descBtn">
                          <button>Our Fee Structure</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Hybrid Learning */}
      <div className="hybridLearningSec">
        <div className="lineImg">
          <Image src={BorderImg} alt="border" />
        </div>
        <h3>Currently our classrooms are equipped for Hybrid Learning. </h3>
        <div className="lineImg">
          <Image src={BorderImg} alt="border" />
        </div>
      </div>
    </div>
  );
};

export default OurCenters;
