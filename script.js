function calcular(){
    var banco = window.document.getElementsByName('rbanco')
    var txtvalor = window.document.querySelector('input#txtvalor')
    var res = window.document.querySelector('div#res')
    var res_banco = ''

    if(banco[0].checked){
        res_banco = 'SIM'
    } 
    else if(banco[1].checked){
        res_banco = 'NÃO'
    }

    if(res_banco.length == 0){
        res.innerHTML = `[ERRO] Na linha 1. Dado não preenchido.`
        return
    }
    
    if(txtvalor.value.length == 0){
        res.innerHTML = `[ERRO] Na Linha 2. Valor não preenchido.`
        return
    }

    var valor = Number(txtvalor.value)
    
    valor += valor*6/100

    if(res_banco == "SIM"){
        valor+=1900
    }

    else if(res_banco == "NÃO"){
        valor+=2000
    }
    
    valor_final = valor

    res.innerHTML = `Valor Final: ${valor_final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`

}
    