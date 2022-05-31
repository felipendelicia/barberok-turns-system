import React from 'react'

import "./TakeTurns.css"

const TakeTurns = () => {
  return (
    <div className='take-turns-container'>
      <div className="container">
        <div className='take-turns-title'>
          <h2>Sacá turno 💥</h2>
        </div>
        <div className="take-turns-form-container">
          <form className="take-turns-form">
            <input type="text"/> {/* Input name */}
            <input type="text"/>  {/* Input surname */}
            <input name="add date"/>  {/* Input date */}
            <input name="add time"/>  {/* Input time */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default TakeTurns