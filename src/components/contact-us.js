import { Checkbox, TextareaAutosize, TextField } from "@mui/material";

const ContactUs = ({ home }) => {
    return (
        <div className="w-full">
            <div className="flex flex-col-2 items-center w-full ">
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
                <section className="contact-us-form flex items-center w-full text-slate-500 space-y-5">

                    <div className="form-content w-full">
                        <div className="flex flex-col-2 gap-5 w-full">
                            <TextField
                                variant="standard"
                                label="Name"
                                required
                                className="w-full"
                            />
                            <TextField
                                variant="standard"
                                label="Email"
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col-2 gap-5 w-full">
                            <TextField
                                variant="standard"
                                label="Country/State"
                                required
                                className="w-full"
                            />
                            <TextField
                                variant="standard"
                                label="Phone Number"
                                className="w-full"

                            />
                        </div>
                        <div className="flex flex-col-2 gap-5 w-full">
                            <>
                                <ul className="w-full">
                                    <li>
                                        Preffered Call Time
                                    </li>
                                    <li>
                                        <Checkbox
                                            label=""

                                        />
                                        <label>
                                            Morning
                                        </label>
                                    </li>
                                    <li>
                                        <Checkbox
                                            label=""

                                        />
                                        <label>
                                            Afternoon
                                        </label>
                                    </li>
                                    <li>
                                        <Checkbox
                                            label=""

                                        />
                                        <label>
                                            Evening
                                        </label>
                                    </li>

                                </ul>
                            </>
                            <>
                                <ul className="w-full">
                                    <li>
                                        Preffered Language
                                    </li>
                                    <li>
                                        <Checkbox
                                            label=""

                                        />
                                        <label>
                                            English
                                        </label>
                                    </li>
                                    <li>
                                        <Checkbox
                                            label=""

                                        />
                                        <label>
                                            Tagalog
                                        </label>
                                    </li>
                                    <li>
                                        <Checkbox
                                            label=""

                                        />
                                        <label>
                                            Either
                                        </label>
                                    </li>
                                </ul>
                            </>
                        </div>


                    </div>
                </section>
            </div>
                    <div>
                        <TextareaAutosize
                            label="Message/Requests"
                            minRows={3}
                            required
                            variant="outlined"
                        />

                    </div>
        </div>
    );
}

export default ContactUs;