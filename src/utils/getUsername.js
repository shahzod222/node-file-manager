export const getUserName = () => {
  const userName = process.argv.slice(2).join("").split("=");

  if (userName[0].includes("username")) {
    return userName[1];
  } else {
    return "Guest";
  }
};
