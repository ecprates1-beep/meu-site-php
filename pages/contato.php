<?php
/**
 * pages/contato.php — Formulário de contato com sanitização/CSRF.
 */

if (!defined('APP_INIT')) {
    http_response_code(403);
    exit('Acesso direto não permitido.');
}

$errors  = [];
$success = false;
$old     = ['nome' => '', 'email' => '', 'mensagem' => ''];

// Gera o token CSRF da sessão (uma vez por sessão).
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $token = $_POST['csrf_token'] ?? '';

    if (!is_string($token) || !hash_equals($_SESSION['csrf_token'], $token)) {
        $errors[] = 'Sessão expirada. Recarregue a página e tente novamente.';
    } else {
        // Coleta e normaliza os campos (sem confiar no usuário).
        $old['nome']     = trim((string) ($_POST['nome'] ?? ''));
        $old['email']    = trim((string) ($_POST['email'] ?? ''));
        $old['mensagem'] = trim((string) ($_POST['mensagem'] ?? ''));

        if ($old['nome'] === '' || mb_strlen($old['nome']) > 120) {
            $errors[] = 'Informe um nome válido (até 120 caracteres).';
        }

        if (!filter_var($old['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Informe um e-mail válido.';
        }

        if ($old['mensagem'] === '' || mb_strlen($old['mensagem']) > 2000) {
            $errors[] = 'Informe uma mensagem (até 2000 caracteres).';
        }

        if ($errors === []) {
            // ---------------------------------------------------------
            // EXEMPLO de persistência segura com PDO.
            // Crie a tabela abaixo e remova o bloco de comentário:
            //
            // CREATE TABLE mensagens (
            //   id INT AUTO_INCREMENT PRIMARY KEY,
            //   nome VARCHAR(120) NOT NULL,
            //   email VARCHAR(180) NOT NULL,
            //   mensagem TEXT NOT NULL,
            //   criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
            // ---------------------------------------------------------
            /*
            try {
                $pdo  = Database::getConnection();
                $stmt = $pdo->prepare(
                    'INSERT INTO mensagens (nome, email, mensagem)
                     VALUES (:nome, :email, :mensagem)'
                );
                $stmt->execute([
                    ':nome'     => $old['nome'],
                    ':email'    => $old['email'],
                    ':mensagem' => $old['mensagem'],
                ]);
            } catch (PDOException $e) {
                error_log('[Contato] ' . $e->getMessage());
                $errors[] = 'Erro ao enviar a mensagem. Tente novamente mais tarde.';
            }
            */

            if ($errors === []) {
                $success = true;
                $old = ['nome' => '', 'email' => '', 'mensagem' => ''];

                // Renova o token após um envio bem-sucedido.
                $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            }
        }
    }
}
?>
<section class="page">
    <h1>Contato</h1>
    <p>Preencha o formulário abaixo e retornaremos o mais breve possível.</p>

    <?php if ($success): ?>
        <p class="alert alert-success">Mensagem enviada com sucesso!</p>
    <?php endif; ?>

    <?php if ($errors !== []): ?>
        <div class="alert alert-error" role="alert">
            <ul>
                <?php foreach ($errors as $error): ?>
                    <li><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <form class="form" method="post"
          action="<?= htmlspecialchars(BASE_URL, ENT_QUOTES, 'UTF-8') ?>/contato" novalidate>
        <input type="hidden" name="csrf_token"
               value="<?= htmlspecialchars($_SESSION['csrf_token'], ENT_QUOTES, 'UTF-8') ?>">

        <div class="field">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" maxlength="120" required
                   value="<?= htmlspecialchars($old['nome'], ENT_QUOTES, 'UTF-8') ?>">
        </div>

        <div class="field">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" maxlength="180" required
                   value="<?= htmlspecialchars($old['email'], ENT_QUOTES, 'UTF-8') ?>">
        </div>

        <div class="field">
            <label for="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="6" maxlength="2000" required><?= htmlspecialchars($old['mensagem'], ENT_QUOTES, 'UTF-8') ?></textarea>
        </div>

        <button type="submit" class="btn">Enviar mensagem</button>
    </form>
</section>
