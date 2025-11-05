import { Component } from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let color = '#4189FF';
        if (typeof this.props.style != "undefined" && typeof this.props.style.color != "undefined") {
            color = this.props.style.color;
        }
        return (<View style={typeof this.props.style !== "undefined" ? this.props.style : { flex: 1, zIndex: 1000 }}>
            <ActivityIndicator animating={true}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: typeof this.props.indicator != "undefined" ? this.props.indicator : 80
                }}
                size={Platform.OS === "web" ? "large" : "small"}
                color={color}
            />
        </View>);
    }
}