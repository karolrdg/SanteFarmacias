import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function EstruturaMapa() {

  let listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"));

  return (
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
          center={[-26.3012762, -48.8495388]}
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
                    <b>Telefone:</b> {farmacia.telefone}
                    <br />
                  </span>
                ) : null}
                <span>
                  <b>Celular:</b> {farmacia.celular}
                </span>
                <br />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
