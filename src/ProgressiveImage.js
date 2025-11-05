import { Component } from 'react';
import { Animated, View, Platform } from "react-native";

export default class ProgressiveImage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.imageAnimated = new Animated.Value(0);
    }

    onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
            useNativeDriver: Platform.OS === "web" ? false : true
        }).start(({ finished }) => {
            if (finished) {
                this.props.onLoaded(true);
            }
        });
    }

    render() {
        return (
            <View style={this.props.style}>
                {
                    typeof this.props.imageType != "undefined" && this.props.imageType != null && this.props.imageType != "" ? (
                        <Animated.Image
                            source={this.props.imageType != "link" ? this.props.source : { uri: this.props.source }}
                            style={[{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                top: 0
                            }, { opacity: this.imageAnimated }, this.props.style]}
                            resizeMode={this.props.resizeMode}
                            onLoad={this.onImageLoad()}
                        />
                    ) : null
                }
            </View>
        );
    }
}