import React from 'react';
import s from './MenuComponent.module.scss';
const MenuItem = ({ children }) => {
    return (
    <a href='#' className={s.component}>{ children }</a>
    )
}

export default MenuItem;