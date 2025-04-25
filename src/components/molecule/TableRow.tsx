import React from 'react'
import Label from '../atomic/Label'
import TextArea from '../atomic/TextArea';
import { JSX } from 'react/jsx-runtime';

interface TableRowProp {
  data: (string | number | any | JSX.Element)[];
}

const TableRow: React.FC<TableRowProp> = ({ data, ...props }) => {
  return (
    <tr>
      {data.map((item, index) => (
        <td key={index} className='px-4 py-2 border-b'>{data}</td>
      ))}
    </tr>
  )
}

export default TableRow