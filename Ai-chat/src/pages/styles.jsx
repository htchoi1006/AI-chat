import styled from 'styled-components';
import logoimg from '../imgs/logo.png';
import sendicon from '../imgs/sendicon.png';
import robotimg from '../imgs/robotimg.png';


// 메인화면 디자인 --------------------------------------------

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1920px;
    min-width: 1300px;
    background-color: white;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #8B3EEB;

    margin-top: 16px;
    margin-left: 23px;
`;

export const LogoImg = styled.img.attrs({
    src: logoimg,
})`
    width: 40px;
    height: 40px;
    margin-right: 5px;
`;

export const ChatBox = styled.div`
    width: 560px;
    height: 587px;
    background: #F4F4F7;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 78px;
    margin-left: 31px;
    position: relative;
    padding: 20px 20px 0 20px;

    overflow: hidden;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 560px;
    height: 40px;
    left: calc(50% - 560px/2);
    // left: 30px;
    bottom: 20px;

`;

export const Input = styled.input.attrs({
    type: 'text'
})`
    padding: 8px 12px;
    gap: 10px;

    position: absolute;
    width: 532px;
    height: 30px;
    background: #FFFFFF;
    border: 2px solid #ECECF3;
    border-radius: 10px;
    color: black;
    outline: none;
`;

export const SendButton = styled.img.attrs({
    src: sendicon,
})`
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    right: 14px;
`;


export const ClearConversation = styled.button`
    font-family: 'Montserrat-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #333333;
    margin-top: 78px;
    margin-left: 64px;
    background-color: white;
    cursor: pointer;
    border: 1px solid #333333;

    &:hover{
        border: 1px solid #A56BEE;
        color: #A56BEE;
    }
`;

export const Robot = styled.div`
    display: flex;
    align-items: flex-start;
    float: left;
`;

export const RobotImg = styled.img.attrs({
    src: robotimg,
})`
    width: 20px;
    height: 20.4px;
    margin-top: 2px;
`;

export const RobotNameAndMsg = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const RobotName = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #333333;
`;

export const RobotMsg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    padding-top: 20px;
    margin-top: 4px;

    width: 180px;
    height: 60px;

    background: #FFFFFF;
    border-radius: 0px 10px 10px 10px;

    // font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    
    overflow: auto;
`;

export const MyMsg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    padding: 8px 12px;
    width: 38px;
    height: 25px;
    background: #A56BEE;
    border-radius: 10px 10px 0px 10px;

    // font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`;



// 모달창 디자인 --------------------------------------------

export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(112, 112, 112, 0.5);
`;

export const ModalContainer = styled.div`
    width: 280px;
    height: 240px;
    background: #FFFFFF;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
        width: 245px;
        height: 56px;
        font-family: 'Montserrat-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #333333;
        margin-bottom: 44px;
    }
`;

export const ModalButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        outline: 0;
        cursor: pointer;
        width: 110px;
        height: 44px;
        border-radius: 10px;

        font-family: 'Montserrat-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    

        &:nth-child(1){
            background: #ECECF3;
            color: #828282;
        }

        &:nth-child(2){
            background: #FE7474;
            margin-left: 12px;
            color: #FFFFFF;
        }
    }
`;

export const CancelButton = styled.div`
    width: 110px;
    height: 44px;
    background: #ECECF3;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
`;

export const ClearButton = styled.div`
    width: 110px;
    height: 44px;
    background: #FE7474;
    border-radius: 10px;
    margin-left: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
`;