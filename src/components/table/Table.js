import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import React from 'react';


const Table = ({ cols, data, ...rest }) => {
  return (
    <CTable {...rest}>
      <CTableHead>
        <CTableRow>
          {cols.map((col,colId) => (
            <CTableHeaderCell key={colId} scope="col">{col.title}</CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((row, rowId) => (
          <CTableRow key={rowId}>
            {cols.map((col, colId) => (
              <CTableDataCell key={colId}>
                {row[col?.code ?? col?.title?.toLowerCase()] ?? col?.default}
              </CTableDataCell>
            ))}
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default Table;
