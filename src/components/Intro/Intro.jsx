import React, { useContext } from 'react'
// import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import { UserContext } from '../../context/UserContext'

const Intro = () => {
	const { resume } = useContext(UserContext)

	return (
		<div className="App-intro" data-sal="fade" data-sal-duration="1000">
			{/*<Fade left duration={1000} delay={500} distance="30px">*/}
				<div className="App-intro-container">
					<div className="App-intro-title-container">
						<div className="App-intro-name">Raphael Pinto Gregorio</div>
						<div className="App-intro-job">Full Stack JavaScript Developer</div>
					</div>
				</div>
			{/*</Fade>*/}
			{/*<Fade bottom duration={1000} delay={1000} distance="30px">*/}
				<div className="App-intro-menu-container">
	        <Link to="project-list" smooth duration={1000}>
	          <div className="App-intro-menu-item" >Projects</div>
	        </Link>
	        <Link to="contact" smooth duration={1000}>
	          <div className="App-intro-menu-item-2" >Contact</div>
	        </Link>
          <a className="App-intro-menu-item-3" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
				</div>
			{/*</Fade>*/}
	  </div>
	)
}

export default Intro