import {Text} from 'react-native';
import {AppBaseContextProvider} from './app-base.context';

export type AppBaseProps = {};

export function AppBase() {
  return (
    <AppBaseContextProvider>
      <Text>This is app base. Setup the context for app base here.</Text>
    </AppBaseContextProvider>
  );
}
