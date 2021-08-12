-- CreateTable
CREATE TABLE "filmes" (
    "codigo_imdb" TEXT NOT NULL,
    "titulo_filme" TEXT NOT NULL,
    "titulo_filme_original" TEXT,
    "ano_lancamento" INTEGER,
    "data_lancamento" TEXT,
    "genero" TEXT,
    "duracao" INTEGER,
    "pais" TEXT,
    "lingua" TEXT,
    "diretor" TEXT,
    "escritor" TEXT,
    "empresa_produtora" TEXT,
    "atores" TEXT,
    "descricao" TEXT,
    "media_votos" DOUBLE PRECISION,
    "quantidade_votos" DOUBLE PRECISION,
    "custo_producao" TEXT,
    "eua_lucro_bruto" TEXT,
    "lucro_bruto" TEXT,
    "metascore" DOUBLE PRECISION,
    "qtde_notas_usuarios" DOUBLE PRECISION,
    "qtde_notas_criticos" DOUBLE PRECISION,

    PRIMARY KEY ("codigo_imdb")
);
