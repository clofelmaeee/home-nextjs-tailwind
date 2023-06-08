import Image from "next/image";
import capabilitiesData from "../../static-data/capabilities"

const CapabilitiesContent = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="page-header py-[30px] px-[15px]">
                <h1 className="text-center text-[#0399d5] font-bold text-[40px]">Capabilities</h1>
            </div>
            <section className="w-full py-[100px]">
                <div className="container mx-auto w-full max-w-[1140px] text-[#55616d]">
                    {capabilitiesData.map((capability, index) => (
                        <div key={index} className="flex flex-wrap -mx-4">
                            {capability.item?.map((item, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4">
                                    <div className="p-[20px]">
                                        <div>{item.image}</div>
                                        <h2 className="text-[28px] font-medium break-normal my-[15px]">{item.title}</h2>
                                        <p className="text-[20px] break-normal ">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full pb-[100px]">
                <div className="container mx-auto w-full max-w-[1140px] text-[#55616d]">
                    <p className="tracking-widest text-[32px] text-center text-[#9f9f9f] mb-[50px]">No project is too small or large.</p>
                    {capabilitiesData.map((capabilities, index) => (
                        <div key={index} className="flex flex-wrap -mx-2 ">
                            {capabilities.capability?.map((item, index) => (
                                <div key={index} className="w-full sm:w-1/2 px-2">
                                    {item.title ? <h3 className="text-[#ff8011] text-[30px] font-bold text-center mb-[25px]"> {item.title}</h3> : ""}
                                    {item.image ? <div className=" flex space-x-8 mb-[20px] shadow-md p-[20px]">
                                        <div className="min-w-[45px] min-h-[47px]">{item.image}</div>
                                        <p className="text-20 break-normal text-[18px]">{item.description}</p>
                                    </div> : ""}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full pb-[100px]">
                <div className="container flex mx-auto w-full max-w-[1140px] text-[#55616d] space-x-8">
                    <div className="min-w-[255px] min-h-[263px] ">{capabilitiesData[4].micro[0].image}</div>
                    <div>
                        <p className="text-[#0399d5] text-[42px] font-bold mb-[40px]"> {capabilitiesData[4].micro[0].title}</p>
                        <p className="text-[18px]"> {capabilitiesData[4].micro[0].description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CapabilitiesContent;
