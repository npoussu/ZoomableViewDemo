import {StyleSheet} from 'react-native';

/**
 * Common styling file for various view components in the project.
 */
export default StyleSheet.create({
  viewPager: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'monospace',
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
