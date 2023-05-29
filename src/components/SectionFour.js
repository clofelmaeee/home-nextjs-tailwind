import Image from 'next/image'
const SectionFour = ({home}) => {
    return (
        <div>
            <div className='mx-24 my-12 w-full'>
          <p className='text-blue-500 font-extrabold font-9xl text-center '>
            {home.clients.title}
          </p>
          <div className='flex flex-rows-6 gap-5 justify-center w-full'>
            <div className='flex flex-col items-center'>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
            </div>

          </div>
        </div>
        </div>
    );
}

export default SectionFour;