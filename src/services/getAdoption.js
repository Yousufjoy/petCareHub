export const getAllAdoptions = async () => {
  return await fetch("http://localhost:3000/adoption/api/get-all-adoption");
};

export const getAdoptionDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/adoption/api/${id}`);
  const pet = await res.json();
  return pet;
};

export const getSearchedPet = async (searchedTerm) => {
  const res = await fetch(
    `http://localhost:3000/adoption/api/get-all-adoption?q=${searchedTerm}`
  );
  const searchedPet = await res.json();
  return searchedPet;
};
