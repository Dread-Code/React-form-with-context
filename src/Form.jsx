import React, {  useState } from 'react';
import Maininfo from './Maininfo';
import Skill from './Skill';

export const FormContext = React.createContext();

export default (props) =>{
    const [email, setEmail] = useState('demo@grupokonecta.com');
    const [password, setPassword] = useState('********');
    const [skill, setSkill] = useState('');

    return(
        <form>
            <FormContext.Provider value = { {email, password, skill, setEmail, setPassword, setSkill} }>
                <Maininfo/>
                <Skill/>
            </FormContext.Provider>
            <div>
                    <p>Email: {email} </p>
                    <p>Contrasena: {password} </p>
                    <p>Lenguajes: {skill} </p>
            </div>
        </form>
    )
}