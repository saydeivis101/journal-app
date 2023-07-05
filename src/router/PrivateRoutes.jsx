
import { Route, Routes } from "react-router-dom"
import { JournalPage } from "../journal/pages/JournalPage"

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/auth/:" element={<JournalPage />} />
    </Routes>
  )
}
