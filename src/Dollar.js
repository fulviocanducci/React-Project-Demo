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
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center" colSpan="3">Name</th>
                            </tr>    
                            <tr>
                                <th className="text-center">Code</th>
                                {/*<th className="text-center">In</th>*/}
                                <th className="text-center">Low</th>
                                <th className="text-center">High</th>
                                {/*<th className="text-center">Ask</th>
                                <th className="text-center">Bid</th>
                                <th className="text-center">Change</th>
                                <th className="text-center">Date</th>
                                <th className="text-center">Time</th>
                                <th className="text-center">vBid</th>*/}                               
                            </tr>
                        </thead>
                        <tbody>
                        {Object.keys(results).map((item, index) => (
                            <React.Fragment key={index}>
                            <tr className={index % 2 === 0?'warning':'success'}>
                                <td className="col-md-4 text-center" colSpan="3">
                                <strong>{ results[item].name}</strong>
                                </td>
                            </tr>
                            <tr className={index % 2 === 0?'warning':'success'}>
                                <td className="col-md-4 text-center">{ results[item].code}</td>
                                {/*<td className="col-md-4 text-right">{ results[item].codein}</td>*/}
                                <td className="col-md-4 text-right">{ results[item].low}</td>
                                <td className="col-md-4 text-right">{ results[item].high}</td>
                                {/*<td className="col-md-4 text-right">{ results[item].ask}</td>
                                <td className="col-md-4 text-right">{ results[item].bid}</td>                                
                                <td className="col-md-4 text-right">{ results[item].pctChange}</td>
                                <td className="col-md-4 text-right">{ results[item].timestamp}</td>
                                <td className="col-md-4 text-right">{ results[item].varBid}</td>
                                <td className="col-md-4 text-center">
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