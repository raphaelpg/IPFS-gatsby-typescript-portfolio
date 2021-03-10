import React from 'react'
import { FadeLeft } from '../../effects/effects'

const Intro: React.FC = () => {

	return (
		<FadeLeft className="App-intro" distance={30} triggerOnce={true} id="intro">
			<div className="App-intro-container">
				<div className="App-intro-title-container">
					<div className="App-intro-name">Raphael Pinto Gregorio</div>
					<div className="App-intro-job">Full Stack JavaScript Developer</div>
				</div>
			</div>
		</FadeLeft>
	)
}

export default Intro