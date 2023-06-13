import WebsitesContent from "@/components/websites-content";
import Image from "next/image";

const Websites = () => {
    return (
        <div className="websites relative  flex flex-col justify-center w-full mx-auto">
            <div className=" w-full flex flex-col bg-gradient-to-r from-[#ffa85a] via-[#78ebed] to-[#117bbe] py-[30px] px-[15px] relative">
                <h1 className="custom-page-header text-center text-white font-bold text-[40px]">
                    Custom Website Design Services
                </h1>
            </div>
           <WebsitesContent/>
        </div>
    );
}

export default Websites;