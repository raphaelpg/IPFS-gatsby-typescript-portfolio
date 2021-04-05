import React, { useState, useEffect } from 'react'
import { UserContext, appContextInterface } from '../context/UserContext'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { IProject } from '../interfaces/project';
import { resumeUrl } from '../data/data'
import { stackLogos } from '../data/stack'
import { projectsData } from '../data/projects'

const App: React.FC = () => {
	const [resume, setResume] = useState<string>()
	const [logos, setLogos] = useState<{}>()
	const [projects, setProjects] = useState<IProject[]>()

	useEffect(() => {
		setResume(resumeUrl)
		setLogos(stackLogos)
		setProjects([...projectsData])
	}, [])

	let providerValue: appContextInterface | null;
	if (typeof resume === 'string' && typeof logos === 'object' && typeof projects === 'object') {
		providerValue = {resume, logos, projects}
	} else {
		providerValue = null;
	}
	return (
		<UserContext.Provider value={providerValue}>
			<Header />
			<Intro />
			<Projects	/>
			<Contact />
			<Footer />
		</UserContext.Provider>
	)
}

export default App