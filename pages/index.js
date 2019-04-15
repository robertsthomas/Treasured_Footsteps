

// Home Page
const Home = () => (
	<div id='home'>

		{/* Jumbotron */}
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

		<div className="social d-flex align-items-center text-center">
			<div className="col-4">
				<i className="fab fa-twitter fa-3x"></i>
			</div>
			<div className="col-4">
				<i className="fab fa-instagram fa-3x"></i>
			</div>
			<div className="col-4">
				<i className="fab fa-facebook-f fa-3x"></i>
			</div>
		</div>
		<div className="profile d-flex my-4 justify-content-center">
			<div className="col-3">
				<img src='/static/portrait.jpg' style={{ width: 275 }} />
			</div>
			<div className="col-6">
				<p className='lead' style={{ lineHeight: 1.5 }}>Thank you for visiting Treasured Footsteps. My name is Gwen Jones and I am the founder of Treasured Footsteps. Treasured Footsteps is not only a fitness studio. We are a resource and place for women to exercise, socialize and participate in community events. I am a certified personal trainer, and wellness  coach who works with women 40 years of age and up. I provide quality services and ensure that all of my ladies are working in a safe, fun environment while seeing results in their overall wellness. I love what I do!</p>
			</div>
		</div>


		<style jsx>{`

				#home {
					
				}

        .jumbotron{
					height: 450px;
					background-image: url('/static/dance_group.jpg');
					background-position: 0 70%;
					background-size: cover
				}

				.social {
					height: 75px;
					background-color: lightgray
				}
      `}
		</style>
	</div>
)

export default Home;