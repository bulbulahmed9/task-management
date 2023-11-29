import MainContent from "./layout/MainContent";
import Theme from "./layout/Theme";
import Topbar from "./layout/Topbar";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Theme>
      <Topbar />
      <MainContent />
      <ToastContainer position="bottom-right" />
    </Theme>
  );
};

export default App;
