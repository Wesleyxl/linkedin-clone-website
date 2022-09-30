const validateToken = async (json) => {
  if (json.error === "Token is Invalid" || json.error === "Token is Expired") {
    window.location.href = "/logout";
  }
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export { validateToken, logout };
