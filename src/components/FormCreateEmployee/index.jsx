import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { states, departments } from '../../data/formData'
import { addEmployee } from '../../features/employeeSlice'
import './index.css'

const FormCreateEmployee = () => {
  const inputFirstName = useRef()
  const inputLastName = useRef()
  const inputDateBirth = useRef()
  const inputStreet = useRef()
  const inputCity = useRef()
  const inputZipCode = useRef()
  const [stateAddress, setStateAddress] = useState(states[0].name)
  const [department, setdepartment] = useState(departments[0])
  const dispatch = useDispatch()

  const optionsState = states.map((state) => ({
    label: state.name,
    value: state.abbreviation,
  }))

  const optionsDepartment = departments.map((department) => ({
    label: department,
    value: department,
  }))

  const handleSubmit = (e) => {
    e.preventDefault()

    const abbreviationState = states.find(
      (state) => state.name === stateAddress
    ).abbreviation

    dispatch(
      addEmployee({
        firstName: inputFirstName.current.value,
        lastName: inputLastName.current.value,
        dateOfBirth: inputDateBirth.current.value,
        department: department,
        street: inputStreet.current.value,
        city: inputCity.current.value,
        state: abbreviationState,
        zipCode: inputZipCode.current.value,
      })
    )
    console.log('formulaire envoyé')
  }

  return (
    <form className="formCreateEmployee" onSubmit={(e) => handleSubmit(e)}>
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
        <Select
          id="form__department"
          className="select"
          defaultValue={optionsState[0]}
          options={optionsState}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'var(--primary-color-light-2)',
              primary: 'var(--primary-color)',
            },
          })}
          onChange={(selectedOption) => setStateAddress(selectedOption.label)}
        />
        <label htmlFor="form__zipCode">Zip code</label>
        <input type="number" id="form__zipCode" ref={inputZipCode} required />
      </fieldset>
      <label htmlFor="form__department">Department</label>
      <Select
        id="form__department"
        className="select"
        defaultValue={optionsDepartment[0]}
        options={optionsDepartment}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'var(--primary-color-light-2)',
            primary: 'var(--primary-color)',
          },
        })}
        onChange={(selectedOption) => setdepartment(selectedOption.label)}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default FormCreateEmployee
