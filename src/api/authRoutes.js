import { apiFetchPublicPost } from "./methods";

const authRoutes = {
  login: async (email, password) => {
    const response = await apiFetchPublicPost("/auth/login", {
      email,
      password,
    });

    return response;
  },

  register: async (name, email, password) => {
    const response = await apiFetchPublicPost("/auth/register", {
      name,
      email,
      password,
    });

    return response;
  },
};

export { authRoutes };
