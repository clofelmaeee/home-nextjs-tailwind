import Image from 'next/image'
const AboutUs = ({ home }) => {
    return (
        <section className='container mx-auto py-[100px]'>
            <div className='flex mx-auto'>
                {home.about.items.map((item, index) => (
                        <div className="item flex justify-center flex-col items-center col-4 w-full max-w-[33.33%] " key={index}>
                            <Image src={item.image} width={89} height={89} alt="logo"/>
                            <p className='font-bold text-[60px] mt-[20px] text-[#55616d]'>{item.number}</p>
                            <h2 className='font-bold text-[18px] mt-[20px] text-[#55616d]'>{item.text} </h2>
                        </div>
                    ))}
                </div>
                <div className='mt-[50px] text-slate-600 text-[20px] space-y-5 ' dangerouslySetInnerHTML={{ __html: home.about.description }} />
        </section>
    );
}

export default AboutUs;