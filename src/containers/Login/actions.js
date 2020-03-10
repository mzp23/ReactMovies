import {USER_LOG_OUT, USER_LOGIN, USER_REGISTER} from "./types";

export const userLogin = (payload) => ({
   type: USER_LOGIN,
   payload
});

export const userRegister = (payload) => ({
   type: USER_REGISTER,
   payload
});

export const handleUserLogOut = () => ({
   type: USER_LOG_OUT
});


export const fetchLogin = (login, password) => async (dispatch, _, api) => {
   try {
      const { data: users } = await api("users");
      const [user] = users.filter(elem => elem.name === login);
      if(!user) {
         return alert('This user does\'t exist');
      }
      const isCorrectPassword = user.password === password;
      if(!isCorrectPassword) {
         return alert('Wrong password');
      }
      dispatch(userLogin(user));
   } catch (error) {
      console.log(error);
   }
};

export const fetchRegister = (login, password) => async (dispatch, _, api) => {
   try {
      await api("users", 'post', {name: login, password});
      dispatch(userRegister({login, password}));
      dispatch(userLogin({login, password}))
   } catch (error) {
      console.log(error);
   }
};