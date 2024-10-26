export const fetchData = async (country) => {
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something wrong ");
  }
  const data = await response.json();
  return data;
};
