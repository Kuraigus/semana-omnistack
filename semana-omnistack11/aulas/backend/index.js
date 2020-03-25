const express = require(`express`);

const app = express();

app.use(express.json());

/**
 * Rotas / Recurso
*/

/**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma informção do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back=end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.post(`/users`, (request, response) => {
    const body = request.body;
    
    return response.json({
        evento: `Semana Omnistack 11.0`,
        aluno: `Joao Victor Guntijo da Silva`
    });
});

app.listen(3333);