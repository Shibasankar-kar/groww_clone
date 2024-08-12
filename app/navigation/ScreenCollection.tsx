import EmailScreen from '../screens/auth/EmailScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';

export const AuthStack = [
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'EmailScreen',
    component: EmailScreen,
  },
];
export const DashboardStack = [{name: 'HomeScreen', component: HomeScreen}];

export const mergedStack = [...AuthStack, ...DashboardStack];
