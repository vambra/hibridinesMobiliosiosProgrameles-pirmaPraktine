import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      defaultColor: '#ffffff',
      color1: '#f1f298',
      color2: '#f2e198',
      color3: '#f2cf98',
      color4: '#f2bd98',
      color1set: false,
      color2set: false,
      color3set: false,
      color4set: false,
    }
  }
  changeTextColor = (textNumber, color) => {
    if (textNumber == 1) {
      if (this.state.color1set == false) {
        styles.text1={color: color, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color1set: true})
      } else {
        styles.text1={color: this.state.defaultColor, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color1set: false})
      }
    } else if (textNumber == 2) {
      if (this.state.color2set == false) {
        styles.text2={color: color, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color2set: true})
      } else {
        styles.text2={color: this.state.defaultColor, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color2set: false})
      }
    } else if (textNumber == 3) {
      if (this.state.color3set == false) {
        styles.text3={color: color, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color3set: true})
      } else {
        styles.text3={color: this.state.defaultColor, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color3set: false})
      }
    } else if (textNumber == 4) {
      if (this.state.color4set == false) {
        styles.text4={color: color, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color4set: true})
      } else {
        styles.text4={color: this.state.defaultColor, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}
        this.setState({color4set: false})
      }
    }
  } 
  render () {
    return (
      
      <View style={styles.container}>

        <View style={styles.background1}>
          <View style={styles.box1}>
            <View style={styles.box2} backgroundColor={this.state.color1}>
              <Button title="Button1" onPress={() => this.changeTextColor(1, this.state.color1)}/>
            </View>
          </View>
          <View style={styles.box1}>
            <View style={styles.box2} backgroundColor={this.state.color2}>
              <Button title="Button2" onPress={() => this.changeTextColor(2, this.state.color2)}/>
            </View>
          </View>
          <View style={styles.box1}>
            <View style={styles.box2} backgroundColor={this.state.color3}>
              <Button title="Button3" onPress={() => this.changeTextColor(3, this.state.color3)}/>
            </View>
          </View>
          <View style={styles.box1}>
            <View style={styles.box2} backgroundColor={this.state.color4}>
              <Button title="Button4" onPress={() => this.changeTextColor(4, this.state.color4)}/>
            </View>
          </View>
        </View>
        
        
        <View style={styles.background2}>
          
          <View style={styles.box3}>
              <Text style={styles.text1}>Text1</Text>
          </View>
          <View style={styles.box3}>
              <Text style={styles.text2}>Text2</Text>
          </View>
          <View style={styles.box3}>
              <Text style={styles.text3}>Text3</Text>
          </View>
          <View style={styles.box3}>
              <Text style={styles.text4}>Text4</Text>
          </View>
          
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  background1: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-evenly',
    backgroundColor: "lightblue",
  },
  background2: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-around',
    backgroundColor: "steelblue",
  },
  text1: {
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    fontWeight: "bold"
  },
  text2: {
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    fontWeight: "bold"
  },
  text3: {
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    fontWeight: "bold"
  },
  text4: {
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    fontWeight: "bold"
  },
  box1: {
    width: '50%',
    padding: 15,
  },
  box2: {
    padding: 5,
    backgroundColor: 'white',
  },
  box3: {
    padding: 15,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default App;

//<StatusBar style="auto" />