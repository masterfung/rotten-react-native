/**
 * A Very Rotten Tomatoe Test Trial

 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var MOCKED_MOVIES_DATA = [
  {title: "How to Train Your Dragon", year: "2014", posters:
    {thumbnail: "http://vignette4.wikia.nocookie.net/voiceacting/images/a/af/How_to_Train_Your_Dragon_DVD_Cover.jpg/revision/latest?cb=20130512185903"}}
];

var RottenTomatoes = React.createClass({
  render: function() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style = {styles.thumbnail}
          />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  rightContianer: {
    flex:1,
  },
  thumbnail: {
    width: 90,
    height: 121,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('RottenTomatoes', () => RottenTomatoes);
