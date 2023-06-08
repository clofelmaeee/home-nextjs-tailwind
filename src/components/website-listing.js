import Image from "next/image";
import servicesData from "../../static-data/website-services";

const WebsiteListing = () => {
  console.log(servicesData.websites);
  return (
    <section className="website-listing">
      <div className="p-[50px]">
        {servicesData.map((website, index) => (
          <div key={index} className="flex flex-wrap -mx-4">
            {website.websites?.map((img, index) => (
              <div key={index} className="w-full sm:w-1/2 px-4 mb-4">
                <div className="p-[10px] shadow-2xl">{img.image}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebsiteListing;
