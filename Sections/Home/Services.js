
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
		<div className='container-fluid my-5'>
			<div className='d-flex justify-content-around'>
				{services.map(({ service, img }) => (
					<div className="card" style={{ width: "20rem" }}>
						<img src={`/static/${img}.jpg`} className="card-img-top img-fluid" style={{ height: "10rem", objectFit: 'cover' }}></img>
						<div className="card-body pt-0 px-0">
							<h5 className="card-title text-center text-capitalize bg-dark py-2 text-light">{service}</h5>
							<div className="px-3">
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<button type='button' className='btn btn-light btn-block' style={{color: 'green'}}>
								Learn More
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services