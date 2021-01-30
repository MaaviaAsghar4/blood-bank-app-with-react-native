import auth from '@react-native-firebase/auth';
export const signInAuth = async (email, password) => {
  return (dispatch) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        dispatch({type: 'SignIn', payload: result.user});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const signUpAuth = async (email, password) => {
  return (dispatch) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        dispatch({type: 'SignIn', payload: result.user});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const logout = async () => {
  return (dispatch) => {
    auth()
      .signOut()
      .then(function () {
        dispatch({type: 'Logout'});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
