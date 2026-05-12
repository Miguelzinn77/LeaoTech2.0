import Navbar from "../components/navbar";
import "./home.css";

function Home() {
  return (
    <>
      <main className="main-home">
        <h1 class=""> Essa é a nossa home </h1>
      
      <div class="container-fluid">
        <div class="row d-flex">
          <div className="col-2 d-flex">
            <ul class="">
              <li>Nome 1</li>
              <li>Nome 1</li>
              <li>Nome 1</li>
              <li>Nome 1</li>
              <li>Nome 1</li>
              <li>Nome 1</li>
            </ul>
          </div>
<div class="col-8 d-flex"> 
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus mollitia quos quod repudiandae eius labore culpa repellat deleniti pariatur delectus, ad id natus earum animi explicabo voluptatibus eum alias?</p>
</div>

<div class="col-8">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus mollitia quos quod repudiandae eius labore culpa repellat deleniti pariatur delectus, ad id natus earum animi explicabo voluptatibus eum alias?</p>
</div>

        </div>
      </div>
      </main>
    </>
  );
}

export default Home;
