import React, { useState } from 'react'
import RegisterForm from '../organism/RegisterForm'
import Button from '../atomic/Button';
import { useNavigate } from 'react-router-dom';
import Auth from '../../security/auth';
import { toast } from 'react-toastify';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const auth = new Auth();
      const response = await auth.register(username, password);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // 🔐 Token kaydı
        toast.success("Registration is successful");
        navigate("/user");
      }
    }
    catch(e: any){
      toast.error("Registration failed" + (e.response?.data?.message || "UnKnown Error"));
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create Your Account
        </h2>

        <form onSubmit={signup}>
          <RegisterForm
            email={username}
            setEmail={setUsername}
            password={password}
            setPassword={setPassword}
          />

          <div className="text-left mt-2">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
            >
              Save the password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
          >
            Sign Up
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-700">
            Already have an account?
            <a
              href="#"
              className="ml-1 text-indigo-500 font-semibold hover:underline hover:text-indigo-600 transition"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register