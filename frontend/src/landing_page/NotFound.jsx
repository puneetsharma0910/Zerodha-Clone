import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="container p-5 mb-5">
    <div className="row text-center">
      <h1 className="mt-5">404 not found</h1>
      <p>
       Not found 
      </p>
      <Link to={"/"}>
      <button
        className="p-2 btn btn-primary fs-5 mb-5"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Go home
      </button>
      </Link>
    </div>
  </div>
  )
}

export default NotFound
