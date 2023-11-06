import { useNavigate } from "react-router-dom";
import HText from "../../components/HText/HText";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const submitHandler = (event: any) => {
    event.preventDefault()
    console.log({
      user: {
        email: email,
        password: password
      }
    });


  }


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
        <span>Don't have Have Acount Allready? <span onClick={() => navigate('/register')} className='cursor-pointer font-semibold'>Sign Up</span></span>
        <button className='btn btn-outline btn-accent'>Login</button>
      </form>


    </div>
  </main>);
};
export default LoginPage;

