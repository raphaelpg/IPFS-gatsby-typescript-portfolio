import React from 'react'
import { FadeIn } from '../../effects/effects'

const Intro: React.FC = () => {

	return (
		<FadeIn className="App-intro" xDistance={-30} triggerOnce={true} id="intro">
			<div className="App-intro-container">
				<div className="App-intro-title-container">
					<div className="App-intro-name">Raphael Pinto Gregorio</div>
					<div className="App-intro-job">Full Stack JavaScript Developer</div>
				</div>
			</div>
		</FadeIn>
	)
}

export default Intro