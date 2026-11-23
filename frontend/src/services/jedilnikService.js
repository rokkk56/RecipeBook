import api from "./api";

// od = ponedeljek tedna v obliki "2026-11-16"
const pridobiTeden = (od) => {
    return api.get("/jedilnik", { params: { od } });
};

// vnos = { datum: "2026-11-18", obrok: "KOSILO", receptId: 3 }
const shraniObrok = (vnos) => {
    return api.post("/jedilnik", vnos);
};

const jedilnikService = {
    pridobiTeden,
    shraniObrok,
};

export default jedilnikService;