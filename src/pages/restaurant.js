import RestaurantContent from "@/components/restaurant-content";

const Restaurant = () => {
    return (
        <div className="apps-software relative  flex flex-col justify-center w-full mx-auto">
            <div className="page-header  w-full py-[30px] px-[15px] relative">
                <h1 className=" w-full text-center text-[#d56503] font-bold text-[40px]">Restaurant Online Food Ordering</h1>
            </div>
            <RestaurantContent />
        </div>
    );
}

export default Restaurant;