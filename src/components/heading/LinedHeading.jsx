const LinedHeading = ({ Title }) => {
    return (
        <div className='flex items-center gap-2 max-md:gap-1 justify-center mb-10'>
            <div className='w-32 bg-black max-2xl:w-24 max-md:w-14 h-[1px]'></div>
            <p className=' font-bold text-[28px] max-2xl:text-[24px] max-lg:text-[22px] max-md:!text-[18px] max-sm:!text-[16px] max-md:text-center tracking-wider text-black'>{Title}</p>
            <div className='w-32 bg-black max-2xl:w-24 max-md:w-14  h-[1px]'></div>
        </div>
    )
}
export default LinedHeading;
