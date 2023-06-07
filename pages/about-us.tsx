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
                    <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/Icons_23.png" alt="webexpe.com" className="rounded-lg overflow-hidden" height={100} width={100}/>
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Hazard Game Studios.
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        This is a devlog which will contain all updates of my games under Hazard Game Studios.
                    </Text>

                    <Text p className='text-lg'>
                        The idea was to start a simple blog so you can keep track and stay updated on my games. <br /> I make all kinds of different games in Unreal Engine and will post all updates related to them here. <a href="/" className="underline font-bold">here</a>.
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
                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            For any other questions or if you are a hiring manager you reach me at <u>brandon.zeier@gmail.com</u>.
                            You can also post any comments on my <a href="https://www.youtube.com/@SlingshotStudios-cw5mg" target="_blank" rel="noopener noreferrer"><u><i>Youtube channel</i></u></a>.
                        </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs