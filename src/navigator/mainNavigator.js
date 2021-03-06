import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings50482Navigator from '../features/Settings50482/navigator';
import UserProfile50475Navigator from '../features/UserProfile50475/navigator';
import Settings50474Navigator from '../features/Settings50474/navigator';
import Settings50472Navigator from '../features/Settings50472/navigator';
import SignIn250470Navigator from '../features/SignIn250470/navigator';
import BlankScreen49469Navigator from '../features/BlankScreen49469/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings50482: { screen: Settings50482Navigator },
UserProfile50475: { screen: UserProfile50475Navigator },
Settings50474: { screen: Settings50474Navigator },
Settings50472: { screen: Settings50472Navigator },
SignIn250470: { screen: SignIn250470Navigator },
BlankScreen49469: { screen: BlankScreen49469Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
