import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function EstruturaMapa() {
  let listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"));

  return (
    <div style={{ marginTop: "1px" }}>
      <div
        className="row align-items-center mt-3 vh-100 ms-n5"
        style={{ position: "fixed" }}
      >
        <div
          className="mt-4 pt-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MapContainer
            center={[-28.6783, -49.3704]}
            zoom={6}
            scrollWheelZoom={true}
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {listaFarmacias.map((farmacia) => (
              <Marker
                position={[farmacia.latitude, farmacia.longitude]}
                key={farmacia.id}
              >
                <Popup>
                  <h6>{farmacia.nome}</h6>
                  <span>
                    <b>Razão Social:</b> {farmacia.razao}
                  </span>
                  <br />
                  <span>
                    <b>CNPJ:</b> {farmacia.cnpj}
                  </span>
                  <br />
                  <span>
                    <b>Endereço:</b> {farmacia.logradouro},{farmacia.numero} -{" "}
                    {farmacia.bairro} - {farmacia.cidade}/{farmacia.estado}
                  </span>
                  <br />
                  {farmacia.complemento ? (
                    <span>
                      <b>Complemento:</b> {farmacia.complemento}
                      <br />
                    </span>
                  ) : null}
                  <span>
                    <b>E-mail:</b> {farmacia.email}
                  </span>
                  <br />
                  {farmacia.telefone ? (
                    <span>
                      <b>WhatsApp:</b> {farmacia.a}
                      <a href="https://wa.me/5548998135788" target="_blank">
                        Enviar mensagem no WhatsApp
                      </a>
                      <br />
                    </span>
                  ) : null}
                  <span>
                    <b>Telefone:</b> {farmacia.telefone}
                  </span>
                  <br />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      );
    </div>
  );
}
