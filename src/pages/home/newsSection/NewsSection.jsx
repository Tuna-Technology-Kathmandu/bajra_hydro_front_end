import LinedHeading from "../../../components/heading/LinedHeading"
import NewsCard from "../../../components/card/NewsCard";

const NewsSection = () => {

    return (
        <main className="p-[75px] ">
            <LinedHeading Title='Our News' />
            <div className="w-full grid grid-cols-3 gap-6 mt-20 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1 h-auto">
                {
                    [...Array(3)].map((__, index) => {
                        return (
                            <div key={index}>
                                <NewsCard />
                            </div>
                        )
                    })}
            </div>
        </main>
    )
}
export default NewsSection

