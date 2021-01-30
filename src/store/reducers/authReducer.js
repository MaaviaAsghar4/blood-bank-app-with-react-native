const user = {
  user: [{}],
};

export default (state = user, action) => {
  switch (action.type) {
    case 'SignIn':
      return {
        user: action.payload,
      };
    case 'Logout':
      return {user: []};
    default:
      return state;
  }
};
