import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import './index.css'

const GlobalFilter = ({
  className,
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 300)

  return (
    <div className={'globalFilter ' + className}>
      <label htmlFor="input__globalFilter">Search: </label>
      <input
        type="text"
        id="input__globalFilter"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${count} records...`}
      />
    </div>
  )
}

export default GlobalFilter
