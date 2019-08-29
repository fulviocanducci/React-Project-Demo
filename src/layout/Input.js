import React from 'react';

export default function Input({type="text", id="", value="", placeholder="", label="", change = null}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} 
                className="form-control" 
                id={id} 
                placeholder={placeholder} 
                onChange={change} 
                value={value}
            />
        </div>
    )
}