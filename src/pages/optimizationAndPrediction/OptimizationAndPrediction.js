import React, { useState } from "react";
import { WantToKnowMore } from "./WantToKnowMore";
import Timer from "./Timer";
import "./OptimizationAndPrediction.scss";

function USDFormatter(number) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  // gotta love when JS has an in-built tool to handle this stuff
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

export const OptimizationAndPrediction = (props) => {
  const [inputCardData, setInputCardData] = useState({
    input1: {
      userValue: 0,
      optimizedValue: 0,
    },
    input2: {
      userValue: 0,
      optimizedValue: 0,
    },
    input3: {
      userValue: 0,
      optimizedValue: 0,
    },
    input4: {
      userValue: 0,
      optimizedValue: 0,
    },
    input5: {
      userValue: 0,
      optimizedValue: 0,
    },
    input6: {
      userValue: 0,
      optimizedValue: 0,
    },
  });
  const [forecastDates, setForecastDates] = useState("");
  const [dateRange, setDateRange] = useState({ minDate: "", maxDate: "" });
  // i left the minutes and the callback as consts so its easy to change it if need be
  const minutesBetweenAutomaticUpdate = 5;
  const timerCallback = () => {
    console.log("timerCallback has been called");
  };
  console.log("MainPage rendered");
  return (
    <div className="channel-spend-optimization-and-prediction-page">
      <div className="optimization-and-prediction">
        <div className="optimization-and-prediction-header">
          <h1>Logo</h1>
          <div className="dates-form">
            <label htmlFor="forecast-date">
              <h4>Forecast Dates</h4>
              <select
                className="forecast-dates-select"
                name="forecast-date"
                id="forecast-date"
                onChange={(e) => setForecastDates(e.target.value)}
              >
                <option value="next-quarter">Next Quarter</option>
                <option value="next-year">Next Year</option>
                <option value="something">Something</option>
                <option value="custom">Custom</option>
              </select>
            </label>
            <label htmlFor="start-date">
              <h4>Start Date</h4>
              <input
                className="start-date-input"
                type="date"
                name="start-date"
                id="start-date"
                max={dateRange.maxDate}
                disabled={forecastDates !== "custom"}
                onChange={(e) =>
                  setDateRange({ ...dateRange, minDate: e.target.value })
                }
              />
            </label>
            <label htmlFor="end-date">
              <h4>End Date</h4>
              <input
                className="end-date-input"
                type="date"
                name="end-date"
                id="end-date"
                min={dateRange.minDate}
                disabled={forecastDates !== "custom"}
                onChange={(e) =>
                  setDateRange({ ...dateRange, maxDate: e.target.value })
                }
              />
            </label>
          </div>
        </div>
        <div className="budget-input">
          <label htmlFor="budget">Budget:</label>
          <input type="number" id="budget" name="budget" />
        </div>
        <section className="channelmix-lead-pred">
          <h2>ChannelMix Lead Pred</h2>
          <div className="input-card-list">
            <div className="input-card">
              <label htmlFor="direct-mail" className="title">
                Direct Mail
              </label>
              <label htmlFor="direct-mail" className="formatted-value">
                {USDFormatter(inputCardData.input1.userValue)}
              </label>
              <input
                type="number"
                id="direct-mail"
                name="direct-mail"
                value={inputCardData.input1.userValue}
                onChange={(e) =>
                  setInputCardData({
                    ...inputCardData,
                    input1: { userValue: e.target.value },
                  })
                }
              />
              <p>Optimized suggestion:</p>
              <button onClick={() => window.alert(1234)}>1234</button>
            </div>
            <div className="input-card">
              <label htmlFor="direct-mail2" className="title">
                Direct Mail
              </label>
              <label htmlFor="direct-mail2" className="formatted-value">
                {USDFormatter(inputCardData.input2.userValue)}
              </label>
              <input
                type="number"
                id="direct-mail2"
                name="direct-mail2"
                value={inputCardData.input2.userValue}
                onChange={(e) =>
                  setInputCardData({
                    ...inputCardData,
                    input2: { userValue: e.target.value },
                  })
                }
              />
              <p>Optimized suggestion:</p>
              <button onClick={() => window.alert(1234)}>1234</button>
            </div>
            <div className="input-card">
              <label htmlFor="direct-mail3" className="title">
                Direct Mail
              </label>
              <label htmlFor="direct-mail3" className="formatted-value">
                {USDFormatter(inputCardData.input3.userValue)}
              </label>
              <input
                type="number"
                id="direct-mail3"
                name="direct-mail3"
                value={inputCardData.input3.userValue}
                onChange={(e) =>
                  setInputCardData({
                    ...inputCardData,
                    input3: { userValue: e.target.value },
                  })
                }
              />
              <p>Optimized suggestion:</p>
              <button onClick={() => window.alert(1234)}>1234</button>
            </div>
            <div className="input-card">
              <label htmlFor="direct-mail4" className="title">
                Direct Mail
              </label>
              <label htmlFor="direct-mail4" className="formatted-value">
                {USDFormatter(inputCardData.input4.userValue)}
              </label>
              <input
                type="number"
                id="direct-mail4"
                name="direct-mail4"
                value={inputCardData.input4.userValue}
                onChange={(e) =>
                  setInputCardData({
                    ...inputCardData,
                    input4: { userValue: e.target.value },
                  })
                }
              />
              <p>Optimized suggestion:</p>
              <button onClick={() => window.alert(1234)}>1234</button>
            </div>
            <div className="input-card">
              <label htmlFor="direct-mail5" className="title">
                Direct Mail
              </label>
              <label htmlFor="direct-mail5" className="formatted-value">
                {USDFormatter(inputCardData.input5.userValue)}
              </label>
              <input
                type="number"
                id="direct-mail5"
                name="direct-mail5"
                value={inputCardData.input5.userValue}
                onChange={(e) =>
                  setInputCardData({
                    ...inputCardData,
                    input5: { userValue: e.target.value },
                  })
                }
              />
              <p>Optimized suggestion:</p>
              <button onClick={() => window.alert(1234)}>1234</button>
            </div>
            <div className="input-card">
              <label htmlFor="direct-mail6" className="title">
                Direct Mail
              </label>
              <label htmlFor="direct-mail6" className="formatted-value">
                {USDFormatter(inputCardData.input6.userValue)}
              </label>
              <input
                type="number"
                id="direct-mail6"
                name="direct-mail6"
                value={inputCardData.input6.userValue}
                onChange={(e) =>
                  setInputCardData({
                    ...inputCardData,
                    input6: { userValue: e.target.value },
                  })
                }
              />
              <p>Optimized suggestion:</p>
              <button onClick={() => window.alert(1234)}>1234</button>
            </div>
          </div>
          <details className="prediction-and-optimization-details">
            <summary>
              <Timer
                initialMinute={minutesBetweenAutomaticUpdate}
                initialSeconds={0}
                timerCallback={timerCallback}
                className="timer"
              />
              <p className="timer-description">until next update</p>
              <p className="more-info-summary">More Info</p>
            </summary>
            <p className="prediction-and-optimization-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              iaculis efficitur varius. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Mauris
              lacinia semper leo sed sodales. Phasellus aliquam tempus neque
              vitae porta. Fusce consequat sem vitae iaculis cursus. Fusce
              congue massa eget felis condimentum, id pretium lacus molestie.
              Suspendisse eu urna commodo, mollis urna ut, facilisis magna.
              Nulla facilisi. Phasellus eget elit metus. Donec eu tempor nisl.
              Morbi nunc neque, facilisis ultricies eros non, vehicula
              pellentesque leo. Mauris blandit eros dui, elementum volutpat odio
              tempor at. Phasellus non mattis dolor.
            </p>
          </details>
          <div className="prediction-buttons">
            <button className="run-optimization">Run Optimization</button>
            <button>Run Prediction</button>
          </div>
          <div className="predictions">
            <div className="spend-optimization">
              <h3>ChannelMix Spend Optimization</h3>
              <div className="leads">
                <h4>Leads</h4>
                <p>1234</p>
              </div>
              <div className="roi">
                <h4>ROI</h4>
                <p>1234</p>
              </div>
            </div>
            <div className="lead-prediction">
              <h3>ChannelMix Lead Prediction</h3>
              <div className="leads">
                <h4>Leads</h4>
                <p>1234</p>
              </div>
              <div className="roi">
                <h4>ROI</h4>
                <p>1234</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WantToKnowMore />
    </div>
  );
};
