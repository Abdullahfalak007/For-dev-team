import { combineReducers } from "@reduxjs/toolkit";

import { getAuthSlice } from "./slices/AuthSlice";
import { getChartsSlice } from "./slices/chartsSlice";
import { getClientsSlice } from "./slices/clientsSlice";
import { getVirtualAssistantsSlice } from "./slices/virtualAssistantsSlice";
import { getChatHistorySlice } from "./slices/chatHistorySlice";
import { getKnowledgebaseSlice } from "./slices/knowledgebaseSlice";

const rootReducer = combineReducers({
  auth: getAuthSlice.reducer,
  charts: getChartsSlice.reducer,
  clients: getClientsSlice.reducer,
  virtualAssistants: getVirtualAssistantsSlice.reducer,
  chatHistory: getChatHistorySlice.reducer,
  knowledgebase: getKnowledgebaseSlice.reducer,
});

export default rootReducer;
