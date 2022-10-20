import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { InnerContent } from './pages/Home/components/Main/components/Content/components/CardIssue/components/InnerContent'

export function Router() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route path="/content">
        <Route path=":issuesid" element={<InnerContent />} />
      </Route>
    </Routes>
  )
}
