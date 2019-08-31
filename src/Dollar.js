import React, { useState, useEffect } from 'react';
import { Header, Loading } from './layout';
import { DollarRequestGet } from './libraries';
//import Moment from 'react-moment';

export default function Dollar() {
    const [results, setResults] = useState({});

    useEffect(() => {        
        loadDollar();        
    },[]);

    async function loadDollar(dateInitials, dateEnds) {
        window.setTimeout(() => {
            DollarRequestGet(dateInitials, dateEnds)
                .then(result => { setResults(result.data); })
                .catch(error => { console.log(error) })
        }, 1500);
    }

    return (        
        <>        
        <Header title="Dollar"></Header> 
        {Object.keys(results).length > 0 ?
            (
                <>  
                    <table className="table is-bordered is-fullwidth">
                        <thead>
                            <tr>
                                <th className="has-text-centered" colSpan="3">Name</th>
                            </tr>    
                            <tr>
                                <th className="has-text-centered">Code</th>
                                {/*<th className="has-text-centered">In</th>*/}
                                <th className="has-text-centered">Low</th>
                                <th className="has-text-centered">High</th>
                                {/*<th className="has-text-centered">Ask</th>
                                <th className="has-text-centered">Bid</th>
                                <th className="has-text-centered">Change</th>
                                <th className="has-text-centered">Date</th>
                                <th className="has-text-centered">Time</th>
                                <th className="has-text-centered">vBid</th>*/}                               
                            </tr>
                        </thead>
                        <tbody>
                        {Object.keys(results).map((item, index) => (
                            <React.Fragment key={index}>
                            <tr className={index % 2 === 0?'warning':'success'}>
                                <td className="text-center" colSpan="3">
                                <strong>{ results[item].name}</strong>
                                </td>
                            </tr>
                            <tr className={index % 2 === 0?'warning':'success'}>
                                <td className="text-center">{ results[item].code}</td>
                                {/*<td className="has-text-right">{ results[item].codein}</td>*/}
                                <td className="has-text-right">{ results[item].low}</td>
                                <td className="has-text-right">{ results[item].high}</td>
                                {/*<td className="has-text-right">{ results[item].ask}</td>
                                <td className="has-text-right">{ results[item].bid}</td>                                
                                <td className="has-text-right">{ results[item].pctChange}</td>
                                <td className="has-text-right">{ results[item].timestamp}</td>
                                <td className="has-text-right">{ results[item].varBid}</td>
                                <td className="has-text-centered">
                                    <Moment format="YYYY/MM/DD HH:mm">
                                        { results[item].create_date}
                                    </Moment>                            
                                </td>*/}
                            </tr>
                            </React.Fragment>
                        ))}    
                        </tbody>                
                    </table>                                                       
                </>
            ) : (
                <>
                    <Loading type="bars" color={"#000000"}></Loading>
                </>
            )
        }   
        </>
    )              
}