import StartImgMob1x from 'assets/images/welcome/welcome-mob-1x.png';
import StartImgMob2x from 'assets/images/welcome/welcome-mob-2x.png';
import StartImgTab1x from 'assets/images/welcome/welcome-tab-1x.png';
import StartImgTab2x from 'assets/images/welcome/welcome-tab-2x.png';
import StartImgDesk1x from 'assets/images/welcome/welcome-desk-1x.png';
import StartImgDesk2x from 'assets/images/welcome/welcome-desk-2x.png';
import Lightning from 'components/Icons/Lightning';
import {
  WelcomeBg,
  LogoWrap,
  AuthNavWrap,
  AuthRegisterLink,
  AuthLoginLink,
} from './Welcome.styled';

const Welcome = () => {
  return (
    <WelcomeBg>
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet={`${StartImgMob1x} 1x, ${StartImgMob2x} 2x`}
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${StartImgTab1x} 1x, ${StartImgTab2x} 2x`}
        />

        <source
          media="(min-width: 1440px)"
          srcSet={`${StartImgDesk1x} 1x, ${StartImgDesk2x} 2x`}
        />

        <img
          src={StartImgMob1x}
          srcSet={`${StartImgMob1x} 1x, ${StartImgMob2x} 2x`}
          alt="User with laptop"
        />
      </picture>

      <LogoWrap>
        <span>
          <Lightning width={15} height={20} fillColor={'#fff'} />
        </span>
        <h1>Task Pro</h1>
      </LogoWrap>

      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>

      <AuthNavWrap>
        <AuthRegisterLink to="/auth/register">Registration</AuthRegisterLink>
        <AuthLoginLink to="/auth/login">Log In</AuthLoginLink>
      </AuthNavWrap>
    </WelcomeBg>
  );
};

export default Welcome;
