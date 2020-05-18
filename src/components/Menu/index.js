import React from 'react';
import s from './Menu.module.scss';
const Menu = ({ children }) => {
    return (
        <div className={s.menu}>
            { children }
        </div>
    )
}
export default Menu;