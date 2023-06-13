import Image from "next/image";
import Link from "next/link";
import AppsSoftwareData from "../../static-data/apps-software"
import RestaurantData from "../../static-data/restaurant"

const RestaurantContent = () => {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
        <div className="flex flex-col">
            <section className="block-restaurant flex flex-col items-center pt-[100px]">
                <div className="container flex flex-col items-center">
                    <div className="flex mb-[30px]">
                        <div className="absolute  md:flex items-center sm:block ">
                            <Image
                                src="/frame_mobile.png"
                                width={203}
                                height={418}
                                alt="Mimosa"
                            />
                            <Image
                                src="/frame_laptop.png"
                                width={706}
                                height={401}
                                alt="Mimosa"
                            />
                            <Image
                                src="/frame_mobile.png"
                                width={203}
                                height={418}
                                alt="Mimosa"
                            />
                        </div>
                        <div className=" md:flex items-center sm:block">
                            <Image
                                src="/restaurant/wingzone_mobilea.jpg"
                                width={200}
                                height={400}
                                alt="Mimosa"
                                className="px-[5px] py-[20px]"
                            />

                            <Image
                                src="/restaurant/wingzone.jpg"
                                width={710}
                                height={100}
                                alt="Mimosa"
                                className="px-[80px] py-[20px]"
                            />

                            <Image
                                src="/restaurant/wingzone_mobileb.jpg"
                                width={200}
                                height={400}
                                alt="Mimosa"
                                className="px-[5px] py-[20px]"
                            />
                        </div>
                    </div>
                    <p className=' text-[#55616d] text-[18px] space-y-5 px-[200px] my-[30px] ' > {AppsSoftwareData[1].description}</p>
                </div>
            </section>
            <section className="block-features flex flex-col items-center ">
                <div className="container flex flex-col ">
                    {RestaurantData[0].featuresOverview?.map((features, index) => (
                        <div key={index} className="px-[200px]">
                            <h2 className="flex justify-center text-[#0399d5] text-[30px] font-semibold">{features.title}</h2>
                            <ul className="flex justify-start">
                                <li className={`features-item text-[#55616d] text-[20px] ml-[40px] ${features.text ? "list-disc" : "mb-[18px]"}`}>
                                    {features.text}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <section className="block-progressive-web-app flex flex-col items-center ">
                <div className="container ">
                    <div className="flex px-[200px]">
                        {RestaurantData[0].progressiveWebApp?.image}
                        <div>
                            <h2 className={`left-[280px] top-[50px] text-[#0399d5] text-[30px] font-semibold `}>{RestaurantData[0].progressiveWebApp?.title}</h2>
                            {RestaurantData[0].progressiveWebApp?.description.map((item, index) => (
                                <ul key={index} className="  left-[280px] bottom-[480px]">
                                    <li className={`features-item text-[#55616d] text-[20px] ${item.text ? "list-disc ml-[40px]" : "mb-[18px]"}`}>
                                        {item.text}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <section className="block-progressive-web-app flex flex-col items-center ">
                <div className="container ">
                    <div className="flex px-[200px]">
                        {RestaurantData[0].dateTime?.image}
                        <div>
                            <h2 className={`left-[280px] top-[50px] text-[#0399d5] text-[30px] font-semibold `}>{RestaurantData[0].dateTime?.title}</h2>
                            {RestaurantData[0].dateTime?.description.map((item, index) => (
                                <ul key={index} className="  left-[280px] bottom-[480px]">
                                    <li className={`features-item text-[#55616d] text-[20px] ${item.text ? "list-disc ml-[40px]" : "mb-[18px]"}`}>
                                        {item.text}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            {/* <section className="block-progressive-web-app flex flex-col items-center ">
                <div className="container ">
                    <div className="flex px-[200px]">
                        {RestaurantData[0].dateTime?.image}
                        <div>
                            <h2 className={`left-[280px] top-[50px] text-[#0399d5] text-[30px] font-semibold `}>{RestaurantData[0].dateTime?.title}</h2>
                            {RestaurantData[0].dateTime?.description.map((item, index) => (
                                <ul key={index} className="  left-[280px] bottom-[480px]">
                                    <li className={`features-item text-[#55616d] text-[20px] ${item.text ? "list-disc ml-[40px]" : "mb-[18px]"}`}>
                                        {item.text}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                </div>
            </section> */}

        </div>
    );
}

export default RestaurantContent;