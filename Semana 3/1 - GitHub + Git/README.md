# Git, GitHub e controle de versão

### Git
É um programa open source de controle de versão de código, criado pelo mesmo desenvolvedor do Linux. Com ele, é possível desenvolver projetos colaborativos e simultâneos.
* _Organização_: criação de uma timeline desde o início do projeto, com tudo o que foi adicionado, removido e quem foi o autor;
* _Projetos com vários pessoas_;
* _Segurança_: possibilidade de resgatar versões anteriores.
    
-----
### GitHub
É uma espécie de rede social utilizada principalmente por desenvolvedo.res, para divulgação de portfólio, compartilhamento de código etc.

* _Portfólio_;
* _Organização_: permite que diversas pessoas trabalhem em um único projeto;
* _Ferramentas_: funcionalidades extras, como: interface visual, documentação, bug tracking, feature, pull requests etc; 
* _Versatilidade_: armazenamento de qualquer tipoo de arquivos.

-----
#### Começando com o Git
* _Repositório_: Espaço digital, onde seu projeto vai ficar salvo. 
* _Controle de versão_: É a proposta básica do Git, um histórico de tudo o que aconteceu com o(s) arquivo(s). 
* _Comandos_:

#### Essenciais
Comandos | O que é?
--- | ---
`commit` | criação de um controle de versão (histórico) de um arquivo
`pull`* | cópia do repositório remoto e o baixa para a sua máquina
`push`* | cópia do repositório local e o envia para o repositório remoto
`clone` | cópia exata do arquivo do repositório remoto para a sua máquina
`status` | sugestões de novas instruções a serem realizadas 

*Obs.*: os comandos *pull* e *push* realizam a comunicação entre a sua máquina e o repositório, seja local ou remoto.

#### Passo a passo 
Comandos | O que faz?
--- | ---
`git init` | início de versionamento de uma pasta
`git add nome-arquivo` | adiciona arquivo
`git add .` | adiciona todos os arquivos disponíveis na pasta
`git commit -m ""` | mensagem + nova versão do arquivo 
`git remote add nome-repositorio link.git` | adiciona o repositório localmente
`git push nome-repositorio nome-branch` | envia os arquivos comitados para o repositório local

#### Outros
Comandos + Atributos | O que faz?
--- | ---
`dir` | mostra as pastas/arquivos
`find` | mostra as pastas/arquivos
`mkdir` | criar nova pasta
`rmdir`| excluir pasta
`clear` | limpar todas as infos que estão em tela
`start` | abre o CMD
`start .` | abre o Explorer
`code nome-arquivo.ext` | cria um novo arquivo
`history -c` | deleta histórico do Git Bash
`git commit --amend -m ""` | altera a mensagem do último commit
`git config --global user.name ""` | para adicionar/verificar o usuário  
`git config --global user.email ""` | adicionar/verificar o e-mail
`git config  --global --unset user.name` | remoção de usuário
`git config  --global --unset user.email` | remoção do e-mail
`git remote -v` | apresenta os repositórios da máquina remota
`git reset --hard hash` | reseta para a hash anterior
`git reset HEAD nome-arquivo` | remover arquivos da HEAD
`git push --force` | força um push
`git push --delete nome-repositorio nome-branch` | deleta branch no repositório remoto
`git rm -rf` | deleta arquivos e pastas
`git reflog` | visualização em lista ordenada dos últimos commits
`git log` | visualização do histórico dos commits
`git log --pretty=oneline` | visualização do histórico dos commits em apenas uma linha
`git log --pretty:formart`* | especificação do formato de saída do log

*Obs.: há uma lista com todos os formatos aceitos pelo atributo `--pretty` disponível na [documentação do Git - em português]( https://git-scm.com/book/pt-br/v1/Git-Essencial-Visualizando-o-Hist%C3%B3rico-de-Commits).

-----
#### Branch
Por padrão, o Git fornece o branch master, que assemelha a uma linha do tempo principal com os commits realizados. Equipes que trabalham simultaneamente podem criam diversos branches.
* ``git checkout -b novo-branch``: cria novo branch;
* ``git checkout nome-branch``: acessa a branch;
* ``git nome-branch``: verifica as branches locais.

#### Merge
Ao criar um novo branch, é preciso posteriormente "devolver" os arquivos ao branch master através do *merge*.
* `git checkout master`: acessa a branch master;
* `git merge nome-branch`: mescla a branch local a master;
* `git push`;
* `git branch -D nome-branch`: deleta branch .

#### Fork
É uma cópia do projeto de uma outra pessoa no seu GitHub, é semelhante a clonar um repositório para a sua máquina.

#### Pull Request 
É o "review" de um código da branch, o qual será solicitado a autorização para que seja 'mergeado'.

*Obs.*: É possível remover o branch via GitHub, já que após o _Pull Request_ o mesmo faz essa sugestão.

-----

### Fetch
Verifica os dados que você não tem em seu repositório local desde que foi realizado o `git clone`.

```
git remote add nome-repositorio link.git
git remote -v 
git fetch nome-repositorio 
git pull nome-repositorio nome-branch
git push
```

-----
#### GitHub Pages

1. Criar um repositório no GitHub: _username.github.io_
1. Clonar repositório na sua máquina
1. Adicionar arquivos
1. Fazer commit
1. Push para o GitHub
1. Acessar _http://username.github.io_



---
(**+**) Para saber mais:
- **GitHub**: https://github.com/reprograma/github
- **Markdown**: https://guides.github.com/features/mastering-markdown/
- **Emojis**: https://gist.github.com/rxaviers/7360908 