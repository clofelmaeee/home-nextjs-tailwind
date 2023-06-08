import footerData from "../../static-data/footer"


const Footer = () => {
console.log
  return (
    <footer className="footer p-[40px] w-full bg-[#626262] ">
      <div className=" text-[#d8d8d8] text-[18px] space-x-8 justify-center md:flex sm:block">
        <ul className="px-[30px] space-y-4">
          {footerData.menu1.map((item, index) => (
            <li key={index}>
              {item.text}
            </li>
          ))}
        </ul>
        <ul className="px-[30px]">
          {footerData.menu2.map((item, index) => (
            <li key={index}>
              {item.text}
            </li>
          ))}
        </ul>
        <ul className="px-[30px] border-l-[1px] border-[#d8d8d8]">
          {footerData.menu3.map((item, index) => (
            <li key={index}>
              {item.text}
            </li>
          ))}
        </ul>
        <ul className="px-[30px] border-l-[1px] border-[#d8d8d8]">
          {footerData.menu4.map((item, index) => (
            <li key={index}>
              {item.text}
            </li>
          ))}
        </ul>
        <p className="flex justify-start  text-[#d8d8d8] text-[15px] space-x-8  mx-auto">Copyright 2023 Halcyon Agile</p>
      </div>
      
    </footer>
  );
}

export default Footer;