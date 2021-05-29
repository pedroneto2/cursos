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
    case "a":
      console.log("cur preto");
      return state;
    default:
      return state;
      break;
  }
};
