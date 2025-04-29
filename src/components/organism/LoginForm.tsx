import React, { Dispatch, SetStateAction, useState } from 'react'
import Label from '../atomic/Label'
import Input from '../atomic/Input'
import Button from '../atomic/Button'
import { AuthModel } from '../../model/component/authModel'
import { User } from '../../model/user'

interface LoginFormProps{
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({email, setEmail, password, setPassword, onSubmit, ...props}) => {
    return (
        <form action="" onSubmit={onSubmit}>
            <div>
                <Label text='Email'/>
                <Input
                 placeHolder='Ent'
                 name='email'
                 value={email}
                 onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                 type='email'
                 />
            </div>
            <div>
                <Label text='Password'/>
                <Input
                 placeHolder='Enter the Password'
                 name='password'
                 type='password'
                 value={password}
                 onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                />
            </div>
            {/* <div className='mt-10'>
                <Button
                 children='Login' 
                 type='submit' 
                 className='w-full cursor-pointer bg-primary px-5 py-3 text-base rounded-md border border-primary font-medium text-black dark: text-white transition hover:opacity-90'/>
            </div> */}
        </form>
    )
}

export default LoginForm