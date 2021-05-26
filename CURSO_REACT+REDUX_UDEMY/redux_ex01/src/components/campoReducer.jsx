const INITIAL_STATE = { resultado: "opa2" };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "VALUE_CHANGED":
      return { resultado: action.payLoad };
    default:
      return state;
  }
}
