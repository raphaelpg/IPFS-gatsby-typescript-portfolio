import React, { useContext } from 'react'
import { FadeTop } from '../../effects/effects'
import { Link } from 'react-scroll'
import { UserContext, appContextInterface } from '../../context/UserContext'

const Header: React.FC = () => {
	const appContext: appContextInterface | null = useContext(UserContext)

	return (
    <FadeTop className="Header-container" distance={30} triggerOnce={true}>
      <Link className="Header-item" to="project-list" smooth duration={1000} offset={-150}>
        <div className="Header-item" {...{ tabIndex: "0 "} as any}>
          Projects
        </div>
      </Link>
      <Link className="Header-item" to="contact" smooth duration={1000}>
        <div className="Header-item-2" {...{ tabIndex: "0 "} as any}>
          Contact
        </div>
      </Link>
      <a className="Header-item-3" href={appContext?.resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </FadeTop>
	)
}

export default Header