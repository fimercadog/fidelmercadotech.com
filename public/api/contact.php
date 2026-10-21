<?php
/**
 * Endpoint de contacto — fidelmercadotech.com
 * Recibe el JSON del wizard, valida campos y envía correo HTML.
 */

// ── CORS ──────────────────────────────────────────────────────────────────────
header('Access-Control-Allow-Origin: https://fidelmercadotech.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')    { http_response_code(405); exit(json_encode(['ok' => false, 'error' => 'Método no permitido'])); }

// ── LEER BODY ─────────────────────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) { http_response_code(400); exit(json_encode(['ok' => false, 'error' => 'JSON inválido'])); }

function s(array $d, string $k): string {
    return htmlspecialchars(trim((string)($d[$k] ?? '')), ENT_QUOTES, 'UTF-8');
}

// ── HONEYPOT ──────────────────────────────────────────────────────────────────
if (!empty($data['website'])) { http_response_code(200); exit(json_encode(['ok' => true])); }

// ── VALIDACIÓN BÁSICA ─────────────────────────────────────────────────────────
$nombre  = s($data, 'nombre');
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$mensaje = s($data, 'mensaje');

if (!$nombre || !$email || !$mensaje) {
    http_response_code(422);
    exit(json_encode(['ok' => false, 'error' => 'Faltan campos obligatorios']));
}

// ── CAMPOS OPCIONALES ─────────────────────────────────────────────────────────
$empresa  = s($data, 'empresa');
$telefono = s($data, 'telefono');
$interes  = s($data, 'interes');

$motivoMap = [
    'demo'           => 'Solicitar una demostración',
    'proyecto'       => 'Desarrollo de software a medida',
    'automatizacion' => 'Automatización de procesos',
    'ia'             => 'Inteligencia Artificial / agentes',
    'otro'           => 'Otro',
];
$motivoKey   = s($data, 'motivo');
$motivoLabel = $motivoMap[$motivoKey] ?? $motivoKey;

$fechaRaw = $data['receivedAt'] ?? date('c');
$fecha    = date('d/m/Y H:i', strtotime($fechaRaw)) . ' UTC';

// ── HELPER: fila de tabla ──────────────────────────────────────────────────────
function row(string $label, string $value): string {
    if (!$value) return '';
    return "<tr>"
         . "<td style='padding:8px 12px;color:#6b7280;font-size:14px;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f3f4f6'>$label</td>"
         . "<td style='padding:8px 12px;color:#111827;font-size:14px;border-bottom:1px solid #f3f4f6'>$value</td>"
         . "</tr>";
}

// ── EMAIL HTML ────────────────────────────────────────────────────────────────
$emailLink = "<a href='mailto:$email' style='color:#15803d'>$email</a>";
$mensajeHtml = nl2br($mensaje);

$html = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 20px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)">

  <!-- Cabecera verde -->
  <tr>
    <td style="background:#15803d;padding:28px 32px">
      <p style="margin:0;font-size:11px;letter-spacing:2px;color:#bbf7d0;text-transform:uppercase">Fidel Mercado Tech</p>
      <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#fff">Nuevo mensaje de contacto</h1>
    </td>
  </tr>

  <!-- Badge motivo -->
  <tr>
    <td style="padding:24px 32px 0">
      <span style="display:inline-block;background:#dcfce7;color:#15803d;font-size:13px;font-weight:600;padding:5px 16px;border-radius:99px">
        {$motivoLabel}
      </span>
    </td>
  </tr>

  <!-- Datos del contacto -->
  <tr>
    <td style="padding:20px 32px">
      <table cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e5e7eb;border-radius:8px;border-collapse:collapse;overflow:hidden">
        {$row('Nombre', $nombre)}
        {$row('Empresa', $empresa)}
        {$row('Correo', $emailLink)}
        {$row('Teléfono', $telefono)}
        {$row('Interés específico', $interes)}
      </table>
    </td>
  </tr>

  <!-- Mensaje -->
  <tr>
    <td style="padding:0 32px 28px">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px">Mensaje</p>
      <div style="background:#f9fafb;border-left:3px solid #15803d;border-radius:0 6px 6px 0;padding:16px 20px;font-size:15px;line-height:1.7;color:#111827">
        {$mensajeHtml}
      </div>
    </td>
  </tr>

  <!-- Botón responder -->
  <tr>
    <td style="padding:0 32px 28px">
      <a href="mailto:{$email}?subject=Re: Tu consulta en Fidel Mercado Tech"
         style="display:inline-block;background:#15803d;color:#fff;font-size:15px;font-weight:600;padding:12px 28px;border-radius:50px;text-decoration:none">
        Responder a {$nombre}
      </a>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:14px 32px">
      <p style="margin:0;font-size:12px;color:#9ca3af">Recibido el {$fecha} · fidelmercadotech.com</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>
HTML;

// ── ENVIAR ────────────────────────────────────────────────────────────────────
$to      = 'contacto@fidelmercadotech.com';
$cc      = 'fidelmercadotech.com@gmail.com';
$subject = '=?UTF-8?B?' . base64_encode("Nuevo contacto: $nombre — $motivoLabel") . '?=';

$headers = implode("\r\n", [
    'From: Fidel Mercado Tech <noreply@fidelmercadotech.com>',
    "Reply-To: $email",
    "Cc: $cc",
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
]);

$sent = mail($to, $subject, $html, $headers);

http_response_code($sent ? 200 : 500);
echo json_encode($sent ? ['ok' => true] : ['ok' => false, 'error' => 'No se pudo enviar el correo']);
