        var items = []

        document.querySelector('input[type=submit]').addEventListener('click', ()=>{

            var nomeProduto = document.querySelector('input[name=nome_produto]')
            var precoProduto = document.querySelector('input[name=price]') 

            
                if(nomeProduto.value === ""){
                    alert('Por favor, digite um produto')
                }else if(precoProduto.value ===""){
                    alert('Por favor, digite um valor')
                }else{

                    items.push({
                        nome: nomeProduto.value.toUpperCase(),
                        valor: precoProduto.value
                        
                    })
            

                let listaProdutos = document.querySelector('.lista-produtos')
                let soma = 0
                listaProdutos.innerHTML =""
                items.map((val)=>{
                    soma+=parseFloat(val.valor)
                    listaProdutos.innerHTML+=`
                    
                    <div class="lista-produto-single">
                    <h3>`+val.nome+`</h3>
                    <h3 class="price-produto"><span>R$ `+val.valor+`</span></h3>
                </div>
                `
                })
                soma = soma.toFixed(2) // função que diz ao JS que quero somente duas casas decimais
                nomeProduto.value = ""
                precoProduto.value = ""

                let elementoSoma = document.querySelector('.soma-produto h1')
                elementoSoma.innerHTML = `R$ ${soma}`
            }   
        
        })
        document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
            items = [] // limpa o array de produtos
            document.querySelector('.lista-produtos').innerHTML = ""
            document.querySelector('.soma-produto h1').innerHTML = "R$ 0.00"
        })
        
