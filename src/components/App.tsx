import React, { useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import Intro from './Intro/Intro'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import { resumeUrl, stackLogos, projectsData, ProjectData } from '../data/data'

const App: React.FC = () => {
	const [resume, setResume] = useState<string>()
	const [logos, setLogos] = useState<{}>()
	const [projects, setProjects] = useState<ProjectData[]>()

	useEffect(() => {
		setResume(resumeUrl)
		setLogos(stackLogos)
		setProjects([...projectsData])
	}, [])

	return (
		<UserContext.Provider value={{ resume, logos, projects }}>
			<Intro />
			<Projects	/>
			<Contact />
			<Footer />
		</UserContext.Provider>
	)
}

export default App