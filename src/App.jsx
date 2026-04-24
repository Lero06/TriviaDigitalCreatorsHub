import {BrowserRouter,Routes,Route }from'react-router-dom'
importHomefrom'./pages/Home'
importQuizfrom'./pages/Quiz'
importResultfrom'./pages/Result'

functionApp() {
return (
<BrowserRouter>
<Routes>
<Routepath="/"element={<Home/>}/>
<Routepath="/quiz"element={<Quiz/>}/>
<Routepath="/result"element={<Result/>}/>
</Routes>
</BrowserRouter>
  )
}

exportdefaultApp