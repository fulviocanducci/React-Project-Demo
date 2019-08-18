import React, { useState } from 'react';
import { Container } from './layout';

export default function Counter() {
    const [sequence, setSequence] = useState(0);
    return (
        <Container title="Counter Page">            
            <div className="text-center row">
                <div className="col-md-12">
                    <h2>{sequence}</h2>
                </div>
                <div className="col-md-6">
                    <button 
                        className="btn btn-primary btn-block" 
                        onClick={() => setSequence(sequence + 1)}>
                            Increment
                    </button>
                </div><br />
                <div className="col-md-6">
                    <button disabled={sequence === 0}
                        className="btn btn-info btn-block" 
                        onClick={() => setSequence(sequence - 1)}>
                            Decrement
                    </button>
                </div>
            </div>
        </Container>
    )
}