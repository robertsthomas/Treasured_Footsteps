import Jumbo from '../Sections/Home/Jumbo'
import Services from '../Sections/Home/Services'
import Mission from '../Sections/Home/Mission'
import Schedule from '../Sections/Home/Schedule'

// Home Page
const Home = () => (
	<div id='home'>

		{/* Jumbotron */}
		<Jumbo />
		<Services />
		<Mission />


		<div className="profile d-flex my-4 justify-content-center">
			<div className="col-3">
				<img src='/static/gwen.jpg' style={{ width: 275 }} />
			</div>
			<div className="col-6">
				<p className='lead' style={{ lineHeight: 1.5 }}>Thank you for visiting Treasured Footsteps. My name is Gwen Jones and I am the founder of Treasured Footsteps. Treasured Footsteps is not only a fitness studio. We are a resource and place for women to exercise, socialize and participate in community events. I am a certified personal trainer, and wellness  coach who works with women 40 years of age and up. I provide quality services and ensure that all of my ladies are working in a safe, fun environment while seeing results in their overall wellness. I love what I do!</p>
			</div>
		</div>
		<Schedule />


		<style jsx>{`


				.social {
					height: 75px;
					background-color: lightgray
				}
      `}
		</style>
	</div>
)

export default Home;