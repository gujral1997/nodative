
import React from 'react'
import {
    RegisterScreen
} from './screens'
import { Router, Scene, Stack } from "react-native-router-flux"

class Routes extends React.Component {

    render = () =>
        <Router>
            <Stack key="root" hideNavBar>
              <Scene key="register" component={RegisterScreen} initial/>
            </Stack>
        </Router>
  }

export default Routes