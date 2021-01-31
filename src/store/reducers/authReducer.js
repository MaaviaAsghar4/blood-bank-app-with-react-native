const userInfo = {
  user: [],
};

export default (state = userInfo, action) => {
  switch (action.type) {
    case 'SignIn':
      const {user} = state;
      user.push(action.payload);
      const newState = {user};
      return newState;
    case 'Logout':
      return {user: {}};
    default:
      return state;
  }
};
