import React, { useState, useCallback, useEffect, useRef, } from 'react';
import axios from 'axios';
import * as styled from './styles.jsx';





const MainPage = () => {
    const [isMessage, setIsMessage] = useState(false);   //로봇 메시지
    const [sendMsg, setSendMsg] = useState("");  //내 메시지
    const mymessage = sendMsg;

    const onChange = (e) => {
        setSendMsg(e.target.value);
    };

    const Message = () => {
        console.log(sendMsg);

        const response = axios.post(
            'https://main-chatbot-api-ainize-team.endpoint.ainize.ai/v1/bot/chat',
            {
                'message': sendMsg
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (response) {
                setIsMessage(JSON.stringify(response.data));
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    
    

    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    };

    const Modal = () => {
        return (
            <styled.Modal>
                <styled.ModalContainer>
                    <span>Are you sure you want to clear this conversation?</span>
                    <styled.ModalButtons>
                        <button onClick={() => setIsModal(false)}>Cancel</button>
                        <button onClick={() => setIsModal(false)}>Clear</button>
                    </styled.ModalButtons>
                </styled.ModalContainer>
            </styled.Modal>
        )
    }

    return (
        <styled.Container>
            {isModal && <Modal />}


            <styled.Logo>
                <styled.LogoImg />AI chat
            </styled.Logo>
            <styled.ChatBox>
                <styled.MyMsg>{mymessage}</styled.MyMsg>
                <styled.Robot>
                    <styled.RobotImg />
                    <styled.RobotNameAndMsg>
                        <styled.RobotName>BotName</styled.RobotName>
                        <styled.RobotMsg>{isMessage}</styled.RobotMsg>
                    </styled.RobotNameAndMsg>
                </styled.Robot>
                
                
                <styled.InputBox>
                    <styled.Input id='textinput' placeholder='메시지를 입력하세요.' onChange={onChange} value={sendMsg}/>
                    <styled.SendButton onClick={() => { Message(); }} />
                </styled.InputBox>
            </styled.ChatBox>
            <styled.ClearConversation onClick={showModal}>
                Clear Conversation
            </styled.ClearConversation>
        </styled.Container>
    )
}

export default MainPage
