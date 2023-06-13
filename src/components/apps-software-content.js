import Apps from "@/pages/apps-software/[apps]";
import Image from "next/image";
import Link from "next/link";
import AppsSoftwareData from "../../static-data/apps-software"

const AppsContent = () => {

    return (
        <div className="flex flex-col w-full">
            <div className="page-header py-[30px] px-[15px] ">
                <h1 className=" w-full text-center text-[#d56503] font-bold text-[40px]">Mobile Apps and Software</h1>
            </div>
            <section className="block-introduction py-[50px] bg-[#f2f2f2] " >
                <div className="container mx-auto px-[100px]">
                    <p className=' text-[#55616d] text-[18px] space-y-5  px-[200px] md:px-[100px] sm:px-[50px] sm:mx-0'>{AppsSoftwareData[0]?.text}</p>
                </div>
            </section>
            <section className="block-restaurant flex flex-col items-center py-[100px]">
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
                    <p className=' text-[#55616d] text-[18px] space-y-5 px-[200px] my-[30px] whitespace-pre-line' > {AppsSoftwareData[1].description}</p>
                    <Link href="/restaurant" className="flex justify-center bg-[#ff7105] text-white px-[15px] py-[13px] text-[18px] min-w-[225px]">Learn More  </Link>
                </div>
            </section>

            <section className="block-golf flex flex-col items-center pb-[100px]">
                <div className="container flex flex-col items-center py-[100px] border-t-[1px]">
                    <h2 className="text-[25px] font-semibold text-[#56606c] text-center mb-[40px]"> Golf Course Management System</h2>
                    <div className="flex mb-[30px]">
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
                            <div className="md:flex items-center sm:block">
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
                    <p className=' text-[#55616d] text-[18px] space-y-5 px-[200px] my-[30px]' > {AppsSoftwareData[2].description}</p>
                    <Link href={`/apps-software/${[]}`} className="flex justify-center bg-[#ff7105] text-white px-[15px] py-[13px] text-[18px] min-w-[225px]">Learn More  </Link>
                </div>
            </section>
        </div>
    );
}

export default AppsContent; 