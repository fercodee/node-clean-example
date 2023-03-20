# Sequelize commands:

- Criar uma migration:
npx sequelize migration:create --name=create-users
Obs: --name é a descrição da sua migration

- Desfazer a última vez que você rodou o comando db:migrate:
npx sequelize db:migrate:undo


- Rodar as migrations:
npx sequelize db:migrate


Obs: Depois que a sua migration for para produção não será mais possível dar o rollback, para resolver o erro será necessário criar uma nova migration com a correção necessária.

