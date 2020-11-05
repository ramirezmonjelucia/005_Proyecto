/*
Para enseñar todos los datos de la base de datos
*/
db.libros.find()
/*
Para contar todos los datos de la base de datos (devuelve una respuesta numérica)
*/
db.libros.find().count()
/*
Para enseñar todos los libros en los que la editorial sea Debolsillo
*/
db.libros.find( { Editorial: { $eq: "Debolsillo" } } )
/*
Para enseñar todos los libros que tengan más de 600 páginas
*/
db.libros.find( { NºPáginas: { $gt: 600 } } )
/*
Para enseñar todos los libros que tengan 400 páginas o más
*/
db.libros.find( { NºPáginas: { $gte: 400 } } )
/*
Para enseñar todos los libros en los que la dimensión sea 190 x 140 mm
*/
db.libros.find( { Dimensiones_mm: { $in: [190, 125] } } )
/*
Para enseñar todos los libros que tengan menos de 200 páginas
*/
db.libros.find( { NºPáginas: { $lt: 300 } } )
/*
Para enseñar todos los libros que tengan 350 páginas o menos
*/
db.libros.find( { NºPáginas: { $lte: 350 } } )
/*
Para enseñar todos los libros que la editorial no sea Alfaguara
*/
db.libros.find( { Editorial: { $ne: "Alfaguara" } } )
/*
Para enseñar todos los libros que las dimensiones no sean [190, 125]
*/
db.libros.find( { Dimensiones_mm: { $nin: [ 190, 125 ] } } )
/*
Para enseñar todos los libros que las editoriales no sean ni Debolsillo ni Booket
*/
db.libros.find( { $and: [ { Editorial: { $ne: "Debolsillo" } }, { Editorial: { $ne: "Booket" } } ] } )
/*
Para enseñar todos los libros que el autor no sea Javier Castillo
*/
db.libros.find( { Autor: { $not: { $eq: "Javier Castillo" } } } )
/*
Para enseñar todos los libros que el autor no sea Rosa Montero ni tenga menos de 400 páginas
*/
db.libros.find( { $nor: [ {Autor: "Rosa Montero" }, { NºPáginas: { $lt: 400 } } ] } )
/*
Para enseñar todos los libros que la editorial sea Suma y todos los libros que el autor sea Arturo Pérez Reverte
*/
db.libros.find( { $or: [ { Editorial: { $eq: "Suma" } }, { Autor: "Arturo Pérez Reverte" } ] } )
/*
Para enseñar todos los libros que tengan de fecha de lanzamiento 2019
*/
db.libros.find( { Fecha: { $regex: /2019$/ } } )
/*
Para enseñar todos los libros que el autor empieze por Jav
*/
db.libros.find( { Autor: { $regex: /^JAV/i } } )
/*
Para enseñar todos los libros que el título empieze por S
*/
db.libros.find( {Título: { $regex: /S/ } } )