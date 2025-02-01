import React from 'react';
import mozzarella from '/MenuQRFrontPage.jpg';

const MainContent = () => {
  const pdfUrl = 'https://akavn123.github.io/MenuForQR.pdf'; 

;

  return (
    <div className='h-auto w-full flex flex-col justify-center items-center gap-4 p-2 rounded-xl'>
      <div className='h-auto w-full xl:w-[78%] lg:w-[90%] 2xl:w-[84%] flex justify-center items-center bg-white p-1 rounded-md'>
        <img src={mozzarella} alt="Menu Preview" className='shadow-lg xl:w-[100%]' />
      </div>

      <div className='w-full h-auto flex justify-center items-center gap-4'>
        {/* View PDF */}
        <a 
          href={pdfUrl} 
          target="_Blank"
          rel="noopener noreferrer"
          className='bg-white py-2 md:py-3 lg:py-4 xl:py-2 2xl:py-3 px-6 md:px-8 font-poppins md:text-lg lg:text-xl xl:text-base font-semibold text-rose-600 shadow-xl'
        >
          View Pdf
        </a>

        {/* Download PDF */}
        <a 
          href={pdfUrl} 
          download="Menu For QR.pdf"
          className='bg-white py-2 md:py-3 lg:py-4 xl:py-2 2xl:py-3 px-6 md:px-8 font-poppins md:text-lg lg:text-xl xl:text-base font-semibold text-rose-600 shadow-xl'
        >
          Download Pdf
        </a>
      </div>
    </div>
  );
}

export default MainContent;
