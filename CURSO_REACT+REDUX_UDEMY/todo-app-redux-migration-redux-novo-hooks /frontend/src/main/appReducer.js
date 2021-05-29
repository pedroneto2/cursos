const INITIAL_STATE = { description: "", list: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_CHANGER":
      return { ...state, description: action.payLoad };
      break;
    case "REFRESH":
      return { description: action.desc, list: action.payLoad };
      break;
    case "CLEAN":
      return { ...state, description: "" };
    default:
      return state;
      break;
  }
};
