import api from "./axios";

const ENDPOINT = '/posts';
const postApi = {
  getPosts: async () => {
    const response = await api.get(ENDPOINT);
    return response;
  },

  createPost: async (formData) => {
    const response = await api.post(ENDPOINT, formData);
    return response;
  },
};

export default postApi;
