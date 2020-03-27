export default class Post {
	constructor(data) {
		this.title = data.title
		this.dayNum = data.dayNum
		this.dateString = data.dateString // Fri Mar 27
		this.imgUrl = data.imgUrl
		this.imgAlt = data.imgAlt
		this.body = data.body
	}

	get Template() {
		let template = /* html */ `
		<div class="post row">
			<div class="card">
				<h2 class="card-header">Day ${this.dayNum}: ${this.title}</h2>
				<img class="card-img-top" src="${this.imgUrl}"
					alt="${this.imgAlt}">
					<div class="card-body">
						<p class="card-text">
							<em>${this.dateString}</em><br>`
		for (let i = 0; i < this.body.length; i++) {
			let postBody = this.body[i]
			template += `${postBody}<br>`
		}
		template += `
					</p>
				</div>
			</div>
		</div>`
		return template
	}
}