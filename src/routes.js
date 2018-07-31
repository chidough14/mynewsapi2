import Listing from './components/Listing'
import SingleListing from './components/SingleListing'

const routes = [
  {path: '/', name: 'home', component: Listing},
  {path: '/show', name: 'singleList', component: SingleListing}
]

export default routes
