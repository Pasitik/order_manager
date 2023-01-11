import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-500 w-full h-screen'>
      <div className='flex justify-center items-center h-full w-full'>
          <div className='flex bg-white w-1/2 mb-5 p-5 rounded-md flex-col'>
            <form>
              <div className='w-[80%] flex flex-col items-center'>
              <h1>Login</h1>

              <div className='w-[60%] flex flex-col'>
              <label className='my-2'>Email: </label>
              <input 
              type="email"
              name="email" 
              value=""
              required 
              className='border-solid border-b-2 w-[70%] mb-5'
              />

              <label className='my-2'>Password: </label>
              <input 
              type="password"
              name="password" 
              value=""
              required
              className='border-solid border-b-2 w-[70%] mb-8'
              />

              <button className='my-5'> Login </button>
              </div>
              </div>
            </form>
          </div>
        </div>

    </div>
  )
}

export default Login