export default function GenericFooter(){
    var props=[{name:"Página", sub:["Serviços" , "Produtos", "Sobre nós", "Preço"]} , {name:"Produtos", sub:["Usados" , "Novos" , "Destaques"]} , {name:"Utilizador", sub:["Sign In" , "Nova Conta", "Inquéritos" , "Demonstrações"]}, {name:"Suporte", sub:["Sign In" , "Centro de ajuda", "Condições" ]}, {name:"Recursos", sub:["Documentação" , "Tutoriais", "Apoio ao Cliente" ]}, {name:"Contacte nos", sub:["Morada" , "Telemóvel", "Email" ]},          ];
    var insertFooterItems = props.map((post) =>< div className="p-5 w-48 ">
    <div className="text-xs uppercase text-gray-500 font-medium">{post.name}</div>
        {post.sub.map((arraySubs) =><a className="my-3 block" href="/#">{arraySubs} <span className="text-teal-600 text-xs p-1"></span></a> )}
 </div>
  )
    return (
<div className="fixed bottom-0 bg-gray-100">
   <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
     {insertFooterItems}
      
   </div>
    </div>) 
}