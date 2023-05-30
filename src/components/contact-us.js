import { TextField } from "@mui/material";

const ContactUs = ({ home }) => {
    return (
        <div className="w-full">
            <div className="flex flex-col-2 items-center w-full">
                <section className="flex items-center w-full">
                    <div className="contact-info space-y-5 w-full px-10">
                        <div className="title flex text-blue-400 text-4xl font-bold w-full">
                            <p>{home.contact.title}</p>
                        </div>
                        <div className='text-slate-500 font-medium text-2xl w-full'>
                            <p>{home.contact.text1}</p>
                            <p>{home.contact.landline}</p>
                        </div>
                        <div className='text-slate-500 font-medium text-2xl w-full'>
                            <p>{home.contact.text2}</p>
                            <p>{home.contact.mobile1}</p>
                            <p>{home.contact.mobile2}</p>
                        </div>

                        <div className='text-slate-500 font-medium text-2xl w-full'>
                            <p>{home.contact.text3}</p>
                            <p>{home.contact.email}</p>
                        </div>
                    </div>
                </section>
                <section className="contact-us-form flex items-center w-full">

                    <div className="form-content ">
                        <div className="flex flex-col-2 gap-5">
                            <TextField
                                variant="standard"
                                label="Name"
                                required
                            />
                            <TextField
                                variant="standard"
                                label="Email"
                                required
                            />
                        </div>
                        <div className="flex flex-col-2 gap-5">
                            <TextField
                                variant="standard"
                                label="Country/State"
                                required
                            />
                            <TextField
                                variant="standard"
                                label="Phone Number"
                                
                            />
                        </div>
                       
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ContactUs;