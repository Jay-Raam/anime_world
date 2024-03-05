import React from 'react';
import "./copy.css"

const CopyRight = () => {
  return (
    <div className="copyright-container">
      <p>
        © {new Date().getFullYear()} Your Website Name. All rights reserved.
      </p>
    </div>
  )
}

export default CopyRight
