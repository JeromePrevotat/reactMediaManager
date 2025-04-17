import "../css/MediaCard.css";

function MediaCard() {
	return (
		<>
			<div className="media-card">
				<div className="media-cover-container">
					<div className="media-title-container">
						<h3 className="media-title">Lorem, ipsum dolor.</h3>
					</div>
					<p className="media-synopsis">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Beatae eveniet necessitatibus eligendi reiciendis,
						possimus molestias odit ad ullam, perferendis harum
						laudantium asperiores doloremque similique, totam
						suscipit saepe delectus voluptas quam.
					</p>
					<p className="media-release-date">1992</p>
				</div>
			</div>
		</>
	);
}

export default MediaCard;
