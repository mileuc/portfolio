import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../config/particle-config";

const ParticleBackground = () => {
    return (
        <Particles params={ParticleConfig} style={{zIndex: 0}}></Particles>
    )
}

export default ParticleBackground;