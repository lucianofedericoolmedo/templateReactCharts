import React from "react";
import { WantToKnowMore } from "./WantToKnowMore";
import "./OptimizationAndPrediction.scss";

export const OptimizationAndPrediction = (props) => {
  return (
    <div className="channel-spend-optimization-and-prediction-page">
      <div className="optimization-and-prediction">
        <div className="optimization-and-prediction-header">
          LOGO AND DATEPICKER GO HERE
        </div>
        <div className="budget-input">
          <label for="budget">Budget:</label>
          <input type="number" id="budget" name="budget" />
        </div>
        <div className="channelmix-lead-pred">
          <h2>ChannelMix Lead Pred</h2>
          <div className="input-card-list">
            <div className="input-card">Hello!</div>
            <div className="input-card">Hello!</div>
            <div className="input-card">Hello!</div>
            <div className="input-card">Hello!</div>
            <div className="input-card">Hello!</div>
            <div className="input-card">Hello!</div>
          </div>
        </div>
      </div>
      <WantToKnowMore />
    </div>
  );
};
