import React from 'react';
import s from './Footer.module.scss';
const FooterItem = ( {children} ) => {
    return (
    <p className={s.item}>
        { children }
    </p>
    )
}
export default FooterItem;