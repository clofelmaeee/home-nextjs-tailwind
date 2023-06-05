import Image from "next/image";
import servicesData from "../../static-data/website-services";

const WebsiteListing = () => {
    return (
        <div className="website-listing">
            <div>
                <div>
                    {servicesData.websites.map((website, index) => (
                        <div key={index}>
                            {website.image}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WebsiteListing;