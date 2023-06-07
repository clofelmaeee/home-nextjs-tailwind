import AppsContent from "@/components/apps-software-content";



const AppsSoftware = () => {

    console.log(AppsSoftware)
    return (
        <div className="apps-software relative  flex flex-col justify-center w-full mx-auto">
            <div className="app-software-page-header  w-full py-[30px] px-[15px] relative">
                <h1 className=" w-full text-center text-[#d56503] font-bold text-[40px]">Mobile Apps and Software</h1>
            </div>
            <AppsContent />
        </div>
    );
}

export default AppsSoftware;