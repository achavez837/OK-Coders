import "./products.css";

const green =
  "https://st3.depositphotos.com/2815743/37049/i/600/depositphotos_370491380-stock-photo-different-size-shapes-containers-cleanser.jpg";
const orange =
  "https://st4.depositphotos.com/4136121/27594/i/600/depositphotos_275941244-stock-photo-generic-beauty-products-on-orange.jpg";
const blue =
  "https://images.squarespace-cdn.com/content/v1/532622d2e4b0ba32c2405e90/1601660371980-LPDW2NG0JA2Q2A2F669I/jenna_gang_beauty_products_blue_on_blue_2.jpg";

const Products = () => {
  return (
    <div className="products">
      <div className="green productBox">
        <img id="green" src={green} alt="green" />
        <div className="greenText text">
          <h1>Green</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dolor corrupti, tempore similique pariatur harum, aspernatur unde
            est sint eius cum modi voluptatibus natus inventore animi! Suscipit
            omnis earum architecto cupiditate, saepe assumenda itaque voluptate
            sequi temporibus aliquam soluta qui sunt reprehenderit et possimus
            vitae deleniti enim doloribus at voluptates. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eaque rem iusto illum obcaecati
            dolore quaerat omnis, aspernatur sequi, modi officia explicabo odit
            eos incidunt quae.
          </p>
        </div>
      </div>
      <div className="orange productBox">
        <div className="orangeText text">
          <h1>Orange</h1>
            <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias unde
            vel repellat dicta maxime recusandae autem velit consequatur, harum
            expedita aperiam dolore nemo nihil adipisci, quibusdam quidem iure
            nesciunt, tempora ipsa consectetur quia accusamus aliquid eos ut.
            Minus, facilis hic ipsam mollitia, quisquam natus velit itaque
            placeat a deserunt consequatur delectus voluptatem dolorem officia
            eveniet explicabo quis omnis labore earum perspiciatis laborum quasi
            sapiente. Quos nostrum beatae dolor delectus nihil reprehenderit
            eligendi maiores possimus autem!
          </p>
        </div>
        <img id="orange" src={orange} alt="orange" />
      </div>
      <div className="blue productBox">
        <img id="blue" src={blue} alt="blue" />
        <div className="blueText text">
          <h1>Blue</h1>
            <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            nihil laboriosam aperiam tenetur harum expedita voluptatibus eum
            autem ipsum, sint pariatur molestias labore quas ratione magni sit
            iure reiciendis laudantium alias quibusdam tempore sapiente. Sint
            accusantium architecto saepe voluptates pariatur maiores mollitia
            molestias et repudiandae nobis non eos ducimus, explicabo beatae quo
            recusandae id exercitationem est atque amet, ex asperiores tempore
            animi incidunt. Aliquam commodi amet harum nam minus nobis fuga quam
            qui quibusdam iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
