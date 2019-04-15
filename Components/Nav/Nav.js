import Link from 'next/link'

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-0 position-fixed w-100">
			<Link href="/"><a className="navbar-brand">Treasured Footsteps</a></Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<Link href="/"><a className="nav-item nav-link active">Home</a></Link>
					<Link href="/about"><a className="nav-item nav-link">About</a></Link>
					<Link href="/about"><a className="nav-item nav-link">About</a></Link>
				</div>
				<Link href="/login"><a className="nav-item nav-link ml-auto text-secondary">Login</a></Link>
			</div>
		</nav>
	)
}

export default Nav
