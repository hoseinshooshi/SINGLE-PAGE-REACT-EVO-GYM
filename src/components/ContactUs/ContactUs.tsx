import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"
type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
    const {register, trigger, formState:{errors}} = useForm();
    const onsubmit = async(e:any) =>{
        const isValid = await trigger(); 
        if(!isValid) {
        e.preventDefault();
        }

    }
  return (
    <section
    id="contactus"
    className="mx-auto w-5/6 pt-15 pb-12"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUS)}>
            {/* Header */}
            <div
            className="md:w-3/5">
                <HText>
                    <span className="text-[#FF6B66]">JOIN NOW</span> TO GET IN SHAPE
                </HText>
            </div>
            {/* form */}
            <div className="mt-6 justify-between gap-4 md:flex">
                <div className="mt-6 basis-3/5 md:mt-0 ">
                    <form target="_blank"
                    onSubmit={onsubmit}
                    method="POST"
                    action="https://formsubmit.co/el/tozive" >
                        <input type="text" 
                        className="w-full mt-5 rounded-lg bg-[#FFA6A3] px-4 py-2 placeholder-amber-50"
                        placeholder="NAME"
                        {...register("name", {
                            required: true, 
                            maxLength: 100
                        })}/>
                        {errors.name && (
                            <p className="mt-1 text-red-600">
                                {errors.name.type === "required" && "the name field is required"}
                                {errors.name.type === "maxLength" && "you have exeeded the max length"}
                            </p>
                        )}
                        <input type="email"
                        className="w-full rounded-lg mt-5 bg-[#FFA6A3] px-4 py-2 placeholder-amber-50"
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true, 
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}/>
                        {errors.email && (
                            <p className="mt-1 text-red-600">
                                {errors.email.type === "required" && "the name field is required"}
                                {errors.email.type === "pattern" && "you have wrong email pattern"}
                            </p>
                        )}
                        <textarea
                        className="w-full rounded-lg mt-5 bg-[#FFA6A3] px-4 py-2 placeholder-amber-50"
                        rows={4}
                        cols={50}
                        placeholder="MESSAGE"
                        {...register("message", {
                            required: true, 
                            maxLength: 1000
                        })}/>
                        {errors.message && (
                            <p className="mt-1 text-red-600">
                                {errors.message.type === "required" && "the name field is required"}
                                {errors.message.type === "maxLength" && "you have exeeded the 2000 max length"}
                            </p>
                        )}
                        <button
                        type="submit"
                        className="hover:bg-[#FF6B66] mt-4 rounded-lg bg-[#FFCD5B] px-10 py-4 transition duration-500 hover:text-gray-200">
                            SUBMIT
                        </button>
                    </form>
                </div>
                <div className="relative basis-2/5 mt-16 md:mt-0 ">
                        <div>
                            <img src={ContactUsPageGraphic} alt="" 
                            className="w-full"/>
                        </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs