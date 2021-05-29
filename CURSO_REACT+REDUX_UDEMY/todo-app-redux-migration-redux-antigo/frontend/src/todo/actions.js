import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export function Add(description) {
  return (dispatch) => {
    axios.post(URL, { description }).then((resp) => dispatch(refresh()));
  };
}

export const formChanger = (e) => {
  return {
    type: "INPUT_CHANGER",
    payLoad: e.target.value,
  };
};

export const refresh = (desc = "") => {
  const search = desc ? `&description__regex=/${desc}/` : "";
  return (dispatch) => {
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) =>
        dispatch({ type: "REFRESH", payLoad: resp.data, desc: desc })
      );
  };
};

export const actionMarkAsDone = (key, desc) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${key._id}`, { ...key, done: true })
      .then((resp) => dispatch(refresh(desc)));
  };
};

export const actionMarkAsPending = (key, desc) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${key._id}`, { ...key, done: false })
      .then((resp) => dispatch(refresh(desc)));
  };
};

export const actionRemove = (key) => {
  return (dispatch) => {
    axios.delete(`${URL}/${key._id}`).then((resp) => dispatch(refresh()));
  };
};

export const actionClean = () => {
  return (dispatch) => {
    dispatch([{ type: "CLEAN" }, refresh()]); // 2 acoes enviadas(dispatch) entre [], precisa do middleware redux-multi
  };
};
