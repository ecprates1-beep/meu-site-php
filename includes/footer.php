<?php
/**
 * includes/footer.php — Rodapé comum e fechamento das tags.
 * Incluído pelo Front Controller; não deve ser acessado diretamente.
 */

if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}
?>
</main>

<footer class="site-footer">
    <div class="container footer-inner">
        <p>&copy; <?= htmlspecialchars(date('Y'), ENT_QUOTES, 'UTF-8') ?> Meu Site. Todos os direitos reservados.</p>
    </div>
</footer>

<script src="<?= htmlspecialchars(PUBLIC_PATH, ENT_QUOTES, 'UTF-8') ?>/js/main.js" defer></script>
</body>
</html>
