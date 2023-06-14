
import servicesData from "../../static-data/website-services";

import styles from "../styles/websites.module.css";

const Websites = () => {
    console.log(); 
    return (
        <div>
            <h1>
                {servicesData.title}
            </h1>

            <div className={styles.description}dangerouslySetInnerHTML={{ __html: servicesData.description }} />
        </div>
        // <div className="websites relative  flex flex-col justify-center w-full mx-auto mt-[70px]">
        //     <div className=" w-full flex flex-col bg-gradient-to-r from-[#ffa85a] via-[#78ebed] to-[#117bbe] py-[30px] px-[15px] relative">
        //         <h1 className="custom-page-header text-center text-white font-bold text-[40px]">
        //             Custom Website Design Services
        //         </h1>
        //     </div>
        //     <section className="website-listing">
        //         <div className="website-services flex justify-center w-full mx-auto py-[30px] px-[100px]">
        //             <div className="container px-[100px]">
        //                 {servicesData.map((service, index) => (
        //                     <div key={index} className="px-[100px]">
        //                         <h2 className="services-title text-[32px] text-[#55616d] font-medium mb-[8px]">{service.title}</h2>
        //                         {service?.description?.map((item, index) =>
        //                             <ul key={index}>
        //                                 <p className={`services-item text-[#55616d] text-[18px]`}>{item.text} </p>
        //                                 <li className={`services-item text-[#55616d] text-[18px] ml-[40px] ${item.item ? "list-disc" : "mb-[18px]"}`}> {item.item} </li>
        //                             </ul>
        //                         )}
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className="p-[50px]">
        //             {servicesData.map((website, index) => (
        //                 <div key={index} className="flex flex-wrap -mx-4">
        //                     {website.websites?.map((img, index) => (
        //                         <div key={index} className="w-full sm:w-1/2 px-4 mb-4">
        //                             <div className="p-[10px] shadow-2xl">{img.image}</div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             ))}
        //         </div>
        //     </section>
        // </div>
    );
}

export default Websites;