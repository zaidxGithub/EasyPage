import { FileText, Linkedin, MessageCircle, Sparkles, BookOpen, User, Calendar, Download } from 'lucide-react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

import Form from "./components/Form.jsx";
import { useEffect, useRef, useState } from "react";
import Assignment from "./components/assignment.jsx";
import Labreport from "./components/labreport.jsx";
import "./App.css";
import Navbar from './components/Navbar.jsx';

 import linkdin from './assets/linkedin.png';
 import whatsapp from './assets/whatsapp.png';
 import github from './assets/github.icon.png';
import easypagelogo from './assets/easypage.png'
          
function App() {
  const [data, setData] = useState(null);
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // this will stoppp my all my  scrolling when the navbar is open
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
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", 
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4"); 
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    const yPosition = (pageHeight - imgHeight) / 2; 

    pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight);
    const fileName=`MyDoc_${Date.now()}`
    pdf.save(`${fileName}.pdf`);
  };



  return (
    <div   className="min-h-screen   bg-white/60    backdrop-blur-md  ">
<header className="sm:bg-black/90  bg-black/90  backdrop-blur-md  sticky top-0 z-50 border-2  h-15  sm:h-17 border-b-blue-300"   >
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1    ">
    <div className="flex items-center justify-between sm:h-16 h-13  ">
      <div className="flex items-center space-x-0 h-16  ">

        <ToastContainer position="top-center" autoClose={60500}   
        />
      

        <img src={easypagelogo} className='w-8 h-8 rounded-md mr-3 ' />
        <h1 className="text-2xl sm:text-3xl   bg-white bg-clip-text text-transparent  font-sans font-bold uppercase tracking-wide"> 
          Easy  <span className='bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent'> Page  </span> 
        </h1>
      </div>
      <div className="hidden sm:flex items-center space-x-2">
      
        <span className="text-sm text-gray-600">

</span>
      </div>



      <div className='h-9 w-9 '>  
       
          <button className='invert brightness-200 h-9 w-9 ' onClick={()=>{
            setIsNavbarOpen(prev=>!prev);
          }
          }> {isNavbarOpen ? (<svg
     xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6  sm:h-8 sm:w-8"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ):( <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 sm:h-8 sm:w-8"
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




<section className="py-12 sm:py-10  sm:h-110 h-95 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-a-blue-600 ">
    <div className="max-w-3xl mx-auto  sm:mt-10 ">
      <h3 className="text-3xl  sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 mt-4 ">
             Tired of making front pages from scratch?

        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl lg:text-4xl mt-2 ">
        This makes it a 10-second Job
        </span>
      </h3>
      <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed mt-4">
        Generate beautiful, professional front pages for your assignments and lab reports in seconds. 
        No design skills required - just fill in your details and download!
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 ">
      </div>
    </div>
  </div>
</section>



<Form onSubmit={(formData) => {

  setIsPreview(false);
  setData(formData);
  setIsPreview(true); 
}} />

{data && (
  <div className="w-full overflow-x-scroll sm:overflow-x-hidden">
    <div
      ref={pdfRef}
      className={`
        w-[794px] min-h-[1123px] bg-white mx-auto my-3 p-0
        ${isPreview ? "scale-[0.5] sm:scale-100 origin-top" : ""}
        shadow-[0_0_5px_rgba(0,0,0,0.1)]
        transition-transform
      `}
    >
      {data.template === "1" ? (
        <Assignment data={data} />
      ) : (
        <Labreport data={data} />
      )}
    </div>

   
  </div>
)}


 <div className="flex justify-center items-center bg-white/60  mt-5 mb-5 flex-col">
      <button  disabled={isDownloading}
      
      
      className="w-75 sm:w-89 mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer     "
      
        onClick={async () => {
         
          setDownload("true");
          setIsPreview(false); // Reset scaling
          await new Promise((res) => setTimeout(res, 300)); // Wait for DOM update
        try{

           await generatePDF();
        }catch(error){
          toast.error("Generate PDF First ");
          console.log(error)
           
        }
              setData(null);
              setIsPreview(true);
              setDownload(false);
        }}

      > 
        {isDownloading ? "Downloading...":"Downlaod Your PDF"}
      </button>
          <div className=' flex items-center p-1 mt-3 text-sm text-yellow-800 bg-yellow-50 border border-yellow-300 rounded-md sm:w-[27%] w-[95%] mx-auto" role="alert ' > 
    

<svg className="flex-shrink-0 sm:w-4 sm:h-4 w-3 h-3 me-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8.257 3.099c.763-1.36 2.723-1.36 3.486 0l6.518 11.63c.75 1.338-.213 3.002-1.742 3.002H3.48c-1.53 0-2.492-1.664-1.743-3.002L8.257 3.1zM9 13a1 1 0 102 0v-2a1 1 0 10-2 0v2zm0 4a1 1 0 102 0 1 1 0 00-2 0z" clipRule="evenodd" />
  </svg>
  <span className='text-[10px] sm:text-[15px]'>
    If PDF is not downloading,try refreshing or switch to desktop mode.
  </span>



 </div>
    </div>

 <footer className="bg-black text-white ">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="py-12">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                 <div className="flex items-center space-x-3 mb-3">
                   <div className="p-1 bg-gradient-to-r rounded-md  flex flex-row gap-2">
                     {/* <FileText className="h-6 w-6 text-white" /> */}

                     <img src={easypagelogo}  className='h-7 w-7  rounded-md'/>
                     <h3 className="text-xl font-bold uppercase">Easy <span className='bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent'> Page</span></h3>
                   </div>
                   
                 </div>
                 <p className="text-gray-400 leading-relaxed">
                Crafting the first impression of your assignments.
                 </p>
               </div>

               <div>
                 <h4 className="text-lg font-semibold mb-4">Features</h4>
                 <ul className="space-y-2 text-gray-400">
                  
                        <li className="flex items-center">
                 <FileText className="h-4 w-4 mr-2 text-blue-400" />
                     PDF Generation
                   </li>
                   <li className="flex items-center">      
                <BookOpen className="h-4 w-4 mr-2 text-blue-400" />
                          Academic Focused
                  </li>
                   <li className="flex items-center">
                     <User className="h-4 w-4 mr-2 text-yellow-400" />
                     Easy to Use                   </li>
                 </ul>
               </div>


                 <div><h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
       
  
<div className="space-y-3 ">
  
  <a 
    href="https://wa.me/+919696419984" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
  >
    <input
      type="image"
      src={whatsapp}
      alt="WhatsApp"
      className="h-9 w-9 rounded-lg p-1"
    />
    <div>
      <span className="font-medium">WhatsApp</span>
      <p className="text-sm text-gray-500">+919696419984</p>
    </div>
  </a>


  <a 
    href="https://linkedin.com/in/mohammad-zaid20" 
    target="www.linkedin.com/in/mohammad-zaid20
" 
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
  >
    <input 
      type="image"
      src={linkdin}
      alt="LinkedIn"
       className="h-10 w-10 rounded-lg p-1" />
    <div>
      <span className="font-medium">LinkedIn</span>
    </div> </a>

  <a 
    href="https://github.com/zaidxGithub" 
    target="www.github.com/in/zaidxGithub" 
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"  >
    <input 
      type="image"
      src={github}
      alt="Github"
       className="h-10 w-10 rounded-lg p-1" />
    <div>
      <span className="font-medium">GitHub</span>
    </div>
  </a>
</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
               © 2025 Made by Mohammad Zaid
              </p>
              {/* <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
             </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Support
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
}
export default App;














