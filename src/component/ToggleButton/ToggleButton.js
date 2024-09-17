import { useEffect } from 'react';
import './ToggleButton.css'

export default function ToggleButton({state, setState}) {
    useEffect(() => {
        let toggleButton = document.getElementById("toggleButton");

        const handleClick = () => {
            if(state) 
                toggleButton.classList.remove("active")
            else 
                toggleButton.classList.add("active")
            setState((state) => !state);
        }

        toggleButton.addEventListener("click", handleClick);

        return () => {
            toggleButton.removeEventListener('click', handleClick);
        }
    }, [state, setState])
    return(
        <div id='toggleButton' className="ToggleButton">
        </div>
    );
};