import React from "react";
import { Card } from "semantic-ui-react";
import moment from "moment";

export default function Forecast({ key,forcast }) {
    return (
    <div style={{ marginTop: 20 }}>
      <div className="forecast-main-header">5 Day Forecast</div>
      <Card.Group >
        {forcast.slice(0, 5).map((data) => {
          return (
            <Card key={data.dt} className="forecast-card">
              <Card.Content>
                <Card.Header className="forecast-date">
                  Date: {moment.unix(data.dt).format("LL")}
                </Card.Header>
                <Card.Header className="forecast-header">
                  Temprature: {Math.round((data.temp.max + data.temp.min) / 2)}{" "}
                  ℃
                </Card.Header>
                <Card.Meta className="forecast-header">
                  Humidity: {data.humidity} %
                </Card.Meta>
                <Card.Description className="temp-desc">
                  Description: {data.weather[0].description}
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
}
