import React from 'react'

const Registration = () => {
  return (
    <div>
        <div className="container">
            <h1>Registration</h1>
            <form action="">
                <label htmlFor="UserName :" className='labels'>Enter the UserName</label>
                <input type="text" className='field'/> <br />
                <label htmlFor="UserName :" className='labels'>Enter the Email</label>
                <input type="email" className='field'/> <br />
                <label htmlFor="UserName :" className='labels'>Enter the Mobile no</label>
                <input type="number" className='field'/> <br />
                <label htmlFor="UserName :" className='labels'>Enter the dob</label>
                <input type="date" className='field'/><br /> 

                <button className='btn1'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Registration