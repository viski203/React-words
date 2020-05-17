import React from 'react';
import s from './Wrapper.module.scss';

const Wrapper = ({ children }) => {
    return (
        <div class={s.wrapper}>
            {children}
        </div>
    )
}
export default Wrapper;