import styled from 'styled-components'
import { Tooltip as BaseTooltip } from 'react-tippy'
import Small from './small'

const defaultProps = {
  position: 'bottom',
  animation: 'fade',
  arrow: true
}

const Tooltip = styled(BaseTooltip)`
  cursor: help;
`

export default ({ title, ...props }) => {
  return <Tooltip html={title} {...defaultProps} {...props} />
}
