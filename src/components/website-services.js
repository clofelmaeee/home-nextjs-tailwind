import servicesData from "../../static-data/website-services";

const WebsiteServices = () => {
    return (
        <section className="website-services flex justify-center w-full mx-auto py-[30px] px-[100px]">
            <div className="container px-[100px]">
                {servicesData.map((service, index) => (
                    <div key={index} className="px-[100px]">
                        <h2 className="services-title text-[32px] text-[#55616d] font-medium mb-[8px]">{service.title}</h2>
                        <div>
                            {service?.description?.map((item, index) =>
                                <div key={index} >
                                    <p className={`services-item text-[#55616d] text-[18px]`}>{item.text} </p>
                                    <ul>
                                        <li className={`services-item text-[#55616d] text-[18px] ml-[40px] ${item.item ? "list-disc" : "mb-[18px]"}`}> {item.item} </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WebsiteServices;
