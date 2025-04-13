import { VisibleInViewCard } from "../motionCard/VisibleInViewCard";

const MilestoneCard = ({ title, text, index }) => {

    return (
        <VisibleInViewCard>
            <div className="bg-white shadow-2xl w-[400px] max-xl:w-[300px] max-[672px]:w-[290px] h-auto relative"
                key={index}>
                <div className="bg-[#1637BA] w-full h-[70px] flex justify-center items-center text-white text-base max-xl:text-sm font-semibold">
                    <p className="text-center">{title}</p>
                </div>
                <div className="leading-[25px] text-xs max-xl:text-[10px] font-normal p-5 text-center">
                    <p>{text}</p>
                </div>
                {
                    index == '0' || index == '2' ?
                        (
                            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[25px] 
                    border-transparent border-t-[#1637BA] absolute -right-5 top-0 max-0md:hidden"></div>
                        ) : (
                            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[25px] 
                    border-transparent border-t-[#1637BA] absolute -left-5 top-0 max-0md:hidden"></div>
                        )
                }

            </div>
        </VisibleInViewCard>
    )
}
export default MilestoneCard;