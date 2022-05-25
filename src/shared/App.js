import React, { useEffect, useState } from 'react';
import './App.css';

// 패키지
import { Route } from 'react-router-dom';
import { history } from '../redux/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { BsPatchPlus } from 'react-icons/bs';
import styled from 'styled-components';

//  컴포넌트
import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SocialLogin from '../pages/SocialLogin';
import DetailInfo from '../pages/DetailInfo';
import Mypage from '../pages/Mypage';
import Detail from '../pages/Detail';
import VideoChat from '../pages/VideoChat';
import Search from '../pages/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCookie } from '../shared/Cookie';

function App() {
  const dispatch = useDispatch();
  // 페이지 조회할 때마다 실행, token이 유효한지 여부 체크
  useEffect(() => {
    if (getCookie('token')) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);

  const [feedbackOn, setFeedbackOn] = useState(false);

  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/kakaoUser" component={SocialLogin} />
      <Route path="/googleUser" component={SocialLogin} />
      <Route path="/signup/detail" component={DetailInfo} />
      <Route path="/" exact component={Main} />
      <Route path="/mypage/:userName/:isTutor" exact component={Mypage} />
      <Route path="/detail/:userName/:isTutor" exact component={Detail} />
      <Route path="/videochat/:roomName" exact component={VideoChat} />
      <Route path="/search" exact component={Search} />
      <Footer />
      <BsPatchPlus
        className="feedback"
        size={60}
        onClick={() => setFeedbackOn(!feedbackOn)}
      />
      {feedbackOn && <Feedback>피드백을 남겨주세요!</Feedback>}
    </ConnectedRouter>
  );
}

export default App;

const Feedback = styled.div`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 0px #00000040;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
