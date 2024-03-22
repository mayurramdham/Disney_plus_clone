// import { Container } from "@material-ui/core";
import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/Assets/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier access to Raya and the Last Dragon for an additional fee
            with Disney+ subscription. As of 03/10/2024. the price of Disney+
            and the Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/Assets/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  widdth: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url("Assets/login-background.jpg");
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 18px;
  border: 1px solid transparent;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
