import { Post } from '@/components/feature'
import { Container, Theme } from '@radix-ui/themes'
function App() {
  return (
    <Theme accentColor="teal">
      <Container
        size='1'
        className='[font-family:roboto]'
      >
        <div
          className='w-full h-full flex flex-col gap-1 mt-5'
        >
          <header>
            <h1 className='font-bold text-xl'>Posts</h1>
          </header>
          {
            Array(25).fill(null).map((_, index) => (<Post key={index} />))
          }
        </div>
      </Container>
    </Theme>
  )
}

export default App
