import Image from "next/image";
import servicesData from "../../static-data/website-services";

const WebsiteListing = () => {
    console.log(servicesData.websites)
    return (
        <section className="website-listing">
            <div className="p-[50px]">
                {servicesData.map((website, index) => (
                    <div key={index} className=" grid grid-cols-2 ">
                        {website.websites?.map((img, index) => (
                            <div key={index} className="px-[30px] pb-[30px]" style={{ transition: "ease-in 0.3s" }}>
                                <div className="p-[10px] shadow-2xl" style={{ transition: "ease-in 0.3s" }}>{img.image}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WebsiteListing;