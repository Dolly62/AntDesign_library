import { Table, Tag } from "antd";
import React, { useState } from "react";

const AntRow = () => {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState(["1", "3"]);
  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "blue"
          : "red";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Student Name1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student Name2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Student Name3",
      grade: "B",
    },
    {
      key: "4",
      id: 4,
      name: "Student Name4",
      grade: "C",
    },
  ];
  return (
    <div>
      {/* <Table dataSource={datSource} columns={columns} rowSelection={true} /> */}
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: alreadySelectedRows,
          onChange: (keys) => {
            setAlreadySelectedRows(keys);
          },
          onSelect: (record) => {
            console.log(record);
          },
          getCheckboxProps: (record) => ({
            disabled: record.grade === "C",
          }),
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              key: "even",
              text: "Select Even Rows",
              onSelect: (allKeys) => {
                const selctedRows = allKeys.filter((key) => {
                  return key % 2 === 0;
                });
                setAlreadySelectedRows(selctedRows);
              },
            },
            {
              key: "excellent",
              text: "Select Students with Excellent Grades",
              onSelect: (allKeys) => {
                const selctedRows = allKeys.filter(key => {
                  const isExcellent = dataSource.find((student) => {
                    return student.key === key && student.grade.includes("A");
                  });
                  return isExcellent;
                });
                setAlreadySelectedRows(selctedRows);
              },
            },
          ],
        }}
      />
    </div>
  );
};

export default AntRow;
