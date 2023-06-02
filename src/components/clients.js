import Slider from "react-slick";
import Image from 'next/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GoDotFill} from "react-icons/go"


const Clients = ({ clients }) => {
    const settings = {
        rows: 2,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 6
        
    };

    return (
        <section className='block-clients slider-wrapper p-[100px]'>
            <div className="container mx-auto  max-w-[1140px]">
                <h2 className="block-title text-[#0399d5] text-[42px] mb-[30px] text-center font-bold">Our Clients</h2>
                <div className="flex flex-col w-full ">
                        <Slider {...settings} >
                            {clients.map((client, index) =>
                                <div key={index} className="image-wrapper flex  justify-center " style={{height: 'auto', width:'auto'}}>
                                        <Image
                                            src={client.image}
                                            alt="Halcyon Client"
                                            width={100}
                                            height={200}
                                            className="flex self-center"
                                        />
                                  
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            
        </section>
    );
}

export default Clients;