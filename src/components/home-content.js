import Image from 'next/image'
import styles from "../styles/homepage.module.css"

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Checkbox, TextField, FormControlLabel, Button, Input } from "@mui/material";
import Link from 'next/link';

const HomeContent = ({ home }) => {
    const hero = home.blocks[0]
    const about = home.blocks[1]
    const products = home.blocks[2]
    const clients = home.blocks[3]
    const contact = home.blocks[4]



    //  console.log(clients)
    const settings = {
        rows: 2,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6


    };
    return (
        <div className='homepage-content'>
            <section className={`block-banner h-screen  ${styles.customBg}`}>
                <div className='container py-[100px] absolute left-[150px] right-0 top-0'>
                    <Image
                        src={hero.logo}
                        width={369}
                        height={117}
                        alt="Halcyon Agile"
                        className='client-img mb-[30px]'
                    />
                    <div className="text-[#55616d] text-[30px] max-w-[585px]" dangerouslySetInnerHTML={{ __html: hero.description }} />
                </div>
            </section>
            <section className='block-about-us container mx-auto py-[100px] max-w-[1140px]'>
                <div className='flex mx-auto'>
                    {about.introItems.map((item, index) => (
                        <div key={index} className="item flex justify-center flex-col items-center col-4 w-full "   >
                            <Image src={item.image.path} width={item.image.width} height={item.image.height} alt={item.title} />
                            <p className='font-bold text-[60px]  text-[#55616d]'>{item.number}</p>
                            <h2 className='font-bold text-[18px] text-[#55616d]'>{item.title} </h2>
                        </div>
                    ))}
                </div>
                <div className='mt-[50px] text-slate-600 text-[20px] space-y-5 ' dangerouslySetInnerHTML={{ __html: about.description }} />
            </section>
            <section className='block-products py-[100px] bg-[#f2f2f2]'>
                <div className='flex space-x-8 mx-auto justify-center  max-w-[1140px] '>
                    {products.items.map((item, index) =>
                        <div key={index} className="item bg-white shadow-xl p-[30px] max-w-[350px] mx-h-[352px]" style={{width: "auto", height: "auto"}}>
                            <Image src={item.image.path} width={289.95} height={223.42} alt={item.title} />
                            <h2 className='text-center text-[20px] mt-[20px] text-[#55616d]'>{item.title}</h2>
                        </div>
                    )}
                </div>
            </section>
            <section className='block-clients slider-wrapper p-[100px]'>
                <div className="container mx-auto  max-w-[1140px]">
                    <h2 className="block-title text-[#0399d5] text-[42px] mb-[30px] text-center font-bold">{clients.title}</h2>
                    <div className="flex flex-col w-full ">
                        <Slider {...settings} style={{ position: "center" }}>
                            {clients.images.map((clients, index) =>
                                <div key={index} className=" " style={{width: "auto", height: "auto"}}>
                                    <Image
                                        src={clients.path}
                                        alt={clients.alt}
                                        width={clients.width}
                                        height={clients.height}
                                        className="flex self-center"
                                    />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="block-contact-us py-[100px] mx-auto max-w-[1140px] ">
                <div className="container flex justify-center space-x-5 ">
                    <div className="contacts px-[90px]">
                        <h2 className="title text-[#0399d5] text-[42px] font-bold mb-[8px]" dangerouslySetInnerHTML={{ __html: contact.title }} />
                        <div className="flex flex-col text-[#55616d] text-[22px] mb-[25px]" dangerouslySetInnerHTML={{ __html: contact.landline }} />
                        <div className="flex flex-col text-[#55616d] text-[22px] mb-[25px]" dangerouslySetInnerHTML={{ __html: contact.mobile }} />
                        <div className="flex flex-col text-[#55616d] text-[22px] mb-[25px]" dangerouslySetInnerHTML={{ __html: contact.email }} />
                    </div>
                    {/* <form className="inquire-now flex flex-col mx-auto text-[16px] text-[#55616d] ">
                        <div className="flex-wrap space-x-8  w-full">
                            <TextField
                                variant="standard"
                                label="Name"
                                required
                                color="warning"
                            />
                            <TextField
                                variant="standard"
                                label="Email"
                                required
                                color="warning"
                            />
                        </div>
                        <div className="flex-wrap space-x-8">
                            <TextField
                                variant="standard"
                                label="Country/State"
                                required
                                color="warning"
                            />
                            <TextField
                                variant="standard"
                                label="Phone Number"
                                color="warning"
                            />
                        </div >
                        <div className="flex flex-col w-full  mt-[10px] text-[16px]">
                            <div className='flex'>
                                <div className="flex flex-col w-full mx-auto">
                                    <p>Preferred Call Time</p>
                                    <FormControlLabel
                                        control={<Checkbox color="warning" />}
                                        label="Morning"
                                        labelPlacement="Morning"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="warning" />}
                                        label="Afernoon"
                                        labelPlacement="Afternoon"
                                        color="warning"
                                    />
                                    <FormControlLabel

                                        control={<Checkbox color="warning" />}
                                        label="Evening"
                                        labelPlacement="Evening"
                                        color="warning"
                                    />
                                </div>
                                <div className="flex flex-col w-full mx-auto">
                                    <p>Preferred Language</p>
                                    <FormControlLabel
                                        control={<Checkbox color="warning" />}
                                        label="English"
                                        labelPlacement="English"
                                        color="warning"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="warning" />}
                                        label="Tagalog"
                                        labelPlacement="Tagalog"
                                        color="warning"
                                    />
                                    <FormControlLabel

                                        control={<Checkbox color="warning" />}
                                        label="Either"
                                        labelPlacement="Either"
                                        color="warning"
                                    />
                                </div>
                            </div>

                        </div>
                        <TextField
                            label="Message/Requirements"
                            multiline
                            rows={4}
                            required
                            color="warning"
                        />

                        <input
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            className="mt-[15px]"
                        />

                        <div className=" text-[#55616d] text-[14px]" dangerouslySetInnerHTML={{ __html: contact.edit_attachment }} />
                        <div className="flex justify-start mt-[15px]">
                            <button className="text-white text-[16px] bg-[#ff8011] px-[23px] py-[15px] rounded">INQUIRE NOW</button>
                        </div>

                    </form> */}
                </div>
            </section>
        </div>
    );
}

export default HomeContent;