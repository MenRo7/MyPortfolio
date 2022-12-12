import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({}: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

    return (
        <div className=" h-screen flex relative flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need. {" "}
                    <span className="text-blue-500">Let's talk.</span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#0a71f7] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">+33 6 62 62 62 62</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#0a71f7] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">romain.gnr@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#0a71f7] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">Reims, France</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} 
                    className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input 
                            {...register('name')} 
                            placeholder="Name" 
                            className="contactInput" 
                            type="text"
                        />
                        <input 
                            {...register('email')} 
                            placeholder="Email" 
                            className="contactInput" 
                            type="email"
                        />
                    </div>
                
                    <input 
                        {...register('subject')} 
                        placeholder="Subjet" 
                        className="contactInput" 
                        type="text"
                    />

                    <textarea 
                        {...register('message')} 
                        placeholder="Message" 
                        className="contactInput"
                    />
                    <button 
                        type="submit"
                        className="bg-[#0a71f7] py-5 px-10 rounded-md text-black font-bold
                        text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;