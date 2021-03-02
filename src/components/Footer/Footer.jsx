import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import Image from '../Image/Image'

const Footer = () => {
	const { logos } = useContext(UserContext)

	const [links, setLinks] = useState([])

	useEffect(() => {
		setLinks(['github', 'linkedin'])
	}, [])

	return (
    <footer className="App-footer">
  		<div name="contact" className="App-Links-container">
        <div className="App-Links-link">
  			  {new Date().getFullYear()}
        </div>
        {links.map(item => (
          <a key={item} className="App-Links-link" href={logos[item][1]} target="_blank" rel="noopener noreferrer">
            <Image alt={item + " logo"} filename={logos[item][0]} cat="link" />
          </a>
        ))}
      </div>
    </footer>
	)
}

export default Footer