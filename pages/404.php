<?php
/**
 * pages/404.php — Página amigável de rota não encontrada.
 */

if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}
?>
<section class="error-page">
    <p class="error-code">404</p>
    <h1>Página não encontrada</h1>
    <p>O endereço que você procurou não existe ou foi movido.</p>
    <a class="btn" href="<?= htmlspecialchars(BASE_URL, ENT_QUOTES, 'UTF-8') ?>/">Voltar ao início</a>
</section>
