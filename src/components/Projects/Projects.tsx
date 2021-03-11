import React, { useContext } from 'react'
import { FadeIn } from '../../effects/effects'
import { Link } from 'react-scroll'
import { UserContext, appContextInterface } from '../../context/UserContext'
import Image from '../Image/Image'

const Projects: React.FC = () => {
  const appContext: appContextInterface | null = useContext(UserContext)
  const logos = appContext?.logos
  const projects = appContext?.projects

	return (
		<div className="App-project-list-container">
			<Link to="project-list" smooth duration={1000}>
        <div 
          name="project-list" 
          className="App-project-list-title" 
          id="projects-id"
        >
        Some of my projects:
        </div>
      </Link>
			<div className='App-project-list'>
				{projects?.map((project: any) => {
          const {id, title, description, url, repo, img, stack } = project;

					return(
						<div key={id} className="App-project">
              <FadeIn className="App-project-left-container" yDistance={0} xDistance={0} triggerOnce={true}>
                <div className="App-project-title">{title}</div>
              </FadeIn>
              <FadeIn className="App-project-right-container" yDistance={0} xDistance={0} triggerOnce={true}>
                <div className="App-project-right-top-container">
                  <div className="App-project-description-container">
                    <ul className="App-project-description">
                      {description ? description.map((item: string, index: number) => item ? <li key={index}>{item}</li> : '') : ''}
                    </ul>
                    {url && (
                      <a
                        className="App-project-link" 
                        href={url || '#!'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                      See
                      </a>
                    )}
                    {repo && ( 
                      <a 
                        className="App-project-link"
                        href={repo || '#!'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      Github repo
                      </a>
                    )}
                  </div>
                  <div className="App-project-screenshot-container">
                    <a 
                      href={url || repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Image 
                        alt={"screenshot of " + title} 
                        filename={img}
                        cat='project'
                      />
                    </a>
                  </div>
                </div>
                <div className="App-project-right-bottom-container">
                  <div className="App-project-right-title">Stack:</div>
                    <div className="App-project-techs-container">

                      {stack.map((item: any) => (
                        <div key={item} className="App-project-techs-item">
                          <div className="App-tech-logo-container">
                            <a 
                              href={(logos as any)[item]["url"]} 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image 
                                alt={item + " logo"} 
                                filename={(logos as any)[item]["filename"]}
                                cat='stack'
                              />
                            </a>
                          </div>
                        </div>
                      ))}
                      
                    </div>
                </div>
              </FadeIn>
						</div>
					)
				})}
			</div>		
		</div>
	)
}

export default Projects