import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Email() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
      email: email,
    };
    emailjs.send(
      'service_ckzlh2f',
      'template_uwmp5uo',
      templateParams,
      'QQIaVyUi87kjZFhBr'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <form className='text-white' onSubmit={handleSubmit}>
      { !success && <div>
        <input
          className='bg-[#0D0D0D] border-b border-[#aaaaaa] py-2 md:w-72 px-4 justify-center text-center mx-auto'
          placeholder='Email Address'
          type="email"
          id="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <div>
          <button className='py-4 px-14 mt-10 uppercase border-l-8 border-[#18C4FF] text-sm hover:bg-[#18C4FF] duration-300 bg-[#353535] text-white font-semibold hover:scale-105 transform:translate3d(0%, 0%, 0px)' type="submit">
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>}
      {success && <p>Email sent successfully!</p>}
    </form>
  );  
}

export default Email;