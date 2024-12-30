import './App.css'
import { useRecoilValue , RecoilRoot} from 'recoil';
import { networkAtom,meAtom,jobsAtom,messageAtom,notificationAtom,totalNotificationSelector } from './atoms.js';

function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messageAtom);
  const meNotificationCount = useRecoilValue(totalNotificationSelector);


  return (
    <>
      <button>Home</button>
      <button>My Network({networkNotificationCount>=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobsNotificationCount})</button>
      <button>Messaging({messagingNotificationCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Me({meNotificationCount})</button>
    </>
  )
}

export default App
