import React from "react";
import { View, Text } from 'react-native';
import { Component } from "react/cjs/react.production.min";

class TextBox extends Component {
    render() {
        return (
            <View>
                <View style={styles.box3}>
                    <Text style={styles.text}>Text test</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      textAlign: "center",
      color: 'white',
      fontSize: 20,
      fontWeight: "bold"
    },
    box3: {
      padding: 15,
      borderWidth: 2,
      borderColor: 'white',
    },
});

export default textBox;