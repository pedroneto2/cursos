import axios from "axios";

const URL = "http://localhost:3003/api/todos";

/*os dispatch daqui sao do thunk, servem para resolver a promise e 
enviar para o useDispatch no componente que enttao fara o dispatch
verdadeiro para o reducer*/

export function actionAdd(description) {
  return (dispatch) => {
    return axios
      .post(URL, { description })
      .then((resp) => dispatch(actionRefresh()));
  };
}

export const actionChanger = (e) => {
  return {
    type: "INPUT_CHANGER",
    payLoad: e.target.value,
  };
};

export const actionRefresh = (desc = "") => {
  const search = desc ? `&description__regex=/${desc}/` : "";
  const request = axios.get(`${URL}?sort=-createdAt${search}`);
  return (dispatch) => {
    return request.then((resp) =>
      dispatch({ type: "REFRESH", payLoad: resp.data, desc: desc })
    );
  };
};

export const actionMarkAsDone = (key, desc) => {
  return (dispatch) => {
    return axios
      .put(`${URL}/${key._id}`, { ...key, done: true })
      .then((resp) => dispatch(actionRefresh(desc)));
  };
};

export const actionMarkAsPending = (key, desc) => {
  return (dispatch) => {
    return axios
      .put(`${URL}/${key._id}`, { ...key, done: false })
      .then((resp) => dispatch(actionRefresh(desc)));
  };
};

export const actionRemove = (key) => {
  return (dispatch) => {
    return axios
      .delete(`${URL}/${key._id}`)
      .then((resp) => dispatch(actionRefresh()));
  };
};

export const actionClean = () => {
  return (dispatch) => {
    return dispatch([{ type: "CLEAN" }, actionRefresh()]); // 2 acoes enviadas(dispatch) entre [], precisa do middleware redux-multi
  };
};
