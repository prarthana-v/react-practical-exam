import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_Emp, handlemultipleDelte, View_Emp } from '../Redux/Action/Empaction';
import { useNavigate } from 'react-router-dom';

const View = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state => state.EmployeData.EmployeData)
  // console.log(data);
  const [mdel, setMdel] = useState([])

  useEffect(() => {
    dispatch(View_Emp())
  }, [])

  const multipleDelte = (id, check) => {
    let all = [...mdel];
    if (check) {
      all.push(id)
    }
    else {
      all = all.filter((item) => item != id);
    }
    setMdel(all)
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
            <th>Salary</th>
            <th>Desigation</th>
            <th>Action</th>
            <th>
              <button className='btn py-0 fw-bold' onClick={() => dispatch(handlemultipleDelte(mdel))}>Delete</button>
            </th>
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
                  <td>{emp.salary}</td>
                  <td>{emp.des}</td>
                  <td>
                    <button className='btn btn-secondary' onClick={() => dispatch(Delete_Emp(emp.id))}>Remove</button>
                    <button className='btn btn-primary ms-3' onClick={() => navigate('/edit', { state: emp })}>Edit</button>
                  </td>
                  <td>
                    <input type="checkbox" onChange={(e) => multipleDelte(emp.id, e.target.checked)} />
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
