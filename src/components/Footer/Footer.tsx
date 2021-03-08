import React, { useContext, useState, useEffect } from 'react'
import { UserContext, appContextInterface } from '../../context/UserContext'
import Image from '../Image/Image'

const Footer = () => {
  const appContext: appContextInterface | null = useContext(UserContext)
  const logos: {} | undefined = appContext?.logos

	const [links, setLinks] = useState<string[]>([])

	useEffect(() => {
		setLinks(['github', 'linkedin'])
	}, [])

	return (
    <footer className="App-footer">
  		<div className="App-Links-container">
        <div className="App-Links-link">
  			  {new Date().getFullYear()}
        </div>
        {links.map((item: any) => (
          <a key={item} className="App-Links-link" href={(logos as any)[item]["url"]} target="_blank" rel="noopener noreferrer">
            <Image alt={item + " logo"} filename={(logos as any)[item]["filename"]!} cat="link" />
          </a>
        ))}
      </div>
    </footer>
	)
}

export default Footer