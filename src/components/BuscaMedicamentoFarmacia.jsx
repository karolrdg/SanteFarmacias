export default function BuscaMedicamentoFarmacia() {

  let primeiroMedicamento = [
    {
      id: Math.random(),
      medicamento: "Ácido Acetilsalicílico",
      dosagem: "100mg",
      laboratorio: "EMS",
      tipo: "Medicamento comum",
      descricao:
        "Ácido acetilsalicilico 100mg Genérico EMS é utilizado em manifestações dolorosas e febre. Pode ser utilizado para o alívio sintomático da cefaléia, odontalgia, dor de garganta, dismenorréia, mialgia ou artralgia, lombalgia e dor artrítica de pequena intensidade. No resfriado comum ou na gripe, para o alívio sintomático da dor e da febre. O medicamento está contra-indicado a pacientes com doenças no estômago, fígado e rins. Não deve ser usado em hemofílicos e naqueles pacientes que estejam fazendo uso de anticoagulantes.",
      preco: "9,23",
    },

    {
      id: Math.random(),
      medicamento: "Ácido Acetilsalicílico",
      dosagem: "500mg",
      laboratorio: "EMS",
      tipo: "Medicamento comum",
      descricao:
        "Ácido acetisalicilico 100mg Genérico EMS é utilizado em manifestações dolorosas e febre. Pode ser utilizado para o alívio sintomático da cefaléia, odontalgia, dor de garganta, dismenorréia, mialgia ou artralgia, lombalgia e dor artrítica de pequena intensidade. No resfriado comum ou na gripe, para o alívio sintomático da dor e da febre. O medicamento está contra-indicado a pacientes com doenças no estômago, fígado e rins. Não deve ser usado em hemofílicos e naqueles pacientes que estejam fazendo uso de anticoagulantes.",
      preco: "2,4",
    },
    
  ];

  if (localStorage.getItem("ListaMedicamentos")) {
    console.log(`Carregados com sucesso`);
  } else {
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(primeiroMedicamento)
    );

    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(primeiroMedicamento)
    );
  }
  return console.log(`inicializado com sucesso`);
}
