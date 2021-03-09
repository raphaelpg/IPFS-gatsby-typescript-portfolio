import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { UserContext, appContextInterface } from '../../context/UserContext'

const Header: React.FC = () => {
	const appContext: appContextInterface | null = useContext(UserContext)

	return (
    <div className="Header-container" data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease-out">
      <Link className="Header-item" to="project-list" smooth duration={1000} offset={-150}>
        <div className="Header-item" {...{ tabIndex: "0 "} as any}>
          Projects
        </div>
      </Link>
      <Link className="Header-item" to="contact" smooth duration={1000} offset={-150}>
        <div className="Header-item-2" {...{ tabIndex: "0 "} as any}>
          Contact
        </div>
      </Link>
      <a className="Header-item-3" href={appContext?.resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </div>
	)
}

export default Header