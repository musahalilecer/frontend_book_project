import React from 'react'
import Label from '../atomic/Label'
import TextArea from '../atomic/TextArea';
import { JSX } from 'react/jsx-runtime';

interface TableRowProp {
  data: (string | number | any | JSX.Element)[];
  className: string;
}

const TableRow: React.FC<TableRowProp> = ({ data, className, ...props }) => {
  return (
    <tbody>
      <tr className={className}>
        {data.map((item, index) => (
          <td key={index} className='px-4 py-2 border-b'>{data}</td>
        ))}
      </tr>
    </tbody>
  )
}

export default TableRow