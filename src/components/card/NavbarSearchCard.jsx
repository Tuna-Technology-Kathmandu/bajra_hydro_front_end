const NavbarSearchCard = () => {
    const items = {
        featured_image: '',
        title: 'Hydropower Development Initiative',
        text: 'We are actively investing in hydropower plants to harness Nepal’s rich water resources. Our goal is to provide sustainable...We are actively investing in hydropower plants to harness Nepal’s rich water resources. Our goal is to provide sustainable...'

    }
    return (
        <div className="w-full h-auto p-3 rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] cursor-pointer">
            <div className="bg-slate-300 h-[200px] max-2xl-1l:h-[180px] max-md:h-[150px] max-[531px]:h-[120px] w-full overflow-hidden rounded-[9px]">
                {
                    items.featured_image !== '' ? (
                        <img src={items.featured_image} alt={items.title} className='w-full h-full object-cover '></img>
                    ) : (
                        <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>No image available at the moment</p>
                    )
                }
            </div>
            <div>
                <h1 className='font-semibold text-base max-md:text-sm max-[531px]:text-xs mt-3'>{items.title}</h1>
            </div>
        </div>
    )
}
export default NavbarSearchCard;