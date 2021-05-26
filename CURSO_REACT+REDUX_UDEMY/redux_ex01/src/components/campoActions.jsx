export function changeValue(e) {
  return {
    type: "VALUE_CHANGED", //type precisa se chamar type
    payLoad: e.target.value, //payLoad pode ser chamado de qualquer coisa, como vemos, eh um dado que vem junto ca acao
  };
}
