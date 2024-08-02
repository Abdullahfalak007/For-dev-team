import api from "./ApiBaseUrl.js";
import axios from "axios";

// const navigate = useNavigate()
// You can use the 'api' instance to make API requests

// ENDPOINTS constants
// const testing = import.meta.env.VITE_TESTING;
// console.log(testing);

const charts = import.meta.env.VITE_CHARTS;
console.log(charts);

const clients = import.meta.env.VITE_CLIENTS;
console.log(clients);

const virtualAssistants = import.meta.env.VITE_VIRTUAL_ASSISTANTS;
console.log(virtualAssistants);

const chatHistory = import.meta.env.VITE_CHAT_HISTORY;
console.log(chatHistory);

const knowledgebase = import.meta.env.VITE_KNOWLEDGEBASE;
console.log(knowledgebase);

export const userAPI = {
  //   auth: (data) => {
  //     return api.post(testing, data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   },
  charts: () => {
    return api.get(charts);
  },
  chatHistory: () => api.get(chatHistory),
  addChatHistory: (data) => api.post(chatHistory, data),
  updateChatHistory: (id, data) => api.put(`${chatHistory}/${id}`, data),
  updateSelectedText: (id, selectedText) =>
    api.patch(`${chatHistory}/${id}`, { selectedText }),
  knowledgebase: () => {
    return api.get(knowledgebase);
  },
  clients: () => api.get(clients),
  addClient: (data) => api.post(clients, data),
  updateClient: (id, data) => api.put(`${clients}/${id}`, data),
  deleteClient: (id) => api.delete(`${clients}/${id}`),
  virtualAssistants: () => api.get(virtualAssistants),
  addVirtualAssistant: (data) => api.post(virtualAssistants, data),
  updateVirtualAssistant: (id, data) =>
    api.put(`${virtualAssistants}/${id}`, data),
  deleteVirtualAssistant: (id) => api.delete(`${virtualAssistants}/${id}`),
};
