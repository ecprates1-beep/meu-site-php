<?php
/**
 * pages/home.php — Página inicial.
 */

if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}
?>
<section class="hero">
    <h1>Bem Vindo ao Meu Mundo</h1>
    <p>
        Um esqueleto institucional em PHP puro, modular, seguro e pronto
        para a hospedagem compartilhada.
    </p>
    <a class="btn" href="<?= htmlspecialchars(BASE_URL, ENT_QUOTES, 'UTF-8') ?>/sobre">Saiba mais</a>
</section>

<section class="cards" aria-label="Destaques">
    <article class="card">
        <h2>Modular</h2>
        <p>Páginas separadas, includes reutilizáveis e um Front Controller simples.</p>
    </article>
    <article class="card">
        <h2>Seguro</h2>
        <p>Sanitização na saída, PDO com prepared statements e cabeçalhos de segurança.</p>
    </article>
    <article class="card">
        <h2>Responsivo</h2>
        <p>Layout adaptável para desktop, tablet e celular com CSS moderno.</p>
    </article>
</section>
