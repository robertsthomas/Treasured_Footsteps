
const Services = () => {
	const services = [
		{
			service: 'group fitness',
			img: "group_fitness"
		},
		{
			service: 'Personal Training',
			img: 'personal_training'
		},
		{
			service: 'Wellness Coaching',
			img: 'wellness_coaching'
		}
	]

	return (
		<div className='d-flex justify-content-around my-5'>
			{services.map(({ service, img }) => (
				<div className="card" style={{ width: "20rem" }}>
					<img src={`/static/${img}.jpg`} class="card-img-top img-fluid" alt="..."></img>
					<div className="card-body">
						<h5 className="card-title text-center text-capitalize">{service}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="card-link">Card link</a>
					</div>
				</div>
			))}
		</div>
	)
}

export default Services