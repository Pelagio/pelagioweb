import React from 'react'

import styles from './page-section.module.css'
import PeopleSection from './people-section';

export default ({ section, people }) => {
  return(
  <section id={section.anchor} className={styles.sectionBlock}>
    <div className={styles.parallax} style={{backgroundImage: section.anchor == "contact" ? "url(/img/winter-archipelago.jpg)" : "url(/img/archipelago.jpg)"}}></div>
    <div className={styles.sectionContent}>
        <h2>{section.title}</h2>
        {people ? <PeopleSection people={people}/>: <div
          dangerouslySetInnerHTML={{
            __html: section.content.content,
          }}
        />}
    </div>
  </section>
)}