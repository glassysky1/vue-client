import { ADD_TO_CAR } from "./mutations-type";

export default {
  addtToCar({ commit }, goodsInfo) {
    commit(ADD_TO_CAR, { goodsInfo })
  }
}