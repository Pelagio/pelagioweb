import React from "react";
import styles from "./spider-chart.module.css";

class SpiderChartComponent extends React.Component {
  state = {
    expanded: true
  };

  render() {
    return (
      <div className={styles.spiderChart}>
        <div className={styles.hexagonBorder}>
          <div className={styles.hexagon}>
            <div className={styles.chart} />
          </div>
        </div>
      </div>
    );
  }
}

export default SpiderChartComponent;
