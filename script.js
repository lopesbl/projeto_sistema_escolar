const state = {
  // dados de contato, matrícula, notas por disciplina e frequência de cada aluno.
  alunos: [
    {nome:"Ana Clara Oliveira",matricula:"2026005",email:"ana@email.com",telefone:"(11) 94444-1005",notas:{Matemática:8.0,"Português":8.5,História:9.0,Ciências:8.7,Geografia:8.5,Inglês:9.0,"Educação Física":9.0,Artes:9.5,Tecnologia:8.5},freq:95},
    {nome:"Beatriz Carvalho",matricula:"2026001",email:"beatriz@email.com",telefone:"(11) 98888-1001",notas:{Matemática:8.5,"Português":9.0,História:7.5,Ciências:8.0,Geografia:8.5,Inglês:9.0,"Educação Física":9.5,Artes:8.0,Tecnologia:9.0},freq:94},
    {nome:"Bruno Santos",matricula:"2026002",email:"bruno@email.com",telefone:"(11) 97777-1002",notas:{Matemática:5.0,"Português":6.0,História:5.5,Ciências:6.0,Geografia:5.5,Inglês:6.0,"Educação Física":7.0,Artes:6.5,Tecnologia:5.5},freq:78},
    {nome:"Camila Rodrigues",matricula:"2026009",email:"camila@email.com",telefone:"(11) 98888-1009",notas:{Matemática:7.5,"Português":8.0,História:7.0,Ciências:8.5,Geografia:8.0,Inglês:8.5,"Educação Física":9.0,Artes:8.5,Tecnologia:8.0},freq:91},
    {nome:"Daniel Carvalho",matricula:"2026020",email:"daniel@email.com",telefone:"(11) 95555-1020",notas:{Matemática:6.0,"Português":7.0,História:5.5,Ciências:6.5,Geografia:6.0,Inglês:6.5,"Educação Física":7.5,Artes:6.5,Tecnologia:6.0},freq:81},
    {nome:"Felipe Nascimento",matricula:"2026016",email:"felipe@email.com",telefone:"(11) 91111-1016",notas:{Matemática:5.0,"Português":5.5,História:6.0,Ciências:5.5,Geografia:5.0,Inglês:5.5,"Educação Física":6.5,Artes:6.0,Tecnologia:5.5},freq:79},
    {nome:"Gabriel Maia",matricula:"2026003",email:"gabriel@email.com",telefone:"(11) 96666-1003",notas:{Matemática:9.5,"Português":8.5,História:9.0,Ciências:9.2,Geografia:9.0,Inglês:8.5,"Educação Física":9.5,Artes:9.0,Tecnologia:9.5},freq:97},
    {nome:"Gustavo Ribeiro",matricula:"2026014",email:"gustavo@email.com",telefone:"(11) 93333-1014",notas:{Matemática:6.5,"Português":7.0,História:6.0,Ciências:7.5,Geografia:6.5,Inglês:7.0,"Educação Física":8.0,Artes:7.5,Tecnologia:7.0},freq:85},
    {nome:"Isabela Fernandes",matricula:"2026013",email:"isabela@email.com",telefone:"(11) 94444-1013",notas:{Matemática:8.5,"Português":7.5,História:8.0,Ciências:8.5,Geografia:8.0,Inglês:8.5,"Educação Física":9.0,Artes:8.5,Tecnologia:8.0},freq:93},
    {nome:"João Victor Souza",matricula:"2026018",email:"joao@email.com",telefone:"(11) 97777-1018",notas:{Matemática:7.0,"Português":6.0,História:6.5,Ciências:7.0,Geografia:7.0,Inglês:6.5,"Educação Física":8.0,Artes:7.0,Tecnologia:7.0},freq:87},
    {nome:"Juliana Martins",matricula:"2026007",email:"juliana@email.com",telefone:"(11) 92222-1007",notas:{Matemática:9.0,"Português":9.5,História:8.5,Ciências:9.0,Geografia:9.2,Inglês:9.5,"Educação Física":10.0,Artes:9.5,Tecnologia:9.0},freq:98},
    {nome:"Larissa Gomes",matricula:"2026011",email:"larissa@email.com",telefone:"(11) 96666-1011",notas:{Matemática:9.2,"Português":9.0,História:9.5,Ciências:9.3,Geografia:9.0,Inglês:9.5,"Educação Física":10.0,Artes:9.5,Tecnologia:9.2},freq:99},
    {nome:"Lucas Ferreira",matricula:"2026006",email:"lucas@email.com",telefone:"(11) 93333-1006",notas:{Matemática:7.0,"Português":6.5,História:7.5,Ciências:7.0,Geografia:7.5,Inglês:6.5,"Educação Física":8.0,Artes:7.0,Tecnologia:7.5},freq:88},
    {nome:"Mariana Lopes",matricula:"2026015",email:"mariana@email.com",telefone:"(11) 92222-1015",notas:{Matemática:9.8,"Português":9.2,História:9.0,Ciências:9.5,Geografia:9.5,Inglês:9.8,"Educação Física":10.0,Artes:9.5,Tecnologia:9.7},freq:100},
    {nome:"Matheus Costa",matricula:"2026012",email:"matheus@email.com",telefone:"(11) 95555-1012",notas:{Matemática:4.5,"Português":6.0,História:5.5,Ciências:5.0,Geografia:5.5,Inglês:5.0,"Educação Física":6.0,Artes:5.5,Tecnologia:5.0},freq:72},
    {nome:"Mônica Souza",matricula:"2026004",email:"monica@email.com",telefone:"(11) 95555-1004",notas:{Matemática:6.5,"Português":7.0,História:6.0,Ciências:6.5,Geografia:7.0,Inglês:7.5,"Educação Física":8.0,Artes:7.0,Tecnologia:7.5},freq:86},
    {nome:"Pedro Henrique Lima",matricula:"2026010",email:"pedro@email.com",telefone:"(11) 97777-1010",notas:{Matemática:6.0,"Português":5.5,História:7.0,Ciências:6.5,Geografia:6.0,Inglês:5.5,"Educação Física":7.0,Artes:6.5,Tecnologia:6.0},freq:82},
    {nome:"Rafael Almeida",matricula:"2026008",email:"rafael@email.com",telefone:"(11) 91111-1008",notas:{Matemática:5.5,"Português":6.0,História:5.0,Ciências:6.5,Geografia:5.5,Inglês:5.0,"Educação Física":6.5,Artes:6.0,Tecnologia:5.5},freq:75},
    {nome:"Sofia Mendes",matricula:"2026017",email:"sofia@email.com",telefone:"(11) 98888-1017",notas:{Matemática:8.0,"Português":9.0,História:8.5,Ciências:8.0,Geografia:8.5,Inglês:9.0,"Educação Física":9.5,Artes:9.0,Tecnologia:8.5},freq:96},
    {nome:"Vitória Alves",matricula:"2026019",email:"vitoria@email.com",telefone:"(11) 96666-1019",notas:{Matemática:9.0,"Português":8.5,História:9.0,Ciências:9.5,Geografia:9.0,Inglês:9.5,"Educação Física":9.5,Artes:9.0,Tecnologia:9.5},freq:97}
      ],
    // Lista de disciplinas oferecidas; cada item guarda os atributos da matéria.
  materias: [
    {nome:"Matemática",carga:80,turma:"2º A"},
    {nome:"Português",carga:80,turma:"2º A"},
    {nome:"História",carga:60,turma:"2º A"},
    {nome:"Ciências",carga:60,turma:"2º A"},
    {nome:"Geografia",carga:60,turma:"2º A"},
    {nome:"Inglês",carga:60,turma:"2º A"},
    {nome:"Educação Física",carga:40,turma:"2º A"},
    {nome:"Artes",carga:40,turma:"2º A"},
    {nome:"Tecnologia",carga:40,turma:"2º A"}
  ],
  // Lista de professores, com disciplina/turma/horário conforme o cadastro.
  professores: [
    {nome:"Mariana Costa",disciplina:"Matemática",email:"mariana@escola.com",turmas:"2º A, 2º B",horario:"Seg e Qua • 08:00–10:00"},
    {nome:"Ricardo Almeida",disciplina:"Português",email:"ricardo@escola.com",turmas:"2º A",horario:"Ter e Qui • 08:00–10:00"},
    {nome:"Juliana Ferreira",disciplina:"História",email:"juliana@escola.com",turmas:"2º A",horario:"Qua • 10:00–12:00"},
    {nome:"Soraia Amaro",disciplina:"Ciências",email:"soraia@escola.com",turmas:"2º A",horario:"Qui • 10:00–12:00"},
    {nome:"Carlos Mendes",disciplina:"Geografia",email:"carlos@escola.com",turmas:"2º A",horario:"Seg • 10:00–12:00"},
    {nome:"Patrícia Oliveira",disciplina:"Inglês",email:"patricia@escola.com",turmas:"2º A",horario:"Ter • 10:00–12:00"},
    {nome:"André Santos",disciplina:"Educação Física",email:"andre@escola.com",turmas:"2º A, 2º B",horario:"Qua e Sex • 13:00–14:00"},
    {nome:"Camila Rodrigues",disciplina:"Artes",email:"camila@escola.com",turmas:"2º A",horario:"Qui • 13:00–14:00"},
    {nome:"Lucas Pereira",disciplina:"Tecnologia",email:"lucas@escola.com",turmas:"2º A",horario:"Sex • 14:00–16:00"}
  ],
  // Lista de atividades; o campo de conclusão indica se está pendente ou feita.
  atividades: [
    {titulo:"Trabalho sobre frações",disciplina:"Matemática",tipo:"Trabalho",data:"2026-09-12",descricao:"Resolver e explicar 10 questões.",entregue:false},
    {titulo:"Redação: Meio Ambiente",disciplina:"Português",tipo:"Trabalho",data:"2026-09-15",descricao:"Produção de texto de 20 linhas.",entregue:false},
    {titulo:"Pesquisa sobre Brasil Colônia",disciplina:"História",tipo:"Projeto",data:"2026-09-20",descricao:"Pesquisa em dupla.",entregue:true},
    {titulo:"Experimento de Ciências",disciplina:"Ciências",tipo:"Projeto",data:"2026-09-25",descricao:"Relatório do experimento.",entregue:false},
    {titulo:"Mapa do Brasil",disciplina:"Geografia",tipo:"Trabalho",data:"2026-09-18",descricao:"Elaborar um mapa identificando as regiões brasileiras.",entregue:false},
    {titulo:"English Vocabulary",disciplina:"Inglês",tipo:"Atividade",data:"2026-09-22",descricao:"Pesquisar e apresentar 30 palavras em inglês.",entregue:true},
    {titulo:"Circuito de Exercícios",disciplina:"Educação Física",tipo:"Atividade",data:"2026-09-24",descricao:"Participação em circuito com exercícios físicos.",entregue:false},
    {titulo:"Desenho e Cores",disciplina:"Artes",tipo:"Trabalho",data:"2026-09-26",descricao:"Criar uma composição artística utilizando diferentes técnicas de pintura.",entregue:false},
    {titulo:"Reflexão sobre valores",disciplina:"Ensino Religioso",tipo:"Atividade",data:"2026-09-28",descricao:"Produzir um texto sobre respeito e convivência.",entregue:true},
    {titulo:"Introdução à Programação",disciplina:"Tecnologia",tipo:"Projeto",data:"2026-09-30",descricao:"Criar uma página simples utilizando HTML e CSS.",entregue:false},
    {titulo:"Problemas de Multiplicação",disciplina:"Matemática",tipo:"Atividade",data:"2026-10-02",descricao:"Resolver 15 problemas de multiplicação e divisão.",entregue:false},
    {titulo:"Interpretação de Texto",disciplina:"Português",tipo:"Atividade",data:"2026-10-05",descricao:"Ler o texto e responder às questões propostas.",entregue:true},
    {titulo:"Linha do Tempo",disciplina:"História",tipo:"Trabalho",data:"2026-10-08",descricao:"Criar uma linha do tempo com acontecimentos importantes da história do Brasil.",entregue:false},
    {titulo:"Sistema Solar",disciplina:"Ciências",tipo:"Projeto",data:"2026-10-10",descricao:"Pesquisar sobre os planetas e montar uma apresentação.",entregue:false},
    {titulo:"Climas do Brasil",disciplina:"Geografia",tipo:"Pesquisa",data:"2026-10-13",descricao:"Pesquisar os principais tipos de clima encontrados no Brasil.",entregue:true},
    {titulo:"Reading Practice",disciplina:"Inglês",tipo:"Atividade",data:"2026-10-15",descricao:"Ler um pequeno texto em inglês e responder às perguntas.",entregue:false}
  ]
};
// associa o id de cada seção ao título e subtítulo exibidos.
const titles = {
  inicio:["Dashboard","Visão geral do acompanhamento escolar"],
  avisos:["Quadro de avisos","Comunicados, eventos e calendário escolar"],
  alunos:["Alunos","Cadastro e acompanhamento dos estudantes"],
  materias:["Matérias","Disciplinas oferecidas pela escola"],
  frequencia:["Frequência","Controle de presença e faltas"],
  professores:["Professores","Professores, disciplinas, turmas e horários"],
  atividades:["Atividades e Trabalhos","Controle de tarefas e prazos"],
  desempenho:["Desempenho do Aluno","Notas, frequência e situação acadêmica"]
};
// Configura os botões do menu lateral para alternar entre as seções.
document.querySelectorAll(".nav-item").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    btn.classList.add("active");
    const id=btn.dataset.section;
    document.getElementById(id).classList.add("active");
    document.getElementById("page-title").textContent=titles[id][0];
    document.getElementById("page-subtitle").textContent=titles[id][1];
    refresh();
  });
});
//Abre a janela modal indicada pelo id, tornando o formulário visível.
function openModal(id){document.getElementById(id).classList.add("open"); populateSelects();}
function closeModal(id){document.getElementById(id).classList.remove("open");}
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
// Calcula a média aritmética dos números recebidos; retorna zero se a lista estiver vazia.
function avg(obj){const v=Object.values(obj);return v.length?v.reduce((a,b)=>a+b,0)/v.length:0}
// Formata uma data para exibição no padrão brasileiro.
function fmtDate(s){return new Date(s+"T12:00:00").toLocaleDateString("pt-BR")}
// Preenche os campos de seleção (por exemplo, matérias) com as opções disponíveis.
function populateSelects(){
  const options=state.materias.map(m=>`<option value="${m.nome}">${m.nome}</option>`).join("");
  ["freqMateria","profDisciplina","ativDisciplina"].forEach(id=>{
    const el=document.getElementById(id); if(el) el.innerHTML=options;
  });
  const alunos=document.getElementById("alunoDesempenho");
  if(alunos){
    const current=alunos.value;
    alunos.innerHTML=state.alunos.map((a,i)=>`<option value="${i}">${a.nome} — ${a.matricula}</option>`).join("");
    if(current!=="" && state.alunos[current]) alunos.value=current;
  }
}
// Monta novamente a tabela de alunos e aplica o filtro digitado na busca.
function renderAlunos(){
  const q=(document.getElementById("buscaAluno").value||"").toLowerCase();
  const rows=state.alunos.filter(a=>(a.nome+" "+a.matricula).toLowerCase().includes(q));
  document.getElementById("alunosTable").innerHTML=rows.map((a)=>{
    const idx=state.alunos.indexOf(a);
    return `<tr><td><strong>${a.nome}</strong></td><td>${a.matricula}</td><td>${a.email}</td><td>${a.telefone}</td><td>${avg(a.notas).toFixed(1).replace(".",",")}</td><td><button class="secondary" onclick="verAluno(${idx})">Ver desempenho</button> <button class="secondary" onclick="removeAluno(${idx})">Excluir</button></td></tr>`;
  }).join("") || `<tr><td colspan="6" class="empty">Nenhum aluno encontrado.</td></tr>`;
}
// Desenha os cartões de matérias usando os dados atuais.
function renderMaterias(){
  document.getElementById("materiasGrid").innerHTML=state.materias.map((m,i)=>{
    const media=state.alunos.reduce((s,a)=>s+(a.notas[m.nome]||0),0)/(state.alunos.length||1);
    return `<div class="subject-card"><h3>📚 ${m.nome}</h3><p>${m.carga} horas • Turma ${m.turma}</p><div class="progress"><div style="width:${media*10}%"></div></div><p>Média da turma: <strong>${media.toFixed(1).replace(".",",")}</strong></p><button class="secondary" onclick="removeMateria(${i})">Excluir</button></div>`;
  }).join("");
}
// Atualiza a tabela de frequência conforme a matéria e o nome pesquisados.
function renderFrequencia(){
  const materia=document.getElementById("freqMateria").value;
  const q=(document.getElementById("freqBusca").value||"").toLowerCase();
  document.getElementById("frequenciaTable").innerHTML=state.alunos.filter(a=>a.nome.toLowerCase().includes(q)).map((a,i)=>{
    const faltas=Math.round((100-a.freq)*20/100);
    const status=a.freq<75?["danger","Crítico"]:a.freq<85?["warning","Atenção"]:["success","Regular"];
    return `<tr><td>${a.nome}</td><td>${20-faltas}</td><td>${faltas}</td><td><strong>${a.freq}%</strong></td><td><span class="badge ${status[0]}">${status[1]}</span></td><td><button class="secondary" onclick="registrarFalta(${i})">+ Falta</button></td></tr>`;
  }).join("");
}
// Monta a listagem de professores com base nos dados em memória.
function renderProfessores(){
  document.getElementById("professoresTable").innerHTML=state.professores.map((p,i)=>`<tr><td><strong>${p.nome}</strong></td><td>${p.disciplina}</td><td>${p.email}</td><td>${p.turmas}</td><td>${p.horario}</td><td><button class="secondary" onclick="removeProfessor(${i})">Excluir</button></td></tr>`).join("");
}
// Exibe as atividades e permite visualizar seu estado de conclusão.
function renderAtividades(){
  const pend=state.atividades.filter(a=>!a.entregue).length;
  document.getElementById("ativTotal").textContent=state.atividades.length;
  document.getElementById("ativPendentes").textContent=pend;
  document.getElementById("ativEntregues").textContent=state.atividades.length-pend;
  document.getElementById("atividadesGrid").innerHTML=state.atividades.map((a,i)=>`<div class="activity-card"><span class="badge ${a.entregue?"success":"warning"}">${a.entregue?"Entregue":"Pendente"}</span><h3>${a.titulo}</h3><p><strong>${a.disciplina}</strong> • ${a.tipo}</p><p>${a.descricao||"Sem descrição."}</p><div class="activity-footer"><span>📅 ${fmtDate(a.data)}</span><button class="secondary" onclick="toggleAtividade(${i})">${a.entregue?"Marcar pendente":"Marcar entregue"}</button></div></div>`).join("");
}
// Calcula e apresenta indicadores de desempenho e notas dos alunos.
function renderDesempenho(){
  const idx=Number(document.getElementById("alunoDesempenho").value||0);
  const a=state.alunos[idx]; if(!a)return;
  const media=avg(a.notas);
  const situacao=media<6||a.freq<75?["danger","Em risco"]:media<7||a.freq<85?["warning","Atenção"]:["success","Bom desempenho"];
  document.getElementById("desempenhoContent").innerHTML=`
    <div class="student-header"><h3>👨‍🎓 ${a.nome}</h3><span>Matrícula: ${a.matricula} • ${a.email} • ${a.telefone}</span></div>
    <div class="performance-grid">
      <div class="performance-card"><small>Média geral</small><strong>${media.toFixed(1).replace(".",",")}</strong></div>
      <div class="performance-card"><small>Frequência</small><strong>${a.freq}%</strong></div>
      <div class="performance-card"><small>Situação</small><strong><span class="badge ${situacao[0]}">${situacao[1]}</span></strong></div>
    </div>
    <div class="note-table"><table><thead><tr><th>Disciplina</th><th>Nota</th><th>Desempenho</th></tr></thead><tbody>
    ${Object.entries(a.notas).map(([m,n])=>`<tr><td><strong>${m}</strong></td><td>${n.toFixed(1).replace(".",",")}</td><td><div class="bar"><div style="width:${n*10}%"></div></div></td></tr>`).join("")}
    </tbody></table></div>`;
}
// Atualiza as partes da interface que dependem dos dados, mantendo os números e listas sincronizados.
function refresh(){
  populateSelects(); renderAlunos(); renderMaterias(); renderFrequencia(); renderProfessores(); renderAtividades(); renderDesempenho();
  const media=state.alunos.reduce((s,a)=>s+avg(a.notas),0)/(state.alunos.length||1);
  const freq=state.alunos.reduce((s,a)=>s+a.freq,0)/(state.alunos.length||1);
  document.getElementById("totalAlunos").textContent=state.alunos.length;
  document.getElementById("totalProfessores").textContent=state.professores.length;
  document.getElementById("totalMaterias").textContent=state.materias.length;
  document.getElementById("totalPendentes").textContent=state.atividades.filter(a=>!a.entregue).length;
  document.getElementById("mediaGeral").textContent=media.toFixed(1).replace(".",",");
  document.getElementById("freqGeral").textContent=Math.round(freq)+"%";
  document.getElementById("mediaProgress").style.width=(media*10)+"%";
  document.getElementById("freqProgress").style.width=freq+"%";
  document.getElementById("homeAtividades").innerHTML=state.atividades.filter(a=>!a.entregue).slice(0,4).map(a=>`<div class="mini-item"><span>${a.titulo}</span><strong>${fmtDate(a.data)}</strong></div>`).join("")||`<div class="empty">Nenhuma atividade pendente.</div>`;
  const at=state.alunos.filter(a=>avg(a.notas)<6.5||a.freq<85);
  document.getElementById("alunosAtencao").innerHTML=at.map(a=>`<div class="attention-item"><span><strong>${a.nome}</strong><br>Média ${avg(a.notas).toFixed(1)} • Frequência ${a.freq}%</span><span class="badge danger">Acompanhar</span></div>`).join("")||`<div class="empty">Nenhum aluno em situação de atenção.</div>`;
}
// Abre/mostra as informações de desempenho do aluno selecionado.
function verAluno(i){document.querySelector('[data-section="desempenho"]').click();setTimeout(()=>{document.getElementById("alunoDesempenho").value=i;renderDesempenho()},0)}
// Remove da lista o aluno identificado e atualiza a interface.
function removeAluno(i){if(confirm("Excluir este aluno?")){state.alunos.splice(i,1);refresh()}}
// Remove a matéria selecionada e atualiza os componentes relacionados.
function removeMateria(i){if(confirm("Excluir esta matéria?")){state.materias.splice(i,1);refresh()}}
// Remove o professor selecionado e redesenha a listagem.
function removeProfessor(i){if(confirm("Excluir este professor?")){state.professores.splice(i,1);refresh()}}
// Alterna o estado da atividade entre concluída e pendente.
function toggleAtividade(i){state.atividades[i].entregue=!state.atividades[i].entregue;refresh()}
//Registra uma falta para o aluno selecionado e recalcula sua frequência.
function registrarFalta(i){state.alunos[i].freq=Math.max(0,state.alunos[i].freq-1);refresh()}

