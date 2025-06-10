import React from 'react'
import { JSX } from 'react/jsx-runtime';

interface TableRowProp {
  data: (string | number | any | JSX.Element)[];
  className: string;
}

const TableRow: React.FC<TableRowProp> = ({ data, className }) => {
  return (
    <tbody>
      <tr className={className}>
        {data.map((index) => (
          <td key={index} className='px-4 py-2 border-b'>{data}</td>
        ))}
      </tr>
    </tbody>
  )
}

export default TableRow