// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  //   const[firstName,setFirstName]=useState("");
  // const[lasttName,setLastName]=useState("");

  // function changeFirstNameHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);

  // }

  // function changeLastNameHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);

  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lasttName: "",
    email: "",
    comment: "",
    isVisible: true,
    mode:""
});

  console.log(formData);

  function changeHandler(event) {
   const{name,value,checked,type} =event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type==="checkbox" ? checked:value
      }
    });
  }

  function sumbitHandler(event){
    event.preventDefault();
    console.log("sumbit all data")
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={sumbitHandler} >
        <input
          type="text"
          placeholder="First name"
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        ></input>

        <br />
         <br />


        <input
          type="text"
          placeholder="Last name"
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        ></input>
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br/>
        <br/>
        <textarea placeholder="Comments" onChange={changeHandler}
        name='comment'
        value={formData.comment}
        >

        </textarea>
        <br/>
        <br/>

        <input type="checkbox" 
        onChange={changeHandler}
        name="isVisible"
        checked={formData.isVisible}></input>

        <label htmlFor="isVisible">I ma isVisible</label>

        <br/>
        <br/>
        <input 
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="online-mode"
        id="online-mode"
        checked={formData.mode==="online-mode"}>

        </input>
        <label>Online mode</label>
<input 
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="offline-mode"
        id="offline-mode"
        checked={formData.mode==="offline-mode"}>

        </input>
        <label>Offline mode</label>

        {/* Dropdown */}
        <br/>
        <br/>

<label>Favourate Car</label>
       
        <select
       name="favcar"
        id="favcar"
        value={formData.favcar}
        onChange={changeHandler} >

          <option>Scarpio</option>
          <option>Tharr</option>
          <option>Ladender</option>
          <option>defender</option>
          <option>pazero</option>
          <option>Bugatii</option>
          <option>Mahindra</option>
          </select>
<br/>
<br/>
          <button type="sumbit"
          >Sumbit</button>
        
      </form>
    </div>
  );
}

export default App;
