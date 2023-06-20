import Image from "next/image";
import projects from "../../../../static-data/projects";

const GolfCourse = ({projectsData}) => {
    return (

        <div className="golf-course relative  flex flex-col justify-center w-full mx-auto">
            <div className="page-header w-full py-[30px] px-[15px] relative">
                <h1 className="w-full text-center text-[#d56503] font-bold text-[40px]">{projects[1].title}</h1>
            </div>
            <section className="flex flex-col pt-[60px]">
                <div className="container flex flex-col mx-auto max-w-[1140px]">
                    <div className="frame-container absolute flex space-x-5" style={{ width: "auto", height: "auto" }}>
                        {projectsData[1].frames.map((frame, index) => (
                            <Image key={index} src={frame.path} alt={frame.alt} width={frame.width} height={frame.height} priority={true} />
                        ))}
                    </div>
                    <div className="flex space-x-[105px] py-[20px]" style={{ width: "auto", height: "auto" }} >
                        {projectsData[1].images.map((image, index) => (
                            <Image key={index} src={image.path} alt={image.alt} width={image.width} height={image.height} />
                        ))}
                    </div>
                    <div className="text-[#55616d] text-[20px] space-y-5 my-[30px]" dangerouslySetInnerHTML={{ __html: projectsData[1].description }} />
                </div>
            </section>
        </div>

    );
}

export default GolfCourse;

export async function getStaticProps() {
    const projectsData = projects;
    return {
        props: {
            projectsData,
        },
    };
}
