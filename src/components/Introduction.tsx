import React from 'react';

const Introduction = () => {
  return (
    <div className='lg:min-h-screen w-[100vw] flex flex-col lg:flex-row items-center justify-center lg:gap-18 gap-12'>
      <div className='flex justify-center lg:h-[60vh] lg:w-1/2 '>
        <img
          src='images/profile.jpg'
          className='w-1/2 h-auto items-center rounded-xl lg:w-full lg:rounded-xl lg:h-auto grayscale object-contain'
          alt='Profile'
        />
      </div>
      

      <div className=' py-4 px-2 lg:py-0 lg:px-0 lg:w-1/2'>
  
        <table className='text-left sm:max-lg:text-sm lg:max-xl:text-2xl'>
          <tbody>
            <tr className='py-4'>
              <td className='px-10 py-2 font-bold opacity-40'>Name</td>
              <td className=''>Supanat Kampapan</td>
            </tr>
            <tr>
              <td className='px-10 py-2 font-bold opacity-40'>Age</td>
              <td className=''>19</td>
            </tr>
            <tr className='py-4'>
              <td className='px-10 py-2 font-bold opacity-40'>University</td>
              <td className=''>Chulalongkorn</td>
            </tr>
            <tr>
              <td className='px-10 py-2 font-bold opacity-40'>Skills</td>
              <td className=''> Full-Stack, Database Design</td>
            </tr>
            <tr>
              <td className='px-10 py-2 font-bold opacity-40'>Frontend </td>
              <td className=''> Next.js (React.js), Tailwind.css</td>
            </tr>
            <tr>
              <td className='text-left px-10 py-2 font-bold opacity-40'>Backend </td>
              <td className='text-left '> Node.js, Express.js, MongoDB</td>
            </tr>
          </tbody>
          
        </table>  
      </div>
    </div>
  );
};

export default Introduction;
