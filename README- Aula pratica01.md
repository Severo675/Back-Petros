# Aula prática 01 (Sexta)

## Pesquisar sobre Inversão de Controle (IoC) 
Inversion of Control (IoC), é um princípio de programação onde o controle de execução não fica diretamente com a quem o desenvolve, mas sim com o framework, fazendo com que o fluxo de controle se diferencie em relação aos outros fluxos tradicionais, ou seja, o programa não é determinado diretamente pelo programador. 

Com o IoC, o framework cria os objetos automaticamente, já sem o IoC, o programador é quem irá criar os objetos.
Deixa um código mais fácil de ser testado, mais organizado... 

## Comparação de 3 frameworks (linguagens diferentes)

### Spring Boot (Java)
- Suporte a IoC
- Spring Container
- Dependência automática
- MVC
- Alta complexidade
- Usado em sistemas corporativo
- Responsável pela criação e gerenciamento de objetos
- Robusto

### Laravel (PHP)
- Suporte a IoC
- Service Container
- Dependência automática
- MVC
- Complexidade média
- Usado em aplicações web
- Resolve dependências automaticamente
- Produtivo

### ASP.NET Core (C#)
- Suporte a IoC
- Dependência (DI) nativa
- MVC
- Dependência integrada ao framework
- Complexidade média
- Usado em APIs e aplicações web modernas
- Seguro

## Tabela Comparativa
---------------------------------------------------------------------------------------------------
|  Frameworks   |         Caracteristicas       |        Prós        |          Contras           |
|---------------|-------------------------------|--------------------|----------------------------|
|  Spring Boot  | IoC integrado, MVC, sistema   | Robusto, alta      | Difícil para pessoas       |
|               | grande.                       | complexidade.      | novas, complexo.           |
|---------------|-------------------------------|--------------------|----------------------------|
|  Laravel      | IoC container, MVC, foco em   | Fácil em entender, | Não recomendado para       |
|               | aplicações web.               | produtivo          | programas grandes.         |
|---------------|----------------------------------------------------|----------------------------|
|  ASP.NET Core | DI nativos, MVC, usado APIs   | Performace alta,   | Exige conhecimento em      |
|               | e aplicações web modernas.    | seguro.            | c#, dficíl para iniciantes.|
---------------------------------------------------------------------------------------------------
