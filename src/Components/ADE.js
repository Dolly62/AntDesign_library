import { Button, Input, Modal, Table } from "antd";
import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const ADE = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStu, setEditingStu] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "john's address",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      address: "david's address",
    },
    {
      id: 3,
      name: "James",
      email: "james@gmail.com",
      address: "james's address",
    },
    {
      id: 4,
      name: "Sam",
      email: "sam@gmail.com",
      address: "sam's address",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                editHandler(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                deleteHandler(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const deleteHandler = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this record",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => {
          return prev.filter((stu) => stu.id !== record.id);
        });
      },
    });
  };

  const editHandler = (record) => {
    setIsEditing(true);
    setEditingStu({ ...record });
  };

  const resetEditing = () => {
    setEditingStu(null);
    setIsEditing(false);
  };

  const onAddNewStudentHandler = () => {
    const randomNum = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNum,
      name: "Name" + randomNum,
      email: randomNum + "@gmail.com",
      address: "Address" + randomNum,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  return (
    <div>
      <Button onClick={onAddNewStudentHandler}>Add new student</Button>
      <Table
        style={{ display: "flex", flex: 1, margin: 10 }}
        columns={columns}
        dataSource={dataSource}
      />
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((prev) => {
            return prev.map((student) => {
              if (student.id === editingStu.id) {
                return editingStu;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStu?.name}
          onChange={(e) => {
            setEditingStu((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStu?.email}
          onChange={(e) => {
            setEditingStu((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <Input
          value={editingStu?.address}
          onChange={(e) => {
            setEditingStu((prev) => {
              return { ...prev, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default ADE;
