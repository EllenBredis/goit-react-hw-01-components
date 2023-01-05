import styled from "styled-components";

export const Transaction=styled.table`
    background-color: #fff;
    width: 600px;
    margin: 0px auto;
    margin-bottom: 100px;
    padding: 30px;
    border-radius: 10px;
    border-collapse: collapse;
`;

export const TableList=styled.tr`
background-color: #fff;
    text-transform: uppercase;
    :nth-child(even) {
    background-color: #e3ddf1;
    }
`;
 
export const TableHeadItem= styled.th`
height: 50px;
  text-align: center;
  border: 1px solid black;
  background-color: #8631f5;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
`;

export const TableBodyItem= styled.td`
height: 50px;
  text-align: center;
  border: 1px solid black;
    
`;

  
  