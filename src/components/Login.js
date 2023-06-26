import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();

    const [form,setForm] = useState(0);

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  }

  const MESSAGE_ERROR = {
    email: "Email error",
    password: "Password error"
  }

  function handleChange(event) {
    let error = "";
    error = REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
    setForm({
      ...form,
      [event.target.name]: {value: event.target.value, error: error}
    });
  }

  function handleSubmit() {
    const isFilled = form.email && form.email.value && form.password && form.password.value;
    const isError = isFilled && (form.email.error || form.password.error);

    if (isFilled && !isError) {
        navigate("/home", { state: { email: form.email.value, password: form.password.value }});
    } else {
        alert("Please fill out all the fields!!");
    }
  }
  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <div className={`custom-input ${form.email && form.email.error && "custom-input-error"}`}>
          <label>Email: </label>
          <input name="email" value={(form.email && form.email.value) || ''} onChange={handleChange} />
          {form.email && form.email.error && (
            <p className='error'>{form.email.error}</p>
          )}
        </div>
        <div className={`custom-input ${form.password && form.password.error && "custom-input-error"}`}>
          <label>Password: </label>
          <input type="password" name="password" value={(form.password && form.password.value) || ''} onChange={handleChange} />
          {form.password && form.password.error && (
            <p className='error'>{form.email.error}</p>
          )}
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}