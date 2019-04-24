
const Schedule = () => {

	const classes = [
		{
			type: "Zumba Gold",
			schedule: [
				{
					day: 'Monday',
					time: '10:15 am - 11:00 am'
				}
			]
		},
		{
			type: "L.I.S",
			schedule: [
				{
					day: 'Thursday',
					time: '8:30 am - 9:15 am'
				}
			]
		},
		{
			type: "Bootcamp",
			schedule: [
				{
					day: 'Thursday',
					time: '9:30 am - 10:30 am'
				}
			]
		},
		{
			type: 'Zumba Toning',
			schedule: [
				{
					day: "Friday",
					time: '8:00 am - 9:00 am'
				}
			]
		},
		{
			type: 'Body Sculpting',
			schedule: [
				{
					day: 'Monday',
					time: '9:15 am - 10:00 am'
				},
				{
					day: 'Saturday',
					time: '8:30 am - 9:15 am'
				}
			]
		}
	]


	return (
		<div className='container my-5'>

			<h1>Class Schedule</h1>
			<div class="card w-75 mx-auto">
				{classes.map(data => (
					<div>
						<div class="card-header">
							{data.type}
						</div>
						<ul class="list-group list-group-flush">
							{data.schedule.map(d => (
								<li class="list-group-item">{d.day} {d.time}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default Schedule;