import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import { UserContext } from '../../context/UserContext'
import Image from '../Image/Image'

const Projects = () => {
	const { projects, logos } = useContext(UserContext)

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
				{projects.map(project => {
          const {id, title, description, url, repo, img, stack } = project;

					return(
						<div key={id} className="App-project">
							<Fade left duration={2000} distance="30px">
                <div className="App-project-left-container">
                  <div className="App-project-title">{title}</div>
                </div>
              </Fade>
              <Fade bottom duration={2000} distance="50px">
                <div className="App-project-right-container">
                  <div className="App-project-right-top-container">
                    <div className="App-project-description-container">
                      <ul className="App-project-description">
                        {description ? description.map((item, index) => item ? <li key={index}>{item}</li> : '') : ''}
                      </ul>
                      {url && (
                        <a
                          className="App-project-link" 
                          href={url || '#!'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                        Deployed project
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

                        {stack.map(item => (
                          <div key={item} className="App-project-techs-item">
                            <div className="App-tech-logo-container">
                              <a 
                              	href={logos[item][1]} 
                              	target="_blank"
                              	rel="noopener noreferrer"
                              >
                                <Image 
                                  alt={item + " logo"} 
                                  filename={logos[item][0]}
                                  cat='stack'
                                />
                              </a>
                            </div>
                          </div>
                        ))}
                        
                      </div>
                  </div>
                </div>
              </Fade>
						</div>
					)
				})}
			</div>		
		</div>
	)
}

export default Projects