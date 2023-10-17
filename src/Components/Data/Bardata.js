import React from "react";
import { Data } from "../Data";
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
Chart.register(LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "EarningsView",
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: "2023 Earnings",
      data: [
        10000, 15000, 20000, 25000, 35000, 42000, 48000, 53000, 57000, 62000,
        68000, 76000,
      ],

      backgroundColor: "BLUE",
    },
  ],
};
