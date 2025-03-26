export const isAuthenticated = () => {
  const userInfo = localStorage.getItem("user_info");
  if (!userInfo) return false;

  try {
    const { token, expiresAt } = JSON.parse(userInfo);
    if (!token || !expiresAt) return false;

    // Check if token is expired
    return new Date().getTime() < expiresAt;
  } catch (error) {
    return false;
  }
};
