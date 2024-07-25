
// // import React from 'react';
// // import HTMLFlipBook from 'react-pageflip';
// // import { useState } from 'react';
// // import { Document, Page, pdfjs } from 'react-pdf';
// // // import pdf from './ByteBeatJan2024.pdf.pdf';
// // // import pdf from "../Components/ByteBeatJan2024.pdf.pdf"
// // import Heading from "../Components/Heading";
// // import RedHeader from "../public/Images/SVG/redHeader.svg";
// // import Image from "next/image";
// // import ManthanImage from "../public/Images/Manthan/ManthanImage.jpg";
// // // import pdf  from "../public/Images/Manthan/ManthanBrochure2024_Final.pdf";
// // import pdf from "../Components/ByteBeatJan2024.pdf.pdf";

// // // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// // // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // // const Pages = React.forwardRef((props, ref) => {
// // //   return (
// // //     <div className="demoPage" ref={ref}>
// // //       <p>{props.children}</p>
// // //       <p>Page number: {props.number}</p>
// // //     </div>
// // //   );
// // // });

// // const Pages = React.forwardRef((props, ref) => {
// //   return (
// //     <div className="demoPage" ref={ref}>
// //       <div>{props.children}</div> {/* Container for children */}
// //       <div>Page number: {props.number}</div> {/* Page number */}
// //     </div>
// //   );
// // });



// // Pages.displayName = 'Pages';

// // function ManthanPage() {

// //   const handleButtonClick = () => {
// //     window.location.href = "https://forms.office.com/pages/responsepage.aspx?id=HCjVkODFoUGjEA7s35mwHuXuFPkZSsxNrWwPajaWgOlUNTlGMFA0MUtZMTJaU1MyUkVIVENDNUZYUi4u";
// //   };

// //   const [numPages, setNumPages] = useState();

// //   function onDocumentLoadSuccess({ numPages }) {
// //     setNumPages(numPages);
// //   }

// //   return (
// //     <div className="manthanPage">
// //       <div>
// //         <Heading headTitle="Manthan Page" headBottomImg={RedHeader} />
// //         <div className="manthan-page">
// //           <h5>MANTHAN 2024 - STEPS TO REGISTER</h5>
// //         </div>
// //       </div>

// //       <div className="manthanContainer">
// //         <div className="manthanLeft">
// //           <HTMLFlipBook width={400} height={570}>
// //             {[...Array(numPages).keys()].map((pNum) => (
// //               <Pages key={pNum} number={pNum + 1}>
// //                 <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
// //                   <Page pageNumber={pNum + 1} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
// //                 </Document>
// //                 <p>
// //                   Page {pNum + 1} of {numPages}
// //                 </p>
// //               </Pages>
// //             ))}
// //           </HTMLFlipBook>
// //           <p>Some text below the image</p>
// //         </div>
// //         <div className="manthanRight">
// //           <div className="manthanSteps">
// //             <ol>
// //               <li>Registrations will close at 4:00pm on Thursday, 25th July 2024.</li>
// //               <li>The School Registration Forms and Category-wise Registration Forms, as hard copies should be carried to the venue school and submitted to the reception before the competition.</li>
// //               <li>Separate registration forms to be submitted for each competition. (manthan.etf@aryagurukul.in)</li>
// //               <li>Please mention in Subject: MANTHAN – Enrolment – XYZ School.</li>
// //               <li>If you do not receive a confirmation email, please resend your registration after checking the email Id.</li>
// //               <li>Queries and communication related to registration, online submissions may be mailed to manthan.etf@aryagurukul.in</li>
// //               <li>Telephonic inquiries can be made to 9833163608 between 9:00am and 3:00pm only on weekdays.</li>
// //             </ol>
// //           </div>
// //           <div className="manthanLink">
// //             <button onClick={handleButtonClick} className="manthanClick">Registration</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ManthanPage;
// import React, { useState } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import { Document, Page, pdfjs } from 'react-pdf';
// import Heading from "../Components/Heading";
// import RedHeader from "../public/Images/SVG/redHeader.svg";
// import Image from "next/image";
// import ManthanImage from "../public/Images/Manthan/ManthanImage.jpg";

// // Update the path to the PDF in the public directory
// const pdf = "../public/ByteBeatJan2024.pdf.pdf";

// // Correct worker source path
// pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

// const Pages = React.forwardRef((props, ref) => (
//   <div className="demoPage" ref={ref}>
//     {props.children}
//     <p>Page number: {props.number}</p>
//   </div>
// ));

// Pages.displayName = 'Pages';

// function ManthanPage() {
//   const [numPages, setNumPages] = useState();

