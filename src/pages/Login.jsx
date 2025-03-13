import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Thực hiện kiểm tra đăng nhập ở đây
    if (username === 'admin' && password === 'password') {
      // Đăng nhập thành công, chuyển hướng đến trang khác
      // history.push('/dashboard');
    } else {
      alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tên người dùng và mật khẩu.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Tên người dùng:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Mật khẩu:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default Login;