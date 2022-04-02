import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard';
import Trips from '../screens/Trips';
import TabBarItem from "../components/tabBarItem/TabBarItem";
import Transactions from "../screens/Transactions";
import TaxVault from "../screens/TaxVault";
import { View } from 'react-native'
import { Colors } from "../constants/Colors";
import { Dimensions } from "react-native";
import FreeDriving from "../screens/FreeDriving";
import Drawer from "../components/drawer/Drawer";
import Settings from "../screens/Settings";
import PickLocation from "../screens/PickLocation";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import { FontAwesome } from '@expo/vector-icons';

const TabStackNavigator = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <TabStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: Colors.softGray,
                    height: Dimensions.get("window").height / 10,
                }
            }}
            initialRouteName="Dashboard"
        >
            <TabStackNavigator.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarItem
                                icon={<Ionicons name="home-outline" size={20} color={focused ? Colors.primary : '#0000008a'} />}
                                text="Home"
                                textColor={focused ? Colors.primary : '#0000008a'}
                            />
                        )
                    }
                }}
            />
            <TabStackNavigator.Screen
                name="Trips"
                component={Trips}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarItem
                                icon={<MaterialCommunityIcons name="car-convertible" size={20} color={focused ? Colors.primary : '#0000008a'} />}
                                text="Trips"
                                textColor={focused ? Colors.primary : '#0000008a'}
                            />
                        )
                    },
                }}
            />
            <TabStackNavigator.Screen
                name="PickLocation"
                component={PickLocation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ backgroundColor: Colors.primary, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Entypo name="plus" size={40} color="white" />
                            </View>
                        )
                    },
                    // tabBarStyle: { display: 'none' }
                }}
            />
            <TabStackNavigator.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarItem
                                icon={<MaterialCommunityIcons name="cash-usd-outline" size={20} color={focused ? Colors.primary : '#0000008a'} />}
                                text="Transactions"
                                textColor={focused ? Colors.primary : '#0000008a'}
                            />
                        )
                    }
                }}
            />
            <TabStackNavigator.Screen
                name="TaxVault"
                component={TaxVault}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarItem
                                icon={<Ionicons name="shield-checkmark-outline" size={20} color={focused ? Colors.primary : '#0000008a'} />}
                                text="TaxVault"
                                textColor={focused ? Colors.primary : '#0000008a'}
                            />
                        )
                    }
                }}
            />
        </TabStackNavigator.Navigator>
    )
}

const DrawerStackNavigator = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <DrawerStackNavigator.Navigator
            drawerContent={(props) => <Drawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: Colors.primary,
                drawerInActiveTintColor: Colors.primary,
                drawerActiveTintColor: 'white',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'open-sans-bold',
                    fontSize: 15,
                },
            }}
        >
            <DrawerStackNavigator.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    drawerIcon: ({ color }) => {
                        return (
                            <Ionicons name="home-outline" size={20} color={color} />
                        )
                    }
                }}
            />
            <DrawerStackNavigator.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color }) => {
                        return (
                            <FontAwesome name="user-circle-o" size={20} color={color} />
                        )
                    }
                }}
            />
            <DrawerStackNavigator.Screen
                name="FreeDriving"
                component={FreeDriving}
                options={{
                    drawerIcon: ({ color }) => {
                        return (
                            <MaterialCommunityIcons name="steering" size={24} color={color} />
                        )
                    }
                }}
            />
            <DrawerStackNavigator.Screen
                name="Settings"
                component={Settings}
                options={{
                    drawerIcon: ({ color }) => {
                        return (
                            <Feather name="settings" size={24} color={color} />
                        )
                    }
                }}
            />
        </DrawerStackNavigator.Navigator>
    )
}

export default DrawerNavigator

// const StackNavigator = createStackNavigator()

// const Navigator = () => {
//     return (
//         <StackNavigator.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <StackNavigator.Screen name="Login" component={Login} />
//             <StackNavigator.Screen name="TabNavigator" component={TabNavigator} />
//             <StackNavigator.Screen name="DrawerNavigator" component={DrawerNavigator} />
//         </StackNavigator.Navigator>
//     )
// }

// export default Navigator


