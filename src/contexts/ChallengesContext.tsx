import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import { GitHubUser, SignInContext } from './SignInContext';

interface ChallengesProviderProps {
   children: ReactNode;
}

interface Challenge {
   type: 'body' | 'eye';
   description: string;
   amount: number;
}

interface ChallengesContextData {
   level: number,
   currentExperience: number,
   experienceToNextLevel: number,
   challengesCompleted: number;
   activeChallenge: Challenge;
   levelUp: () => void;
   startNewChallenge: () => void;
   resetChallenge: () => void;
   completeChallenge: () => void;
   closeLevelUpModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
   const { user, gitHubUsers } = useContext(SignInContext);

   const [gitHubUser, setGitHubUser] = useState<GitHubUser[]>(gitHubUsers);
   const [level, setLevel] = useState(user.level);
   const [currentExperience, setCurrentExperience] = useState(user.currentExperience);
   const [challengesCompleted, setChallengesCompleted] = useState(user.challengesCompleted);
   const [activeChallenge, setActiveChallenge] = useState(null);
   const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

   const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

   useEffect(() => {
      Notification.requestPermission();
   }, []);

   useEffect(() => {
      const foundUser = gitHubUser.find(gHUser => gHUser.userData.login === user.userData.login);
      if (!foundUser) {
         setGitHubUser([...gitHubUser, user]);
      }
   }, []);

   useEffect(() => {
      Cookies.set('gitHubUser', JSON.stringify(gitHubUser));
   }, [gitHubUser]);

   useEffect(() => {
      if (level !== 1 || challengesCompleted !== 0 || currentExperience !== 0) {
         const updatedUser = gitHubUser.map(ghUser => {
            if (ghUser.userData.login === user.userData.login) {
               return {
                  ...ghUser,
                  level,
                  currentExperience,
                  challengesCompleted,
               };
            } else {
               return ghUser;
            }
         });
         setGitHubUser(updatedUser);
      }
   }, [level, currentExperience, challengesCompleted]);

   function levelUp() {
      setLevel(level + 1);
      setIsLevelUpModalOpen(true);
   }

   function closeLevelUpModal() {
      setIsLevelUpModalOpen(false);
   }

   function startNewChallenge() {
      /* gera um índice aleatório da quantidade de objetos do arquivo challenges.json
       * para escolher um desafio na linha de comando abaixo */
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];

      setActiveChallenge(challenge);

      new Audio('/notification.mp3').play();

      if (Notification.permission === 'granted') {
         new Notification('Novo desafio 🎉', {
            body: `Valendo ${challenge.amount} xp!`
         });
      }
   }

   function resetChallenge() {
      setActiveChallenge(null);
   }

   function completeChallenge() {
      if (!activeChallenge) {
         return;
      }

      const { amount } = activeChallenge;
      let finalExperience = currentExperience + amount;

      if (finalExperience >= experienceToNextLevel) {
         finalExperience = finalExperience - experienceToNextLevel
         levelUp();
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengesCompleted(challengesCompleted + 1);
   }

   return (
      <ChallengesContext.Provider
         value={{
            level,
            currentExperience,
            experienceToNextLevel,
            challengesCompleted,
            activeChallenge,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completeChallenge,
            closeLevelUpModal,
         }}
      >
         {children}
         {isLevelUpModalOpen && <LevelUpModal />}
      </ChallengesContext.Provider>
   );
}