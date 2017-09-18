import React from 'react';

class SampleText extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<p style={{ color: 'red' }} onClick={ this.props.onClick }>
				{ this.props.children }
			</p>
		)
	}
}

export default SampleText;