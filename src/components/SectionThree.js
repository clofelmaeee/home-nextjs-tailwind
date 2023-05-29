import Image from 'next/image'
const SectionThree = ({ home }) => {
    return (
        <div>
            <div className='mx-24 my-12'>
                <div className='flex flex-rows-3 gap-5 justify-center w-full'>

                    <div className='flex flex-col items-center p-8 bg-white shadow'>
                        <Image
                            src={home.products.imgOne}
                            width={300}
                            height={300}
                            alt="Banner"
                        />
                        <p className='mt-8'>
                            {home.products.text1}
                        </p>

                    </div>
                    <div className='flex flex-col items-center p-5 bg-white shadow'>
                        <Image
                            src={home.products.imgTwo}
                            width={300}
                            height={300}
                            alt="Banner"
                        />
                        <p className='mt-8'>

                            {home.products.text2}
                        </p>
                    </div>
                    <div className='flex flex-col items-center p-5 bg-white shadow'>
                        <Image
                            src={home.products.imgThree}
                            width={300}
                            height={300}
                            alt="Banner"
                        />
                        <p className='mt-8'>

                            {home.products.text3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;