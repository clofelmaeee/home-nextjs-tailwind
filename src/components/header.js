import Image from "next/image";
import { useEffect, useState } from "react";
import headerData from '../../static-data/header'

const Header = () => {

    const [bgColor, setBgColor] = useState('transparent')
    const [bgClass, setBgClass] = useState('transparent')

    useEffect(() => {
        const changeColor = () => {

            if (window.pageYOffset >= 50 && window.pageYOffset <= 799) {
                setBgClass('hide');
            } else if (window.pageYOffset >= 800) {
                setBgColor('show')
                setBgClass('show');
            } else {
                setBgColor('transparent')
                setBgClass('transparent');
            }
        };
        window.addEventListener('scroll', changeColor)
        window.addEventListener('load', changeColor)
    }, [])

    return (
        <header
            className={`header ${bgClass} fixed z-10  w-full px-[50px]`} >
            <div className="w-full flex py-[8px] px-[16px]">
                <div className="header-logo w-full p-[5px]">
                    <Image
                        src="/header-logo.png"
                        width={160}
                        height={50.72}
                        alt="Halcyon"
                    />
                </div>
                <ul className="hidden sm:flex w-full justify-end">
                    {headerData.map((menu, index) => (
                        <li key={index} className={`text-[#55616d] hover:text-[#0399d5] text-[18px] p-[15px] `}>{menu.title}</li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;


