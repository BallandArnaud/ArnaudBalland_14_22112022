import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { selectEmployee } from '../../app/selectors'
import { isEven } from '../../utils/functionsUtils'

const TableListEmployee = () => {
  const employeesData = useSelector(selectEmployee())
  console.log(employeesData)

  const data = useMemo(() => employeesData, [employeesData])

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName', // accessor is the "key" in the data
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px #777' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                  padding: '10px',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, id) => {
          prepareRow(row)

          return (
            <tr
              {...row.getRowProps()}
              style={isEven(id) ? { background: '#CCC' } : null}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableListEmployee
