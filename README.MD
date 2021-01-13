# Seja bem vindo ao Angle converter

Este é um sistema para converter a posição dos ponteiros do relógio para ângulos em graus.

### Como foi feito?

Utilizando das tecnologias do NodeJS, PostgreSQL e Express.
O servidor recebe um valor de hora e minuto e ira te retornar um JSON contento o valor do angulo.

### Como eu executo?
Para você poder executar o conversor será necessario que você tenha o Docker ou o [Podman](https://podman.io/).

1. Execute o comando 

>docker-compose -f docker-compose.yml up --build

Assim será iniciado os serviços necessários para o Angle Converter funcionar.

2. Se tudo der certo você poderá acessar a url:

>[http://localhost:8080/clock/2/30](http://localhost:8080/clock/2/30)

Será retornado um json com o angulo em graus.

### Modo Hard Core
Caso você queira converter todas as horas e minutos. Dentro da pasta *test*, temos os script *testapi.sh* . Se você estiver em um sistema unix-like e com o [curl](https://curl.se/) instalado. Ao executar este script no terminar ela ira gerar o arquivo converter.txt com todas as conversões.
