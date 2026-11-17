import api from "./api";

const pridobiVseRecepte = () => {
  return api.get("/recepti");
};

const pridobiRecept = (id) => {
  return api.get(`/recepti/${id}`);
};

const dodajRecept = (recept) => {
  return api.post("/recepti", recept);
};

const posodobiRecept = (id, recept) => {
  return api.put(`/recepti/${id}`, recept);
};

const izbrisiRecept = (id) => {
  return api.delete(`/recepti/${id}`);
};

const vseckajRecept = (id) => {
  return api.post(`/recepti/${id}/like`);
};

const odstraniVsecek = (id) => {
  return api.post(`/recepti/${id}/unlike`);
};

const receptService = {
  pridobiVseRecepte,
  pridobiRecept,
  dodajRecept,
  posodobiRecept,
  izbrisiRecept,
  vseckajRecept,
  odstraniVsecek,
};

export default receptService;
