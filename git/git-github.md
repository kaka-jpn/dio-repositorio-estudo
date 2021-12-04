# Git e Github



## Comandos GIT

`git init` Iniciar uma pasta git

git config --global

`git config --global user.name` Configuração global  para o username

`git config --global user.email` Configuração global para o email

`git clone url...` Clona um repositório 



`git add *` Adicionar os arquivos no unstaged

`git commit -m "teste"` Fazer o commit dos arquivos

`git push origin main` Empurrar para o repositório remoto

`git pull origin main` Puxa informações do repositório remoto



`git checkout -b teste` Criar uma branch

`git checkout teste` Trocar para outra branch

git branch



`git merge teste` Juntar arquivos da branch 

`git branch -m novo-nome` Renomear uma branch local 

`git branch -d teste` Deletar uma branch local

`git push origin :teste` Apagar uma branch remota

`git push origin -u novo-nome` Envia a branch renomeada para o repositório remoto

### Renomear um branch remoto

1. Renomear a branch no repositório local
2. Apagar a branch do repositório remoto
3. Enviar branch renomeada no repositório remoto



`git stash save (nome)` Salvar as modificações enquanto se movimenta pelas branch

`git stash clear` Limpa as modificações da caixa

`git stash pop (numero)` Estoura uma caixa de modificações



## Semantic Versioning 

3.2.7

3: major (quebra de compatibilidade)
2: minor (implementação de funcionalidade)
7: patch (alterações de patch,correções de bugs)





