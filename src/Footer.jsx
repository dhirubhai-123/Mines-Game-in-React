import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 ' >
      <div className="flex flex-col  md:flex-row justify-around items-center border-b border-slate-600 pb-1 ">

        <div className='flex gap-x-6 items-center'>

          <div className="mb-2 md:mb-0 ">
            <a href="https://github.com/dhirubhai-123/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
          </div>

          <div className="mb-2 md:mb-0">
            <a href="https://www.linkedin.com/in/dhiraj-khedkar-103531200/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          </div>

        </div>

        <div className="text-center">
          <p>&copy; Made By Dhirubhai</p>
        </div>
      </div>



    </footer>
  );
};

export default Footer;
