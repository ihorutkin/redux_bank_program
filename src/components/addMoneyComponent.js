import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function AddMoneyComponent(){
    const dispatch = useDispatch()
    const count = useSelector(state => state.cash.count)

    const [value, setValue] = useState(0)
    const refCount = useRef(null)

    function addMoney(count){
        dispatch({type: 'ADD_MONEY', payload: count})
    }

    function getMoney(count){
        dispatch({type: 'GET_MONEY', payload: count})
    }
    return (
        <div>
            <h1>{ count }</h1>
            <input ref={refCount} onChange={e => setValue(e.target.value)} value={value} type='text' className='input-field' />
            <section className='btn-section'>
                <button onClick={() => addMoney(Number(refCount.current.value))} className='money-btn add'>Add money</button>
                <button onClick={() => getMoney(Number(refCount.current.value))} className='money-btn get'>Get money</button>
            </section>
        </div>
    )
}