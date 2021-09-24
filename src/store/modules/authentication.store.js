//  import libraries //

// import application utilities //
import router from '../../router';

// initial state object //
const initialState = () => ({
  authenticationMethod: null,
  user: null
});

// state //
const state = initialState();

// getters
const getters = {
  getAuthenticationMethod: state => state.authenticationMethod,
  getUser(state) {
    return state.user;
  },
}

// actions
const actions = {
  // login function for google authentication //
  googleLogIn: ({ commit }) => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    
    // define scope of authentication - if additional google services are added, scopes will need updated //
    googleAuthProvider.addScope('');
    googleAuthProvider.setCustomParameters({ access_type: "offline" });
    
    // trigger the authentication popup window //
    return firebase.auth().signInWithPopup(googleAuthProvider)
    .then(async (result) => {
      console.log(result);
      const user = result.user;
      const uid = result.user.uid;
      const credential = result.credential;

      // create user object to hold all of the data coming from google authentication //
      const userDetails = {
        uid: result.user.uid,
        firstName: result.additionalUserInfo.profile.given_name,
        lastName: result.additionalUserInfo.profile.family_name,
        displayName: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
        avatar: result.user.photoURL,
        hiddenMeetings: [],
        preferences: [],
        integrations: {
          google: {
            googleAccessToken: credential.accessToken,
            googleIdToken: credential.idToken,
            googleId: result.additionalUserInfo.profile.id
          }
        },
      };

      // log authentication method as google //
      commit('storeUserAuthenticationMethod', 'Google');

      // return user //
      return userDetails;
    })
    .then(user => {
      commit('storeUser', user);
      return user;
    })
    .catch((error) => {
      console.log(error);
    })
    .then((user) => {
      router.push("/");
      return user;
    });
  },
  logout: async ({ commit }) => {
    await firebase.auth().signOut().then(() => {
      console.log('Logout Successfull');
    })
    .then(() => {
      commit('application/applicationLogout', null, { root: true });
      commit('projects/projectsLogout', null, { root: true });
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

// mutations
const mutations = { 
  // store user object in storage //
  storeUser: (state, user) => {
    state.user = user
  },
  // record user's authentication method on login //
  storeUserAuthenticationMethod: (state, method) => {
    state.authenticationMethod = method
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}