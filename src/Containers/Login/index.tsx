import React from 'react';
import Button from '../../Components/Button';
import Form from '../../Components/Form';
import InputField from '../../Components/InputField';
import SubmitButton from '../../Components/InputButton';
import { colorPalette } from '../../config/colorPalette';
import { Background, Divider, LoginContainer } from './styles';
import { FaArrowRight, FaSign } from 'react-icons/fa';

const Login: React.FC = () => {

  const handleLogin = () => {

  }

  return (
    <Background>
      <LoginContainer>
        <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '20px' }}>
          <img src="/static/aaaa.png" width="50px" style={{ marginRight: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span>Animes/Series List</span>
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: colorPalette.primary[900] }}>Mantenha suas séries e animes aqui!</span>
          </div>
        </div>
        <Divider />
        <div style={{ gap: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: `${colorPalette.primary[200]}` }}>
          <span>Login</span>
          <div style={{ width: '100%' }}>
            <Form handleSubmit={handleLogin}>
              <InputField label="Nickname" name="nickname" />
              <InputField label="Senha" name="senha" type="password" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "15px",
                  gap: "10px",
                }}
              >
                <SubmitButton label="Entrar" style={{ width: '100%' }} />
              </div>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: '20px', fontSize: '12px' }}>
              <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px'  }}>
                <span>Sign up </span><FaArrowRight />
              </div>
            </div>
          </div>
          
        </div>
      </LoginContainer>
    </Background>
  )
}

export default Login;