//   const handleButtonClick = () => {
//     window.location.href = "https://forms.office.com/pages/responsepage.aspx?id=HCjVkODFoUGjEA7s35mwHuXuFPkZSsxNrWwPajaWgOlUNTlGMFA0MUtZMTJaU1MyUkVIVENDNUZYUi4u";
//   };

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="manthanPage">
//       <div>
//         <Heading headTitle="Manthan Page" headBottomImg={RedHeader} />
//         <div className="manthan-page">
//           <h5>MANTHAN 2024 - STEPS TO REGISTER</h5>
//         </div>
//       </div>

//       <div className="manthanContainer">
//         <div className="manthanLeft">
//           <HTMLFlipBook width={400} height={570}>
//             {[...Array(numPages).keys()].map((pNum) => (
//               <Pages key={pNum} number={pNum + 1}>
//                 <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
//                   <Page
//                     pageNumber={pNum + 1}
//                     width={400}
//                     renderAnnotationLayer={false}
//                     renderTextLayer={false}
//                   />
//                 </Document>
//               </Pages>
//             ))}
//           </HTMLFlipBook>
//         </div>
//         <div className="manthanRight">
//           <div className="manthanSteps">
//             <ol>
//               <li>Registrations will close at 4:00pm on Thursday, 25th July 2024.</li>
//               <li>The School Registration Forms and Category-wise Registration Forms, as hard copies should be carried to the venue school and submitted to the reception before the competition.</li>
//               <li>Separate registration forms to be submitted for each competition. (manthan.etf@aryagurukul.in)</li>
//               <li>Please mention in Subject: MANTHAN – Enrolment – XYZ School.</li>
//               <li>If you do not receive a confirmation email, please resend your registration after checking the email Id.</li>
//               <li>Queries and communication related to registration, online submissions may be mailed to manthan.etf@aryagurukul.in</li>
//               <li>Telephonic inquiries can be made to 9833163608 between 9:00am and 3:00pm only on weekdays.</li>
//             </ol>
//           </div>
//           <div className="manthanLink">
//             <button onClick={handleButtonClick} className="manthanClick">Registration</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ManthanPage;


import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import Heading from "../Components/Heading";
import RedHeader from "../public/Images/SVG/redHeader.svg";
import Image from "next/image";
import ManthanImage from "../public/Images/Manthan/ManthanImage.jpg";

// Update the path to the PDF in the public directory
const pdf = "../public/ByteBeatJan2024.pdf.pdf";

// Set the worker source to the file you copied to your project
// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
// pdfjs.GlobalWorkerOptions.workerSrc = "../public/pdf.worker.mjs";
pdfjs.GlobalWorkerOptions.workerSrc = "../public/pdf.worker.mjs";

const Pages = React.forwardRef((props, ref) => (
  <div className="demoPage" ref={ref}>
    {props.children}
    <p>Page number: {props.number}</p>
  </div>
));

Pages.displayName = 'Pages';

function ManthanPage() {
  const [numPages, setNumPages] = useState();

  const handleButtonClick = () => {
    window.location.href = "https://forms.office.com/pages/responsepage.aspx?id=HCjVkODFoUGjEA7s35mwHuXuFPkZSsxNrWwPajaWgOlUNTlGMFA0MUtZMTJaU1MyUkVIVENDNUZYUi4u";
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="manthanPage">
      <div>
        <Heading headTitle="Manthan Page" headBottomImg={RedHeader} />
        <div className="manthan-page">
          <h5>MANTHAN 2024 - STEPS TO REGISTER</h5>
        </div>
      </div>

      <div className="manthanContainer">
        <div className="manthanLeft">
          <HTMLFlipBook width={400} height={570}>
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
              </Pages>
            ))}
          </HTMLFlipBook>
        </div>
        <div className="manthanRight">
          <div className="manthanSteps">
            <ol>
              <li>Registrations will close at 4:00pm on Thursday, 25th July 2024.</li>
              <li>The School Registration Forms and Category-wise Registration Forms, as hard copies should be carried to the venue school and submitted to the reception before the competition.</li>
              <li>Separate registration forms to be submitted for each competition. (manthan.etf@aryagurukul.in)</li>
              <li>Please mention in Subject: MANTHAN – Enrolment – XYZ School.</li>
              <li>If you do not receive a confirmation email, please resend your registration after checking the email Id.</li>
              <li>Queries and communication related to registration, online submissions may be mailed to manthan.etf@aryagurukul.in</li>
              <li>Telephonic inquiries can be made to 9833163608 between 9:00am and 3:00pm only on weekdays.</li>
            </ol>
          </div>
          <div className="manthanLink">
            <button onClick={handleButtonClick} className="manthanClick">Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManthanPage;
