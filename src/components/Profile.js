import React, { Component } from 'react'
import Image from "../components/image";
import AnimatedItem from "./animatedItem/animated.item";
class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-image-container">
                    <Image originalName="profile-pic.png" className="profile-image" />
                </div>
                <div className="profile-right">
                    

                    <div className="profile-row">

                        <div className="animated-socials" style={{justifyContent:'center'}}>
                            <AnimatedItem originalName="icons8-golang-48.png" className="small-socila-icon" />
                            <AnimatedItem originalName="icons8-nodejs-48.png" className="small-socila-icon" />
                            <AnimatedItem originalName="icons8-react-native-48.png" className="small-socila-icon" />
                            <AnimatedItem originalName="icons8-travis-ci-48.png" className="small-socila-icon" />
                        </div>

                    </div>

                    <div className="profile-row">

                        <p className="bio">if you want to build a Gatsby website , react-native app , or you have an amazing idea to buid please contact me ^^' saphidev & gmail.com</p>
                    </div>

                </div>
            </div>
        )
    }
}


export default Profile