import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/auth/searchScreen';
import LoginScreen from '../screens/auth/login';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='12' component={HomeScreen} />
            <Tab.Screen name='3444' component={LoginScreen} />
        </Tab.Navigator>

    )
}

export default Tabs;