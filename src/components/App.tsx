import React, { useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import Intro from './Intro/Intro'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects'

import { resumeUrl, stackLogos, projectsData, ProjectData } from '../data/data'

const App: React.FC = () => {
	const [resume, setResume] = useState<string | null>(null)
	const [logos, setLogos] = useState<{} | null>(null)
	const [projects, setProjects] = useState<ProjectData[] | null>(null)

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