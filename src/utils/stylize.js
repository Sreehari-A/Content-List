import { withStyles } from '@material-ui/core/styles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import withForwardRef from './withForwardRef';

export default function stylize(component, style) {
  const Styled = withStyles(style)(component);
  Styled.displayName = component.displayName || component.name;
  hoistNonReactStatics(Styled, component);
  return withForwardRef(Styled);
}
