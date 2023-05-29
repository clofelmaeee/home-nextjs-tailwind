import Image from 'next/image'


const SectionOne = ({home}) => {
    return (
        <div>
            <div className='container'>

                <div className='w-full'>
                    <Image
                        src={home.hero.banner}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="Banner"
                    />
                    <Image
                        src={home.hero.logo}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="Banner"
                    />

                </div>
            </div>
        </div>
    );
}

export default SectionOne;

