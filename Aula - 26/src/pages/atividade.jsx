import Navbar from '../components/Navbar'
import Footer from '../components/footer'

function Atividade(){
    return (
        <>
        <Navbar />
<div className='container'>
    <div class="row">
        <div class="col-3">
            conteudo 1
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, enim nobis soluta voluptas dolorum aspernatur. Eius nostrum sequi rem corporis natus nam, voluptas aspernatur totam optio deleniti, veritatis maxime! Tempora!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde libero autem earum iusto nam! Voluptatibus architecto maxime veritatis dolores quasi dolorum, deleniti quas, cumque non repellat, minima eius explicabo!</p>
        </div>

 <div class="col-9">
            <h1 class="text-center"> conteudo 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, enim nobis soluta voluptas dolorum aspernatur. Eius nostrum sequi rem corporis natus nam, voluptas aspernatur totam optio deleniti, veritatis maxime! Tempora!</p>

<div class="container text-center py-5 border border-5 m-3">
    conteudo em branco
</div>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores iure, soluta amet cupiditate qui atque necessitatibus reiciendis quasi dolores nesciunt tenetur tempore corrupti dignissimos dolor quibusdam? Dolorem earum iste maiores?</p>


<h1 class="text-center"> conteudo 2</h1>
<div class="container text-center py-5 border border-5 m-3">
    conteudo em branco
</div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias culpa temporibus odit! Magni reprehenderit illo voluptatem vel tenetur ratione suscipit officia autem pariatur, omnis animi nihil quod. Dicta, dolorem!</p>
        </div>

    </div>
    </div>

    <div class="container-fluid bg-danger py-3">
        <h1 class="text-center"> conteudo em branco </h1>

    </div>
        

        <Footer />
        </>
    )
}

export default Atividade;