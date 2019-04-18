
const Jumbo = () => {
	return (
		<div>
			<div className='jumbotron rounded-0 mb-0'>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-sm-12 mt-3">
							<p className='text-white h1'>A Community of ladies who are dedicated to maintaining a healthy lifestyle.</p>
						</div>
					</div>
					<button type='button' className='btn btn-outline-light btn-lg mt-4'>Get Started</button>
				</div>
			</div>
			<style jsx>{`

			.jumbotron{
				height: 450px;
				background-image: url('/static/dance_group.jpg');
				background-position: 0 70%;
				background-size: cover
			}
	`}
			</style>
		</div>
	)
}

export default Jumbo
