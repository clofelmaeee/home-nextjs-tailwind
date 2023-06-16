import Image from "next/image";
import Slider from "react-slick";
import projects from "../../../../static-data/projects";
import styles from "../../../styles/projects.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";

const Restaurant = ({ projectsData }) => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3,
        lazyLoad: true,
    };

    return (
        <div className="apps-software flex flex-col justify-center w-full mx-auto">
            <div className="page-header w-full">
                <h2 className="text-[40px] font-semibold text-[#d56503] text-center">{projectsData[0].title} </h2>
            </div>
            <section className="flex flex-col pt-[60px]">
                <div className="container flex flex-col mx-auto max-w-[1140px]">
                    <div className="frame-container absolute flex space-x-5" style={{ width: "auto", height: "auto" }}>
                        {projectsData[0].frames.map((frame, index) => (
                            <Image key={index} src={frame.path} alt={frame.alt} width={frame.width} height={frame.height} priority={true} />
                        ))}
                    </div>
                    <div className="flex space-x-[105px] py-[20px]" style={{ width: "auto", height: "auto" }} >
                        {projectsData[0].images.map((image, index) => (
                            <Image key={index} src={image.path} alt={image.alt} width={image.width} height={image.height} />
                        ))}
                    </div>
                    <div className="text-[#55616d] text-[20px] space-y-5 my-[30px]" dangerouslySetInnerHTML={{ __html: projectsData[0].description }} />
                </div>
            </section>

            {projectsData[0].blocks.map((block, index) => (
                <div key={index} className="blocks">
                    {block.type === "list" ? (
                        <section className="features-list ">
                            <div className="container flex flex-col justify-center mx-auto max-w-[1140px]">
                                <h2 className="text-center text-[#0399d5] text-[30px] font-bold mb-[15px]" dangerouslySetInnerHTML={{ __html: block.title }} />
                                <div className={`text-[20px] text-[#55616d] ${styles.features}`} dangerouslySetInnerHTML={{ __html: block.list }} />
                            </div>
                        </section>
                    ) : null}

                    {block.type === "content_right" ? (
                        <section className="content-right pt-[60px]">
                            <div className="container flex justify-center mx-auto max-w-[1140px]">
                                <div className="flex mb-[50px]">
                                    <Image
                                        src={block.image.path}
                                        alt={block.image.alt}
                                        width={block.image.width}
                                        height={block.image.height}
                                    />
                                    <div>
                                        <h2
                                            className="pl-[20px] text-[#0399d5] text-[30px] font-bold"
                                            dangerouslySetInnerHTML={{ __html: block.title }}
                                        />
                                        <div
                                            className={`text-[20px] text-[#55616d] pl-[20px] ${styles.features}`}
                                            dangerouslySetInnerHTML={{ __html: block.list }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : null}

                    {block.type === "carousel" ? (
                        <section className="carousel bg-[#f2f2f2]">
                            <div className="container mx-auto max-w-[1140px] py-[50px]">
                                <h2
                                    className="text-center text-[#0399d5] text-[30px] font-bold mb-[15px]"
                                    dangerouslySetInnerHTML={{ __html: block.title }}
                                />
                                <div className="slider-container">
                                    <Slider {...settings}>
                                        {block.items.map((item, index) => (
                                            <div key={index} >
                                                <div className=" flex justify-center mx-auto">
                                                    <Image
                                                        src={item.image.path}
                                                        alt={item.image.alt}
                                                        width={item.image.width}
                                                        height={item.image.height}
                                                    />
                                                </div>
                                                <h3 className="text-center text-[#55616d] text-[20px] font-extrabold mt-[20px]">{item.slickTitle}</h3>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </section>
                    ) : null}
                </div>
            ))}
            <div className="flex justify-center mt-[50px] mb-[70px]">
                <Link href={`/apps-software/`} className=" bg-[#ff7105] text-white text-center px-[15px] py-[13px] text-[18px] w-[195px] " dangerouslySetInnerHTML={{ __html: "<< Back to Portfolio" }} />
            </div>
        </div>
    );
};

export default Restaurant;

export async function getStaticProps() {
    const projectsData = projects;
    return {
        props: {
            projectsData,
        },
    };
}
