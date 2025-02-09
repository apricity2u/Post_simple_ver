import api from "./axios";

const postApi = {
  getPosts: async () => {
    const response = await api.get("/posts");
    return response;
  },
};

export default postApi;
