export function formChanger(e) {
  return {
    type: "INPUT_CHANGER",
    payLoad: e.target.value,
  };
}
