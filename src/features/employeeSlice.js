import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employee: [],
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log(action.payload)
      state.employee.push(action.payload)
    },
  },
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer
