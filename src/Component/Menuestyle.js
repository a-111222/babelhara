import styled from 'styled-components'
export const ImageWrapper = styled.div `
width: 70%;
float: left;
font-size: 0;
position: relative;
margin: 0 auto;
height: 100%;

`
export const Image = styled.img`
width: 100%;
height:100%;
`
export const H2 = styled.h2`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -100%);
color: #FFF;
font-weight: bold;
font-family: sans-serif;
font-size: 4rem;
width: 78%;
text-align: center;
z-index: 99999!important;
background: #f78916;
padding-bottom: 10px;


`


export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: black;
opacity: .7;
z-index: 1;
`