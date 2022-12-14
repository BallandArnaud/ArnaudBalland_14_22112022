import Select from 'react-select'
import './index.css'

const TablePagination = ({
  className,
  state,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  previousPage,
  nextPage,
  setPageSize,
}) => {
  const pagesSize = [10, 25, 50, 100]

  const optionsPagesSize = pagesSize.map((pageSize) => ({
    label: pageSize,
    value: pageSize,
  }))

  const handleOnChangePageSize = (option) => {
    setPageSize(option.value)
  }

  return (
    <div className={'pagination ' + className}>
      <div className="pagination__buttons">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
      <span>
        Page{' '}
        <strong>
          {state.pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <span>
        | Go to page:{' '}
        <input
          type="number"
          defaultValue={state.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>
      <div className="pagination__select">
        <span>Show</span>
        <Select
          id="pagination__pageSize"
          className="select"
          defaultValue={optionsPagesSize[0]}
          options={optionsPagesSize}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'var(--primary-color-light-2)',
              primary: 'var(--primary-color)',
            },
          })}
          onChange={(selectedOption) => handleOnChangePageSize(selectedOption)}
        />

        <span>entries</span>
      </div>
    </div>
  )
}

export default TablePagination
