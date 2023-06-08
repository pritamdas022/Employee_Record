import React,{useState} from "react";
import Navbar from "./Navbar";
import User from './users.json'

const Read = ({onLogout}) => {
    const [Users, setFilteredData] = useState(User);
    console.log(Users, "data");

    const stateChange = (condition) => {
        const filtered = User.filter((item) => {
          if (condition.currentTarget.selectedIndex === 1) {
            return item.Status === true;
          } else if (condition.currentTarget.selectedIndex === 2) {
            return item.Status === false;
          } else {
            return item;
          }
        });
        //User=filtered;
        setFilteredData(filtered);
        console.log(filtered, "asa");
      };
      const deleteUser = (dataId) => {
        setFilteredData(Users.filter((data) => data.id !== dataId));
      };
  return (
    <div>
      <Navbar onLogout={onLogout}/>
      <div className="select-status">
        <h1>status</h1>
        <select onChange={stateChange}>
          <option value="true">Select status</option>
          <option value="false">Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className="table">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gmail</th>
                    <th>Gender</th>
                    <th>Color</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {Users.map((data) => {
              return (
                <tr key={data.id}>
                  <td>
                    <img src={data.Avatar} alt="error" />
                  </td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td style={{ backgroundColor: data.color }}>{data.color}</td>

                  <td className={data.Status === true ? "Active" : "Inactive"}>
                    {data.Status === true ? "Active" : "Inactive"}
                  </td>
                  <td>
                    <button onClick={() => deleteUser(data.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
