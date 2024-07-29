import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page } from "react-pdf";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import pdf from "../public/ByteBeatJan2024.pdf.pdf.pdf";
import Heading from "../Components/Heading";
import RedHeader from "../public/Images/SVG/redHeader.svg";
import Layout from "../Components/layout";
import Image from "next/image";
import LeftArrow from "../public/Images/left-arrow.png";
import RightArrow from "../public/Images/right-arrow.png";

// Custom Pages component
const Pages = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

Pages.displayName = "Pages";

function ManthanPage() {

    const metaData = {
        title: `Little Aryan's Pre K`,
        description:
            `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
        keywords: `Toddler Activities, Preschool Curriculum, Montessori Method, Kalyan`
    };

    const [numPages, setNumPages] = useState();
    const flipBookRef = useRef(null);

    const handleButtonClick = () => {
        window.location.href = "https://forms.office.com/pages/responsepage.aspx?id=HCjVkODFoUGjEA7s35mwHuXuFPkZSsxNrWwPajaWgOlUNTlGMFA0MUtZMTJaU1MyUkVIVENDNUZYUi4u";
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handlePrevPage = () => {
        flipBookRef.current.pageFlip().flipPrev();
    };

    const handleNextPage = () => {
        flipBookRef.current.pageFlip().flipNext();
    };

    return (
        <Layout metaData={metaData} includeHeaderFooter={false}>
            <div className="ourManthan">
                <div className="manthanPage">
                    <div>
                        <Heading headTitle="Manthan 2023-2024" headBottomImg={RedHeader} />
                    </div>
                    <div className="manthanContainer">
                        <div className="manthanLeft" style={{ position: "relative" }}>
                            {/* <div className="navArrow prevArrow" onClick={handlePrevPage}>
                                <IoIosArrowBack />
                            </div> */}
                            <div className="navArrow leftArrow" onClick={handlePrevPage}>
                                <Image src={LeftArrow} alt="Previous Page" />
                            </div>
                            
                            {/* <div className="navArrow swiper-button-prev" onClick={handlePrevPage}>
                                <Image src={LeftArrow} alt="Previous Page" />
                            </div> */}
                            {/* <div className="swiper-button-prev" onClick={handlePrevPage}></div> */}
                            <HTMLFlipBook
                                width={400}
                                height={570}
                                ref={flipBookRef}

                            >
                                {[...Array(numPages).keys()].map((pNum) => (
                                    <Pages key={pNum} number={pNum + 1}>
                                        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                            <Page
                                                pageNumber={pNum + 1}
                                                width={400}
                                                renderAnnotationLayer={false}
                                                renderTextLayer={false}
                                            />
                                        </Document>
                                        {/* <p>
                                            Page {pNum + 1} of {numPages}
                                        </p> */}
                                    </Pages>
                                ))}
                            </HTMLFlipBook>
                            {/* <div className="navArrow nextArrow" onClick={handleNextPage}>
                                <IoIosArrowForward />
                            </div> */}
                            <div className="navArrow rightArrow" onClick={handleNextPage}>
                                <Image src={RightArrow} alt="Next Page" />
                            </div>
                            {/* <div className="navArrow swiper-button-next" onClick={handleNextPage}>
                                <Image src={RightArrow} alt="Next Page" />
                            </div> */}
                             {/* <div className="swiper-button-next" onClick={handleNextPage}></div> */}
                        </div>
                        <div className="manthanRight">
                            <div className="manthanSteps">
                                {/* <p className = "stepsHead">STEPS FOR REGISTRATION</p> */}
                                <h3 className="stepsHead">STEPS FOR REGISTRATION</h3>
                                <ol>
                                    <li>Registrations will close at 4:00pm on Thursday, 25th July 2024.</li>
                                    <li>The School Registration Forms and Category-wise Registration Forms, as hard copies should be carried to the venue school and submitted to the reception before the competition.</li>
                                    <li>Separate registration forms to be submitted for each competition. (<a href="mailto:manthan.etf@aryagurukul.in">manthan.etf@aryagurukul.in</a>)</li>
                                    <li>Please mention in Subject: MANTHAN – Enrolment – XYZ School.</li>
                                    <li>If you do not receive a confirmation email, please resend your registration after checking the email Id.</li>
                                    <li>Queries and communication related to registration, online submissions may be mailed to <a href="mailto:manthan.etf@aryagurukul.in">manthan.etf@aryagurukul.in</a></li>
                                    <li>Telephonic inquiries can be made to <a href="tel:9833163608">9833163608</a> between 9:00am and 3:00pm only on weekdays.</li>
                                </ol>
                            </div>
                            <div className="manthanLink">
                                <button onClick={handleButtonClick} className="manthanClick">Registration</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ManthanPage;

