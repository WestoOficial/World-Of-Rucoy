<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>World Of Rucoy</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff; /* fundo branco */
      color: #000000; /* texto preto */
      font-family: 'Arial', sans-serif;
      height: 100vh;
    }

    /* Tela de abertura */
    #splash {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }

    #splash h1 {
      font-size: 4em;
      margin-bottom: -20px;
      text-shadow: 2px 2px 5px #aaa;
    }

    #splash h2 {
      font-size: 1.2em;
      margin-bottom: 20px;
      font-weight: normal;
    }

    .loading {
      display: flex;
      gap: 10px;
      justify-content: center;
    }

    .dot {
      width: 15px;
      height: 15px;
      background-color: #000000; /* pontos pretos */
      border-radius: 50%;
      animation: bounce 1s infinite;
    }

    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }

    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes bounce {
      0%, 80%, 100% {
        transform: scale(0.8);
      }
      40% {
        transform: scale(1.2);
      }
    }

    /* Tela de login */
    .login-container {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    }

    .login-box {
      background: #f9f9f9;
      border: 1px solid #ccc;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 300px;
    }

    .login-box h2 {
      margin-bottom: 20px;
    }

    .login-box input {
      width: 90%;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .login-box button {
      width: 100%;
      padding: 10px;
      background: #000000;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .login-box button:hover {
      background: #333333;
    }
  </style>
</head>
<body>
  <!-- Tela de abertura -->
  <div id="splash">
    <h1>World Of Rucoy</h1>
    <h2>By Westo (Oficial)</h2>
    <div class="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>

  <!-- Tela de login -->
  <div id="login" class="login-container">
    <h1>Bem-vindo ao World Of Rucoy</h1>
    <div class="login-box">
      <h2>Faça seu Login</h2>
      <form>
        <input type="text" placeholder="Nickname" required>
        <input type="password" placeholder="Senha" required>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>

  <script>
    // Após 3 segundos, esconder splash e mostrar login
    setTimeout(() => {
      document.getElementById("splash").style.display = "none";
      document.getElementById("login").style.display = "flex";
    }, 3000);
  </script>
</body>
</html>
