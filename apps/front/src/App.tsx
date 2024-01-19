import { Post } from '@/components/feature'
import { SectionLayout } from '@/components/layouts'
import { Container, Theme } from '@radix-ui/themes'
function App() {
  return (
    <Theme accentColor="teal">
      <Container
        size='1'
        className='[font-family:roboto]'
      >
        <SectionLayout
          title='Publication box'
        >
          
        </SectionLayout>
        <SectionLayout
          title='Posts'
        >
          {
            Array(25).fill(null).map((_, index) => (<Post key={index} />))
          }
        </SectionLayout>
      </Container>
    </Theme>
  )
}

export default App
