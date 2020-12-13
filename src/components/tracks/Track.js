import React from 'react';
import { Link } from 'react-router-dom';

import './track.css';

const Track = (props) => {
	const { track } = props;

	return (
		<div className="col-md-5" style={{ marginLeft: '6%' }}>
			<div className="card1 mb-4 shadow-sm ">
				<div className="card-body">
					<h3>{track.artist_name}</h3>
					<br />
					<div className="card-text">
						<strong>
							<i className="fas fa-play " />  Track
						</strong>{' '}
						:  {track.track_name}
						<br />
						<div className="go-corner" href="#">
							<div className="go-arrow">→</div>
						</div>
						<strong>
							<i className="fas fa-heart text-danger" />  Favourite
						</strong>{' '}
						 :  {track.num_favourite ? track.num_favourite : '***'}
					</div>
					<Link
						to={`lyrics/track/${track.track_id}`}
						className="btn btn-primary btn-block"
						style={{ backgroundColor: '#00838d' }}
					>
						<i className="fas fa-chevron-right" /> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Track;
