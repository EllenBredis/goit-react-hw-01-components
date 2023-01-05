import styled from "styled-components";

 export const StatisticsSection= styled.section`
    width: 300px;
    margin: 0px auto;
    margin-bottom: 100px;
    border-radius: 10px;
    color: black;
    background-color: white;
  `;
  
   export const Title=styled.h2`
    font-size: 22px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #000;
  `;
  
  export const List= styled.ul`
    display: flex;
    background-color: #c9c8f3;
    justify-content: space-evenly;
        padding: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
  `;
  
   export const Item=styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 5);
    padding: 10px;
    border-right: 1px solid black;
    border-top: 1px solid black;
    :last-child {
      border-right: none;
  }
  `;
 
  export const Label=styled.span`
    margin-bottom: 5px;
    font-weight:600;
  `;
  
  export const Percentage=styled.span`
    margin-bottom: 5px;
    font-weight:600;
  `;