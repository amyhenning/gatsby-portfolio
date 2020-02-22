import React from "react"
import Layout from "../components/layout"
import Icofont from 'react-icofont'
import './about.css'

export default () => (
	<Layout>
		<h1 className="about-title">About</h1>
		<main className="about-content">
			<p>I'm a full-stack web developer with a particular fondness for digging into the intricacies of back-end applications.</p>

			<p>After teaching in Chicago and designing college success curricula for nearly a decade, I decided to follow the dreams of my 15-year-old self (who loved building fansites for things like <a href="https://web.archive.org/web/20030430215741/http://unfinished.elenath.org/index2.html" target="_blank">Tolkien books</a> and <a href="https://web.archive.org/web/20041212170056/http://www.fan-sites.org/theredwalls/index2.html" target="_blank">local bands</a>) and become a developer. I graduated from The Firehose Project's full-stack bootcamp in September 2018.</p>

			<p>I love untangling complex problems, learning and collaborating to identify solutions, and  writing sensible code to implement fixes and features.</p>

			<p>I hold a B.A. in English from Grinnell College and a Master of Arts in Teaching from Dominican University. I'm currently an Associate Software Engineer at iProspect.</p>
		</main>
	</Layout>
)
