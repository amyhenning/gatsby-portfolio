import React from "react"
import { Link } from "gatsby"
import styles from './layout.css'
import Icofont from 'react-icofont'

const ListLink = props => (
	<li className="list-link">
		<Link to={props.to}>{props.children}</Link>
	</li>
)

export default ({children}) => (
	<div id="layout-container">
		<header>
			<Link to="/" className="name-link">
				<h1>Amy Henning</h1>
			</Link>

			<Link to="/" className="small-name-link">
				<h1>Amy H</h1>
			</Link>

			<ul>
				<ListLink to="/" className="list-link">Home</ListLink>
				<ListLink to="/about/" className="list-link">About</ListLink>
				<ListLink to="/blog/" className="list-link">Blog</ListLink>
				<ListLink to="/work/" className="list-link">Work</ListLink>
				<ListLink to="/contact/" className="list-link">Contact</ListLink>
			</ul>
		</header>

		{children}

		<footer>
			Coded by Amy with Gatsby
		</footer>
	</div>
)