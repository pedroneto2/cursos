export function changeContadorInput(e) {
  return {
    type: "CHANGE_INPUT",
    payLoad: e.target.value,
  };
}
