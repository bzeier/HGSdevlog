/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const ContactUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'Contact Us',
        description: 'For any any queries related to this project / template feel free to connect with us on webexpe13@gmail.com',
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    } 
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 pb-10 md:pt-20 pt-[80px]'>
                <Text title className="!text-5xl !font-light">
                    Contact Me
                </Text>

                <div className="flex flex-wrap mt-8 justify-between">
                    <div className="md:w-1/2 w-full md:pl-2">
                        <Text p className="!text-lg leading-relaxed">
                            For any any questions related to these projects or if you are a hiring manager feel free to contant me.
                        </Text>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <Text p>
                            EMAIL
                        </Text>
                        <Text subtitle className="!font-light md:!text-3xl">
                            brandon.zeier@gmail.com
                        </Text>
                    </div>
                </div>
            </section>

        </PageLayout>
    )
}

export default ContactUs