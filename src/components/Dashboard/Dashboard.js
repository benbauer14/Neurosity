import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';


const Dashboard = () => {
    const dispatch = useDispatch();
    const sessions = useSelector((store) => store.sessions);
    

    useEffect(() => {
        dispatch({type: "FETCH_SESSIONS"})
        dispatch({type: 'SET_PAGE', payload: "DASHBOARD"})
    },[])


    return (
        <>
            {JSON.stringify(sessions)}
        </>
    )
}

export default Dashboard;