import styled from "styled-components"

import about from "./about"
import spotlight from "./spotlight"


export const LandingBody = styled.article`
  grid-column: 1 / -1;
  ${about};
  ${spotlight};
`