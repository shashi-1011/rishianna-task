import React from 'react'
import { useHistory } from 'react-router-dom';


function Page1() {
    let History = useHistory()
    return (
        <div className="btn1">
            <h1>Welcome to the page1</h1>
            <button onClick={()=>{History.push("/Page2")}}> click For page2</button>
        </div>
    )
}

export default Page1
