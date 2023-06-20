import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";


const Carousel = ({ projectsData }) => {
    const block = projectsData[1].blocks[0]

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: true,
    };

    return (
        <div>
            <section className="carousel bg-[#f2f2f2]">
                <div className="container mx-auto max-w-[1140px] py-[50px]">
                    <h2
                        className="text-center text-[#0399d5] text-[30px] font-bold mb-[50px]"
                        dangerouslySetInnerHTML={{ __html: block.title }}
                    />
                    <div className="slider-container">
                        <Slider {...settings}>
                            {block.images.map((item, index) => (
                                <div key={index} >
                                    <div className=" flex justify-center mx-auto">
                                        <Image
                                            src={item.path}
                                            alt={item.alt}
                                            width={297}
                                            height={610}
                                        />
                                    </div>
                                    <h3 className="text-center text-[#55616d] text-[20px] font-extrabold mt-[20px]">{item.title}</h3>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Carousel;