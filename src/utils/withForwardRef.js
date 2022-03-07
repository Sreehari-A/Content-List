import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function withForwardRef(Component) {
  const forwarded = React.forwardRef((props, ref) => (
    <Component innerRef={ref} {...props} />
  ));
  return hoistNonReactStatics(forwarded, Component);
}
