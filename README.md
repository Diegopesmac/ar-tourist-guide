# Projeto 2 – Aplicativo móvel com realidade aumentada (AR)

Este repositório contém um protótipo de aplicativo móvel multiplataforma que utiliza a câmera do dispositivo para exibir informações de pontos turísticos em realidade aumentada. Ele foi concebido para demonstrar o uso de **React Native** (via [Expo](https://expo.dev)) e integrações básicas com a câmera e recursos de AR, servindo como parte de um portfólio voltado ao mercado internacional.

## Objetivo

O objetivo deste aplicativo é permitir que usuários apontem a câmera de seus smartphones para um local e vejam sobreposições de texto com informações sobre pontos turísticos próximos. Esta versão é simplificada: ela exibe um texto estático sobre um ponto turístico definido no código, mas a estrutura está preparada para integrar bibliotecas de AR mais completas ou APIs de localização no futuro.

## Estrutura do projeto

```
project2/
├── README.md            # Este arquivo, com descrição e instruções
├── app/                 # Código da aplicação React Native
│   └── App.js           # Componente principal que exibe a câmera e overlay
│   └── package.json     # Declara dependências e scripts para o Expo
└── data/
    └── locations.json   # Exemplos de pontos turísticos (não utilizados na versão atual)
```

### app/App.js

O arquivo `App.js` inicializa um aplicativo React Native usando Expo e solicita permissão para acesso à câmera. Uma vez concedida, ele exibe a visualização da câmera e sobrepõe um texto estático (“Ponto Turístico!”) na tela. Esse overlay demonstra a ideia de realidade aumentada e pode ser substituído por um componente que consulte dados de localização e exiba informações em tempo real.

### app/package.json

O `package.json` define as dependências básicas do projeto (Expo, React Native e expo-camera) e scripts úteis para iniciar o aplicativo em ambientes Android, iOS ou web. Para rodar o projeto é necessário ter **Node.js** e o **Expo CLI** instalados:

```bash
npm install -g expo-cli   # Instala o Expo globalmente
cd project2/app
npm install               # Instala as dependências
expo start               # Inicia o servidor de desenvolvimento
```

### data/locations.json

Este arquivo contém exemplos de pontos turísticos com coordenadas e descrições. Embora a versão atual do aplicativo não utilize esse arquivo, ele foi incluído para demonstrar como dados locais ou provenientes de APIs podem ser integrados ao projeto.

## Próximos passos

- **Integração de AR avançada:** utilizar bibliotecas específicas como `@vantane/wear-ar` ou `react-native-arkit` (iOS) para ancorar objetos 3D e texto no mundo real.
- **Localização e mapas:** integrar APIs de GPS e mapas para obter a localização do usuário, identificar pontos turísticos próximos e ajustar dinamicamente o overlay de informações.
- **Interface aprimorada:** adicionar navegação entre telas (por exemplo, uma lista de lugares e uma tela de câmera) utilizando `react-navigation`.
- **Testes e CI/CD:** configurar testes automatizados e pipelines de integração contínua (GitHub Actions) para garantir a qualidade do código.

Este projeto fornece uma base sólida para demonstrar conhecimentos em desenvolvimento móvel multiplataforma e realidade aumentada. Adapte e expanda conforme necessário para atender aos requisitos de vagas internacionais.
