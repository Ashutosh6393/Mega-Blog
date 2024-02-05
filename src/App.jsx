import "./App.css";
import conf from "./conf/conf";
function App() {
  console.log(conf.appwriteDatabaseId);
  console.log(conf.appwriteCollectionId);
  return (
    <>
      <h1>this is a blog website</h1>
    </>
  );
}

export default App;
