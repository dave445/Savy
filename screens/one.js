import React from "react";

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigation} from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import {Feather} from '@expo/vector-icons';

import { ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignOutScreen } from "./index1";

const DrawerNavigation = createDrawerNavigation({
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    ReportScreen,
    StatisticScreen,
    SignOutScreen
});

export default createAppContainer(DrawerNavigation);