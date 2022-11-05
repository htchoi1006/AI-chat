import React, { useState, useCallback, useEffect, useRef, } from 'react';
import axios from 'axios';
import * as styled from './styles.jsx';

const MainPage = () => {
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
                <styled.InputBox>
                    <styled.Input placeholder='메시지를 입력하세요.' />
                    <styled.SendButton />
                </styled.InputBox>
            </styled.ChatBox>
            <styled.ClearConversation onClick={showModal}>
                Clear Conversation
            </styled.ClearConversation>
        </styled.Container>
    )
}

export default MainPage
