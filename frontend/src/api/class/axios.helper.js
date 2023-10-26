import { axios } from "../user.api";

export class ApiHandler {
  get({ url }) {
    return axios.get(url);
  }

  create({ url, data }) {
    return axios.post(url, data);
  }

  update({ url, data }) {
    return axios.patch(url, data);
  }

  delete({ url }) {
    return axios.delete(url);
  }
}
