import Link from 'next/link'
import React from 'react'

const signin = () => {
  return (
    <form className="mx-auto my-4" style={{maxWidth: '500px'}}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-dark w-100">Login</button>

<p className="my-2">
  You don't have an account? <Link href="/register"><a style={{color: 'crimson'}}>Register Now</a></Link>
</p>
</form>
  )
}

export default signin