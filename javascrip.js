// Biblioteca Terceiros
const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format("DD"),
      semana: {
        curto: dayjs(data).format("ddd"),
        longo: dayjs(data).format("dddd"),
      },
    },
    mes: dayjs(data).format("MMMM"),
    hora: dayjs(data).format("HH:mm"),
  }
}

formatador(new Date("2024-04-01"))

// Objeto
const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-08 10:00"),
  finalizada: true,
}

// lista, array, vetor [a, b, c = 1, 2, 3]
let atividades = [
  atividade,
  {
    nome: "Academia em grupo",
    data: new Date("2024-07-09 12:00"),
    finalizada: false,
  },
  {
    nome: "Gaming session",
    data: new Date("2024-07-09 16:00"),
    finalizada: true,
  },
]

// atividades = []

// arrow function
const criarItemDeAtividade = (atividade) => {
  let input = ' <input type="checkbox" '

  if (atividade.finalizada) {
    input = input + "checked"
  }
  // input += ">"
  input = input + ">"

  const formatar = formatador(atividade.data)

  return `
  <div>
  ${input}
   <span>${atividade.nome}</span>
   <time>
   ${formatar.dia.semana.longo},
   dia ${formatar.dia.numerico}
   de ${formatar.mes}
   as ${formatar.hora}h </time>
  </div> 
 `
}

const atualizarListaDeAtividade = () => {
  const section = document.querySelector("section")

  // Verificar se a lista esta vazia
  if (atividades.length == 0) {
    section.innerHTML = `<p>Nenhuma atividade cadastrada</p>`
    return
  }

  for (let atividade of atividades) {
    section.innerHTML = section.innerHTML + criarItemDeAtividade(atividade)
  }
}

atualizarListaDeAtividade()

const salvarAtividade = (event) => {
  event.preventDefault()
}

const criarDiasSelecao = () => {
  const dias = [
    "2024-02-28",
    "2024-02-29",
    "2024-03-1",
    "2024-03-2",
    "2024-03-03",
  ]

  let diasSelecao = ""

  for (let dia of dias) {
    const formatar = formatador(dia)
    const diaFormatado = `
    ${formatar.dia.numerico} de
    ${formatar.mes}
    `
    diasSelecao += `
    <option value="${dia}">${diaFormatado}</option>
    `
  }

  document.querySelector('select[name="dia').innerHTML = diasSelecao
}
criarDiasSelecao()

const criarHorasSelecao = () => {
  let horasDisponiveis = ""

  for (let i = 6; i < 23; i++) {
    horasDisponiveis += `<option value="${i}:00">${i}:00</option>`
  }

  document.querySelector('select[name="hora"]').innerHTML = horasDisponiveis
}

criarHorasSelecao()
