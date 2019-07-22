import { createStackNavigator } from 'react-navigation';

import Login from '../containers/Login';
import Signup from '../containers/Signup';
import ChooseRole from '../containers/ChooseRole';
import ForgotPassword from '../containers/ForgotPassword';
import OfficerSignUp from '../containers/OfficerSignUp';
import OfficerInfo from '../containers/OfficerInfo';
import CitizenSignUp from '../containers/CitizenSignUp';
import CitizenInfo from '../containers/CitizenInfo';


const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  ChooseRole: {
    screen: ChooseRole,
    navigationOptions: {
      header: null,
    },
  },
  OfficerSignUp: {
    screen: OfficerSignUp,
    navigationOptions: {
      header: null,
    },
  },
  OfficerInfo: {
    screen: OfficerInfo,
    navigationOptions: {
      header: null,
    },
  },
  CitizenSignUp: {
    screen: CitizenSignUp,
    navigationOptions: {
      header: null,
    },
  },
  CitizenInfo: {
    screen: CitizenInfo,
    navigationOptions: {
      header: null,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      header: null,
    },
  },
});

export default AuthNavigator;
