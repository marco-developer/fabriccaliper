# fabriccaliper

Para rodar:  
  - cd artifacts/channel
  - ./create-artifacts.sh
  - cd ..
  - docker-compose up -d
  - cd ..
  - ./createChannel.sh
  - ./deployChaincode.sh
  - cd caliper
  - npx caliper launch manager --caliper-workspace . --caliper-networkconfig caliper-benchmarks-local/networks/fabric/network-config.yaml  --caliper-benchconfig caliper-benchmarks-local/benchmarks/scenario/simple/config.yaml  --caliper-flow-only-test --caliper-fabric-gateway-enabled --caliper-fabric-gateway-discoverycle


# Observações

- As primeiras transaçoes apresentam erros. Falta debugar e descobrir o pq
- O round 1, que faz envio de 10000 transacoes, trava sem finalizar. Provavelmente ha transacoes ficando muito tempo na fila e gerando algum tipo de timeout. Falta debugar. Sugestão aqui seria remover este round.


