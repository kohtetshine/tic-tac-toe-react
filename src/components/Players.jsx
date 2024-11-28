import { useState } from "react";

export default function Players({ initialName, symbol }) {
    
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEdit() {
        setIsEditing((editing) => !editing);
        
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    let playerName = <span className="player-name">{name}</span>;
    let buttonCaption = 'Edit';

    if (isEditing) {
        playerName = <input type="text" value={name}/>
        buttonCaption = 'Save';
    }
    return (
            <li>
                <span className="player">
                    <span className="player-name">{playerName}</span>
                    <span className="player-symbol">{symbol}</span>
                </span>
            <button onClick={() => handleEdit()}>{buttonCaption}</button>
            </li>
    )
}