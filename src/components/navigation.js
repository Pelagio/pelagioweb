import React from 'react'
import styles from './navigation.module.css'
import { anchorScroll } from '../helpers/anchor-scroll'


export default () => (
  <nav role="navigation"  className={styles.titleHeader}>
    <div className={styles.headerMenuSpacer}></div>
    <a className={styles.headerMenuCenter} href="/"></a>
    <menu className={styles.headerMenu}>
        <a className={styles.menuItem} onClick={anchorScroll} href="#what">WHAT</a>
        <a className={styles.menuItem} onClick={anchorScroll} href="#who">WHO</a>
        <a onClick={anchorScroll} href="#contact">CONTACT</a>
    </menu>
  </nav>
)
