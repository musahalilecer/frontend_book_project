import React from 'react'
import Label from '../atomic/Label'
import TextArea from '../atomic/TextArea';

interface TableRowProp {
  text: string;
  value: string;
}

const TableRow: React.FC<TableRowProp> = ({ text, value, ...props }) => {
  return (
    // <div>
    //   <div>
    //     <Label className='' text={text} />
    //   </div>
    //   <TextArea className='' value={value} placeholder={placeHolder}  />
    // </div>
    <div>
      <tbody>
        <tr>
          <td>{value}</td>
        </tr>
      </tbody>
    </div>
  )
}

export default TableRow