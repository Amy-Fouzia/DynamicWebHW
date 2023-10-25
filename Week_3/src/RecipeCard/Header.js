import React from 'react'
import styles from './RecipeCard.module.css'

export default function Header(props) {
  return (
    <div className={styles.header}>
        <a className={styles.header_text} href="#top">
            Recipe Book
        </a>
    </div>
  )
}
