import Image from "next/image";
import projects from "../../../../static-data/projects";
import AppsSoftwareSVG from "@/components/AppsSoftwareSVG";
import styles from "../../../styles/appSoftware.module.css"
import Carousel from "@/components/Golf/Carousel";
import BackToTop from "@/components/BackToTop";


const GolfCourse = ({ projectsData }) => {


    return (

        <div className="golf-course relative  flex flex-col justify-center w-full mx-auto">
            <h1 className={` ${styles.pageHeader}`}>
                <span><AppsSoftwareSVG /> </span>
                {projects[1].title}
            </h1>

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
            
            <Carousel projectsData={projectsData} />
            <BackToTop />
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
