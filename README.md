<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfólio Comercial</title>
  <style>
    /* Reset */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background: #333;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Cabeçalho */
    header {
      background: linear-gradient(to right, rgb(200, 23, 0), rgb(90, 0, 0));
      color: #fff;
      padding: 15px 30px;
      position: relative;
    }

    header h1 { display: inline-block; }
    .menu { list-style: none; float: right; }
    .menu li { display: inline; margin: 0 15px; position: relative; }
    .menu a { color: #fff; text-decoration: none; transition: 0.3s; cursor: pointer; }
    .menu a:hover { color: #ff9800; }

    /* Dropdown Filtros */
    .dropdown {
      display: none;
      position: absolute;
      top: 40px;
      right: 0;
      background: #444;
      border-radius: 6px;
      padding: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
    .dropdown label {
      display: block;
      margin: 5px 0;
      cursor: pointer;
    }

    /* Área principal */
    .main-content {
      display: flex;
      justify-content: center;
      margin: 40px 20px;
    }

    /* Galeria de perfis em grid */
    .galeria {
      display: grid;
      grid-template-columns: repeat(auto-fill, 200px);
      grid-template-rows: 240px 240px; /* duas fileiras fixas */
      gap: 10px;
      justify-content: start;
      padding: 20px;
  /* limite máximo até 13 perfis (2 linhas de 6 + líder) */
  max-width: calc((200px + 20px) * 7); /* 7 colunas = 1400px */
  max-height: calc((260px * 2) + 20px); /* 2 linhas + gap = 500px */

  overflow-x: auto;   /* ativa scroll horizontal */
  overflow-y: hidden; /* impede scroll vertical */
}
    .icon-card {
      width: 200px;
      height: 240px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 8px 15px rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      transition: transform 0.3s;
      cursor: pointer;
      border: 2px solid #ff7300;
    }

    .icon-card img {
      width: 100%;
      height: 70%;
      object-fit: cover;
      border-bottom: 4px solid  #ff7300;
    }

    .icon-card .nick {
      font-size: 14px;
      font-weight: bold;
      margin-top: 6px;
      padding: 4px;
      background: #eaeaea;
      width: 100%;
      text-align: center;
      color: #111;
    }

    .icon-card .cargo {
      font-size: 16px;
      font-weight: bold;
      margin-top: 4px;
      padding: 1px;
      
      width: 100%;
      text-align: center;
      color: #222;
    }

    .icon-card:hover {
      transform: scale(1.05);
    }

    /* Rodapé fixo */
    footer {
      background: #222; color: #fff;
      text-align: center; padding: 15px;
      margin-top: auto;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .logo-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #fff;
    }
  </style>
</head>
<body>
 <!-- Cabeçalho -->
<header>
  <nav>
    <div class="logo">
      <img src="logo_chaos.jpg" alt="Logo" class="logo-icon">
      <h1>The Chaos Insurgency</h1>
    </div>
    <ul class="menu">
      <li><a id="criarPerfilBtn">Criar Perfil</a></li>
      <li>
        <a id="filtrosBtn">Filtros</a>
        <div class="dropdown" id="dropdownFiltros">
          <label><input type="checkbox"> Nível Hierárquico</label>
          <label><input type="checkbox"> Número de Medalhas</label>
        </div>
      </li>
      <li><a id="chatBtn">Chat</a></li>
      <li><a id="cargosBtn">Cargos</a></li>
      <li><a id="descricaoBtn">Descrição</a></li>
    </ul>
  </nav>
</header>
<!-- Conteúdo principal -->
<div class="main-content">
  <section class="nicho">
    <div class="galeria" id="galeriaPerfis">
      <!-- Perfil fixo do Líder -->
      <div class="icon-card" style="grid-column:1; grid-row:1;">
        <img src="foto_de_perfil.jpg" alt="Líder">
        <span class="nick">Westo Youtube</span>
        <span class="cargo">Líder</span>
      </div>
    </div>
  </section>
</div>

<!-- Rodapé -->
<footer>
  <p>&copy; 2026 - World Of Rucoy | Desenvolvido por Westo (Oficial)</p>
</footer>

<script>
  const btnCriarPerfil = document.getElementById("criarPerfilBtn");
  const galeria = document.getElementById("galeriaPerfis");
  let contador = 1;

  btnCriarPerfil.addEventListener("click", () => {
    const card = document.createElement("div");
    card.classList.add("icon-card");
    card.innerHTML = `
      <img src="foto_de_perfil.jpg" alt="Perfil">
      <span class="nick">Nick${contador}</span>
      <span class="cargo">Cargo ${contador}</span>
    `;

    // lógica de posicionamento: pares em cima, ímpares embaixo
    if (contador % 2 === 0) {
      card.style.gridColumn = (contador / 2) + 1;
      card.style.gridRow = "1";
    } else {
      card.style.gridColumn = ((contador + 1) / 2);
      card.style.gridRow = "2";
    }

    galeria.appendChild(card);
    contador++;
  });
</script>
</body>
</html>
