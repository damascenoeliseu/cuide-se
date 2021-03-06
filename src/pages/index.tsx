import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { DefaultTheme } from 'styled-components';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { ToggleTheme } from '../components/ToggleTheme';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';

import styles from '../styles/pages/Home.module.css';
import GlobalStyle from '../styles/global';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  theme: DefaultTheme;
}

export default function Home(props: HomeProps) {
  return (
    <ChangeThemeProvider theme={props.theme}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <title>Início | Move.it</title>
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
        </div>
        <GlobalStyle />
      </ChallengesProvider>
    </ChangeThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted, theme } = context.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
      theme: theme ? JSON.parse(theme) : null,
    }
  }
}
