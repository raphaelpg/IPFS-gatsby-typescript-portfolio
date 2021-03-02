import React, { useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import Intro from './Intro/Intro'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects'

import { resumeUrl, stackLogos, projectsData } from '../data/data.js'

const App = () => {
	const [resume, setResume] = useState([])
	const [logos, setLogos] = useState([])
	const [projects, setProjects] = useState([])

	useEffect(() => {
		setResume(resumeUrl)
		setLogos(stackLogos)
		setProjects([...projectsData])
	}, [])

	return (
		<UserContext.Provider value={{ resume, logos, projects }}>
			<Intro />
			<Projects	/>
			<Footer />
		</UserContext.Provider>
	)
}

export default App