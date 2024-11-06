
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import type { APIResponse, User } from './response/response.interface'

function App() {
  const [ users, setUsers ] = useState<User[]>([])
useEffect(() => {
  const init = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL)
      const result = await response.json() as APIResponse
      setUsers(result.data)
    } catch (error) {
      console.log(error)
      alert('Error: no se pudieron obtener los datos')
    }
  }

  init()
},[])
  return (
    <main className='flex flex-col gap-10  w-full bg-neutral-900 h-screen items-center pt-10'>
      <div className='flex gap-4 items-center'>
        <img src={reactLogo} className='h-20 w-20 animate-spin ' alt='react logo' />
        <span className='text-white font-bold text-2xl'>Usuarios Registrados </span>
      </div>
      <div className='max-h-[600px] w-3/4 grid grid-cols-3 gap-3 justify-around text-white font-bold text-3xl  p-5 rounded-md overflow-y-auto'>
        {
          users.length !== 0 && users.map( user => (
            <div className='flex flex-col items-center gap-2 bg-neutral-950 rounded-lg p-2'  key={user.id}>
              <h1 className='text-xs font-bold'>{user.name}</h1>
              <span className='text-xs'>{user.email}</span>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default App
