// In another file, e.g., userAPI.js or userAPI.ts

import api from "./ApiBaseUrl.js";
import axios from "axios";

// const navigate = useNavigate()
// You can use the 'api' instance to make API requests

// ENDPOINTS constants
// const testing = import.meta.env.VITE_TESTING;
// console.log(testing);

const totalBotsChart = import.meta.env.VITE_TOTAL_BOTS_CHART;
console.log(totalBotsChart);

const totalClientsChart = import.meta.env.VITE_TOTAL_CLIENTS_CHART;
console.log(totalClientsChart);

const totalCallsChart = import.meta.env.VITE_TOTAL_CALLS_CHART;
console.log(totalCallsChart);

export const userAPI = {
  //   auth: (data) => {
  //     return api.post(testing, data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   },
  totalBotsChart: () => {
    return api.get(totalBotsChart);
  },
  totalClientsChart: () => {
    return api.get(totalClientsChart);
  },
  totalCallsChart: () => {
    return api.get(totalCallsChart);
  },
};
