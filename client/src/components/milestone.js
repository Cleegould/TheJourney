import React from 'react'

export default function milestone() {
  return (
    <div>
      <label>Milestone: </label>
      <textarea
        id="Milestone"
        name="Milestone"
        value={Milestone}
        onChange={handleChange}
        required
        />
    </div>
  )
}
