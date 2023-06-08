import { Checkbox, TextField, FormControlLabel, Button, Input } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai"


const ContactUs = ({ contact, form }) => {
    return (
        <section className="block-contact-us py-[100px] mx-auto ">
            <div className="container mx-auto flex space-x-8">
                <div className="contacts mx-auto  justify-center px-[90px]">
                    <h2 className="title text-[#0399d5] text-[42px] font-bold mb-[8px]">CONTACT US</h2>
                    {contact.map((contacts, index) => (
                        <div key={index} className="">
                            {contacts.items?.map((item, itemIndex) => (
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
                <form className="inquire-now flex flex-col mx-auto text-[16px] text-[#55616d] ">
                    <div className="flex-wrap space-x-8  w-full">
                        <TextField
                            variant="standard"
                            label="Name"
                            required
                            color="warning"
                        />
                        <TextField
                            variant="standard"
                            label="Email"
                            required
                            color="warning"
                        />
                    </div>
                    <div className="flex-wrap space-x-8">
                        <TextField
                            variant="standard"
                            label="Country/State"
                            required
                            color="warning"
                        />
                        <TextField
                            variant="standard"
                            label="Phone Number"
                            color="warning"
                        />
                    </div >
                    <div className="flex flex-col-2 w-full  mt-[10px] text-[16px]">
                        <div className="flex flex-col w-full mx-auto">
                            <p>Preferred Call Time</p>
                            <FormControlLabel
                                control={<Checkbox color="warning" />}
                                label="Morning"
                                labelPlacement="Morning"

                            />
                            <FormControlLabel
                                control={<Checkbox color="warning" />}
                                label="Afernoon"
                                labelPlacement="Afternoon"
                                color="warning"
                            />
                            <FormControlLabel

                                control={<Checkbox color="warning" />}
                                label="Evening"
                                labelPlacement="Evening"
                                color="warning"
                            />
                        </div>
                        <div className="flex flex-col w-full mx-auto">
                            <p>Preferred Language</p>
                            <FormControlLabel
                                control={<Checkbox color="warning" />}
                                label="English"
                                labelPlacement="English"
                                color="warning"
                            />
                            <FormControlLabel
                                control={<Checkbox color="warning" />}
                                label="Tagalog"
                                labelPlacement="Tagalog"
                                color="warning"
                            />
                            <FormControlLabel

                                control={<Checkbox color="warning" />}
                                label="Either"
                                labelPlacement="Either"
                                color="warning"
                            />
                        </div>
                    </div>
                    <TextField
                        label="Message/Requirements"
                        multiline
                        rows={4}
                        required
                        color="warning"
                    />

                    <input
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        className="mt-[15px]"
                    />

                    {contact.map((contacts, index) => (
                        <div key={index} >
                            {contacts.text?.map((item, itemIndex) => (
                                <p key={itemIndex} className="text-[14px] ]">{item.text}</p>
                            ))}
                        </div>
                    ))}
                    <div className="flex justify-start mt-[15px]">
                        <button className="text-white text-[16px] bg-[#ff8011] px-[23px] py-[15px] rounded">INQUIRE NOW</button>
                    </div>

                </form>
            </div>
        </section>

    );
}

export default ContactUs;