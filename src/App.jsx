import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

import Form from "./components/Form.jsx";
import { useEffect, useRef, useState } from "react";
import Assignment from "./FrontPages/assignment.jsx";
import Labreport from "./FrontPages/labreport.jsx";
import "./App.css";
import Navbar from './UI/Navbar.jsx';

import easypagelogo from './assets/easypage.png'
import Footer from './UI/Footer.jsx';

function App() {
  const [data, setData] = useState(null);
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // Lock page scrolling while the navigation menu is open.
   useEffect(()=> {
    if(isNavbarOpen){
       document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");


    }else{
       document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }

   },[isNavbarOpen]
  );


const [isPreview, setIsPreview] = useState(true);
  const pdfRef = useRef();
  const [isDownloading,setDownload]=useState(false);


  const generatePDF = async () => {
    const element = pdfRef.current;

    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png",0.75);

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    const yPosition = (pageHeight - imgHeight) / 2;

    pdf.addImage(
      imgData,
      "JPEG",
       0,
        yPosition,
         imgWidth,
          imgHeight,
          undefined,
          "MEDIUM"
        );
    const fileName=`FrontPage_${Date.now()}`
    pdf.save(`${fileName}.pdf`);
  };


  return (

    <>
    {/* Site header */}
    <header className="site-header">

  <div className="site-header-inner">
    <div className="site-header-row">
      <div className="site-brand">

        <ToastContainer position="top-center" autoClose={2000}
        />


        <img src={easypagelogo} className="site-brand-logo" />
        <h1 className="site-brand-name">
          Easy  <span className="site-brand-accent"> Page  </span>
        </h1>
      </div>
      <div className="site-header-status">

        <span className="site-header-placeholder">

</span>
      </div>



        <div className="site-menu">

          <button className="site-menu-toggle" onClick={()=>{
            setIsNavbarOpen(prev=>!prev);
          }
          }> {isNavbarOpen ? (<svg
     xmlns="http://www.w3.org/2000/svg"
      className="site-menu-icon"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ):( <svg
      xmlns="http://www.w3.org/2000/svg"
      className="site-menu-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    ><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg> )} </button>

          <Navbar isOpen={isNavbarOpen} />


         </div>


    </div>
  </div>
</header>

    <div className="app-canvas">




{/* Hero section */}
<section
  className="hero-section"
>
  <div className="hero-background">

    <div
      className="hero-orb hero-orb--top-left"
    />

    <div
      className="hero-orb hero-orb--top-right"
    />

    <div
      className="hero-orb hero-orb--bottom"
    />

    <div
      className="hero-orb hero-orb--center"
    />

  </div>


  <div
    className="hero-top-line"
  />


  <div className="hero-container">

    <div className="hero-content">


      <div
        className="hero-badge"
      >

        <span className="hero-status-dot">

          <span className="hero-status-ping" />

          <span className="relative h-2 w-2 rounded-full bg-blue-500" />

        </span>

        Create professional cover pages instantly

      </div>



      <h1 className="hero-heading">

        Tired of making front pages

        <br className="hero-heading-break" />

        from scratch?

        <span
          className="hero-heading-accent"
        >
          This makes it a 10-second job.
        </span>

      </h1>



      <p className="hero-description">
        Generate beautiful, professional front pages for your assignments
        and lab reports in seconds.

        <span className="hero-description-emphasis">
          {" "}
          No design skills required
        </span>{" "}
        — just fill in your details and download.
      </p>



      <div
        className="hero-benefits"
      >

        <div className="hero-benefit">

          <span className="hero-benefit-check">
            ✓
          </span>

          Instant PDF

        </div>


        <div className="hero-benefit">

          <span className="hero-benefit-check">
            ✓
          </span>

          Student focused

        </div>


        <div className="hero-benefit">

          <span className="hero-benefit-check hero-benefit-check--indigo">
            ✓
          </span>

          Completely free

        </div>

      </div>



      <div className="hero-divider">

        <span className="hero-divider-short hero-divider-short--blue" />

        <span className="hero-divider-dot hero-divider-dot--blue" />

        <span className="hero-divider-long" />

        <span className="hero-divider-dot hero-divider-dot--indigo" />

        <span className="hero-divider-short hero-divider-short--indigo" />

      </div>

    </div>

  </div>

</section>





{/* Cover page form */}
<Form onSubmit={(formData) => {

  setIsPreview(false);
  setData(formData);
  setIsPreview(true);
}} />

{/* Generated preview */}
{data && (
  <div className="preview-scroll">
    <div
      ref={pdfRef}
      className={`pdf-preview-page ${isPreview ? "pdf-preview-page--scaled" : ""}`}
    >
      {data.template === "1" ? (
        <Assignment data={data} />
      ) : (
        <Labreport data={data} />
      )}
    </div>


  </div>
)}


{/* PDF download */}
<div
  className="pdf-download-panel"
>
  <div className="pdf-download-background">

    <div className="pdf-download-orb pdf-download-orb--sky" />

    <div className="pdf-download-orb pdf-download-orb--indigo" />

  </div>


  <button
    disabled={isDownloading}
    className="pdf-download-button"
    onClick={async () => {
      setDownload("true");
      setIsPreview(false);

      await new Promise((res) => setTimeout(res, 300));

      try {
        await generatePDF();
      } catch (error) {
        toast.error("Generate PDF First");
        console.log(error);
      }

      setData(null);
      setIsPreview(true);
      setDownload(false);
    }}
  >

    {!isDownloading && (
      <svg
        className="pdf-download-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    )}

    {isDownloading && (
      <svg
        className="h-5 w-5 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-30"
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="3"
        />

        <path
          d="M21 12a9 9 0 0 1-9 9"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    )}

    <span>
      {isDownloading ? "Downloading..." : "Download PDF"}
    </span>

    {!isDownloading && (
      <svg
        className="pdf-download-arrow"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    )}

  </button>


  <p
    className="pdf-download-helper"
  >
    Your cover page is ready to download
  </p>


  <div
    role="alert"
    className="pdf-download-warning"
  >

    <svg
      className="pdf-download-warning-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.763-1.36 2.723-1.36 3.486 0l6.518 11.63c.75 1.338-.213 3.002-1.742 3.002H3.48c-1.53 0-2.492-1.664-1.743-3.002L8.257 3.1zM9 13a1 1 0 102 0v-2a1 1 0 10-2 0v2zm0 4a1 1 0 102 0 1 1 0 00-2 0z"
        clipRule="evenodd"
      />
    </svg>


    <span className="pdf-download-warning-copy">
      If the PDF is not downloading, try refreshing the page or switch to
      desktop mode.
    </span>

  </div>

</div>
      {/* Site footer */}
      <Footer/>

    </div>
    </>

  );
}
export default App;














