
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ponto do Charme</title>

  <!-- Fonte elegante -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
  <div class="logo">Ponto do Charme</div>

  <nav>
    <a href="#servicos">Serviços</a>
    <a href="#galeria">Galeria</a>
    <a href="#agendamento">Agendar</a>
  </nav>
</header>

<!-- HERO -->
<section class="hero">
  <div class="overlay"></div>

  <div class="hero-content">
    <h1>Beleza que transforma</h1>
    <p>Cabelos • Unhas • Maquiagem</p>
  </div>
</section>

<!-- PACOTES / SERVIÇOS -->
<section class="pacotes" id="servicos">
  <h2>Confira nossos serviços</h2>

  <div class="grid">
    <div class="box">
      <h3>Cabelos</h3>
      <p>Cortes, escova, hidratação</p>
    </div>

    <div class="box">
      <h3>Unhas</h3>
      <p>Manicure, pedicure, nail art</p>
    </div>

    <div class="box">
      <h3>Maquiagem</h3>
      <p>Eventos e dia a dia</p>
    </div>

    <div class="box">
      <h3>Pacotes</h3>
      <p>Combo beleza completo</p>
    </div>
  </div>
</section>

<!-- BLOCO DE DESTAQUE (igual roxo do Socila, mas bege) -->
<section class="destaque">
  <div class="cards">

    <div class="card">
      <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f">
      <div class="card-overlay">
        <p>+100 clientes</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9">
      <div class="card-overlay">
        <p>Profissionais qualificados</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796">
      <div class="card-overlay">
        <p>Atendimento premium</p>
      </div>
    </div>

  </div>
</section>

<!-- AGENDAMENTO -->
<section class="agendamento" id="agendamento">
  <h2>Agende seu horário</h2>

  <form>
    <input type="text" placeholder="Nome" required>
    <input type="date" required>

    <select>
      <option>Serviço</option>
      <option>Cabelo</option>
      <option>Unhas</option>
      <option>Maquiagem</option>
    </select>

    <select>
      <option>Horário</option>
      <option>09:00</option>
      <option>10:00</option>
      <option>11:00</option>
    </select>

    <button>Agendar</button>
  </form>
</section>

<footer>
  <p>Ponto do Charme © 2026</p>
</footer>

</body>
</html>
