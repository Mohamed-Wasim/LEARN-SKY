import React from 'react';

/* eslint-disable space-before-function-paren */
const LskyErrorWrapper = (WrappedComponent, Errors) => {
  /* eslint-disable react/display-name */
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: '', errorInfo: '' };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true, error, errorInfo });
    }

    render() {
      if (this.state.hasError) {
        // Render the errorBoundaryFile content when an error occurs
        return (
          (
            <>
              <Errors
                errorinfo={this.state.errorInfo}
                error={this.state.error}
              />
            </>
          ) || <div>Something went wrong.</div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};
export default LskyErrorWrapper;
