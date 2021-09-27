import actions from "./actions";

export default function tasks(state = [], action) {
  const handler = actions[action.type];
  return handler ? handler(state, action) : state;
}
