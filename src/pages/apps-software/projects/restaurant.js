import Image from "next/image";
import projects from "../../../../static-data/projects";

const Restaurant = ({ projectsData }) => {

    return (
        <div className="apps-software flex flex-col justify-center w-full mx-auto">
            <div className="page-header w-full">
                <h2 className="text-[40px] font-semibold text-[#d56503] text-center">{projectsData[0].title}</h2>
            </div>
            <section className="flex flex-col pt-[60px]">
                <div className=" container flex flex-col mx-auto max-w-[1140px]">
                    <div className="flex justify-center mb-[35px]">
                        <div className="absolute flex space-x-5">
                            {projectsData[0].frames.map((frame, index) => (
                                <Image
                                    key={index}
                                    src={frame.path}
                                    alt={frame.alt}
                                    width={frame.width}
                                    height={frame.height}
                                />
                            ))}
                        </div>
                        <div className="flex space-x-[105px] py-[20px]">
                            {projectsData[0].images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.path}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='text-[#55616d] text-[20px] space-y-5 my-[30px]' dangerouslySetInnerHTML={{ __html: projectsData[0].description }} />
                </div>
            </section>
            <section className="features-list pt-[60px]">
                <div className="container flex justify-center mx-auto max-w-[1140px]">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-center text-[#0399d5] text-[30px] font-bold" dangerouslySetInnerHTML={{ __html: projectsData[0].blocks[0].title }} />
                        <div dangerouslySetInnerHTML={{ __html: projectsData[0].blocks[0].list }} />
                    </div>
                </div>
            </section>
            <section className="features-list pt-[60px]">
                <div className="container flex justify-center mx-auto">

                    <div className=" flex space-x-8 ">
                        {projectsData[0].blocks[1].image.map((item, index) => (
                            <div key={index} className="">
                                <Image src={item.path} alt={item.alt} width={item.width} height={item.height} />
                            </div>
                        ))}
                        <div className="">
                            <h2 className=" text-[#0399d5] text-[30px] font-bold" dangerouslySetInnerHTML={{ __html: projectsData[0].blocks[1].title }} />
                            <div dangerouslySetInnerHTML={{ __html: projectsData[0].blocks[1].list }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Restaurant;

export async function getStaticProps() {

    const projectsData = projects;
    return {
        props: {
            projectsData,
        },
    }
}