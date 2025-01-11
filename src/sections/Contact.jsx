import React, { useRef, useState } from 'react'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })



    return (
        <section className='c-space my-20'>
            <div className=' relative min-h-screen flex items-center justify-center flex-col'>
                <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text mt-10'>Let's Talk</h3>
                    <p className='text-lg text-white-600'>Whether you rae looking to build a new Website ,improve your existing platform,or bring a unique project to life,I'm here to help</p>


                    <form ref={formRef} className='mt-12 flex flex-col space-y-7'>

                        <label className='space-y-3 '>
                            <span className='field-label'>
                                Full Name

                            </span>

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                required
                                className='field-input'
                                placeholder='John Doe'

                            />
                        </label>
                        <label className='space-y-3 '>
                            <span className='field-label'>
                                Email

                            </span>

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                required
                                className='field-input'
                                placeholder='JohnDoe@gmail.com'

                            />
                        </label>
                        <label className='space-y-3 '>
                            <span className='field-label'>
                                Message

                            </span>

                            <textarea
                                name="message"
                                value={form.message}
                                required
                                rows={5}
                                className='field-input'
                                placeholder='Hi,I am interested in...'

                            />
                        </label>

                        <button className='field-btn' type='submit' disabled={loading}>

                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
                        </button>

                    </form>


                </div>
            </div>
        </section>
    )
}

export default Contact;