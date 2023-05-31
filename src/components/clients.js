import Image from 'next/image'
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Clients = ({ clients }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return (
        <section className='p-[100px]'>
            <div className="container w-full mx-auto">
                <h2 className="block-title text-[#0399d5] text-[42px] mb-[30px] text-center font-bold">Our Clients</h2>
                <div className='slide-1'>
                    {/* {console.log(home.clients[1])} */}

                    <div className='items flex space-x-8 mx-auto justify-center duration-500 '>
                        {clients[currentIndex].slide.map((item, index) =>

                            <div key={index} className="item max-w-[200px] p-[20px] ">
                                {console.log(currentIndex)}
                                <Image
                                    src={item.image}
                                    width={100}
                                    height={100}
                                    style={{ width: 'auto', height: 'auto' }}
                                    alt="Halcyon Client"
                                    className=''
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className='block-btns flex justify-center text-3xl text-[#0399d5] cursor-pointer'>
                   
                    {clients.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            <RxDotFilled  />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Clients;