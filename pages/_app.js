import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Nav from '../Components/Nav/Nav'
import 'bootstrap/dist/css/bootstrap.css'

class Layout extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div>
				<Head>
					<title>Treasured Footsteps</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
				</Head>
					<Nav />
					<div>
						{children}
					</div>
			</div>
				)
			}
		}
		
export default class TFAPP extends App {
					render() {
				const {Component, pageProps } = this.props
				return (
			<Container>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Container>
				)
			}
}