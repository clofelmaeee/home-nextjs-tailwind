import projects from "../../../static-data/projects"
import AppsSoftwareData from "../../../static-data/apps-software";
import Link from "next/link";
import Image from "next/image";
import AppsSoftwareSVG from "@/components/AppsSoftwareSVG";
import styles from "../../styles/appSoftware.module.css"
import BackToTop from "@/components/BackToTop";

export default function AppsSoftware({ projectsData }) {

    return (
        <div className="apps-software flex flex-col w-full">
            <h1 className={`flex items-center ${styles.pageHeader}`}>
                <span><AppsSoftwareSVG /></span>
                {AppsSoftwareData.title}
            </h1>
            <section className="block-introduction py-[50px] bg-[#f2f2f2]" >
                <div className="container mx-auto px-[100px]">
                    <div className='text-[#55616d] text-[18px] space-y-5 px-[200px] md:px-[100px] sm:px-[50px] sm:mx-0' dangerouslySetInnerHTML={{ __html: AppsSoftwareData.description }} />
                </div>
            </section>
            <section className="block-restaurant flex flex-col items-center mt-[100px]">
                <div className="container flex flex-col">
                    {projectsData.map((project, index) => (
                        <div className="item pb-[100px]" key={index}>
                            <h2 className="text-[25px] font-semibold text-[#56606c] text-center mb-[40px]">{project.title}</h2>
                            <div className="flex justify-center mb-[35px]">
                                <div className="absolute flex space-x-5">
                                    {project.frames?.map((frame, index) => (
                                        <Image key={index} src={frame.path} alt={frame.alt} width={frame.width} height={frame.height} />
                                    ))}
                                </div>
                                <div className="flex space-x-[105px] py-[20px]">
                                    {project.images?.map((image, index) => (
                                        <Image key={index} src={image.path} alt={image.alt} width={image.width} height={image.height} />
                                    ))}
                                </div>
                            </div>
                            <div className=' text-[#55616d] text-[20px] space-y-5 px-[200px] my-[30px] whitespace-pre-line' dangerouslySetInnerHTML={{ __html: project.description }} />
                            <div className="flex justify-center mt-[50px]">
                                <Link href={`/apps-software/projects${project.slug}`} className=" bg-[#ff7105] text-white text-center px-[15px] py-[13px] text-[18px] w-[195px] " dangerouslySetInnerHTML={{ __html: "Learn More   >>" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <BackToTop />
        </div>
    )
}

export async function getStaticProps() {

    const projectsData = projects;
    return {
        props: {
            projectsData,
        },
    }
}