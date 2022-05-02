import React, { useState, useContext } from "react";
import Lottie from "react-lottie";

import ReactLottieJson from "../public/lotties/coin.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: ReactLottieJson,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function LogoAdmin() {

	const [isStopped] = useState(false);
	const [isPaused] = useState(false);
	

	return (
		<Lottie options={defaultOptions} height={200} width={200} isStopped={isStopped} isPaused={isPaused} isClickToPauseDisabled={true} />
	);
}
