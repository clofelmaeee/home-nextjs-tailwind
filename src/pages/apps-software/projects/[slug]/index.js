import Image from "next/image";
import projects from "../../../../static-data/projects";

const Restaurant = ({ projectsData }) => {
    console.log(projectsData)
    return (
        <div className="apps-software   flex flex-col justify-center w-full mx-auto">
            <div className="page-header w-full">
                <h2 className="text-[40px] font-semibold text-[#d56503] text-center">{projectsData[0].title}</h2>
            </div>
            <section>
                {projectsData.map((project, index) => (
                    <div key={index}>
                        <div className="flex justify-center mb-[35px]">
                            <div className="absolute flex space-x-5">
                                {project.frames.map((frame, index) => (
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
                                {project.images.map((image, index) => (
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
                    </div>
                ))}
                <div className=' text-[#55616d] text-[20px] space-y-5 px-[200px] my-[30px] whitespace-pre-line' dangerouslySetInnerHTML={{ __html: projectsData[0].description }} />
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