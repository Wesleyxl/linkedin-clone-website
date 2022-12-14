import { apiFetchGet, apiFetchPost } from "./methods";

const commentRoutes = {
  create: async (publication_id, text) => {
    const response = await apiFetchPost("/comments", { publication_id, text });

    return response;
  },

  showAll: async (publication_id) => {
    const response = await apiFetchGet(`/comments/${publication_id}`);

    return response;
  },
};

export { commentRoutes };
