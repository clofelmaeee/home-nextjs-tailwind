import Image from 'next/image'


const Banner= ({ home }) => {
    return (
        <div>
            <div className='container'>

                <div className='w-full'>
                    <Image
                        src={home.hero.banner}
                        fill
                        // sizes="100vw"
                        //  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="Banner"
                    />
                    <Image
                        src={home.hero.logo}
                        width={369}
                        height={117}
                        sizes="100vw"
                        // style={{ width: '100%', height: 'auto' }}
                        alt="Banner"
                    />


                </div>
            </div>
        </div>
    );
}

export default Banner;

