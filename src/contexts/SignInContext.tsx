import { createContext, useState } from 'react';

import { UsernameModal } from '../components/UsernameModal';

interface SignInContextData {
   closeUsernameModal: () => void;
}

export const SignInContext = createContext({} as SignInContextData);

export function SignInProvider() {
   const [isUsernameModalOpen, setIsUsernameModalOpen] = useState(true);

   function closeUsernameModal() {
      setIsUsernameModalOpen(false);
   }

   return (
      <SignInContext.Provider
         value={{
            closeUsernameModal
         }}
      >
         {isUsernameModalOpen && <UsernameModal />}
      </SignInContext.Provider>
   );

}