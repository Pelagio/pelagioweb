import React from "react";
import styles from "./spider-chart.module.css";

class SpiderChartComponent extends React.Component {
  state = {
    expanded: true,
    data: [
      { name: "Test1", value: 50 },
      { name: "Test2", value: 40 },
      { name: "Test3", value: 30 },
      { name: "Test4", value: 20 },
      { name: "Test5", value: 80 },
      { name: "Test7", value: 80 }
    ],
    animate: false
  };

  componentDidMount() {
    // this.props.data ? this.setState({ data: this.props.data }) : null;
  }

  translateValuesToDataPoints = data => {
    let polygon = [];
    data.map((item, index) => {
      switch (index) {
        case 0:
          polygon.push({
            x: 50,
            y: 50 - item.value / 2
          });
          break;
        case 1:
          polygon.push({
            x: 80,
            y: 25
          });
          break;
        case 2:
          polygon.push({
            x: 90,
            y: 70
          });
          break;
        case 3:
          polygon.push({
            x: 50,
            y: item.value / 2 + 50
          });
          break;
        case 4:
          polygon.push({
            x: 10,
            y: 75
          });
          break;
        case 5:
          polygon.push({
            x: 5,
            y: 25
          });
          break;
        default:
          console.log("Default value");
          break;
      }
    });
    console.log(polygon);
    return polygon;
  };

  translatePolygonToClipPath = polygon => {
    polygon.map(value => value.x + "% " + value.y + "%").join(",");
  };

  getLabelPositions = (index, polygonMax) => {
    let yPos = 0;
    let xPos = 0;
    let width = 16;
    let height = 6;

    switch (index) {
      case 0:
        yPos = polygonMax[index].y - height;
        xPos = polygonMax[index].x - width / 2;
        break;
      case 1:
        yPos = polygonMax[index].y - height / 2;
        xPos = polygonMax[index].x;
        break;
      case 2:
        yPos = polygonMax[index].y - height / 4;
        xPos = polygonMax[index].x;
        break;
      case 3:
        yPos = polygonMax[index].y + height / 4;
        xPos = polygonMax[index].x - width / 2;
        break;
      case 4:
        yPos = polygonMax[index].y - height / 4;
        xPos = polygonMax[index].x - width;
        break;
      case 5:
        yPos = polygonMax[index].y - height / 2;
        xPos = polygonMax[index].x - width;
        break;
      default:
        console.error("Something went wrong");
    }

    return {
      width: width + "%",
      top: yPos + "%",
      left: xPos + "%"
    };
  };

  render() {
    let polygonMax = [
      { x: 50, y: 0 },
      { x: 100, y: 25 },
      { x: 100, y: 75 },
      { x: 50, y: 100 },
      { x: 0, y: 75 },
      { x: 0, y: 25 }
    ];

    let a = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
    let b = this.translatePolygonToClipPath(
      this.translateValuesToDataPoints(this.state.data)
    );
    /*if (this.props.data.length !== 6) {
      return (
        <div>
          <p>The data from contentful has to be exactly 6 items</p>
        </div>
      );
    }*/
    return (
      <div className={styles.spiderChart}>
        <div className={styles.hexagonBorder}>
          {this.state.data.map((item, index) => (
            <div>
              <span
                className={styles.spiderLabel}
                style={this.getLabelPositions(index, polygonMax)}
              >
                {item.name}
              </span>
            </div>
          ))}
          <div className={styles.hexagon}>
            <div
              className={styles.chart}
              style={{ clipPath: this.state.animate ? b : a }}
            />
          </div>
        </div>
        <button onClick={() => this.setState({ animate: !this.state.animate })}>
          Change class
        </button>
      </div>
    );
  }
}

export default SpiderChartComponent;
