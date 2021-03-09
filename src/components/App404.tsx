import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { UserContext, appContextInterface } from '../context/UserContext'
import { resumeUrl, stackLogos, projectsData, ProjectData } from '../data/data'
import Footer from './Footer/Footer'

const App404: React.FC = () => {
	const [resume, setResume] = useState<string>()
	const [logos, setLogos] = useState<{}>()
	const [projects, setProjects] = useState<ProjectData[]>()

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
      <div className="Header-container">
        <Link className="Header-item" to="/" >
          <div className="Header-item" {...{ tabIndex: "0 "} as any}>
            Home
          </div>
        </Link>
      </div>
      <div className="container404">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
			<Footer />
		</UserContext.Provider>
	)
}

export default App404