import { useNavigate, useLocation, Link } from "react-router-dom";
import HText from "../../components/HText/HText";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader";
import { useLoginMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state: any) => state.auth)

  const { search } = useLocation()
  const searchParam = new URLSearchParams(search)
  const redirect = searchParam.get('redirect') || '/'


  const submitHandler = async (event: any) => {
    event.preventDefault()

    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (error: any) {
      toast.error(error?.data?.message || error.console.error
      )
    }



  }


  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])




  return (<main className="flex items-center justify-center min-h-[100vh]">
    <div className='flex flex-col w-96 p-2'>
      <div className=' mb-2 mt-2 text-center'>

        <HText>Wellcome Back 👋 </HText>
      </div>

      <form onSubmit={submitHandler} className='rounded-md p-6 flex flex-col gap-6' action="">

        <div>
          <label htmlFor="">Email Address</label>
          <div>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className='w-full border rounded-md p-1' />
          </div>
        </div>

        <div>
          <label htmlFor="">Password</label>
          <div>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className='w-full border rounded-md p-1' />
          </div>
        </div>
        <span>Don't have Have Acount Allready? {' '}

          <Link className='cursor-pointer font-semibold' to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Sign Up
          </Link>
        </span>
        <button disabled={isLoading} className='btn btn-outline btn-accent'>Login</button>
        {isLoading && <Loader />}
      </form>


    </div>
  </main>);
};
export default LoginPage;

