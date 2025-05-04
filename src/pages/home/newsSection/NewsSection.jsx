import LinedHeading from "../../../components/heading/LinedHeading"
import NewsCard from "../../../components/card/NewsCard";
import { useGetBlogsQuery } from "../../../services/Blogs";
import NewsCardShimmer from "../../../components/Shimmer/NewsCardShimmer";

const NewsSection = () => {
    const page = 1;
    const limit = 3;
    const Is_featured = true;



    const { data, isFetching, isError } = useGetBlogsQuery({ page, limit, Is_featured });
    console.log(data);


    return (
        <main className="px-[75px] max-md:px-[30px] mt-20 mb-20 max-[642px]:mt-20">
            <LinedHeading Title='Our News' />
            <div className="w-full grid grid-cols-3 gap-6 mt-20 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1 h-auto max-[642px]:mt-14">
                {isFetching && [...Array(3)].map((_, i) => <NewsCardShimmer key={i} />)}

                {isError && (
                    <div className="col-span-full text-center loading">
                        <p>Sorry, we cannot get blogs at the moment...</p>
                    </div>
                )}

                {!isFetching && !isError && data?.blogs?.length === 0 && (
                    <div className="col-span-full text-center loading">
                        <p>No Blogs available at the moment...</p>
                    </div>
                )}

                {!isFetching && !isError && data?.blogs?.length > 0 &&
                    data.blogs.map((item, index) => {
                        const {
                            title = "Untitled",
                            slug = "",
                            id,
                            content = "No content available",
                            image_url = "",
                            createdAt = new Date().toISOString(),
                        } = item;

                        return (
                            <div key={id ?? index}>
                                <NewsCard
                                    title={title}
                                    content={content}
                                    image={image_url}
                                    slug={slug}
                                    date={createdAt}
                                />
                            </div>
                        );
                    })}
            </div>
        </main>
    )
}
export default NewsSection

