import { Table } from "antd";
import React, { useEffect, useState } from "react";

const AntTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Not fetched");
        }
        const data = await response.json();
        setDataSource(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHandler();
  }, []);
  // const data = [
  //   {
  //     name: "Name1",
  //     age: 10,
  //     address: "Address1",
  //     key: "1",
  //   },
  //   {
  //     name: "Name2",
  //     age: 30,
  //     address: "Address2",
  //     key: "2",
  //   },
  //   {
  //     name: "Name3",
  //     age: 10,
  //     address: "Address3",
  //     key: "3",
  //   },
  // ];

  // const column = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "key",
  //     render: (name) => {
  //       return <a>{name}</a>;
  //     },
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "key",
  //     sorter: (a, b) => a.age - b.age,
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "key",
  //   },
  //   {
  //     title: "Graduated",
  //     key: "key",
  //     render: (payload) => {
  //       return <p>{payload.age > 20 ? "True" : "False"}</p>;
  //     },
  //   },
  // ];
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "USER ID",
      dataIndex: "userId",
      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Completed" : "In Progress"}</p>;
      },
      filters: [
        { text: "Completed", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <div>
      {/* <Table dataSource={data} columns={column}></Table> */}
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={columns}
      ></Table>
    </div>
  );
};

export default AntTable;
