import BrandsCardsContainer from './containers/BrandsCardsContainer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Latest from './components/Latest'
import TopByInterest from './components/TopByInterest'
import TopByFans from './components/TopByFans'
import PhoneListContainer from './containers/PhoneListContainer'
import PhoneSpecsContainer from './containers/PhoneSpecsContainer'
import WrapperContainer from './containers/Wrapper'

const App = () => {
  return (
    <div>
      <Navbar />
      <WrapperContainer>
        <Routes>
          <Route path="/" element={<BrandsCardsContainer />} />
          <Route path="/brands/:brandSlug" element={<PhoneListContainer />} />
          <Route path="/:phoneSlug" element={<PhoneSpecsContainer />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/interest" element={<TopByInterest />} />
          <Route path="/fans" element={<TopByFans />} />
        </Routes>
      </WrapperContainer>
    </div>
  )
}

export default App
