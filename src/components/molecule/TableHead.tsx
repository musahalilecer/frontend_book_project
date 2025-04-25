import React from 'react'

interface TableHeadProps{
    headers: any[];
}

const TableHead: React.FC<TableHeadProps> = ({headers, ...props}) => {
  return (
    <thead>
        <tr>
            {headers.map((header, index) => (
                <th key={index} className='px-4 py-2 border-b'>
                    {header}
                </th>
            ))}
        </tr>
    </thead>
  )
}

export default TableHead