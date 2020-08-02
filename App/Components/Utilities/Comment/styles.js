import { StyleSheet } from 'react-native';
import { wp, hp } from 'App/Services/Responsive';
import { Colors, Fonts, fontFamily } from 'App/Theme/index';
import { hasNotch } from 'App/Services/Device';

export const styles = StyleSheet.create({
	superCommentContainer:{
		flexDirection:"row",
		paddingHorizontal:wp(5),
		paddingVertical:hp(1),
		backgroundColor:Colors.pink,
		borderBottomWidth:1,
		borderBottomColor:Colors.gray20
	},
	headerComment:{
		flexDirection:"row",
	},
	commentTitle:{
		...Fonts.medium,
		color:Colors.red10,
		fontWeight:"bold",
		marginLeft:wp(2)
  },
  commentTitleBlack:{
		...Fonts.medium,
		color:Colors.black,
		marginLeft:wp(2)
	},
	commentTime:{
		...Fonts.medium,
		color:Colors.red10,
		marginLeft:wp(2)
  },
  commentTimeBlack:{
		...Fonts.medium,
		color:Colors.gray70,
		marginLeft:wp(2)
	},
	commentText:{
		marginLeft:wp(2),
		width:wp(78),
		...Fonts.medium,
		color:Colors.white
  },
  commentTextBlack:{
		marginLeft:wp(2),
		width:wp(78),
		...Fonts.medium,
		color:Colors.purple90
	}
});
