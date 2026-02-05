const API_URL = "http://localhost:3000/api/consumibles";

export const getConsumibles = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};
