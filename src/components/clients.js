import Image from 'next/image'
import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx'

const Clients = ({ clients }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }
    return (
        <section className='p-[100px]'>
            <div className="container mx-auto max-w-[1140px]">
                <h2 className="block-title text-[#0399d5] text-[42px] mb-[30px] text-center font-bold">Our Clients</h2>
                <div className='items grid grid-cols-6  space-y-5 justify-center duration-1000 max-h-[260px] '>
                    {clients[currentIndex].slide.map((item, index) => (
                        <div key={index} className="item max-w-[185px] max-h-[260px] m-auto">
                            <Image
                                src={item.image}
                                width={100}
                                height={100}
                                style={{ width: 'auto', height: 'auto' }}
                                alt="Halcyon Client"
                                className=''
                            />
                        </div>
                    )
                    )}

                </div>
                <div className={`block-btns flex justify-center text-5xl p-2 text-[#d2d2d2] cursor-pointer `}>
                    {clients.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`${slideIndex === slideIndex ? " text-[#0399d5]" : "text-[#0399d5]  "}`}>
                            <RxDotFilled />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Clients;