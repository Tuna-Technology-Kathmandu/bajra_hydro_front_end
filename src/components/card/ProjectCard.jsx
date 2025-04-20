import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, content, slug }) => {

    return (
        <Link to={`/single-project/${slug}`}>
            <div className="w-full h-auto p-3 rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="bg-slate-300 h-[260px] max-md:h-[200px] w-full overflow-hidden rounded-[9px]">
                    {
                        image !== '' ? (
                            <img src={image} alt={title} className='w-full h-full object-cover '></img>
                        ) : (
                            <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>No image available at the moment</p>
                        )
                    }
                </div>
                <div>
                    <h1 className='font-bold text-lg max-md:text-base mt-3'>{title.slice(0, 30) + '...'}</h1>
                    <p dangerouslySetInnerHTML={{ __html: content.slice(0, 150) + '...' }} className='font-normal text-xs max-md:text-[10px] mt-3 leading-[22px] max-md:leading-[20px]'></p>
                </div>
            </div>
        </Link>
    )
}
export default ProjectCard;