import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Edit_Emp } from '../Redux/Action/Empaction';
// import { Add_Emp } from '../Redux/Action/Empaction';

const Edit = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.state);
    if (location.state) {
      setName(location?.state?.name)
      setEmail(location?.state?.email);
      setPassword(location?.state?.password)
      setCity(location?.state?.city)
      setDes(location?.state?.des)
      setSalary(location?.state?.salary)
    }
  }, [location.state])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, city, salary, des);
    let obj = {
      id: location?.state.id,
      name, email, password, city, salary, des,
    }

    dispatch(Edit_Emp(obj));

    setName("")
    setEmail("")
    setDes("")
    setSalary("")
    setPassword("")
    setCity("")

    setTimeout(() => {
      navigate('/view');
    }, 1000);
  }


  return (
    <div>
      <div className="container mt-1">
        <div className="text-center">
          <h1>Edit Employee</h1>
        </div>
        <form className='form-control' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name :- </label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name || ""} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="text" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} value={city || ""} />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input type="text" className="form-control" onChange={(e) => setSalary(e.target.value)} value={salary || ""} />
          </div>

          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input type="text" className="form-control" onChange={(e) => setDes(e.target.value)} value={des || ""} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to={'/view'}>
            <button className='btn btn-primary ms-3'>View</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Edit
