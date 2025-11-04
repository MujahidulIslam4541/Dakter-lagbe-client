import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className='mt-20'>
      <h2>this is sign Up page</h2>
      <Link href='/signIn'>Sign In</Link>
    </div>
  )
}

export default SignUp
