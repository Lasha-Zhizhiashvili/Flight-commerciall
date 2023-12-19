import { useParams } from "react-router-dom";
import { Cards } from '../components/cardInfo'

function ManyCards() {
  
  const { id } = useParams();
  const i = id - 1;

  return (
    <>
      <div
        className="NoEnemy"
        style={{
          width: "100%",
          textAlign: "center",
          paddingTop: "50px",
          backgroundImage:
            "url(http://localhost:3000/static/media/Youhavenoenemys.49024662b086c1e34819.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom: '50px'
        }}
      >
        <img
          src={Cards[i].image}
          style={{
            borderRadius: "8px",
            border: "2px solid gray",
            padding: "5px",
            maxWidth: '100%'
          }}
        ></img>
        <h1 style={{ marginTop: "30px", fontSize: "60px" }}>{Cards[i].text}</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="Vinland">
            <h5 style={{ color: "black", padding: '0 200px', marginTop: '30px'}}>
              Vinland Saga is a popular manga series written and illustrated by
              Makoto Yukimura. The series is set in Europe during the Viking Age
              and follows the story of Thorfinn, a young warrior who seeks
              revenge against his father's killer. The series is known for its
              well-crafted dialogue and deep exploration of themes such as
              revenge, morality, and purpose. vbnet Copy code
              <br />
              <br />
              Here are some of the most memorable quotes from the series:
              <br />
              <br />
              <i>
                "Warrior's honor? The thing that makes you fight like animals,
                killing each other without even knowing why?" - Thorfinn
              </i>
              <br />
              <br />
              This quote from the protagonist Thorfinn highlights his
              disillusionment with the concept of warrior's honor. Thorfinn, who
              has been trained to fight since childhood, has seen firsthand the
              brutality and senselessness of war. He believes that fighting for
              a cause that he does not believe in is meaningless.
              <br />
              <br />
              <i>
                "Everyone has something they can't give up. Something they want
                to protect at all costs. That's what it means to have something
                worth living for." - Askeladd
              </i>
              <br />
              <br />
              Askeladd, the cunning Viking mercenary and antagonist of the
              series, shares this thought on what motivates people to keep
              going. He suggests that everyone has something that they care
              about deeply and will go to great lengths to protect. This idea
              resonates with Thorfinn, who finds a new sense of purpose in
              protecting his friends and family.
              <br />
              <br />
              <i>
                "If you're only thinking about the past, you'll never have a
                future." - Canute
              </i>
              <br />
              <br />
              Canute, the young Danish prince, shares this wisdom with Thorfinn.
              He acknowledges that the past is important, but dwelling on it too
              much can hold one back from moving forward. This quote highlights
              the importance of letting go of the past and looking towards the
              future.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManyCards;
