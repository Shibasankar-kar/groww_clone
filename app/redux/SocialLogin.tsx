import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signinwithgoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();
    console.log('idToken: ', idToken);
  } catch (error) {
    console.log('error: ', error);
  }
};
