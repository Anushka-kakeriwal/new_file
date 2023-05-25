import Footer from "./component/Footer";
import Header from "./component/Header";

const App = () => {
  return (
    // <Router>
      <div>
       <Header/>

        {/* <Route path="/infrared" component={Infrared} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/narrative-sleep" component={NarrativeSleep} />
        <Route path="/infrared-special" component={InfraredSpecial} />
        <Route path="/comment" component={Comment} />
        <Route path="/infrared-in-conversation" component={InfraredInConversation} /> */}
        <Footer/>
      </div>
    // </Router>
  );
}

export default App;
