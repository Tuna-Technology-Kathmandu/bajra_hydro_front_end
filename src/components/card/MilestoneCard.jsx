import { VisibleInViewCard } from "../motionCard/VisibleInViewCard";

const MilestoneCard = ({ title, text, index }) => {

    return (
        <VisibleInViewCard>
            <div className="bg-white shadow-2xl w-[400px] max-[906px]:w-[350px] max-xl:w-[300px]  max-[707px]:w-[290px] max-[680px]:w-[350px]
            max-[405px]:w-[290px] h-auto relative"
                key={index}>
                <div className="bg-[#1637BA] w-full h-[70px] flex justify-center items-center text-white 
                text-base max-xl:text-sm font-semibold px-1">
                    <p className="text-center">{title}</p>
                </div>
                <div className="leading-[25px] text-xs max-xl:text-[10px] font-normal p-5 text-justify">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: text.length > 370
                                ? `${text.slice(0, 370)}...`
                                : text
                        }}
                    />

                </div>

                {
                    index % 2 == 0 ?
                        (
                            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[25px] 
                    border-transparent border-t-[#1637BA] absolute -right-5 top-0 max-[680px]:hidden"></div>
                        ) : (
                            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[25px] 
                    border-transparent border-t-[#1637BA] absolute -left-5 top-0 max-[680px]:hidden"></div>
                        )
                }

            </div>
        </VisibleInViewCard>
    )
}
export default MilestoneCard;