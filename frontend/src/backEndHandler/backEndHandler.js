import { ApiHandler } from "../api/class/axios.helper";
const api = new ApiHandler();

export const getUsers = ({ url }) => {
  return api.get({ url });
};

export const createUsers = ({ data }) => {
  return api.create({ data });
};

export const deleteUsers = ({ url }) => {
  return api.delete({ url });
};

export const updateUsers = ({ url, data }) => {
  return api.update({ url, data });
};
