import React, { Component } from 'react';
import DefaultFallbackComponent from './fallback';

interface Props {
	children?: any;
	FallbackComponent?: any;
	onError?: (error: Error, componentStack: string) => void;
}

interface State {
	error: Error | null;
	info?: React.ErrorInfo | null;
}

class Boundary extends Component<Props, State> {
	static defaultProps = {
		FallbackComponent: DefaultFallbackComponent,
	};

	state: State = {
		error: null,
		info: null,
	};

	componentDidCatch(error: Error, info: React.ErrorInfo): void {
		const { onError } = this.props;

		if (typeof onError === 'function') {
			try {
				onError.call(this, error, info ? info.componentStack : '');
			} catch (ignoredError) {}
		}

		this.setState({ error, info });
	}

	resetError = () => {
		this.setState({ error: null, info: null });
	};

	render() {
		const { children, FallbackComponent } = this.props;
		const { error, info } = this.state;

		if (error) {
			return (
				<FallbackComponent
					componentStack={info ? info.componentStack : ''}
					error={error}
					resetError={this.resetError}
				/>
			);
		}

		return children;
	}
}

export const withErrorBoundary = (Component, FallbackComponent, onError) => {
	const Wrapped = (props) => (
		<Boundary FallbackComponent={FallbackComponent} onError={onError}>
			<Component {...props} />
		</Boundary>
	);

	// Format for display in DevTools
	const name = Component.displayName || Component.name;
	Wrapped.displayName = name ? `WithErrorBoundary(${name})` : 'WithErrorBoundary';

	return Wrapped;
};

export default Boundary;
