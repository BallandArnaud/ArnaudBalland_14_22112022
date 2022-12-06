import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table'
import { selectEmployee } from '../../app/selectors'
import { isEven } from '../../utils/functionsUtils'
import GlobalFilter from '../TableGlobalFilter'
import TablePagination from '../TablePagination'
import './index.css'

const TableListEmployee = () => {
  const employeesData = useSelector(selectEmployee())

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
        Header: 'Start Date',
        accessor: 'startDate',
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

  return (
    <div id="tableListEmployee">
      <div className="tableListEmployee__header">
        <GlobalFilter
          className="tableListEmployee__globalFilter"
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
      </div>
      <div
        className="tableListEmployee__table"
        style={{ overflowX: 'auto', marginBottom: '10px' }}
      >
        <table
          {...getTableProps()}
          style={{
            border: 'solid 1px #777',
            width: '100%',
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      background: 'var(--primary-color)',
                      color: '#FFF',
                      fontWeight: 'bold',
                      padding: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' ▼'
                          : ' ▲'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row, id) => {
              prepareRow(row)

              return (
                <tr
                  {...row.getRowProps()}
                  style={
                    isEven(id)
                      ? { background: 'var(--primary-color-light-2)' }
                      : null
                  }
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
      </div>
      <div className="tableListEmployee__footer">
        <TablePagination
          className="tableListEmployee__pagination"
          state={state}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  )
}

export default TableListEmployee
