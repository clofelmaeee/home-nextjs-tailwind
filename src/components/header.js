"use-client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {
    const menu = [
        {
            title: <Link href="/">Home</Link>

        },
        {
            title: <Link href="#">Websites</Link>
        },
        {
            title: <Link href="#">Apps and Softwares</Link>

        },
        {
            title: <Link href="#">Capabilities</Link>
        },
        {
            title: "Contact",
            submenu: [{
                number: "0919 078 0760 (Smart)",
                number: "0917 704 3877 (Globe)",
                number: "2 8810 4356"
            }]
        },
    ]

    const [bgColor, setBgColor] = useState('transparent')
    const [bgClass, setBgClass] = useState('transparent')
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const changeColor = () => {

            if (window.pageYOffset >= 50 && window.pageYOffset <= 799) {
                console.log('1');
                setBgClass('hide');
            }else if(window.pageYOffset >= 800) {
                setBgColor('show')
                console.log('800');
                setBgClass('show');
            } else {
                setBgColor('transparent')
                console.log('else');
                setBgClass('transparent');
            }
        };
        window.addEventListener('scroll', changeColor)
        window.addEventListener('load', changeColor)
    }, [])

    return (
        <header
            className={`header ${bgClass} fixed top-0 right-0 w-full z-10 ease-in duration-300 px-[50px] mx-auto`} >
            <div className="w-full flex space-x-8 justify-start py-[8px] px-[16px]">
                    <div className="block-image w-full p-[5px]">
                        <Image
                            src="/header-logo.png"
                            width={160}
                            height={50.72}
                            alt="Halcyon"
                        />
                    </div>
                <ul className="hidden sm:flex ml-[50px] w-full justify-end">
                    {menu.map((menu, index) => (
                        <li key={index} className={`text-[#55616d] hover:text-[#0399d5] text-[18px] p-[15px] ${scrollPosition >= 1 && scrollPosition < 800 ? 'hidden' : ''}`}>{menu.title}</li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;