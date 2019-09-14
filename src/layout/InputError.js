import React from 'react';

export default function InputError({message}) {
    return (
        <article className="message is-small is-danger">
            <div className="message-body">
                {message}
            </div>
        </article>
    )    
}