import { configureStore } from '@reduxjs/toolkit'
import BlogApi from './services/Blogs'
import { ContactUsApi } from './services/ContactUs'
import { SubscriberApi } from './services/Subscriber'
import CeoApi from './services/Ceo'
import MilestonesApi from './services/Milestones'
import JobsApi from './services/Jobs'
import SingleBlogApi from './services/SingleBlog'
import ReportsApi from './services/Reports'
import MissionValuesApi from './services/MissionValues'
import CompanyInfoApi from './services/CompanyInfo'
import TeamApi from './services/Team'
import CategoryApi from './services/Category'
import PopUpApi from './services/PopUpApi'
import GalleryAPI from './services/GalleryAPI'

export const Store = configureStore({
  reducer: {
    [BlogApi.reducerPath]: BlogApi.reducer,
    [ContactUsApi.reducerPath]: ContactUsApi.reducer,
    [SubscriberApi.reducerPath]: SubscriberApi.reducer,
    [CeoApi.reducerPath]: CeoApi.reducer,
    [MilestonesApi.reducerPath]: MilestonesApi.reducer,
    [JobsApi.reducerPath]: JobsApi.reducer,
    [SingleBlogApi.reducerPath]: SingleBlogApi.reducer,
    [ReportsApi.reducerPath]: ReportsApi.reducer,
    [MissionValuesApi.reducerPath]: MissionValuesApi.reducer,
    [CompanyInfoApi.reducerPath]: CompanyInfoApi.reducer,
    [TeamApi.reducerPath]: TeamApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [PopUpApi.reducerPath]: PopUpApi.reducer,
    [GalleryAPI.reducerPath]: GalleryAPI.reducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      BlogApi.middleware,
      ContactUsApi.middleware,
      SubscriberApi.middleware,
      JobsApi.middleware,
      CeoApi.middleware,
      MilestonesApi.middleware,
      SingleBlogApi.middleware,
      ReportsApi.middleware,
      MissionValuesApi.middleware,
      CompanyInfoApi.middleware,
      TeamApi.middleware,
      CategoryApi.middleware,
      PopUpApi.middleware,
      GalleryAPI.middleware
    ),
})
export default Store
