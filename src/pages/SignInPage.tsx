import React from 'react';
import '../style/signInPage.scss';

export default function SignInPage() {
  return (
    <div className="signin-page">
      <div className="img-wrap">
        <img src="/gitFollower-logo.png" alt="깃팔로워 로고" />
      </div>
      <div className="login-wrap">
        <div className="nickname">
          <div>Github Nickname</div>
          <input type="text" />
          <button type="button">Check</button>
        </div>
        <div className="token">
          <div>Github Token</div>
          <input type="text" />
          <button type="button">Check</button>
        </div>
        <div className="register">
          <button type="submit">Register</button>
          <div>깃허브에서 찾을 수 없는 닉네임입니다.</div>
        </div>
      </div>
    </div>
  );
}
