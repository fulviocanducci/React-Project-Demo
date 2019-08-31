import React from 'react';

export default function Input({type="text", id="", value="", placeholder="", label="", change = null}) {
    return (
        <div className="field">
            <label htmlFor={id} className="label">{label}</label>
            <div className="control">
                <input type={type} 
                    className="input" 
                    id={id} 
                    placeholder={placeholder} 
                    onChange={change} 
                    value={value}
                />
            </div>
        </div>
    )
}