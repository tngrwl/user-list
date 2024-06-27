import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Table } from 'antd';

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/api/get-users")
    .then((res) => res.json())
    .then(result =>{
      setUsers(result.data);
    })
  },[])

  const columns = [{ title: 'First name',
  dataIndex: 'firstname',
  key: 'firstname'},{
    title: 'Last name',
    dataIndex: 'lastname',
    key: 'lastname'
  },{
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }]
  return (
    <div className="App">
     <h2>User list</h2>
     <Table dataSource={users} columns={columns}/>
    </div>
  );
}

export default App;
