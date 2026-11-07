<?php
/**
 * index.php — Front Controller
 *
 * Toda requisição pública passa por aqui. O .htaccess reescreve as URLs
 * amigáveis para este arquivo, que resolve a rota e carrega a página.
 */

declare(strict_types=1);

// Constante de bootstrap: bloqueia acesso direto aos arquivos internos.
define('APP_INIT', true);

require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/config/database.php';

// -----------------------------------------------------------------
// 1. Normaliza a URI requisitada
// -----------------------------------------------------------------
$requestUri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';

// Remove o prefixo de subpasta quando o site não está na raiz do domínio.
if (BASE_URL !== '' && str_starts_with($requestUri, BASE_URL)) {
    $requestUri = substr($requestUri, strlen(BASE_URL));
}

$route = strtolower(trim($requestUri, '/'));

if ($route === '') {
    $route = 'home';
}

// -----------------------------------------------------------------
// 2. Mapa de rotas (lista branca)
//    Para criar uma nova página: adicione a chave aqui, o título em
//    $pageTitles e crie o arquivo correspondente em /pages.
// -----------------------------------------------------------------
$routes = [
    'home'    => 'home.php',
    'sobre'   => 'sobre.php',
    'contato' => 'contato.php',
];

$pageTitles = [
    'home'    => 'Início',
    'sobre'   => 'Sobre',
    'contato' => 'Contato',
];

// Rota atual usada pelo header para destacar o item do menu.
$currentRoute = $route;

// -----------------------------------------------------------------
// 3. Resolve a página (fallback amigável para 404)
// -----------------------------------------------------------------
if (!isset($routes[$route])) {
    http_response_code(404);
    $pageFile  = '404.php';
    $pageTitle = 'Página não encontrada';
} else {
    $pageFile  = $routes[$route];
    $pageTitle = $pageTitles[$route] ?? 'Meu Site';
}

// -----------------------------------------------------------------
// 4. Renderiza: cabeçalho + conteúdo + rodapé (sem duplicar tags)
// -----------------------------------------------------------------
require __DIR__ . '/includes/header.php';
require __DIR__ . '/pages/' . $pageFile;
require __DIR__ . '/includes/footer.php';
