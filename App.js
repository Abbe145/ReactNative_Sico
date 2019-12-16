import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Contact from './src/Components/Contact';
import AboutUs from './src/Components/AboutUs';
import HomeScreen from './src/HomeScreen';

const navigator = createStackNavigator(
  {

    Home:{
      screen: HomeScreen,
      navigationOptions:{
        header: null


      }
    },
    Kontakt:Contact,
    About:AboutUs





  },
  {
    initialRouteParams: 'Home',
    defaultNavigationOptions: {
      
    }
   
  }
);

export default createAppContainer(navigator);
