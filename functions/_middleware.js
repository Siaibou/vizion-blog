// Protection du site par mot de passe (HTTP Basic Auth).
// Ce fichier est exécuté par Cloudflare Pages avant chaque requête,
// y compris pour les fichiers de public/ (cours, images, CSS).
// Le mot de passe n'est PAS écrit ici : il est lu dans la variable
// d'environnement SITE_PASSWORD, définie dans le tableau de bord Cloudflare.
// SITE_USER est facultatif : s'il est absent, n'importe quel identifiant
// est accepté, seul le mot de passe compte.

export async function onRequest({ request, next, env }) {
  const attendu = env.SITE_PASSWORD;

  // Sécurité par défaut : si la variable est oubliée, on bloque tout
  // au lieu de laisser le site ouvert.
  if (!attendu) {
    return new Response("Mot de passe non configuré sur le serveur.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const auth = request.headers.get("Authorization") || "";
  const [schema, encode] = auth.split(" ");

  if (schema === "Basic" && encode) {
    let decode = "";
    try {
      // atob ne gère que l'ASCII : on repasse par TextDecoder pour les accents.
      const octets = Uint8Array.from(atob(encode), (c) => c.charCodeAt(0));
      decode = new TextDecoder().decode(octets);
    } catch {
      decode = "";
    }
    const i = decode.indexOf(":");
    if (i >= 0) {
      const utilisateur = decode.slice(0, i);
      const motDePasse = decode.slice(i + 1);
      const userOk = !env.SITE_USER || egal(utilisateur, env.SITE_USER);
      const mdpOk = egal(motDePasse, attendu);
      if (userOk && mdpOk) {
        const reponse = await next();
        // Empêche les caches partagés de servir une page protégée à quelqu'un d'autre.
        const copie = new Response(reponse.body, reponse);
        copie.headers.set("Cache-Control", "private, no-store");
        return copie;
      }
    }
  }

  return new Response("Accès réservé.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Vizion Blog", charset="UTF-8"',
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

// Comparaison en temps constant : on parcourt toujours toute la chaîne,
// pour ne pas révéler par le temps de réponse combien de caractères sont justes.
function egal(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let k = 0; k < a.length; k++) r |= a.charCodeAt(k) ^ b.charCodeAt(k);
  return r === 0;
}
