import { apiFetchPost, apiFetchGet } from "./methods";

const feedRoutes = {
  createFeed: async (text, image = "") => {
    const response = apiFetchPost("/feeds", { text, image });

    return response;
  },

  getAll: async () => {
    const response = await apiFetchGet("/feeds");

    return response;
  },
};

export { feedRoutes };
