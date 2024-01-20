import { swrConfig } from '@/config';
import { HomePage } from '@/pages';
import { Container, Theme } from '@radix-ui/themes';
import { SWRConfig } from 'swr';

function App() {
  return (
    <Theme accentColor="teal" appearance='dark'>
      <Container
        size='1'
        className='[font-family:roboto]'
      >
        <SWRConfig
          value={swrConfig}
        >
          <HomePage />
        </SWRConfig>
      </Container>
    </Theme>
  );
}

export default App;
