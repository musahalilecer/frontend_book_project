import React, { useState } from 'react'
import AuthBox from '../organism/LoginForm'
import { User } from '../../model/user'
import LoginForm from '../organism/LoginForm';
import Button from '../atomic/Button';


interface LoginProps{
user?: User;
}

const Login: React.FC<LoginProps> = ({user}) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = () => {

  }

  return (
    <div>
        <div>
            <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} onSubmit={signIn}/>
        </div>
        <div>
          <Button
           children='Login'
           onClick={signIn} 
           type='submit'
           className='w-full bg-indigo-600 rounded-lg border border-b-gray-400 cursor-pointer text-white transation hover:opacity-50'
           />
           <div>
              <h3>Register</h3>
           </div>
        </div>
    </div>
  )
}

export default Login