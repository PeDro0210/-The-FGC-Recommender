MATCH (usuario:User {name: "Usuario1"})-[:LIKES]->(label:Label)
WITH COLLECT(DISTINCT label) AS labels
UNWIND labels AS label
MATCH (label)<-[:LIKES]-(otro_usuario:User)
WHERE otro_usuario.name <> "Usuario1"
WITH COLLECT(DISTINCT otro_usuario) AS usuarios_conectados, labels
UNWIND labels AS label
MATCH (otro_usuario)-[:LIKES]->(otro_label:Label)
WHERE otro_label <> label
WITH COLLECT(DISTINCT otro_usuario) AS usuarios_otro_label
MATCH (usuario)-[:LIKES]->(label)<-[:BELONGS_TO]-(reconode:Reconode)
WITH COLLECT(DISTINCT reconode) AS juegos_usuario
MATCH (usuarios_conectados)-[:LIKES]->(label)<-[:BELONGS_TO]-(reconode_otro_usuario:Reconode)
WITH usuarios_conectados, juegos_usuario, COLLECT(DISTINCT reconode_otro_usuario) AS juegos_otro_usuario
WITH usuarios_conectados, juegos_usuario, juegos_otro_usuario, size(apoc.coll.intersection(juegos_usuario, juegos_otro_usuario)) AS intersection_size
WHERE toFloat(intersection_size) / toFloat(size(apoc.coll.union(juegos_usuario, juegos_otro_usuario))) >= 0.75
WITH usuarios_conectados, juegos_usuario, juegos_otro_usuario
MATCH (usuario)-[:LIKES]->(label:Label)<-[:BELONGS_TO]-(reconode:Reconode)
WHERE reconode IN juegos_usuario
WITH usuarios_conectados, juegos_usuario, juegos_otro_usuario, COLLECT(DISTINCT reconode) AS juegos_usuario_original, COLLECT(DISTINCT reconode) AS juegos_usuario_unicos
RETURN juegos_usuario_original, [juego IN juegos_otro_usuario WHERE NOT juego IN juegos_usuario_unicos] AS juegos_nuevos
