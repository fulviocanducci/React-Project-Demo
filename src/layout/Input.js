import React from 'react';

export default function Input({type="text", className="input", name="", id="", value="", placeholder="", label="", change = null}) {    
    return (
        <div className="field">
            <label htmlFor={id} className="label">{label}</label>
            <div className="control">
                <input type={type} 
                    autoComplete="off"
                    className={className} 
                    id={id} 
                    placeholder={placeholder} 
                    onChange={change} 
                    value={value}
                    name={name}
                />
            </div>
        </div>
    )
}