const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type === 'LOGIN') {
    return { login: true }
  } else {
    return state;
  }

  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

//store.dispatch(loginAction()); a test upon dispatching which set the login property to true, the 3rd test is tricky.
