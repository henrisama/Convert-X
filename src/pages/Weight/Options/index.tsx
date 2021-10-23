import React from 'react'

const Options: React.FC = () => {
  return (
    <>
      <option
        value="grams"
      >
        Grams
      </option>
      <option
        value="kilograms"
      >
        Kilograms
      </option>
      <option
        value="pounds"
      >
        Pounds
      </option>
      <option
        value="ounces"
      >
        Ounces
      </option>
      <option
        value="stones"
      >
        Stones
      </option>
    </>
  )
}

export default Options
