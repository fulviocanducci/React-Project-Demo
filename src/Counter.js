import React, { useState, useRef, useEffect } from 'react';
import { Container } from './layout';
import { isInt } from './utils';

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

    useEffect(() => {
        if (edit) {
            editInput.current.focus();
            editInput.current.select();
        }
    },[edit]);

    return (
        <Container title="Counter Page">            
            <div className="text-center row">
                <div className="col-sm-12" onClick={onClickSequence} style={{marginTop:'1px'}}>
                    <div className="well well-lg" style={{height:'95px'}}>
                        {edit ? (
                            <input 
                                ref={editInput}
                                type="text" 
                                name="edit"
                                className="form-control input-lg"
                                value={sequence} 
                                onChange={setSequenceChange}
                                onKeyPress={handlerKeyPressEdit}
                                onBlur={e => setEdit(false)}/>
                        ) : (
                            <h3>{sequence}</h3>
                        )}   
                    </div>                                     
                </div>
                <div className="col-sm-6" style={{marginTop:'5px'}}>
                    <button 
                        disabled={edit || sequence === 0}
                        className="btn btn-info btn-block" 
                        onClick={() => setSequence(sequence - 1)}>
                            <span className="glyphicon glyphicon-chevron-left"></span> Decrement
                    </button>
                </div>
                <div className="col-sm-6" style={{marginTop:'5px'}}>
                    <button 
                        disabled={edit}
                        className="btn btn-primary btn-block" 
                        onClick={() => setSequence(sequence + 1)}>
                            Increment <span className="glyphicon glyphicon-chevron-right"></span>
                    </button>
                </div>                
                <div className="col-sm-12" style={{marginTop:'5px'}}>
                    <button 
                        disabled={edit}
                        className="btn btn-warning btn-block" 
                        onClick={() => setEdit(true)}>
                            <span className="glyphicon glyphicon-wrench"></span> Change Number
                    </button>
                </div>
            </div>
        </Container>
    )
}