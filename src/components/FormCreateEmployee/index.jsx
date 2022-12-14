import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.min.css'
import { states, departments } from '../../data/formData'
import { addEmployee } from '../../features/employeeSlice'
import { Modal } from 'arnaudballand-react-modal-library'
import './index.css'

const FormCreateEmployee = () => {
  const inputFirstName = useRef()
  const inputLastName = useRef()
  const inputStreet = useRef()
  const inputCity = useRef()
  const inputZipCode = useRef()
  const [startDate, setStartDate] = useState(null)
  const [birthDate, setbirthDate] = useState(null)
  const [stateAddress, setStateAddress] = useState(states[0].name)
  const [department, setdepartment] = useState(departments[0])
  const [modalIsOpen, setIsModalOpen] = useState(false)
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

    setIsModalOpen(true)

    dispatch(
      addEmployee({
        firstName: inputFirstName.current.value,
        lastName: inputLastName.current.value,
        dateOfBirth: birthDate.toLocaleDateString('en-US'),
        startDate: startDate.toLocaleDateString('en-US'),
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
    <>
      <form className="formCreateEmployee" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="form__firstName">First Name</label>
        <input type="text" id="form__firstName" ref={inputFirstName} required />
        <label htmlFor="form__lastName">Last Name</label>
        <input type="text" id="form__lastName" ref={inputLastName} required />
        <label htmlFor="form__dateBirth">Date of Birth</label>
        <DatePicker
          id="form__dateBirth"
          className="custom-calendar-input"
          calendarClassName="custom-calendar"
          selected={birthDate}
          onChange={(date) => setbirthDate(date)}
          dateFormat="MM/dd/yyyy"
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          todayButton="Today"
          required
        />
        <label htmlFor="form__startDate">Start Date</label>
        <DatePicker
          id="form__startDate"
          className="custom-calendar-input"
          calendarClassName="custom-calendar"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yyyy"
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          todayButton="Today"
          required
        />
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
        <button className="btn" type="submit">
          Save
        </button>
      </form>
      <Modal
        className="customModal"
        isOpen={modalIsOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <div className="customModal__header">
          <h2>Success</h2>
        </div>
        <div className="customModal__body">
          <p>Employee Created!</p>
        </div>
      </Modal>
    </>
  )
}

export default FormCreateEmployee
