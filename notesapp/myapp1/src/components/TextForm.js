import React , {useState} from "react";


export default function TextForm() {

  const handleUpClick = (event) =>{
    // event.preventDefault();
    let newText = text.toUpperCase(text);
    setText(newText);
  }

  const handleDownClick = (event) =>{
    // event.preventDefault();
    let newText = text.toLowerCase(text);
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter Text Here: '); 

  return (
    <>

      <div  claasName = "container">
        <form>

          <div className="mb-3 my-3">
          
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" />

          </div>

          <button type ="button" className="btn btn-primary" onClick = {handleUpClick} > UpperCase </button>
          <button type="button" className="btn btn-primary mx-2" onClick = {handleDownClick}> LowerCase </button>
          <button type="button" className="btn btn-primary "> Remove Extra Spaces </button>

        </form>
      </div>

      <div className="container mb-3 my-3" >
        <h5>
          Your Text Summary:
        </h5>

        
      </div>
    </>
  );
}
