import data from "./assets/data.json";
import "./dataPage.css";
import logo from "./assets/logo-mastercraft.svg";
import iconBookmark from "./assets/icon-bookmark.svg";

export function DataPage() {
  return (
    <>
      <div className="Container">

        <div className="card-600 card-bookmark">
          <img className="logo-mastercraft" src={logo} />
          <h3 className="weigt700 font-h3">Mastercraft bamboo monitor riser</h3>
          <p className="font-16 weigt400">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="opcion-bookmark">
            <button>Back this project</button>
            <a href="#" className="weigt700">
              <img className="img-boolmark" src={iconBookmark} />
              Bookmark
            </a>
          </div>
        </div>

        <div className="card-600">
          <div className="group-count">
            <div>
              <h2 className="weigt700 font-count">$89,914</h2>
              <p className="font-16 weigt400">of $100,000 backed</p>
            </div>
            <div className="separador"></div>
            <div>
              <h2 className="weigt700 font-count">5,007</h2>
              <p className="font-16 weigt400">total backers</p>
            </div>
            <div className="separador"></div>
            <div>
              <h2 className="weigt700 font-count">56</h2>
              <p className="font-16 weigt400">day Left</p>
            </div>
          </div>

          <div className="bar-total">
            <div></div>
          </div>
        </div>

        <div className="card-600">
          <div>
            <h3 className="weigt700 title-info">About this project</h3>
            <p className="font-16 weigt400 font-info">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand. <br></br><br></br>Featuring artisan
              craftsmanship, the simplicity of design creates extra desk space
              below your computer to allow notepads, pens, and USB sticks to be
              stored under the stand.
            </p>
          </div>

          <div>
            {data.map((data) => (
              <CardData data={data} />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}

const CardData = ({ data }) => {
  return (
    <>
      <div className="card-data">
        <div className="card-header">
          <h4 className="weigt700 font-19">{data.title}</h4>
          <p className="weigt500 font-precio">Pledge {data.precio} or more</p>
        </div>
        <p className="font-16 weigt500 font-descripcion">{data.descripcion}</p>
        <div className="card-footer">
          <p className="font-left"><span className="weigt700">{data.left} </span> left</p>
          <button className="weigt500">Select Reward</button>
        </div>
      </div>
    </>
  );
};
