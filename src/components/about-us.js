import Image from 'next/image'
const AboutUs = ({ home }) => {
    return (
        <div>

            <div className='mx-96  mt-96 mb-40'>

                <div className='  pt-60'>
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
                <div className='text-slate-600 text-3xl space-y-5'>
                    <p className='text-lg' >

                        {home.about.text1}
                    </p>
                    <p className='text-lg ' >
                        {home.about.text2}
                    </p>
                    <p className='text-lg ' >
                        {home.about.text3}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;