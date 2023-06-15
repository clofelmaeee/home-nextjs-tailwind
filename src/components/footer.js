import contactMobileData from "../../static-data/contactMobile";
import contactLandline from "../../static-data/contactLandline"
import footerData from "../../static-data/footer";
import Link from "next/link";

const Footer = ({ }) => {

  return (
    <footer className="footer p-[40px] w-full bg-[#626262]">
      <div className=" container  w-full mx-auto max-w-[1140px]">
        <div className="footer-top flex w-full justify-evenly text-[#d8d8d8] text-[18px]">
          <section className="px-[30px] space-y-5">
            <div className="" dangerouslySetInnerHTML={{ __html: footerData.menus }} />
          </section>
          <section className="flex flex-col px-[30px] border-r-[1px] border-[#d8d8d8] ">
            <label className="copyright " dangerouslySetInnerHTML={{ __html: contactLandline.label }} />
            <Link href="#" className="copyright " dangerouslySetInnerHTML={{ __html: contactLandline.value }} />
          </section>
          <section className="px-[30px] border-r-[1px] border-[#d8d8d8]">
            <label>{contactMobileData.label}</label>
            {contactMobileData.items.map((item, index) =>
              <div key={index}> 
               <Link href="#">{item.value}</Link> 
              </div>  
            )}
          </section>
          <section className="px-[30px]">
            <div className="copyright " dangerouslySetInnerHTML={{ __html: footerData.address }} />
          </section>
        
        </div>
        <div className="footer-bottom pl-[30px]">
          <div className="copyright text-[#d8d8d8] text-[15px]" dangerouslySetInnerHTML={{ __html: footerData.copyright }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
