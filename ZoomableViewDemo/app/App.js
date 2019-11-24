import {View, Text} from 'react-native';
import React from 'react';
import ZoomableViewPagerComponent from './ZoomableViewPagerComponent';
import StyleSheet from './Styles';

/**
 * Parses currently selected page index and returns corresponding page title
 * @param pageIndex Page index
 * @returns {string} Page title that corresponds to a page index
 */
function getPageTitle(pageIndex) {
  if (pageIndex === '0') {
    return 'Page 1: Zoomable image';
  } else if (pageIndex === '1') {
    return 'Page 2: Zoomable wall of text';
  }
}

/**
 * Main screen of the application
 * Holds a toolbar element and a ViewPager containing various zoomable view elements.
 */
export default class ZoomablePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: '',
    };
  }

  /**
   * Set page title when page is changed on ViewPager
   * @param newPageIndex Index for the changed page
   */
  onChangePage = newPageIndex => {
    this.setState({
      pageTitle: getPageTitle(newPageIndex),
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={StyleSheet.text}>{this.state.pageTitle}</Text>
        <ZoomableViewPagerComponent setTitle={this.onChangePage.bind(this)} />
      </View>
    );
  }
}
