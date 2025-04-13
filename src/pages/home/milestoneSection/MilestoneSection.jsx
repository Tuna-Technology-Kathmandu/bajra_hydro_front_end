import LinedHeading from "../../../components/heading/LinedHeading"
import GlobalMap from '../../../assets/images/globalMap.webp';
import MilestoneCard from "../../../components/card/MilestoneCard";
import { MilestoneData } from "../../../localData/home/MilestoneData";

const MilestoneSection = () => {

    return (
        <section className="mt-[75px] h-[1250px] max-0m-d:w-full">
            <LinedHeading Title='Major Milestones' />
            <div className="h-[810px] w-full relative mt-20">
                <img src={GlobalMap} className=" opacity-50 absolute z-10 w-full h-1/2 object-contain top-1/2 -translate-y-1/2"></img>
                <div className="w-full h-full absolute inset-0 z-20 flex max-0md:flex-col max-0md:items-center">
                    <div className="h-full w-1/2 border-r-2 border-r-[#1637BA] border-spacing-3 border-dotted relative
                    max-0md:static max-0md:border-none max-0m-d:w-full
                    ">
                        <div className="w-6 h-6 max-[743px]:w-4 max-[743px]:h-4 bg-commonblue absolute -right-3 max-[743px]:-right-2 -top-3 rotate-[42deg]  max-0md:hidden"></div>
                        <div className="w-6 h-6 max-[743px]:w-4 max-[743px]:h-4 bg-commonblue absolute -right-3 max-[743px]:-right-2 top-[260px] rotate-[42deg] max-0md:hidden"></div>
                        <div className="w-6 h-6 max-[743px]:w-4 max-[743px]:h-4 bg-commonblue absolute -right-3 max-[743px]:-right-2 top-[528px] rotate-[42deg] max-0md:hidden"></div>
                        <div className="w-6 h-6 max-[743px]:w-4 max-[743px]:h-4 bg-commonblue absolute -right-3 max-[743px]:-right-2 -bottom-3.5 rotate-[42deg] max-0md:hidden"></div>
                        <div className="absolute right-10 max-[743px]:right-9 max-0md:right-1/2 max-0md:translate-x-1/2">
                            <MilestoneCard title={MilestoneData[0].title} text={MilestoneData[0].text} index='0' />
                        </div>
                        <div className="absolute right-10 max-[743px]:right-9 top-[540px] max-0md:top-[67%] max-0md:right-1/2 max-0md:translate-x-1/2 ">
                            <MilestoneCard title={MilestoneData[2].title} text={MilestoneData[2].text} index='2' />
                        </div>
                    </div>
                    <div className="h-full w-1/2 relative  max-0md:static max-0m-d:w-full">
                        <div className="absolute left-10 max-[743px]:left-9 top-[270px] max-0md:top-[35%] max-0md:left-1/2 max-0md:-translate-x-1/2 ">
                            <MilestoneCard title={MilestoneData[1].title} text={MilestoneData[1].text} index='1' />
                        </div>
                        <div className="absolute left-10 max-[743px]:left-9  top-[810px] max-0md:top-[102%] max-0md:left-1/2 max-0md:-translate-x-1/2">
                            <MilestoneCard title={MilestoneData[3].title} text={MilestoneData[3].text} index='3' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default MilestoneSection