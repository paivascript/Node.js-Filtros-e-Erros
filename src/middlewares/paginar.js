import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

async function paginar(req,res,next) {
        try {

          let{ pagina = 1, limite = 5 , ordenacao = "id:-1"} = req.query;

          let [campoOrdenacao, ordem] = ordenacao.split(":");
    
          pagina = parseInt(pagina);
          limite = parseInt(limite);  
          ordem = parseInt(ordem);
            
          const resultado = req.resultado;

          if(pagina >  0 && limite > 0) {
            const resultadoPaginado = await resultado.find()
              .sort({[campoOrdenacao]: ordem})
              .skip((pagina - 1) * limite)
              .limit(limite)
              .exec();
            res.status(200).json(resultadoPaginado);
         }else{
            next(new RequisicaoIncorreta());
         }       
        }catch(erro){
            next(erro); 
        }

}

export default paginar;