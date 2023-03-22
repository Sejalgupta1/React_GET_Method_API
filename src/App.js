import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((resp) => {
        // console.log("res", resp);
        setdata(resp);
      });
    });
  });
  console.log(data);
  return (
    <div className="App">
      <h1> Get Method </h1>
      <table border="2">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>UserName</td>
          <td>Email</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
