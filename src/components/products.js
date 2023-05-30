import Image from 'next/image'
const Products = ({ home }) => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className='flex flex-rows-3 gap-5 justify-center w-full'>

                    <div className='flex flex-col items-center p-8 bg-white shadow w-full'>
                        <Image
                            src={home.products.imgOne}
                            width={300}
                            height={300}
                            alt="Banner"
                        />
                        <p className='mt-8 text-center'>
                            {home.products.text1}
                        </p>

                    </div>
                    <div className='flex flex-col items-center p-5 bg-white shadow w-full'>
                        <Image
                            src={home.products.imgTwo}
                            width={300}
                            height={300}
                            alt="Banner"
                        />
                        <p className='mt-8 text-center'>

                            {home.products.text2}
                        </p>
                    </div>
                    <div className='flex flex-col items-center p-5 bg-white shadow w-full'>
                        <Image
                            src={home.products.imgThree}
                            width={300}
                            height={300}
                            alt="Banner"
                        />
                        <p className='mt-8 text-center'>

                            {home.products.text3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;