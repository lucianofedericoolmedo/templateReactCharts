import React from "react";
import { Bar, PolarArea } from "react-chartjs-2";
import { lightbulb } from "../../icons/icons";
import "./WantToKnowMore.scss";

export const WantToKnowMore = (props) => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(0, 0, 0, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const polarChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(0, 0, 0, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    aspectRatio: 1,
    indexAxis: "y",
    responsive: "true",
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Azeret Mono",
          },
        },
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
        font: {
          family: "Azeret Mono",
        },
      },
    },
  };

  const polarAreaOptions = {
    responsive: "true",
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Azeret Mono",
          },
        },
      },
      title: {
        display: true,
        text: "Chart.js Polar Area Chart",
        font: {
          family: "Azeret Mono",
        },
      },
    },
  };
  return (
    <div className="want-to-know-more">
      <div className="want-to-know-more-text">
        <img className="lightbulb-icon" src={lightbulb} />
        <h2>Want to know more?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc mi,
          interdum elementum velit a, rutrum suscipit magna. Duis ultrices
          sapien ac viverra auctor. Cras pellentesque consequat aliquet. Ut
          justo nulla, imperdiet sed ultricies ut, sollicitudin sed risus. Ut
          euismod lacinia semper. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Proin consectetur
          justo quis ornare maximus. Sed quis maximus purus. Mauris consectetur,
          ligula ac venenatis pharetra, dui neque rhoncus tortor, ut aliquam
          tellus leo sit amet nibh.
        </p>
      </div>
      <div className="square-cards">
        <div className="square-card">
          <p className="square-card-title">Organics Leads Value</p>
          <p className="square-card-value">12345678</p>
        </div>
        <div className="square-card">
          <p className="square-card-title">Organics Leads Value</p>
          <p className="square-card-value">12345678</p>
        </div>
        <div className="square-card">
          <p className="square-card-title">Organics Leads Value</p>
          <p className="square-card-value">12345678</p>
        </div>
        <div className="square-card">
          <p className="square-card-title">Organics Leads Value</p>
          <p className="square-card-value">12345678</p>
        </div>
        <div className="square-card">
          <p className="square-card-title">Organics Leads Value</p>
          <p className="square-card-value">12345678</p>
        </div>
        <div className="square-card">
          <p className="square-card-title">Organics Leads Value</p>
          <p className="square-card-value">12345678</p>
        </div>
        <div className="square-card">
          <p className="square-card-title">Hey!</p>
          <p className="square-card-value">12345678</p>
        </div>
      </div>
      <div className="graphs">
        <div className="graph-container">
          <Bar data={data} options={options} />
        </div>
        <div className="graph-container">
          <PolarArea data={polarChartData} options={polarAreaOptions} />
        </div>
      </div>
    </div>
  );
};
