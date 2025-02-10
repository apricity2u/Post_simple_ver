import api from "./axios";

const ENDPOINT = "/posts";
const postApi = {
  getPosts: async () => {
    const response = await api.get(ENDPOINT);
    return response;
  },

  createPost: async (formData) => {
    const response = await api.post(ENDPOINT, formData);
    return response;
  },

  getPostById: async (postId) => {
    // const response = await api.get(`${ENDPOINT}/${postId}`);
    // 실습용 url로 restful하지 않음
    const response = await api.get(`${ENDPOINT}/${postId}/detail`);
    return response;
  },
};

export default postApi;
