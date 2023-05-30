import Image from 'next/image'


const Banner= ({ home }) => {
    return (
        <section className='block-homepage-banner'>
                <Image
                    src={home.hero.banner}
                    // sizes="100vw"
                    //  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={1905}
                    height={935}
                    alt="Banner"
                />
                <div className='container py-[100px] absolute left-[150px] right-[0] top-[0] '>
                    <Image
                        src={home.hero.logo}
                        width={369}
                        height={117}
                        sizes="100vw"
                        // style={{ width: '100%', height: 'auto' }}
                        alt="Logo"
                        className='mb-[30px]'
                    />
                    <div className="text-[#55616d] text-[30px] max-w-[585px] " dangerouslySetInnerHTML={{ __html: home.hero.text }} />
                </div>
        </section>
    );
}

export default Banner;