// Eventos dos formulários: capturam os dados digitados e os adicionam ao estado.\ndocument.getElementById("alunoForm").addEventListener("submit",e=>{
document.getElementById("alunoForm").addEventListener("submit",e=>{
  e.preventDefault(); const d=Object.fromEntries(new FormData(e.target));
  d.notas={}; state.materias.forEach(m=>d.notas[m.nome]=0); d.freq=100;
  state.alunos.push(d); e.target.reset(); closeModal("alunoModal"); refresh();
});
// Envio do formulário de matéria: valida/guarda a nova disciplina e atualiza a tela.\ndocument.getElementById("materiaForm").addEventListener("submit",e=>{
document.getElementById("materiaForm").addEventListener("submit",e=>{
  e.preventDefault(); const d=Object.fromEntries(new FormData(e.target)); d.carga=Number(d.carga);
  state.materias.push(d); state.alunos.forEach(a=>a.notas[d.nome]=0);
  e.target.reset(); closeModal("materiaModal"); refresh();
});
// Envio do formulário de professor: guarda o novo registro e atualiza a listagem.\ndocument.getElementById("professorForm").addEventListener("submit",e=>{
document.getElementById("professorForm").addEventListener("submit",e=>{
  e.preventDefault(); state.professores.push(Object.fromEntries(new FormData(e.target)));
  e.target.reset(); closeModal("professorModal"); refresh();
});
// Envio do formulário de atividade: registra a tarefa e atualiza os indicadores.\ndocument.getElementById("atividadeForm").addEventListener("submit",e=>{
document.getElementById("atividadeForm").addEventListener("submit",e=>{
  e.preventDefault(); const d=Object.fromEntries(new FormData(e.target)); d.entregue=false;
  state.atividades.push(d); e.target.reset(); closeModal("atividadeModal"); refresh();
});

refresh();


// Login apenas demonstrativo no navegador: não valida usuários em um servidor.
const loginScreen = document.getElementById("loginScreen");
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginPassword").value;
  if (!email || !senha) {
    document.getElementById("loginError").textContent = "Preencha o e-mail e a senha.";
    return;
  }
  document.getElementById("loggedUser").textContent = email.split("@")[0];
  loginScreen.classList.add("hidden");
});
document.getElementById("logoutButton").addEventListener("click", () => {
  loginForm.reset();
  document.getElementById("loginError").textContent = "";
  loginScreen.classList.remove("hidden");
  document.getElementById("loginEmail").focus();
});

