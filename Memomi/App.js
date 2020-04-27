import * as React from 'react'; 
import { NavigationContainer,useLinking } from '@react-navigation/native';
import MyNavigation from './components/navigation';

const App = () => {

  const ref = React.useRef();

  const { getInitialState } = useLinking(ref, {
    prefixes: ['http://myapp'],
    config: { Screen2: 'screen2' }
  });

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    Promise.race([
      getInitialState(),
      new Promise(resolve =>
        // Timeout in 150ms if `getInitialState` doesn't resolve
        // Workaround for https://github.com/facebook/react-native/issues/25675
        setTimeout(resolve, 150)
      ),console.log(ref)
    ])
      .catch(e => {
        console.error(e);
      })
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
          console.log(state)
        }

        setIsReady(true);
      });
      console.log(initialState)
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

  console.log(initialState)



  return (
   <NavigationContainer initialState={initialState} ref={ref}>
      <MyNavigation/>
    </NavigationContainer>
  );

};



export default App;
