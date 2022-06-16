import styled from 'styled-components';

const StyledArticle = styled.article`
background-color: whitesmoke;
grid-column: ${({width})=>width} / 12;
`
;

export default StyledArticle;