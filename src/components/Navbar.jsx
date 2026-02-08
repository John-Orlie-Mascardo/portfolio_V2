import React from "react";

export default function Navbar() {
 return (
  <nav>
   <div className=" bg-[#4f5661] w-full">
    <div>
     <ul className=' text-white'>
       <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#home">Home</a></li>
       <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#about">About</a></li>
       <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#techstack">Tech Stack</a></li>
       <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#project">Project</a></li>
       <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#certificates">Certificates</a></li>
       <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#contacts">Contacts</a></li>               
      </ul>
    </div>
   </div>
  </nav>
 );
}