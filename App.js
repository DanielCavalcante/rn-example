import React from 'react' 
import { Router, Scene, Stack } from 'react-native-router-flux'
import Login from './src/screens/Login'
import Home from './src/screens/Home'

export default () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene key='login' initial={true} component={Login} />
        <Scene key='home' component={Home} />
      </Stack>
    </Router>
  )
}
