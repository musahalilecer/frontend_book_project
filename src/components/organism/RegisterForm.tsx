import React, { Dispatch, SetStateAction } from 'react'
import Label from '../atomic/Label'
import Input from '../atomic/Input'

interface RegisterFormProps{
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ email, setEmail, password, setPassword, onSubmit, ...props}) => {
  return (
    <form className='mt-4'>
        <div className='flex flex-col mt-2'>
            <Label text='Email'/>
            <Input 
             placeHolder='Enter the Email'
             name='email'
             value={email}
             type='email'
             onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
             className='border rounded-sm border-gray-500 hover:border-gray-800 hover:border-2'
            />
        </div>
        <div className='flex flex-col mt-2'>
            <Label text='Password'/>
            <Input
             placeHolder='Enter the Password'
             name='password'
             value={password}
             type='password'
             onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
             className='border rounded-sm border-gray-500 hover:border-gray-800 hover:border-2'
            /> 
        </div>
    </form>
  )
}

export default RegisterForm