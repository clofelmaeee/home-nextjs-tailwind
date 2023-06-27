import Image from 'next/image'
import styles from "../styles/homepage.module.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeContent = ({ home }) => {
    const hero = home.blocks[0]
    const about = home.blocks[1]
    const products = home.blocks[2]
    const clients = home.blocks[3]
    const contact = home.blocks[4]

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
                <div className='container py-[100px] w-[585px]'>
                    <div className='image-container absolute left-[150px] top-[200px]' >
                        <Image
                            src={hero.logo}
                            width={369}
                            height={117}
                            alt="Halcyon Agile"
                            className='client-img mb-[30px]'
                        />
                        <div className="text-[#55616d] text-[30px] w-[585px] absolute top-[150px]" dangerouslySetInnerHTML={{ __html: hero.description }} />
                    </div>
                </div>
            </section>
            <section className='block-about-us container mx-auto py-[100px] max-w-[1140px]'>
                <div className='flex mx-auto'>
                    {about.introItems.map((item, index) => (
                        <div key={index} className="item flex justify-center flex-col items-center col-4 w-full ">
                            <div className='image-container'>
                                <Image src={item.image.path} width={item.image.width} height={item.image.height} alt={item.title} />
                            </div>
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
                        <div key={index} className="item bg-white shadow-xl p-[30px] max-w-[350px] mx-h-[352px]" style={{ width: "auto", height: "auto" }}>
                            <Image src={item.image.path} width={289.95} height={223.42} alt={item.title} />
                            <h2 className='text-center text-[20px] mt-[20px] text-[#55616d]'>{item.title}</h2>
                        </div>
                    )}
                </div>
            </section>

            <section className="block-clients p-[100px]">
                <div className="container mx-auto max-w-[1140px]">
                    <h2 className="block-title text-[#0399d5] text-[42px] mb-[30px] text-center font-bold">
                        {clients.title}
                    </h2>
                    <Slider {...settings}>
                        {clients.images.map((client, index) => (
                            <div key={index} className="slider-item">
                                <div className="image-container">
                                    <Image
                                        src={client.path}
                                        alt={client.alt}
                                        width={client.width}
                                        height={client.height}
                                        priority="true"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
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
                    <div>
                        <form>
                            <div className='flex-wrap'>

                                <div className={styles.formRow}>
                                    <input type="text" placeholder="Name" className={styles.myInput} required />
                                    <input type="text" placeholder="Email" className={styles.myInput} required />
                                </div>
                                <div className={styles.formRow}>
                                    <input type="text" placeholder="Country/State" className={styles.myInput} required />
                                    <input type="text" placeholder="Phone Number" className={styles.myInput} required />
                                </div>

                                <div className="flex">
                                    <div className={styles.checkboxColumn}>
                                        <p className={styles.label}>Preferred Call Time</p>
                                        <div className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <label>Morning</label>
                                        </div>
                                        <div className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <label>Afternoon</label>
                                        </div>
                                        <div className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <label>Evening</label>
                                        </div>
                                    </div>
                                    <div className={styles.checkboxColumn}>
                                        <p className={styles.label}>Preferred Language</p>
                                        <div className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <label>English</label>
                                        </div>
                                        <div className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <label>Tagalog</label>
                                        </div>
                                        <div className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <label>Either</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </section >
        </div >
    );
}

export default HomeContent;