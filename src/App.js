import maison from './maison.png';
import './App.css';

function App() {
  return (
    <div className="App">
       
        <img src={maison} className="Img_maison" alt="photo_maison" />
        <h1>Blog post published</h1>
        <p>
        this blog post has been published Team members will be <br></br> able to edit this post and republish changes.
        </p>
      

      <div className="button">
          <input type='button' value="Cancel" className='btn btn_cancel'/>
          <input type='button' value="Confirm" className='btn btn_confirm'/>
      </div>
     </div>
  );
}

export default App;
