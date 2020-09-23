import React from 'react'



function Form (){
 
    return (
        <div>
            <form className= "form">
                <label>
                     <input type="text" name="username
                " placeholder="username"/>   
                 </label>
                    <label>
                    <input type="password" name="password" placeholder="password"/>
                    </label>
                
            </form>
        </div>
    )
}
export default Form;