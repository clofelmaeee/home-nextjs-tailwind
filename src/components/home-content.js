import Image from 'next/image'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Checkbox, TextField, FormControlLabel, Button, Input } from "@mui/material";

const HomeContent = ({home}) => {
    const about = home.about
    const clients = home.clients
    const contact = home.contact

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
        <div className=''>
             <section className='block-banner h-screen custom-img bg-cover bg-center'>
                <div className='container py-[100px] absolute left-[150px] right-[0] top-[0] '>
                    <Image
                        src={home.hero.logo}
                        width={369}
                        height={117}
                        sizes="100vw"
                        // style={{ width: '100%', height: 'auto' }}
                        alt="Logo"
                        className='mb-[30px]'
                    />
                    <div className="text-[#55616d] text-[30px] max-w-[585px] " dangerouslySetInnerHTML={{ __html: home.hero.text }} />
                </div>
        </section>
        <section className='block-about-us container mx-auto py-[100px]'>
            <div className='flex mx-auto'>
                {about.items.map((item, index) => (
                    <div className="item flex justify-center flex-col items-center col-4 w-full max-w-[33.33%] " key={index}>
                        <Image src={item.image} width={89} height={89} alt="logo" />
                        <p className='font-bold text-[60px] mt-[20px] text-[#55616d]'>{item.number}</p>
                        <h2 className='font-bold text-[18px] mt-[20px] text-[#55616d]'>{item.text} </h2>
                    </div>
                ))}
            </div>
            <div className='mt-[50px] text-slate-600 text-[20px] space-y-5 ' dangerouslySetInnerHTML={{ __html: about.description }} />
        </section>
        <section className='block-products p-[100px] bg-[#f2f2f2]'>
            <div className='flex space-x-8 mx-auto justify-center max-w-[1140px]'>
                {home.products.items.map((item, index) =>
                    <div key={index} className="item bg-white shadow-xl p-[30px] max-w-[350px] mx-h-[352px] ">
                        <Image
                            src={item.image}
                            width={289.95}
                            height={223.42}
                            alt="Banner"
                            className=''
                        />
                        <h2 className='text-center text-[20px] mt-[20px] text-[#55616d]'>{item.title}</h2>
                    </div>
                )}
            </div>
        </section>
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
        <section className="block-contact-us py-[100px] mx-auto ">
            <div className="container  flex space-x-8">
                <div className="contacts mx-auto  justify-center px-[90px]">
                    <h2 className="title text-[#0399d5] text-[42px] font-bold mb-[8px]">CONTACT US</h2>
                    {contact.map((contacts, index) => (
                        <div key={index} className="">
                            {contacts.items?.map((item, itemIndex) => (
                                <div key={itemIndex} className=" text-[#55616d] text-[22px] mb-[25px]">
                                    <h3 >{item.title}</h3>
                                    <p >{item.landline}</p>
                                    <p className=""> {item.smart}</p>
                                    <p > {item.globe}</p>
                                    <p >{item.email}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <form className="inquire-now flex flex-col mx-auto text-[16px] text-[#55616d] ">
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
                    <div className="flex flex-col-2 w-full  mt-[10px] text-[16px]">
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

                    {contact.map((contacts, index) => (
                        <div key={index} >
                            {contacts.text?.map((item, itemIndex) => (
                                <p key={itemIndex} className="text-[14px] ]">{item.text}</p>
                            ))}
                        </div>
                    ))}
                    <div className="flex justify-start mt-[15px]">
                        <button className="text-white text-[16px] bg-[#ff8011] px-[23px] py-[15px] rounded">INQUIRE NOW</button>
                    </div>

                </form>
            </div>
        </section>
        </div>
    );
}

export default HomeContent;