import React, { useState } from 'react'
import Label from '../atomic/Label'
import Input from '../atomic/Input'
import Button from '../atomic/Button'
import { AuthModel } from '../../model/component/authModel'
import { User } from '../../model/user'

interface AuthBoxProps{
    authModel: AuthModel;
    user: User;
}

const AuthBox: React.FC<AuthBoxProps> = ({authModel, user, ...props}) => {
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>(""); 

    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    const handleClick = () => {
        
    }
    return (
        <div>
            <div>
                <form action="">
                    <div>
                        <Label />
                        <Input placeHolder='Enter the Username'/>
                    </div>
                    <div>
                        <Label />
                        <Input placeHolder='Enter the Password'/>
                    </div>
                    <div>
                        <Button className='' onClick={authModel.handleClick}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthBox