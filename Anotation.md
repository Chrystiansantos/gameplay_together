# Criando projeto Expo

Irei executar o comando abaixo, irei selecionar Blank(TS) para ele criar uma estrutura com Typescript.

```bat
❯ expo init "nome_projeto"
```

## Fixando o emulador na tela

- Irei clicar no emulador pressionando alt + espaço, ireei clciar na opção always on top, que o deixara sobre os apps abertos.

## Coletando informações de um TextInput

- Irei adicionar um TextInput dentro do JSX, após irei criar um estate e dentro do TextInput irei chamar o seguinte método onChangeText.

```tsx
import React, { useState } from "react";
import { TextInput } from "react-native";

const [text, setText] = useState<string>("");
<TextInput onChangeText={(text) => setText(text)} style={style.input} />;
```

## Configurando SplashScreen.

Irei baixar os arquivos de imagem e irei sobreescrever os arquivos dentro da pasta ./assets. (splash.png).

QUando desejar fazer a minha Slpash irei acessar a documentação do expo e irei em splash la ele terá um link para o Figma onde ja terá todas a medidas necessárias sendo necessário apenas que eu ajuste o mesmo:

- https://www.figma.com/file/ddc0glVeILssZl0Dcn1lSS/App-Icon-and-Splash?node-id=0%3A1

Alterando a cor de fundo da Splash, irei no app.json dentro da propriedade splash, irei alterar o background color para a cor que eu deseje.

## Configurando tipagem de Imagens no RN com TS

Dentro de src, irei criar uma pasta chamada types com o arquivo png.d.ts com o seguinte código:

```ts
declare module "*.png";
```

## Qubra de linha

Para poder quebrar a linha irei utilizar o seguinte código {`\n`} desta forma:

```tsx
<Text style={style.title}>
  Organize {`\n`}
  suas jogatinas {`\n`}
  facilmente
</Text>
```

## Criando arquivos de estilos globais

Irei criar uma pasta na raiz do projeto chamada globals, dentro dessa pasta irei criar uma outra pasta chama styles e dentro de styles irei criar um arquivo chamado theme.ts, onde ficara minhas configurações de temas default da seguinte forma:

```ts
export const theme = {
  colors: {
    background: "#0D133D",
  },
};
```

Para utilizar essa configuração irei fazer simplesmente dessa maneira, importa-la e utiliza-lá

```ts
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
});
```

## Personalizando a barra de status

Na raiz do projeto irei importar a status bar da seguinte forma:

```tsx
import { StatusBar } from 'react-native'

<StatusBar
        barStyle="cor_dos_icones_da_status_bar"
        backgroundColor="background_da_status"
        // translucent ira deixar os elementos do app no topo
        translucent
      ></StatusBar>

```

