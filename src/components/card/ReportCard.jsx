import React from 'react';
import { ReactComponent as Download } from '../../assets/svg/download.svg';
import { ReactComponent as PDF } from '../../assets/svg/Pdf.svg';
import { DateFormatter } from '../../utils/DateFormatter';

const ReportCard = ({ title, description, file, date, fiscalYear, quarter, status }) => {
    // Handle opening the PDF in a new tab
    const handleCardClick = (fileUrl) => {
        window.open(fileUrl, '_blank'); // Open PDF in a new tab
        console.log('card clicked')
    };

   const handleDownload = async (e, fileUrl) => {
  e.stopPropagation();
  e.preventDefault();

  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileUrl.split('/').pop(); // Optional: customize filename
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
};

    

    return (
        <div
            className='h-[213px] max-md:h-[180px] max-sm:h-[140px] w-full flex justify-center shadow-lg rounded-[10px] overflow-hidden
            hover:translate-x transition-transform duration-300 origin-top-left hover:scale-105 cursor-pointer'
            onClick={() => handleCardClick(file)} // Opens PDF in a new tab when the card is clicked
        >
            <div className='w-1/3 bg-lightblue flex justify-center items-center'>
                <PDF className='w-[108px] h-[108px]' />
            </div>
            <div className='w-2/3 p-3 flex flex-col justify-center relative'>
                <p className='font-semibold text-xs max-1xl:text-[10px]'>{DateFormatter(date)}</p>
                <h1 className='font-bold text-[22px] max-1xl:text-[18px] max-[706px]:text-[14px]'>{title.slice(0,34)+'...'}</h1>
                <p className='font-medium text-[11px] max-1xl:text-[10px] mt-3'>
                   {`${quarter} ${description.length > 100 ? description.slice(0, 100) + '...' : description} (${status}) ${fiscalYear}`}
                </p>
                {/* Download icon div */}
                <div
                    className='w-[20px] h-[20px] absolute right-3 top-3 cursor-pointer hover:w-[25px] hover:h-[25px] transition-all duration-300'
                    onClick={(e) => handleDownload(e, file)} // Stop propagation and trigger download
                >
                    <Download className='w-full h-full' />
                </div>
            </div>
        </div>
    );
}

export default ReportCard;
