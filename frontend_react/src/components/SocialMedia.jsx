import React from 'react';
import { BsGithub, BsLinkedin} from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://www.linkedin.com/in/andriy-kozin-3679ab1a2/" >
          <BsLinkedin />
        </a>
          
        </div>
        <div>
          <a href="https://github.com/AndriyKozin?tab=repositories">
            <BsGithub />
          </a>
        </div>
      
    </div>
  )
}

export default SocialMedia