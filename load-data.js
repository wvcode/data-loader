const { PrismaClient, Prisma } = require('@prisma/client')
const { files } = require('@wvcode/utils')

function testedFloatValue(value) {
  return isNaN(parseFloat(value)) ? 0 : parseFloat(value)
}

function testedIntValue(value) {
  return isNaN(parseInt(value)) ? 0 : parseFloat(value)
}

function convertFilmes(sourceValue) {
  return {
    codigo_imdb: sourceValue.codigo_imdb,
    titulo_filme: sourceValue.titulo_filme,
    titulo_filme_original: sourceValue.titulo_filme_original,
    ano_lancamento: testedIntValue(sourceValue.ano_lancamento),
    data_lancamento: sourceValue.data_lancamento,
    genero: sourceValue.genero,
    duracao: testedIntValue(sourceValue.duracao),
    pais: sourceValue.pais,
    lingua: sourceValue.lingua,
    diretor: sourceValue.diretor,
    escritor: sourceValue.escritor,
    empresa_produtora: sourceValue.empresa_produtora,
    atores: sourceValue.atores,
    descricao: sourceValue.descricao,
    media_votos: testedFloatValue(sourceValue.media_votos),
    quantidade_votos: testedFloatValue(sourceValue.quantidade_quantidade_votos),
    custo_producao: sourceValue.custo_producao,
    eua_lucro_bruto: sourceValue.eua_lucro_bruto,
    lucro_bruto: sourceValue.lucro_bruto,
    metascore: testedFloatValue(sourceValue.metascore),
    qtde_notas_usuarios: testedFloatValue(sourceValue.qtde_notas_usuarios),
    qtde_notas_criticos: testedFloatValue(sourceValue.qtde_qtde_notas_criticos)
  }
}

async function execute_load() {
  let db = new PrismaClient()

  await db.$connect()

  let jsonData = await files.csvToJson('./input/imdb_movies.csv')
  let i = 0
  let insert_block = new Array()
  let inserted = await db.filmes.findMany({ select: { codigo_imdb: true } })

  for (let item of jsonData) {
    if (i < 10) {
      let found = inserted.filter(x => x.codigo_imdb === item.codigo_imdb)
      if (found.length == 0) {
        insert_block.push(convertFilmes(item))
        i++
      }
    } else {
      await db.filmes.createMany({ data: insert_block, skipDuplicates: true })
      console.log('records added')
      i = 0
      insert_block = new Array()
      insert_block.push(convertFilmes(item))
    }
  }
  if (insert_block.length > 0) {
    await db.filmes.createMany({ data: insert_block, skipDuplicates: true })
  }

  await db.$disconnect()
}

execute_load()
