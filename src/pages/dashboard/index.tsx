import Head from 'next/head';
import { useContext } from 'react';

import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { ChallengeBox } from "../../components/ChallengeBox";
import { ToggleTheme } from '../../components/ToggleTheme';

import { CountdownProvider } from '../../contexts/CountdownContext';

import { SignInContext } from '../../contexts/SignInContext'
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { ChangeThemeProvider } from '../../contexts/ChangeThemeContext';

import { Container } from './styles';
import GlobalStyle from '../../styles/global';

export default function Dashboard() {
  const { user, theme } = useContext(SignInContext);

  return (
    <>
      <ChangeThemeProvider theme={theme}>
        <ChallengesProvider>
          <Container>
            <Head>
              <title>{`${user.userData.login} | Move.it`}</title>
            </Head>

            <ToggleTheme />

            <ExperienceBar />

            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </Container>
          <GlobalStyle />
        </ChallengesProvider>
      </ChangeThemeProvider >
    </>
  );
}
