import React, {useState} from "react"

const Form = () =>{
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form