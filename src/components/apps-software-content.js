import Image from "next/image";
import AppsSoftwareData from "../../static-data/apps-software"

const AppsContent = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="py-[50px] mx-auto w-full bg-[#f2f2f2] " >
                <div className="container mx-auto ">
                    {AppsSoftwareData?.data?.map((text, index) =>
                        <div key={index} className=' text-[#55616d] text-[18px] space-y-5 mx-auto px-[200px]' > {text.text}</div   >
                    )}
                </div>
            </section>

            <section className="restaurant flex flex-col items-center py-[100px]">
                <div className="container flex flex-col items-center">
                    <h2 className="text-[25px] font-semibold text-[#56606c] text-center mb-[40px]"> Restaurant Online Food Ordering</h2>
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
                        <div className="flex md:flex items-center sm:block">
                            <Image
                                src="/wingzone_mobilea.jpg"
                                width={200}
                                height={400}
                                alt="Mimosa"
                                className="px-[5px] py-[20px]"
                            />

                            <Image
                                src="/wingzone.jpg"
                                width={710}
                                height={100}
                                alt="Mimosa"
                                className="px-[80px] py-[20px]"
                            />

                            <Image
                                src="/wingzone_mobileb.jpg"
                                width={200}
                                height={400}
                                alt="Mimosa"
                                className="px-[5px] py-[20px]"
                            />
                        </div>
                    </div>
                    <div className="my-[30px]">
                        {AppsSoftwareData?.data?.map((text, index) =>
                            <p key={index} className=' text-[#55616d] text-[18px] space-y-5 px-[200px]' > {text.description}</p   >
                        )}
                    </div>
                    <button className="flex justify-center bg-[#ff7105] text-white px-[15px] py-[13px] text-[18px] min-w-[225px]">Learn More  </button>
                </div>
            </section>

            <section className="restaurant flex flex-col items-center py-[100px]">
                <div className="container flex flex-col items-center">
                    <h2 className="text-[25px] font-semibold text-[#56606c] text-center mb-[40px]"> Golf Course Management System</h2>
                    <div className="flex mb-[30px]">
                        <div className="flex mb-[30px]">
                            <div className="absolute flex ">
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
                            <div className=" md:flex sm:block">
                                <Image
                                    src="/golf-app-1.jpg"
                                    width={200}
                                    height={400}
                                    alt="Mimosa"
                                    className="px-[5px] py-[20px]"
                                />

                                <Image
                                    src="/mimosa.jpg"
                                    width={710}
                                    height={100}
                                    alt="Mimosa"
                                    className="px-[80px] py-[20px]"
                                />

                                <Image
                                    src="/golf-app-bill.jpg"
                                    width={200}
                                    height={400}
                                    alt="Mimosa"
                                    className="px-[5px] py-[20px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-[30px]">
                        {AppsSoftwareData?.data?.map((text, index) =>
                            <p key={index} className=' text-[#55616d] text-[18px] space-y-5 px-[200px]' > {text.description}</p   >
                        )}
                    </div>
                    <button className="flex justify-center bg-[#ff7105] text-white px-[15px] py-[13px] text-[18px] min-w-[225px]">Learn More  </button>
                </div>
            </section>
        </div>
    );
}

export default AppsContent;