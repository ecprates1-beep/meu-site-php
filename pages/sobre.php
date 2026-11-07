<?php
/**
 * pages/sobre.php — Página institucional de exemplo.
 */

if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}
?>
<section class="page">
    <h1>Sobre nós</h1>
    <p>
        Esta é uma página institucional de exemplo. Aqui você pode apresentar
        a empresa, a equipe, a missão e os valores do projeto.
    </p>

    <h2>Nossa missão</h2>
    <p>
        Construir soluções web simples, acessíveis e seguras, mantendo o código
        organizado e de fácil manutenção.
    </p>

    <h2>O que fazemos</h2>
    <ul class="list">
        <li>Desenvolvimento de sites institucionais.</li>
        <li>Sistemas de gestão personalizados.</li>
        <li>Manutenção e evolução contínua.</li>
    </ul>
</section>
