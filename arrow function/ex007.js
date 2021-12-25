/* Sétima variação - IIFE com arrow function.
IIFE = significa uma função que se envoca e depois ninguém pode chama-lá novamente. Ela nos ajuda a ter mais segurança no nome das variáveis dos arquivos.
Para aplicar essa técnica basta acrescentar parênteses conforme exemplo abaixo.

*/

(() => {
    const getperson = () => ({name: 'Henri', eye: 'Blue'});

    console.log (getperson());
    
})()