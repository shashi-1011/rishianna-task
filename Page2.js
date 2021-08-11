import React from 'react'
import { useHistory } from 'react-router-dom'

function Page2() {
    let History = useHistory()
    return (
        <div>
            <h1>If you want to go back for page1 click the button below</h1>
            <button onClick={()=>{History.push('/Page1')}}>Click for page1</button>
        </div>
    )
}

export default Page2
