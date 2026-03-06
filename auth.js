/**
 * Simple password gate for Colearn Academy security-plan site (e.g. GitHub Pages).
 * Replace PASSWORD_HASH with the SHA-256 (hex) of your chosen password.
 * To generate: open browser console on any page and run:
 *   (async () => { const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PASSWORD')); console.log(Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')); })();
 * Changing the hash invalidates existing sessions (users must sign in again).
 */
var PASSWORD_HASH = '0c7c8870c33540e954ec16c3f77294a8f38493e706ae4cd629a447af0f5a20ed';

function hashPassword(str) {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
    .then(function(h) {
      return Array.from(new Uint8Array(h)).map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
    });
}

function checkPassword(input) {
  return hashPassword(input).then(function(h) { return h === PASSWORD_HASH; });
}
