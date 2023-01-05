import styled from 'styled-components';

export const User=styled.div`
    background-color: #fff;
    width: 300px;
    margin: 0px auto;
    margin-bottom: 100px;
    border-radius: 10px;
     `;
     
  
  export const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  `;
  
  export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
    border-radius: 50%;
    border: 2px solid #797979;
  `;
  
  export const Name = styled.p`
    font-size: 18px;
    font-weight: 700;
  `;

  export const Tag = styled.p`
  color: #808080;
  margin: 5px 0px;
`; 

export const Location = styled.p`
  color: #808080;
  margin: 5px 0px;
`;
  
  export const Stats = styled.ul`
  list-style: none;
  display: flex;
  height: 70px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: space-evenly;
  background-color: #c9c8f3;
  margin: 0;
  padding: 0px ;
    `;
   
    
  export const List=styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    flex-basis: calc(100% / 3);
    border-right: 1px solid black;
    border-top: 1px solid black;

    :last-child {
      border-right: none;
  }
  `;
  
  export const Label=styled.span`
    color:black;
    margin-bottom: 5px;
  `;
  
  export const Quantity=styled.span`
    color: black;
    font-weight:600;
  `;