import { BsChatDots } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react';

const UserChatComponent = () => {
  const [isChatMenuToggled, setIsChatMenuToggled] = useState<Boolean>(false);
  return (

    <>
      <label onClick={() => setIsChatMenuToggled(!isChatMenuToggled)} className=' flex justify-center items-center fixed right-3 bottom-6 rounded-full cursor-pointer bg-primary-300 w-12 h-12 text-white text-md z-[2]'>
        <span className='absolute left-0 top-0 rounded-full bg-red-500 w-4 h-4 '></span>
        {isChatMenuToggled ? <i className='comment'><AiOutlineCloseCircle /></i> : <i className='close'><BsChatDots /></i>}
      </label>
      {isChatMenuToggled && (
        // chat Wrapper
        <div className='bg-primary-400 fixed right-[20px] bottom-[100px]  z-[2] w-[300px]'>
          <div className=' bg-primary-100 p-[13px] mb-[10px] text-white'>
            <h6>Let's Chat - Online</h6>
          </div>
          {/* Chat Form */}
          <div className='p-3 max-h-[300px] overflow-auto'>
            {/* Chat Msg */}
            {Array.from({ length: 20 }).map(() => (
              <div>

                <div className=' text-white py-2'>
                  <p className=' text-black'>
                    <b >You wrote: </b>
                    Hello world! this is a toast message.
                  </p>
                  <p className=' text-black bg-primary-300 p-3 mt-2 mb-2 rounded-lg'>
                    <b>Support wrote: </b>
                    Hello world! this is a toast message.
                  </p>
                </div>
              </div>

            ))}
            <textarea className=" resize-none shadow-none mb-2" placeholder='Your Text Message' id="" ></textarea>
            <div>
              <button className='  mb-[10px] text-white bg-primary-200 py-2 px-2 rounded-md'>Submit</button>
            </div>
          </div>
        </div>
      )}


    </>
  )
};
export default UserChatComponent;



