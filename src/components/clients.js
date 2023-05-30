import Image from 'next/image'
const Clients = ({home}) => {
    return (
        <div className='w-full'>
            <div className=' my-12 w-full'>
          <p className='text-blue-400 font-extrabold text-4xl text-center '>
            {home.clients.title}
          </p>
          <div className='flex flex-rows-6 gap-5 justify-center'>
            <div className='flex flex-col items-center'>
              <div className='item p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='item p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
            </div>
            <div className='item flex flex-col items-center'>
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
            <div className='item flex flex-col items-center'>
              <div className='p-5'>
                <Image
                  src={home.clients.img}
                  width={89}
                  height={89}
                  alt="Banner"
                />
              </div>
              <div className='item p-5'>
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

export default Clients;