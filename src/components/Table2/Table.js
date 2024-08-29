import { useEffect, useState } from "react";

function Table({ data = [], columns = [] }) {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const setData = () => {
    //   const temp = data.map((e) => {
    //     let renderTemp = () => {};
    //     if (e.render) {
    //       renderTemp = e.render;
    //     }
    //     return { ...e, render: renderTemp(e) };
    //   });
    //   console.log("temp:", temp);
      setDataSource(data);
    };
    setData();
  }, [data]);
  //   console.log("columns:", columns);
  //   console.log("data:", data);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((value) => {
              return <th>{value.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((value) => {
            return (
              <tr>
                {columns.map((subValue) => {
                  return <td>{subValue.render ? subValue.render(value[subValue.dataIndex],value) : value[subValue.dataIndex]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
