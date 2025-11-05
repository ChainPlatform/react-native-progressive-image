import { Component } from 'react';
import ProgressiveImage from './ProgressiveImage';
import Loading from './Loading';
import { View } from "react-native";

export default class ViewLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onLoaded: false
        };
        this.onLoaded = this.onLoaded.bind(this);
    }

    onLoaded(status) {
        if (status != this.state.onLoaded) {
            this.setState({ onLoaded: status });
            if (typeof this.props.onImageLoaded !== "undefined") {
                this.props.onImageLoaded(status);
            }
        }
    }

    render() {
        return (<><ProgressiveImage
            imageType={this.props.style.imageType}
            onLoaded={(status) => this.onLoaded(status)}
            source={this.props.style.source}
            style={[this.props.style.style, { zIndex: 3 }]}
            resizeMode={this.props.style.resizeMode}
        />
            {
                !this.state.onLoaded && !this.props.style.showLoading ?
                    <View style={[this.props.style.style, { zIndex: 2, position: 'absolute' }]}>
                        <View style={{
                            flex: 1,
                            width: this.props.style.style.width,
                            height: this.props.style.style.height,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Loading
                                indicator={typeof this.props.indicator != "undefined" ? this.props.indicator : 80}
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignSelf: "center",
                                    color: "#FFFFFF"
                                }} />
                        </View>
                    </View>
                    : null
            }
            {
                !this.state.onLoaded && this.props.style.showLoading ?
                    <Loading
                        indicator={typeof this.props.indicator != "undefined" ? this.props.indicator : 80}
                        style={[{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            zIndex: 2
                        }, this.props.style.style]} />
                    : null
            }
        </>);
    }
}