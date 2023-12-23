
import { useNavigate, useLocation } from 'react-router-dom';
import HText from '../../components/HText/HText';
import { useDispatch, useSelector } from 'react-redux';
import { useRegiserMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const RegisterPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state: any) => state.auth)
    const [register, { isLoading }] = useRegiserMutation()

    const { search } = useLocation()
    const searchParam = new URLSearchParams(search)
    const redirect = searchParam.get('redirect') || '/'




    const submitHandler = async (event: any) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            try {
                const res = await register({ name, email, password, confirmPassword }).unwrap()
                dispatch(setCredentials({ ...res }))
                navigate(redirect)
            } catch (error: any) {
                toast.error(error?.data?.message || error.console.error
                )
            }

        }

    }


    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, redirect, navigate])


    return (
        <main className="flex items-center justify-center min-h-[100vh] ">

            <div className='flex flex-col w-96 p-2'>
                <div className=' mb-2 mt-2 text-center'>

                    <HText>Hi New User 👋 </HText>
                </div>

                <form onSubmit={submitHandler} className='rounded-md p-6 flex flex-col gap-6' action="">


                    <div>
                        <label htmlFor="">Your Name</label>
                        <div>
                            <input onChange={(event) => setName(event.target.value)} type="text" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Email Address</label>
                        <div>
                            <input onChange={(event) => setEmail(event.target.value)} type="email" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <div>
                            <input onChange={(event) => setPassword(event.target.value)} type="password" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <div>
                            <input onChange={(event) => setConfirmPassword(event.target.value)} type="password" className='w-full border rounded-md p-1' />
                        </div>
                    </div>

                    <span>Do you Have Acount Allready? <span onClick={() => navigate('/login')} className='cursor-pointer font-semibold'>Login</span></span>

                    <button className='btn btn-outline btn-accent'>Sign up</button>
                    {isLoading && <Loader />}
                </form>


            </div>



        </main>
    )
};
export default RegisterPage;