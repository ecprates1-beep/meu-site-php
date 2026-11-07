<?php
/**
 * config/database.php — Conexão PDO com MySQL.
 */

declare(strict_types=1);

if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}

/**
 * Conexão PDO no padrão Singleton (uma única instância por requisição).
 */
final class Database
{
    private static ?PDO $connection = null;

    private function __construct()
    {
    }

    private function __clone()
    {
    }

    public static function getConnection(): PDO
    {
        if (self::$connection instanceof PDO) {
            return self::$connection;
        }

        // Credenciais vindas do .env / variáveis de ambiente.
        $host    = getenv('DB_HOST') ?: 'localhost';
        $port    = getenv('DB_PORT') ?: '3306';
        $name    = getenv('DB_NAME') ?: 'meu_site';
        $user    = getenv('DB_USER') ?: 'root';
        $pass    = getenv('DB_PASS') ?: '';
        $charset = 'utf8mb4';

        $dsn = sprintf(
            'mysql:host=%s;port=%s;dbname=%s;charset=%s',
            $host,
            $port,
            $name,
            $charset
        );

        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            // Statements reais: desativa a emulação e reforça a proteção
            // contra SQL Injection.
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::ATTR_PERSISTENT         => false,
        ];

        try {
            self::$connection = new PDO($dsn, $user, $pass, $options);
            return self::$connection;
        } catch (PDOException $e) {
            // Nunca exponha a mensagem real em produção.
            error_log('[DB] ' . $e->getMessage());

            if (APP_ENV === 'dev') {
                throw $e;
            }

            http_response_code(500);
            exit('Não foi possível conectar ao banco de dados.');
        }
    }
}
