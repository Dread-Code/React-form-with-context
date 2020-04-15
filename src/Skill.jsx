import React, { useContext } from 'react';
import { FormContext } from './Form';

export default (props) =>{
    
    const context = useContext(FormContext);

    const addToList = (value, list) =>{
        console.log(":o");
        context.setSkill([value].concat(context.skill));
    }

    const removeFromList = (value,list) => {
        context.setSkill(context.skill.filter(v => v != value));
    }

    return(
        <div>
            <label>
                <input
                onChange = {(ev)=> ev.target.checked ? addToList(" Ruby") : removeFromList(" Ruby") }
                type= "checkbox"
                name= "likes"/>
                Ruby
            </label>
            <label>
                <input
                onChange = {(ev)=> ev.target.checked ? addToList(" JavaScript") : removeFromList(" JavaScript") }
                type= "checkbox"
                name= "likes"/>
                JavaScript
            </label>
        </div>
    )
}