export default class Post {
	constructor(data) {
		this.title = data.title
		this.dayNum = data.dayNum
		this.img = data.img
		this.body = data.body
	}

	get Template() {
		return /* html */ `
		<div class="post row">
			<div class="card">
				<h2 class="card-header">Day 0: March 26, 2020</h2>
				<img class="card-img-top" src="https://i.ibb.co/qg1NDYr/day0.jpg"
					alt="A picture of my current computer situation.  A macbook and a second monitor on a kitchen table, plus an unnecessary keyboard.">
					<div class="card-body">
						<p class="card-text">
							This site is part of a personal challenge to make a blog post daily for 100 days. Part of that
							challenge is that I have to code my site in normal javascript, unassisted by front-end
						frameworks. <br>
								<br>I'm not sure what this website will look like at the end of 100 days, but I will endeavor to
								chronicle the process of changing it, and also describing my life during COVID-19.
					</p>
				</div>
			</div>
		</div>`
	}
}