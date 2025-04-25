import React from 'react'
import AuthBox from '../organism/AuthBox'
import { User } from '../../model/user'
import { AuthModel } from '../../model/component/authModel';

interface LoginProps{
user: User;
authModel: AuthModel
}

const Login: React.FC<LoginProps> = ({user, authModel}) => {
  return (
    <div>
        <div>
            <AuthBox user={user} authModel={authModel}/>
        </div>
    </div>
  )
}

export default Login