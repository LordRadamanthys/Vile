import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef
} from 'react-native-shared-element';
import React from 'react'
import { View, Text, Animated, StyleSheet, Image } from 'react-native'
// Scene 1
let startAncestor;
let startNode;
<View ref={ref => startAncestor = nodeFromRef(ref)}>
    ...
    <SharedElement onNode={node => startNode = node}>
        <Image style={{}} source={require('../../assets/1.png')} />
    </SharedElement>
    ...
  </View>


// Scene2
let endAncestor;
let endNode;
<View ref={ref => endAncestor = nodeFromRef(ref)}>
    ...
    <SharedElement onNode={node => endNode = node}>
        <Image style={{}} source={require('../../assets/1.png')} />
    </SharedElement>
    ...
  </View>

// Render overlay in front of screen
const position = new Animated.Value(0);
<View style={StyleSheet.absoluteFill}>
    <SharedElementTransition
        start={{
            node: startNode,
            ancestor: startAncestor
        }}
        end={{
            node: endNode,
            ancestor: endAncestor
        }}
        position={position}
        animation='move'
        resize='auto'
        align='auto'
    />
</View>