<?php
/**
 * includes/header.php — Topo comum (HTML5 + navegação).
 * Incluído pelo Front Controller; não deve ser acessado diretamente.
 */

if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}

// Itens do menu: chave da rota => rótulo exibido.
$navItems = [
    'home'    => 'Início',
    'sobre'   => 'Sobre',
    'contato' => 'Contato',
];

$currentRoute = $currentRoute ?? 'home';
$pageTitle    = $pageTitle ?? 'Meu Site';
$documentTitle = $pageTitle . ' | Meu Site';

/**
 * Monta uma URL interna segura a partir da rota.
 */
$routeUrl = static function (string $route): string {
    return BASE_URL . ($route === 'home' ? '/' : '/' . $route);
};
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Site institucional em PHP puro, modular e seguro.">
    <title><?= htmlspecialchars($documentTitle, ENT_QUOTES, 'UTF-8') ?></title>
    <link rel="stylesheet" href="<?= htmlspecialchars(PUBLIC_PATH, ENT_QUOTES, 'UTF-8') ?>/css/style.css">
</head>
<body>
<header class="site-header">
    <div class="container header-inner">
        <a class="brand" href="<?= htmlspecialchars($routeUrl('home'), ENT_QUOTES, 'UTF-8') ?>">
            Meu<span>Site</span>
        </a>

        <button class="nav-toggle" type="button"
                aria-expanded="false" aria-controls="site-nav">
            Menu
        </button>

        <nav class="site-nav" id="site-nav" aria-label="Navegação principal">
            <?php foreach ($navItems as $routeKey => $label): ?>
                <?php $isActive = ($currentRoute === $routeKey); ?>
                <a href="<?= htmlspecialchars($routeUrl($routeKey), ENT_QUOTES, 'UTF-8') ?>"
                   class="<?= $isActive ? 'active' : '' ?>"
                   <?= $isActive ? 'aria-current="page"' : '' ?>>
                    <?= htmlspecialchars($label, ENT_QUOTES, 'UTF-8') ?>
                </a>
            <?php endforeach; ?>
        </nav>
    </div>
</header>
<main class="container">
