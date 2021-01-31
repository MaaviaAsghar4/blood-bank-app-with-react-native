const asyncInfo = {
  email: {user: null},
};

export default (state = asyncInfo, action) => {
  switch (action.type) {
    case 'asyncStorage':
      const {email} = state;
      email.user = action.payload;
      const newState = {email};
      return newState;
    default:
      return state;
  }
};
