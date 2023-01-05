import styled from "styled-components";

export const List = styled.li`
    display: flex;
    width: 250px;
    background-color: #c9c8f3;
    align-items: center;
    margin: 0px auto;
    padding: 10px;
    border-radius: 5px;
    :not(:last-child) {
      margin-bottom: 20px;
    }
    `;
    
  
    export const FriendOnline = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'rad')};
  `; 

    export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    padding: 7px;
    margin-right: 20px;
    background-color: rgb(248, 244, 244);
    border-radius: 8px;
      `;
  
  export const Name= styled.p`
    font-size: 20px;
    margin: 0;
  `;