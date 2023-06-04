
import { useNavigate } from 'react-router-dom';
import HText from '../../components/HText/HText';

const RegisterPage = () => {

    const navigate = useNavigate()

    return (
        <main className="flex items-center justify-center min-h-[100vh] ">

            <div className='flex flex-col w-96 p-2'>
                <div className=' mb-2 mt-2 text-center'>

                    <HText>Hi New User 👋 </HText>
                </div>

                <form className='  rounded-md p-6 flex flex-col gap-6' action="">


                    <div>
                        <label htmlFor="">Your Name</label>
                        <div>
                            <input type="text" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Last Name</label>
                        <div>
                            <input type="text" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Email Address</label>
                        <div>
                            <input type="email" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <div>
                            <input type="password" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Repeat Password</label>
                        <div>
                            <input type="password" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <span>Do you Have Acount Allready? <span onClick={()=>navigate('/login')} className='cursor-pointer font-semibold'>Login</span></span>

                    <button className='btn btn-outline btn-accent'>Sign up</button>
                </form>


            </div>



        </main>
    )
};
export default RegisterPage;