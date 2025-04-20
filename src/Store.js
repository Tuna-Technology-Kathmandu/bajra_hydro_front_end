import { configureStore } from "@reduxjs/toolkit";
import BlogApi from "./services/Blogs";
import { ContactUsApi } from "./services/ContactUs";
import { SubscriberApi } from "./services/Subscriber";
import CeoApi from "./services/Ceo";
import MilestonesApi from "./services/Milestones";
import JobsApi from "./services/Jobs";
import SingleBlogApi from "./services/SingleBlog";

export const Store = configureStore({
    reducer: {
        [BlogApi.reducerPath]: BlogApi.reducer,
        [ContactUsApi.reducerPath]: ContactUsApi.reducer,
        [SubscriberApi.reducerPath]: SubscriberApi.reducer,
        [CeoApi.reducerPath]: CeoApi.reducer,
        [MilestonesApi.reducerPath]: MilestonesApi.reducer,
        [JobsApi.reducerPath]: JobsApi.reducer,
        [SingleBlogApi.reducerPath]: SingleBlogApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(BlogApi.middleware, ContactUsApi.middleware, SubscriberApi.middleware,
            JobsApi.middleware, CeoApi.middleware, MilestonesApi.middleware, SingleBlogApi.middleware
        )
})
export default Store;