/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are WebExpe. This is an open source blog template which can help you start a simple static blog.`,
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Games currently in progress
                    </Text>

                    <div className="flex flex-wrap justify-between">



                    </div>
                    <Seperator />
                    <Text p className='text-lg'>
                        If you want to support me
                    </Text>
                    <a href="https://www.buymeacoffee.com/brandonzeier" target="_blank" rel="noopener noreferrer">
                        <img src="/images/bmc.png" className="ml-0" alt="webexpe.com" />
                    </a>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs