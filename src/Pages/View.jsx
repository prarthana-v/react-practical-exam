import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_Emp, handlemultipleDelte, handleStatus, View_Emp } from '../Redux/Action/Empaction';
import { useNavigate } from 'react-router-dom';

const View = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state => state.EmployeData.EmployeData)
  // console.log(data);
  const [selectedEmps, setSelectedEmps] = useState([])

  useEffect(() => {
    dispatch(View_Emp())
  }, [])

  const multipleDelte = (id, check) => {
    let all = [...selectedEmps];
    if (check) {
      all.push(id)
    }
    else {
      all = all.filter((item) => item != id);
    }
    setSelectedEmps(all)
  }
  return (
    <div>
      <h1 className='text-center bg-light py-2'>Employ Data</h1>
      <table className='table table-secondary table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Password</th>
            <th>Salary</th>
            <th>Desigation</th>
            <th>Action</th>
            <th>
              <button className='btn py-0 fw-bold' onClick={() => dispatch(handlemultipleDelte(selectedEmps))}>Delete</button>
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((emp, index) => {
              return (
                <tr key={index}>
                  <td>{++index}.</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.city}</td>
                  <td>{emp.password}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.des}</td>
                  <td>
                    <button className='btn btn-secondary' onClick={() => dispatch(Delete_Emp(emp.id))}>Remove</button>
                    <button className='btn btn-primary ms-3' onClick={() => navigate('/edit', { state: emp })}>Edit</button>
                  </td>
                  <td>
                    <input type="checkbox" checked={selectedEmps.includes(emp.id)} onChange={(e) => multipleDelte(emp.id, e.target.checked)} />
                  </td>
                  <td>
                    {
                      emp.status == 'active' ? (
                        <button className='btn btn-success' onClick={() => dispatch(handleStatus(emp.id, emp.status))}>{emp.status}</button>
                      ) : (
                        <button className='btn btn-danger' onClick={() => dispatch(handleStatus(emp.id, emp.status))}>{emp.status}</button>
                      )
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default View
