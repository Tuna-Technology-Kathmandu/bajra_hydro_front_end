import React from 'react'
import ProjectLocation from './ProjectLocation';
import ProjectAccess from './ProjectAccess';
import ProjectFeature from './ProjectFeature';
import ProjectPurchaser from './ProjectPurchaser';

const ProjectDetails = () => {
    const data = {
        item: {
            createdAt: "2025-04-05T14:30:00Z", // example date
            title: "New news comming soon in the town of kathmandu, pokhara, solukhumbhu , biratnagar",
            featured_image: "https://dummyimage.com/600x300/ddd/333&text=News+Preview", // example image URL
            content: "<p>This is a sample news article content with sfkljsf askdfjasf askjdfhaslf askljdfhas falskjdfh alskjdf hasldkfjhaslkfjhs fslfjh fhlfhlshffjshjfh fskfjhfkldsjfhsf sflkjsfhslkfj hsflskfjs fhalskfahds <strong>HTML</strong> formatting.</p>", // example HTML content
        }
    };

    const sanitizedContent = data.item.content;
    return (
        <section className="min-h-screen px-[75px] max-md:p-[30px] py-[70px] max-0md:py-[50px] max-1md:py-[25px] text-black">
            <article className="mt-20 max-0md:mt-10 max-1md:mt-0">
                <div className='w-full px-[110px] max-0md:px-[0px]'>

                    <h1 className="font-bold text-[38px] max-1xl:text-[28px] max-md:text-[24px] leading-[44px] max-md:leading-[34px] mt-7 max-1xl:mt-5 max-md:mt-3  ">
                        {data.item.title}</h1>
                </div>
                <div className="w-full h-[456px] max-1xl:h-[380px] overflow-hidden my-12 max-1xl:my-8 max-md:my-5">
                    {data.item.featured_image ? (
                        <img
                            src={data.item.featured_image}
                            alt={data.item.title.slice(0, 50)}
                            className="object-cover w-full h-full "
                        />
                    ) : (

                        <p className="text-sm max-1xl:text-[13px]  max-1md:text-xs text-gray-500">No Image Available</p>

                    )}
                </div>
                <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} className="mt-7  max-1xl:mt-5 max-md:mt-3 font-normal text-base 
                    leading-[30px] max-1xl:leading-[27px] max-1xl:text-sm px-[100px] max-0md:px-[0px] " />
            </article>
            {/* location section */}
            <ProjectLocation />

            {/* access section */}
            <ProjectAccess />

            {/* salient feature */}
            <ProjectFeature />

            {/* Power Purchaser */}
            <ProjectPurchaser />
        </section>

    )
}

export default ProjectDetails