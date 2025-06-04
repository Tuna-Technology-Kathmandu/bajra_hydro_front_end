import React, { useRef, useState } from 'react';
import { useGetGalleryAPIQuery } from '../../services/GalleryAPI'; 
import GallerySmallImage from '../gallery/GallerySmallImage';
import GalleryBigImage from '../gallery/GalleryBigImage';
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
import GalleryShimmer from '../../components/Shimmer/GalleryShimmer';
import ReactPaginate from 'react-paginate';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop';

import CommonHero from '../../components/heroComponent/CommonHero'
import Hydro from "../../assets/images/hydro3.webp"

const Gallery = () => {
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const PaginationRef = useRef(null);
    const limit = 10;

    const { data, isFetching, isError } = useGetGalleryAPIQuery({ page, limit });
    const ImagesData = data?.galleries ?? []; 
    const pagination = data?.pagination ?? { totalPages: 1, currentPage: page, limit: 10 };
    const { totalPages, currentPage } = pagination;
    // console.log("sygsjnsdj", ImagesData.data,data)

    const ScrollTop = useSmoothScrollTop();

    const goTop = () => {
        setTimeout(() => {
            if (PaginationRef.current) {
                ScrollTop(PaginationRef.current);
            }
        }, 100);
    };

    if (isFetching) {
        return (
            <div className="flex justify-center w-full px-[65px] mt-20 Loading ">
                <GalleryShimmer />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center w-full px-[65px] mt-10 Loading">
                Something went wrong...
            </div>
        );
    }

    return (
        <>
        <CommonHero  img={Hydro} title='Gallery' />
            <div className="flex justify-center w-full px-[65px] max-md:px-[30px] mt-20" ref={PaginationRef}>
                <div className="w-full">
                    {ImagesData && ImagesData.length > 0 ? (
                        <>
                            <div className="bg-white mb-10 w-full flex max-[734px]:flex-wrap justify-between gap-4 max-[767px]:gap-2 font-semibold text-[20px] leading-[30px] tracking-2%">
                                {/* Right Section (Main Image) */}
                                {/* Right Section (Main Image) */}
                                <div className="relative rounded-lg flex-grow overflow-hidden group h-[460px] max-[1041px]:h-[300px]">
                                    <GalleryBigImage img={ImagesData[0]?.image ?? ''}  onClick={() => setSelectedImage(ImagesData[0]?.image)} />
                                </div>
                                <div className="w-[484px] max-[1041px]:w-64 max-[734px]:w-full grid grid-cols-2 max-[388px]:grid-cols-1 max-[388px]:h-[560px] gap-4 max-[767px]:gap-2 h-[460px] max-[1041px]:h-[300px]">
                                   <GallerySmallImage img={ImagesData[1]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[1]?.image)} />
                                    <GallerySmallImage img={ImagesData[2]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[2]?.image)}
                                    />
                                    <GallerySmallImage img={ImagesData[3]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[3]?.image)} />
                                    <GallerySmallImage img={ImagesData[4]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[4]?.image)} />
                                </div>
                                <div className="relative rounded-lg flex-grow overflow-hidden group h-[460px] max-[1041px]:h-[300px]">
                                    <GalleryBigImage
                                        img={ImagesData[0]?.image ?? 'https://placehold.co/600x400'}
                                        onClick={() => setSelectedImage(ImagesData[0]?.image)}
                                    />
                                </div>

                                {/* Left Section (Small Images) */}
                                <div className="w-[484px] max-[1041px]:w-64 max-[734px]:w-full grid grid-cols-2 max-[388px]:grid-cols-1 max-[388px]:h-[560px] gap-4 max-[767px]:gap-2 h-[460px] max-[1041px]:h-[300px]">
                                    <GallerySmallImage img={ImagesData[5]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[5]?.image)}
                                    />
                                    <GallerySmallImage img={ImagesData[6]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[6]?.image)}
                                    />
                                    <GallerySmallImage img={ImagesData[7]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[7]?.image)}
                                    />
                                    <GallerySmallImage img={ImagesData[8]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[8]?.image)}
                                    />
                                </div>
                            </div>

                            <div className="bg-white mb-10 w-full flex max-[734px]:flex-wrap max-[734px]:flex-col-reverse justify-between gap-4 max-[767px]:gap-2 font-semibold text-[20px] leading-[30px] tracking-2%">
                                {/* Right Section (Main Image) */}
                                <div className="relative rounded-lg flex-grow overflow-hidden group h-[460px] max-[1041px]:h-[300px]">
                                    <GalleryBigImage img={ImagesData[9]?.image ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[9]?.image)}
                                    />
                                </div>

                                {/* Left Section (Small Images) */}
                                <div className="w-[484px] max-[1041px]:w-64 max-[734px]:w-full grid grid-cols-2 max-[388px]:grid-cols-1 max-[388px]:h-[560px] gap-4 max-[767px]:gap-2 h-[460px] max-[1041px]:h-[300px]">
                                    {ImagesData.slice(5, 9).map((image, index) => (
                                        <GallerySmallImage
                                            key={index}
                                            img={image.image}
                                            onClick={() => setSelectedImage(image.image)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="Loading">No data available at the moment...</div>
                    )}
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 h-[43px] mt-16">
                    {/* Previous Button */}
                    <button
                        className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-darkblue hover:bg-navy transition rounded-full relative cursor-pointer"
                        onClick={() => {
                            setPage(currentPage - 1);
                            goTop();
                        }}
                        disabled={currentPage === 1}
                    >
                        <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                    </button>

                    {/* Pagination Controls */}
                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={null}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={(event) => {
                            setPage(event.selected + 1);
                            goTop();
                        }}
                        containerClassName="flex items-center justify-center gap-[4px] bg-darkblue text-white rounded-full px-[10px] py-[3px] md:h-[38px] h-[30px]"
                        pageClassName="w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex items-center justify-center text-white text-[12px] md:text-sm rounded-full cursor-pointer transition-all duration-300"
                        activeClassName="!bg-white !text-black font-bold"
                        forcePage={currentPage - 1}
                    />

                    {/* Next Button */}
                    <button
                        className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-darkblue hover:bg-navy transition rounded-full relative rotate-180 cursor-pointer"
                        onClick={() => {
                            setPage(currentPage + 1);
                            goTop();
                        }}
                        disabled={currentPage === totalPages}
                    >
                        <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                    </button>
                </div>
            )}
             {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                >
                    <button onClick={() => setSelectedImage(null)}>
                        <Cross className='m-d:w-[50px] m-d:h-[50px] w-[38px] h-[38px] cursor-pointer absolute left-3 top-1  z-10 stroke-white '
                            
                        />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    />
                </div>
            )}
        </>
    );
};

export default Gallery;