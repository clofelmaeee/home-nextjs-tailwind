const ContactUs = ({ home }) => {
    return (
        <div className="w-full">
            <div className="flex flex-col-2 items-center w-full">
                <div className="flex items-center w-full">

                    <div className="contact-info space-y-5 w-full">
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
                </div>
                <div className="form w-full">
                    form here
                </div>
            </div>
        </div>
    );
}

export default ContactUs;