import React, {useState, useRef} from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  _scrollInterpolator,
  _animatedStyles,
} from 'react-native-snap-carousel/src/utils/animations';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';

const CarouselCard = ({...props}) => {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Carousel
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        scrollInterpolator={_scrollInterpolator}
        slideInterpolatedStyle={_animatedStyles}
        inactiveSlideShift={0}
        firstItem={0}
        onSnapToItem={index => setIndex(index)}
      />

      <Pagination
        dotsLength={props.data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0,0,0,0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      {/*
      <TouchableOpacity style={[styles.button, styles.homebtn]}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 15,
            fontWeight: '700',
            alignSelf: 'center',
          }}>
          Home
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    width: 95,
  },
  homebtn: {
    left: 178,
    backgroundColor: '#3F88EB',
  },
});
