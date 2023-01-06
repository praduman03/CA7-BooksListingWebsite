import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Form() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordRepeat, setPasswordRepeat] = useState("");
const [error, setError] = useState("");
// const [errorColor, setErrorColor] = useState("red");
const [passStrength, setPassStrength] = useState("");
const [passColor, setPassColor] = useState("red");

const navigate = useNavigate();
const handleSubmit = (event) => {
event.preventDefault();

if (name.length < 3 || name.length > 30) {
setError("Name must be between 3 and 30 characters");
return;
}

if (!email.includes("@")) {
setError("Email must be a valid email address");
return;
}

if (password.length < 10 || !/[^A-Za-z0-9]/.test(password)) {
setError(
"Password must be at least 10 characters long and contain at least one special character"
);

return;
}

if (password !== passwordRepeat) {
setError("Confirm password do not match!");
return;
}

if (
(name.length < 3 || name.length < 30) &&
email.includes("@") &&
(password.length > 10 || /[^A-Za-z0-9]/.test(password)) &&
password === passwordRepeat
) {
    sessionStorage.setItem(
        "name",
        name.charAt(0).toUpperCase() + name.slice(1)
      );
setError("Succesfully Registered");
alert(`Thankyou ${name} for registering. Directing you to the Home page`)

setTimeout(() => {
navigate("/");
// window.location.reload();
return
}, 500);
}
};


return (
<form onSubmit={handleSubmit} id="main-form-div">
<h1 style={{color:'#FE0810'}}>Register</h1>
<label>
    Name
</label>
<input
type="text"
className="form-input"
placeholder="Name"
value={name}
onChange={(event) => setName(event.target.value)}
/>
<br />
<label> Email </label>
<input
type="text"
className="form-input"
placeholder="Email"
value={email}
onChange={(event) => setEmail(event.target.value)}
/>


<br />
<label>Password</label>
<input
type="password"
className="form-input"
placeholder="Password"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>


<h4 style={{ color: passColor, marginTop: "0", marginBottom: "2vh" }}>
{passStrength}
</h4>
<label>Confirm Password</label>
<input
type="password"
className="form-input"
placeholder="Confirm password"
value={passwordRepeat}
onChange={(event) => setPasswordRepeat(event.target.value)}
/>

<br />

<button type="submit" id="submit"style={{fontWeight:'500',letterSpacing:'0.2vh'}} >
Register
</button>
{error && <p style={{color:'#FE0810',fontWeight: "600" }}>{error}</p>}
</form>
);
}
export default Form;

