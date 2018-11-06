import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    ImageBackground
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {Actions, ActionConst} from  'react-native-router-flux'

import assets from '../../themes/assets'
import styles from './styles'


class RegisterScreen extends React.Component {

    state = {

    }

    render() {
        return(
            <ImageBackground style={styles.container} source={assets['background']}>
                <View style={styles.subView}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                        placeholder='Name'
                        placeholderTextColor='black'
                        />
                    <TextInput
                        style={styles.input}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder='Email'
                        placeholderTextColor='black'
                        autoCapitalize = 'none'
                        />
                    <TextInput
                        style={styles.input}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        placeholder='Username'
                        placeholderTextColor='black'
                        />
                    <TextInput
                        style={styles.input}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry
                        />
                    <TextInput
                        style={styles.input}
                        onChangeText={(password1) => this.setState({password1})}
                        value={this.state.password1}
                        placeholder='Retype Password'
                        placeholderTextColor='black'
                        secureTextEntry
                        />
                    <TouchableOpacity 
                        onPress={()=>{
                            alert('Submit Pressed')
                        }}
                        style={styles.button}
                        >
                        {this.state.loading?<ActivityIndicator color="white"/>:<Text style={styles.text}>Submit</Text>}
                    </TouchableOpacity>
                    <KeyboardSpacer/>
                </View>
            </ImageBackground>
        )
    }
}

export default RegisterScreen