import { useRef, useState } from 'react'
import { states, departments } from '../../data/formData'

const FormCreateEmployee = () => {
  const inputFirstName = useRef()
  const inputLastName = useRef()
  const inputDateBirth = useRef()
  const inputStreet = useRef()
  const inputCity = useRef()
  const inputZipCode = useRef()
  const [stateAddress, setStateAddress] = useState(states[0].name.toLowerCase())
  const [department, setdepartment] = useState(departments[0].toLowerCase())

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formulaire envoyé')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="form__firstName">First Name</label>
      <input type="text" id="form__firstName" ref={inputFirstName} required />
      <label htmlFor="form__lastName">Last Name</label>
      <input type="text" id="form__lastName" ref={inputLastName} required />
      <label htmlFor="form__dateBirth">Date of Birth</label>
      <input type="text" id="form__dateBirth" ref={inputDateBirth} required />
      <fieldset>
        <legend>Address</legend>
        <label htmlFor="form__street">Street</label>
        <input type="text" id="form__street" ref={inputStreet} required />
        <label htmlFor="form__city">City</label>
        <input type="text" id="form__city" ref={inputCity} required />
        <label htmlFor="form__state">State</label>
        <select
          name="state"
          id="form__state"
          value={stateAddress}
          onChange={(e) => setStateAddress(e.target.value)}
        >
          {states.map((state) => {
            return (
              <option
                key={state.name.toLowerCase()}
                value={state.name.toLowerCase()}
              >
                {state.name}
              </option>
            )
          })}
        </select>
        <label htmlFor="form__zipCode">Zip code</label>
        <input type="number" id="form__zipCode" ref={inputZipCode} required />
      </fieldset>
      <label htmlFor="form__departement">Department</label>
      <select
        id="form__departement"
        value={department}
        onChange={(e) => setdepartment(e.target.value)}
      >
        {departments.map((department) => {
          return (
            <option key={department} value={department.toLowerCase()}>
              {department}
            </option>
          )
        })}
      </select>
      <button type="submit">Save</button>
    </form>
  )
}

export default FormCreateEmployee