import MainContent from "./layout/MainContent";
import Theme from "./layout/Theme";
import Topbar from "./layout/Topbar";

const App = () => {
  return (
    <Theme>
      <Topbar />
      <MainContent />
    </Theme>
  );
};

export default App;
