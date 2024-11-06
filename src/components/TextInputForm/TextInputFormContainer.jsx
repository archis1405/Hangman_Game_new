import { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", value);
        if(value) {
            // if we have something in value then we want to go to the play page
            navigate(`/play`, { state: { wordSelected: value } });
        }
    }

    function handleTextInputChange(event) {
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/Hide button clicked");
        if (inputType === "password") {
            setInputType("text")
        } else {
            setInputType("password");
        }
        console.log(inputType);
        
    }

    // If we are not passing any dependency array then the callback function will be executed every time the components are updated
    // Dependency array khali mtlb -> koi bhi dependency nhi hai 
    // NOTE -> FIRST LOAD PE SAARE USE EFFECTS CALL HONGE

    // If passing an empty dependency array -> then the component will be called only the first time the component is loaded
    useEffect(()=>{
        console.log("Component first load"); // the callback is called the first time the component is called nd everytime it is rerendered

    },[]);

    useEffect(()=>{
        console.log("Component load and update");
        // we are not passing any dependency array 
    });// The callback will be only executed only when the component is mounted

    useEffect(()=>{
        console.log("Component first load and update value changed");
    },[value]); // this will be updted only when the value state variable is updated

    useEffect(()=>{
        console.log("Component first load and Input type value changed");
    },[inputType]);// this will be updted only when the inputType state variable is updated

    return (
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit={handleFormSubmit} 
            handleTextInputChange={handleTextInputChange} 
            handleShowHideClick={handleShowHideClick}
        />
    );
}

export default TextInputFormContainer;