import Image from 'next/image'
const Products = ({ home }) => {
    // console.log(home.products)
    return (
        <section className='p-[100px] bg-[#f2f2f2]'>
            <div className='flex space-x-8 mx-auto justify-center'>
                {home.products.items.map((item, index) => 
                    <div key={index} className="item bg-white shadow-xl p-[30px] max-w-[350px] mx-h-[352px] ">
                        <Image
                            src={item.image}
                            width={289.95}
                            height={223.42}
                            alt="Banner"
                            className=''
                        />
                        <h2 className='text-center text-[20px] mt-[20px] r text-[#55616d]'>{item.title}</h2>
                    </div>
                )}
            </div>
        </section>

    );
}

export default Products;