import React from "react";
import { WantToKnowMore } from "./WantToKnowMore";
import "./OptimizationAndPrediction.scss";

export const OptimizationAndPrediction = (props) => {
  return (
    <div className="channel-spend-optimization-and-prediction-page">
      <div className="optimization-and-prediction">
        <div className="optimization-and-prediction-header">
          <h1>LOGO</h1>
          <div className="datepicker-form">
            <label for="cars">Forecast Dates</label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <p className="next-quarter">1234 - 5678</p>
            <input type="date" />
          </div>
        </div>
        <div className="budget-input">
          <label for="budget">Budget:</label>
          <input type="number" id="budget" name="budget" />
        </div>
        <section className="channelmix-lead-pred">
          <h2>ChannelMix Lead Pred</h2>
          <div className="input-card-list">
            <div className="input-card">
              <label for="direct-mail">Direct Mail</label>
              <input type="number" id="direct-mail" name="direct-mail" />
              <p>Optimized suggestion:</p>
              <button>1234</button>
            </div>
            <div className="input-card">
              <label for="direct-mail2">Direct Mail</label>
              <input type="number" id="direct-mail2" name="direct-mail2" />
              <p>Optimized suggestion:</p>
              <button>1234</button>
            </div>
            <div className="input-card">
              <label for="direct-mail3">Direct Mail</label>
              <input type="number" id="direct-mail3" name="direct-mail3" />
              <p>Optimized suggestion:</p>
              <button>1234</button>
            </div>
            <div className="input-card">
              <label for="direct-mail4">Direct Mail</label>
              <input type="number" id="direct-mail4" name="direct-mail4" />
              <p>Optimized suggestion:</p>
              <button>1234</button>
            </div>
            <div className="input-card">
              <label for="direct-mail5">Direct Mail</label>
              <input type="number" id="direct-mail5" name="direct-mail5" />
              <p>Optimized suggestion:</p>
              <button>1234</button>
            </div>
            <div className="input-card">
              <label for="direct-mail6">Direct Mail</label>
              <input type="number" id="direct-mail6" name="direct-mail6" />
              <p>Optimized suggestion:</p>
              <button>1234</button>
            </div>
          </div>
          <details className="prediction-and-optimization-details">
            <summary>
              <p className="timer">5:00</p>
              <p className="timer-description">until next update</p>
              <p className="more-info-summary">More Info</p>
            </summary>
            <p className="prediction-and-optimization-info">
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
          <div className="prediction-buttons">
            <button>Run Optimization</button>
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
