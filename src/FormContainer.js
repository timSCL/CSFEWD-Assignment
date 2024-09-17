import { useState } from "react";
import ToggleButton from "./component/ToggleButton/ToggleButton";
import UserForm from "./UserForm";

function FormContainer() {
    const [formVisibility, setFormVisibility] = useState(false);
    console.log(formVisibility)
    return(
        <div className="FormContainer">
            <ToggleButton state={formVisibility} setState={setFormVisibility}/>
            {formVisibility ? <UserForm/> : <></>}
        </div>
    );
}

export default FormContainer;