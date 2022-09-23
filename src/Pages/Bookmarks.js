import React from 'react'
import { Link } from "react-router-dom"

const Bookmarks = () => {
  return (
    <div className="App">
    Thesaurus Bookmarks
    <Link
    to={"/"}
    
    >
    Go to home page
    </Link>
</div>
  )
}

export default Bookmarks