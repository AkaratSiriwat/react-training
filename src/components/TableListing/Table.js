// @type
/**
 *
 * @param {{
 * dataSource: {
 *    title: React.ReactNode,
 *    dataIndex: string,
 *    align: 'center'| 'left'| 'right',
 *    sorter: function | boolean,
 *    width: string | number,
 *    render: function(text, record, index): React.ReactNode
 * }[],
 * onRow: function(columns, index): {
 * onClick: (event) => {}, // click row
 * onDoubleClick: (event) => {}, // double click row
 * onContextMenu: (event) => {}, // right button click row
 * onMouseEnter: (event) => {}, // mouse enter row
 * onMouseLeave: (event) => {}, // mouse leave row
 * },
 * onHeaderRow: function(record, index): {onClick: () => {}, // click header row},
 * footer: function(currentPageData),
 * pagination: object | false
 * }} props
 * @returns
 */
function Table({ columns = [], data = [], ...props }) {
  console.log("data:", data);
  console.log("columns:", columns);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
