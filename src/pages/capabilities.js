import BackToTop from "@/components/BackToTop";
import CapabilitiesContent from "../components/capabilities-content"

const Capabilities = () => {
    return (
        <div className="capabilities-wrapper relative top-[100px] flex flex-col justify-center w-full mx-auto">
            <CapabilitiesContent />
            <BackToTop />
        </div>
    );
}

export default Capabilities;