import { StyleSheet } from 'react-native';
import { wp } from 'App/Services/Responsive';
import { Colors } from 'App/Theme/index';

export const styles = StyleSheet.create({
	nextButton: {
    backgroundColor: Colors.red,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  nextIcon:{
    color: Colors.white
  }
});
