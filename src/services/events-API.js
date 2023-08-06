import axios from "axios";

axios.defaults.baseURL =
  "https://64cf50ffffcda80aff51bd7b.mockapi.io/event-planner/api";

export const fetchAllEventsAPI = async () => {
  const { data } = await axios.get("/events");
  return data;
};

export const fetchEventtAPI = async (id) => {
  const { data } = await axios.get(`/events/${id}`);
  return data;
};

export const addEventAPI = async (body) => {
  const { data } = await axios.post("/events", body);
  return data;
};

export const removeEventAPI = async (id) => {
  const { data } = await axios.delete(`/events/${id}`);
  return data;
};

export const updateEventAPI = async (id, body) => {
  const { data } = await axios.put(`/events/${id}`, body);
  return data;
};
