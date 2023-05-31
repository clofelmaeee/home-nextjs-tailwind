import { Checkbox, TextareaAutosize, TextField } from "@mui/material";

const ContactUs = ({ contact, form }) => {
    return (
        <section className="mx-auto py-[100px]">
            <div className="container mx-auto flex">
                <div className="content-1 mx-auto  justify-center">
                    <h2 className="title text-[#0399d5] text-[42px] font-bold mb-[8px]">CONTACT US</h2>
                    {contact.map((contacts, index) => (
                        <div key={index} className="">
                            {contacts.items.map((item, itemIndex) => (
                                <div key={itemIndex} className=" text-[#55616d] text-[22px] mb-[25px]">
                                    <h3 >{item.title}</h3>

                                    <p >{item.landline}</p>
                                    <p className=""> {item.smart}</p>
                                    <p > {item.globe}</p>
                                    <p >{item.email}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="content-1 mx-auto ">
                    <div className="flex-wrap space-x-5 w-full">

                        <TextField
                            variant="standard"
                            label="Name"
                            required
                        />
                        <TextField
                            variant="standard"
                            label="Name"
                            required
                        />
                    </div>
                    <div className="flex-wrap space-x-5">

                        <TextField
                            variant="standard"
                            label="Name"
                            required
                        />
                        <TextField
                            variant="standard"
                            label="Name"
                            required
                        />
                    </div>
                    <div>
                        <input type="checkbox"/>
                    </div>
                   
                </div>
            </div>
        </section>

    );
}

export default ContactUs;