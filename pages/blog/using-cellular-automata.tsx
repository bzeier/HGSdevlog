/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const HowToDeployBlog = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-5 md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    I have now created a script in javascript which uses an algorithm called "Cellular Automata" to generate Caverns.
                </Text>
                <hr />
                <List type={ListType.disc} className="mt-5">
                    <li>
                        <Image className="mt-5" src="/public/gifs/catumata vid.gif" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />
                    </li>
                    <li>
                        This uses a random 2D noise map as a basis and then goes through each and every index to check the number of sorrounding walls and then generates a new 2D Cavern map.
                    </li>
                    <li>
                        Next will be to transition this code into Unreal Engine so we can create StaticMeshes from the 2D Cavern Array we create! Where index value of "0" = Floor Static Mesh and index value of "1" equal Wall Static Mesh! Not too complicated really.
                    </li>
                </List>
                <Seperator />
                
                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded mt-10 !text-lg leading-relaxed ">
                    For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                    You can also post any comments on our <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
                </div>
            </div>
        </PageLayout>
    )
}

export default HowToDeployBlog