import Image from 'next/image'
const SectionTwo = ({ home }) => {
    return (
        <div>

            <div className='mx-24 mt-12'>

                <div className='  pb-15'>
                    <div className='flex flex-rows-3 justify-center w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <Image
                                src={home.about.imgOne}
                                width={89}
                                height={89}
                                alt="Banner"
                            />
                            {home.about.textOne}
                        </div>
                        <div className='flex flex-col items-center w-full'>
                            <Image
                                src={home.about.imgTwo}
                                width={89}
                                height={89}
                                alt="Banner"
                            />
                            {home.about.textTwo}
                        </div>
                        <div className='flex flex-col items-center w-full'>
                            <Image
                                src={home.about.imgThree}
                                width={89}
                                height={89}
                                alt="Banner"
                            />
                            {home.about.textThree}
                        </div>
                    </div>
                </div>

                <p className='text-lg' >
                    {home.about.text1}
                </p>
                <p className='text-lg pt-5' >
                    {home.about.text2}
                </p>
                <p className='text-lg pt-5' >
                    {home.about.text3}
                </p>
            </div>

        </div>
    );
}

export default SectionTwo;