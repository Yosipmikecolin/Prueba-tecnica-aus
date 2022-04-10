import styled from "styled-components";


export const Loading = styled.div`
border: 20px solid #332FD0;
border-radius: 50%;
border-top: 20px solid #ffff;
width: 200px;
height: 200px;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
-webkit-animation: spin 1s linear infinite; 
animation: spin 1s linear infinite;
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`;
