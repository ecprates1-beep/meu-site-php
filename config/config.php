<?php
/**
 * config/config.php — Configurações globais da aplicação.
 */

declare(strict_types=1);

// Bloqueia acesso direto (só pode ser incluído via Front Controller).
if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}

// -----------------------------------------------------------------
// 1. Carrega variáveis do .env (se existir)
// -----------------------------------------------------------------
$envFile = dirname(__DIR__) . '/.env';
if (is_readable($envFile)) {
    foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }
        [$key, $value] = explode('=', $line, 2);
        $key   = trim($key);
        $value = trim($value, " \t\n\r\0\x0B\"'");

        if ($key !== '' && getenv($key) === false) {
            putenv($key . '=' . $value);
            $_ENV[$key] = $value;
        }
    }
}

// -----------------------------------------------------------------
// 2. Ambiente: 'dev' ou 'production' (defina APP_ENV no .env)
// -----------------------------------------------------------------
define('APP_ENV', getenv('APP_ENV') ?: 'dev');

// -----------------------------------------------------------------
// 3. Exibição de erros conforme o ambiente
// -----------------------------------------------------------------
error_reporting(E_ALL);

if (APP_ENV === 'dev') {
    ini_set('display_errors', '1');
} else {
    ini_set('display_errors', '0');
    ini_set('log_errors', '1');
}

// -----------------------------------------------------------------
// 4. URL base relativa (funciona na raiz do domínio ou em subpasta)
//    Ex.: "" na raiz | "/meu-site-php" em subpasta
// -----------------------------------------------------------------
$basePath = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
define('BASE_URL', $basePath);

// Caminhos absolutos e de assets reutilizáveis
define('ROOT_PATH', dirname(__DIR__));
define('PAGES_PATH', ROOT_PATH . '/pages');
define('PUBLIC_PATH', BASE_URL . '/public');

// -----------------------------------------------------------------
// 5. Cabeçalhos de segurança (antes de qualquer saída)
// -----------------------------------------------------------------
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Permissions-Policy: geolocation=(), microphone=(), camera=()');
header(
    "Content-Security-Policy: default-src 'self'; " .
    "img-src 'self' data:; style-src 'self'; script-src 'self'; " .
    "base-uri 'self'; form-action 'self'"
);

// -----------------------------------------------------------------
// 6. Sessão segura (usada por CSRF, login e mensagens flash)
// -----------------------------------------------------------------
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => 0,
        'path'     => '/',
        'httponly' => true,
        'samesite' => 'Lax',
        'secure'   => (APP_ENV === 'production')
            || (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
    ]);
    session_start();
}

// Fuso horário padrão
date_default_timezone_set('America/Sao_Paulo');
