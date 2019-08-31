import React, { useState, useRef, useEffect } from 'react';
import { isInt } from './utils';
import { Header } from './layout';

export default function Counter() {

    const [sequence, setSequence] = useState(0);
    const [edit, setEdit] = useState(false);
    const editInput = useRef(null);

    function onClickSequence(e) {
        setEdit(true);        
    }

    function setSequenceChange(e) {               
        const {value} = e.target;        
        if (value && value !== '' && isInt(value) && parseInt(value) > -1) {
            setSequence(parseInt(value));      
        }
    }

    function handlerKeyPressEdit(e) {        
        if (e.key === "Enter") {
            setEdit(false);
        }
    }

    function handlerKeyUpEdit(e) {        
        if (e.key === 'Escape') {
            setEdit(false);
        }
    }

    useEffect(() => {
        if (edit) {
            editInput.current.focus();
            editInput.current.select();
        }
    },[edit]);

    return (
        <>
            <Header title="Counter"></Header>                   
            <div className="columns">
                <div className="column" onClick={onClickSequence} style={{marginTop:'1px'}}>
                    <div className="well well-lg" style={{height:'95px'}}>
                        {edit ? (
                            <input 
                                ref={editInput}
                                type="text" 
                                name="edit"
                                className="input"
                                value={sequence} 
                                onChange={setSequenceChange}
                                onKeyPress={handlerKeyPressEdit}
                                onKeyUp={handlerKeyUpEdit}
                                onBlur={e => setEdit(false)}/>
                        ) : (
                            <div className="title has-text-centered">
                                <h3>{sequence}</h3>
                            </div>
                        )}   
                    </div>                                     
                </div>
            </div>
            <div className="columns">
                <div className="column" style={{marginTop:'3px'}}>
                    <button 
                        disabled={edit || sequence === 0}
                        className="button is-fullwidth" 
                        onClick={() => setSequence(sequence - 1)}>
                            <span className="icon is-small">
                                <i className="fas fa-fast-backward"></i>
                            </span> 
                            <span>Decrement</span>
                    </button>
                </div>
                <div className="column" style={{marginTop:'3px'}}>
                    <button 
                        disabled={edit}
                        className="button is-fullwidth" 
                        onClick={() => setSequence(sequence + 1)}>                            
                            <span>Increment</span>
                            <span className="icon is-small">
                                <i className="fas fa-fast-forward"></i>
                            </span>                             
                    </button>
                </div>                
                <div className="column" style={{marginTop:'3px'}}>
                    <button 
                        disabled={edit}
                        className="button is-fullwidth" 
                        onClick={() => setEdit(true)}>
                            <span className="icon is-small">
                                <i className="fas fa-edit"></i>
                            </span> 
                            <span>Change Number</span>
                    </button>
                </div>
            </div>    
        </>    
    )
}