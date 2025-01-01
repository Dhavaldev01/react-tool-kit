import { useState } from "react";

function FormComponent() {

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [formData, setFormData] = useState({
        name : "",
        email : ""
    });

    function handleInputChange(event){
        console.log(event);
        // event.preventDefault();
        const {value} = event.target;
        setNameValue(value);
    }
    function handleEmailChange(event){
        const {value} = event.target;
        setEmailValue(value);
    }

    function handleOnChange(e){
        console.log(e.target.name);
        const {name , value} = e.target;

        setFormData({
            ...formData,
            [name] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(nameValue , "namevalue")
        console.log(emailValue , "emailValue")

        
    }

    console.log(formData);
  return (
    <div>
      <h1>Form</h1>
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      value={formData.name} 
      name="name" 
      id="name" 
      placeholder="Enter Your Name" 
      onChange={handleOnChange}
      />
       <input 
      type="email" 
      value={formData.email} 
      name="email" 
      id="email" 
      placeholder="Enter Your Email" 
      onChange={handleOnChange}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default FormComponent;
