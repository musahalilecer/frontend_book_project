import React, { useState } from 'react'
import { User } from '../../model/user'
import LoginForm from '../organism/LoginForm';
import Button from '../atomic/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import Auth from '../../security/auth';


interface LoginProps {
  user?: User;
}

const Login: React.FC<LoginProps> = ({  }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signIn = async (e?: React.FormEvent<HTMLFormElement>) => {
    if(e) e.preventDefault();
    try{
      const auth = new Auth();
      const response = await auth.login(username, password);
      
      if(response.status === 200){
        toast.success("Login is succesful");
        navigate("/user");
      }
    }
    catch(e: any){
      toast.error("Login failed" + (e.response?.data?.message || "Unknown Error"));

    }
  };

  return (

    <section className="h-screen overflow-hidden min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>

        <LoginForm
          email={username}
          password={password}
          setEmail={setUsername}
          setPassword={setPassword}
          onSubmit={signIn}
        />

        <div className="text-right">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
            onClick={() => navigate("/register")}
          >
            Forgot password?
          </a>
        </div>

        <Button
          onClick={signIn}
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
        >
          Login
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?
            <a
              href="#"
              className="ml-1 text-cyan-500 font-semibold hover:underline hover:text-cyan-600 transition"
              onClick={() => navigate("/register")}
            >
              Signup
            </a>
          </p>
        </div>
      </div>
    </section>

  )
}

export default Login

/*
<section className='bg-white dark:bg-slate-950 py-20 '>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full px-4'>
          <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} onSubmit={signIn} />
        </div>
        <div>
            <a
              href=""
              className='text-blue-700 font-medium hover:bg-indigo-400 hover:transition delay-150 duration-300 ease-in-out hover:translate-y-1'
            >
              Forgot password ?
            </a>
          </div>
        <div className='flex flex-col justify-items-center'>
          <div>
            <Button
              children='Login'
              onClick={signIn}
              type='submit'
              className='w-full bg-indigo-600 rounded-lg border border-b-gray-400 cursor-pointer text-white transation hover:opacity-50'
            />
          </div>
          <div>
            <a 
            href=""
            className='text-sm text-white text-center'
            >
              Don't you have account <span className='text-cyan-500 hover:cursor-pointer hover:transition delay-100 duration-200 ease-in-out font-semibold text-lg'>Signup</span>
            </a>
          </div>
        </div>
      </div>
    </section>
*/


/*
<section className="min-h-screen flex items-center justify-center bg-white py-16 px-4">
  <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6">
    <h2 className="text-2xl font-bold text-center dark:text-white">Welcome Back</h2>

    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={signIn}
    />

    <div className="text-right">
      <a
        href="#"
        className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
      >
        Forgot password?
      </a>
    </div>

    <Button
      onClick={signIn}
      type="submit"
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
    >
      Login
    </Button>

    <div className="text-center">
      <p className="text-sm text-gray-600">
        Don’t have an account?
        <a
          href="#"
          className="ml-1 text-cyan-500 font-semibold hover:underline hover:text-cyan-600 transition"
        >
          Signup
        </a>
      </p>
    </div>
  </div>
</section>
*/