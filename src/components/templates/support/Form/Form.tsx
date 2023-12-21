import Button from '@/src/components/modules/button'
import { registerSchema } from '@/src/validations/rules';
import { useFormik } from 'formik';
import React, { useState } from 'react'

const Form = () => {
    const [clickHandler, setClickHandler] = useState<boolean>(false)
    const formHandler = useFormik({
        initialValues: { name: "", email: "", message: "" },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log(values);


        },
        validationSchema: registerSchema

    });
    return (
        <div className='w-full'>
            <p className='text-center'>ارسال پیام به پشتیبانی</p>
            <form onClick={formHandler.handleSubmit} className='w-full p-4 mt-5' style={{ boxShadow: ' rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل شما</label>
                    <input
                        name="email"
                        value={formHandler.values.email}
                        onChange={formHandler.handleChange}
                        onBlur={formHandler.handleBlur}
                        type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                    <span className='text-red-600 text-xs mx-auto block text-center mt-2'>{formHandler.errors.email && formHandler.errors.email}</span>
                </div>

                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام شما</label>
                    <input
                        name="name"
                        value={formHandler.values.name}
                        onChange={formHandler.handleChange}
                        onBlur={formHandler.handleBlur}
                        type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 dark:shadow-sm-light" placeholder='شاهین' required />
                    <span className='text-red-600 text-xs mx-auto block text-center mt-2'>{formHandler.errors.name && formHandler.errors.name}</span>
                </div>

                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">متن</label>
                    <input
                        name="message"
                        value={formHandler.values.message}
                        onChange={formHandler.handleChange}
                        onBlur={formHandler.handleBlur}
                        type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 dark:shadow-sm-light" placeholder='سلام...' required />
                    <span className='text-red-600 text-xs mx-auto block text-center mt-2'>{formHandler.errors.message && formHandler.errors.message}</span>
                </div>

                {/* <Button type='submit' variant={"yellow"} className='mx-auto w-1/3 !rounded-md !block outline-none'>ارسال</Button> */}
                <button type='submit' className='mx-auto w-1/3 !rounded-md !block outline-none'>ارسال</button>
            </form>
        </div>
    )
}

export default Form
