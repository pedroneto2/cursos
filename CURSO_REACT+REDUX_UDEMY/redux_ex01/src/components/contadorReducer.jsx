const INITIAL_STATE = { valor: 0, inputValue: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CLICK_BUTTON":
      return { ...state, valor: (state.valor += +state.inputValue) }; //ao inves de fazer Number(state.inputValue) basta colocar um '+' na frente de state.inputValue que ele contara como Numero
      break;
    case "CHANGE_INPUT":
      return { ...state, inputValue: action.payLoad };
      break;
    default:
      return state;
      break;
  }
}
