import ViewPager from '@react-native-community/viewpager';
import {Image, ScrollView, Text, View} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import React from 'react';
import StyleSheet from './Styles';

/**
 * ViewPager View Component with zoomable View elements
 */
export default class ZoomableViewPagerComponent extends React.Component {
  render() {
    return (
      <ViewPager
        style={StyleSheet.viewPager}
        initialPage={0}
        pageMargin={25}
        onPageSelected={event => {
          // Send page index to parent [ZoomablePageComponent]
          this.props.setTitle(event.nativeEvent.position.toString());
        }}>
        <View key="1">
          <ReactNativeZoomableView
            maxZoom={2.5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            movementSensibility={1.5}
            bindToBorders={true}>
            <Image
              style={StyleSheet.image}
              source={require('../resources/theNews.jpg')}
              resizeMode="contain"
            />
          </ReactNativeZoomableView>
        </View>
        <View key="2">
          <ReactNativeZoomableView
            maxZoom={2.5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            movementSensibility={1.5}
            bindToBorders={true}>
            <ScrollView style={StyleSheet.scrollView}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                arcu nibh. In vitae mi venenatis, aliquet risus vitae, interdum
                lectus. Donec non vestibulum lectus. Ut scelerisque ligula nec
                eros vulputate, ac fringilla turpis elementum. Proin augue
                velit, iaculis et euismod sit amet, ultrices eget elit.
                Suspendisse sit amet lectus sagittis ipsum laoreet maximus et at
                tortor. Fusce placerat et justo feugiat ullamcorper. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Aenean sed ex condimentum enim cursus mattis sit
                amet id nulla. Quisque viverra purus sit amet eros ornare
                pharetra id ut nulla. {'\n\n'}
                Phasellus eleifend elementum orci sit amet facilisis. Maecenas
                ac mi vel nisi gravida lobortis a nec neque. Praesent congue
                eget velit in mattis. Proin elit purus, ultricies et dictum ac,
                sodales sit amet sem. Vestibulum efficitur quam est, ac commodo
                arcu pharetra a. Proin tincidunt ligula ipsum, at ultrices dolor
                tincidunt vel. Etiam eleifend felis eget felis pellentesque, at
                semper ante ullamcorper. Sed feugiat arcu nec dignissim
                interdum. In est augue, auctor a placerat consequat, malesuada
                id sapien. Phasellus ultrices semper nisl et mattis. {'\n\n'}
                Vivamus viverra, nisi vel rutrum ornare, purus sem congue odio,
                nec tempor odio lacus ut nunc. Mauris urna erat, ullamcorper ut
                nulla a, posuere viverra erat. Morbi ut neque eu orci venenatis
                convallis. Proin quis magna sapien. Etiam non purus et justo
                varius lacinia. Donec eget mi elit. Donec eget facilisis felis,
                ac malesuada elit. Vestibulum porta, velit id malesuada
                hendrerit, sapien nunc vehicula orci, et imperdiet est metus
                vitae turpis. Duis pretium, odio in ultricies dapibus, enim
                tellus faucibus quam, in volutpat leo enim eget est. Sed dictum
                eleifend eros ut ornare. Integer et nisl ac mauris blandit
                efficitur. In hac habitasse platea dictumst. {'\n\n'}
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Integer tincidunt suscipit
                libero ut tempus. Mauris vitae orci in ante faucibus sodales et
                et massa. Vestibulum tortor ex, venenatis sed volutpat quis,
                posuere nec ante. Morbi facilisis erat ligula, vel blandit eros
                tristique vel. Nam sed porttitor velit. Aenean eu mi justo.
                Pellentesque maximus elit vitae ipsum laoreet placerat. Donec
                tincidunt sagittis ipsum, a molestie magna viverra ut. Curabitur
                tristique eros et arcu dapibus luctus. Nam aliquet felis sem,
                vel vehicula ex facilisis ac. Maecenas ac mauris a elit
                consequat luctus sit amet sodales magna. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. {'\n\n'}
                Vivamus viverra, nisi vel rutrum ornare, purus sem congue odio,
                nec tempor odio lacus ut nunc. Mauris urna erat, ullamcorper ut
                nulla a, posuere viverra erat. Morbi ut neque eu orci venenatis
                convallis. Proin quis magna sapien. Etiam non purus et justo
                varius lacinia. Donec eget mi elit. Donec eget facilisis felis,
                ac malesuada elit. Vestibulum porta, velit id malesuada
                hendrerit, sapien nunc vehicula orci, et imperdiet est metus
                vitae turpis. Duis Duis pretium, odio in ultricies dapibus, enim
                tellus faucibus quam, in volutpat leo enim eget est. Sed dictum
                eleifend eros ut ornare. Integer et nisl ac mauris blandit
                efficitur. In hac habitasse platea dictumst. {'\n\n'}
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Integer tincidunt suscipit
                libero ut tempus. Mauris vitae orci in ante faucibus sodales et
                et massa. Vestibulum tortor ex, venenatis sed volutpat quis,
                posuere nec ante. Morbi facilisis erat ligula, vel blandit eros
                tristique vel. Nam sed porttitor velit. Aenean eu mi justo.
                Pellentesque maximus elit vitae ipsum laoreet placerat. Donec
                tincidunt sagittis ipsum, a molestie magna viverra ut. Curabitur
                tristique eros et arcu dapibus luctus. Nam aliquet felis sem,
                vel vehicula ex facilisis ac. Maecenas ac mauris a elit
                consequat luctus sit amet sodales magna. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. {'\n\n'}
                Vivamus malesuada libero quam, a feugiat diam tincidunt
                tincidunt. Vivamus vel nisi risus. Nam dignissim felis sit amet
                pretium pretium. Pellentesque at euismod mauris, vel eleifend
                felis. Fusce enim orci, elementum in mi sed, fermentum imperdiet
                ante. Morbi ut ipsum ligula. Duis turpis magna, tristique non
                magna fermentum, sodales rutrum nisi. Praesent vel fringilla
                nisl.
              </Text>
            </ScrollView>
          </ReactNativeZoomableView>
        </View>
      </ViewPager>
    );
  }
}
