export default function FAQ() {
    return (
      <div className="container pt-5">
        <div className="mt-5 p-4 ">
          <h4>Perguntas Frequentes</h4>
          <p>
          Caso você tenha alguma dúvida ou precise de ajuda, confira a lista abaixo com as perguntas mais frequentes que recebemos. Talvez alguma delas possa te ajudar a esclarecer o que você precisa.
          </p>
          <br />
          <div className="accordion" id="accordionFaq">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Lorem ipsum dolor
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti accusantium iste assumenda dicta ipsam a ut non vero minima
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Lorem ipsum dolor
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus quaerat dignissimos ullam reprehenderit numquam, reiciendis dolores adipisci, autem impedit, laudantium nihil mollitia repellat quasi!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Lorem ipsum dolor
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, explicabo ea ut blanditiis at alias corporis praesentium impedit nesciunt. Ad adipisci rem molestias incidunt accusamus assumenda eos mollitia, modi nisi.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Lorem ipsum dolor
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure fugit dolores. Facere est nam, sit numquam saepe explicabo itaque doloremque consectetur incidunt accusantium officiis delectus, ratione nostrum vitae blanditiis!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  >
                  Lorem ipsum dolor
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus quaerat dignissimos ullam reprehenderit numquam, reiciendis dolores adipisci, autem impedit, laudantium nihil mollitia repellat quasi!
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    );
  }
  