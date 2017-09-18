import React from 'react';

class SampleText extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<p style={{ color: 'red' }}>
				{ this.props.children }
			</p>
		)
	}
}

export default SampleText;