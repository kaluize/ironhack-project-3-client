import "../../app.css";
import johnTravolta from "../../images/confused-john-travolta.gif";


export function ErrorPage() {
    return (
      <div className="errorPage">

        <div>
        <img src={johnTravolta} alt="john"/>
         </div>

        <div className="texto">
          <h1>Oops!</h1> 
          <h1>Página não encontrada.</h1>
          <br></br>
          <p>Infelizmente não encontramos o endereço que você procura.</p>
          <p>Confira a URL ou retorne à página inicial.</p>
          <a class="navigation" href="/">Home</a>
    </div>
      </div>
    );
  }