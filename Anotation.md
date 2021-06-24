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
import { StatusBar } from "react-native";

<StatusBar
  barStyle="cor_dos_icones_da_status_bar"
  backgroundColor="background_da_status"
  // translucent ira deixar os elementos do app no topo
  translucent
></StatusBar>;
```

## Importando fontes externas

Primeiro passo irei irei instalar a seguinte lib para utilizar as fonts da google

```bash
❯ expo install expo-font @expo-google-fonts/nome_da_fonte
❯ expo install @expo-google-fonts/rajdhani
```

Irei no App.tsx e irei fazer o carregamento da font. A seguir irei importar as fontes necessarias e também o hook useFonts de dentro de expo-fonts.

```tsx
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

useFonts({
  Inter_400Regular,
  Inter_500Medium,
  Rajdhani_500Medium,
  Rajdhani_700Bold,
});

const [fonstLoaded] = useFonts({
  Inter_400Regular,
  Inter_500Medium,
  Rajdhani_500Medium,
  Rajdhani_700Bold,
});
```

Aqui abaixo eu faço uma verificação, se houve algum problema ao carregar a fonte ou esteja lento ele ira continuar apresentando a splash. Para isso irei instalar esta lib:

```bash
  ❯ expo install expo-app-loading
```

```tsx
import AppLoading from "expo-app-loading";
// aqui eu verifico se foi carregado a fonte
if (!fonstLoaded) {
  return <AppLoading />;
}
```

## Aplicando background com um gradiente linear

Primeiro precisarei instalar a seguinte lib, para conseguir fazer um background linear:

```bash
❯ expo install expo-linear-gradient
```

Nos meus components irei criar um novo component chamado background, dentro do style, desse meu componente irei aplicar um flex: 1, ao container da seguitne forma:

```ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

Dentro do meu componente de background ire fazer da seguinde forma, recebendo o children do app principal la do App.tsx.

```tsx
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface IBackgroundProps {
  children: ReactNode;
}
export function Background({ children }: IBackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
```

## utilizando uma lib par calcular as medidas do topo do Iphone, em casos de Iphone x que a tela começa a contar a partir do primeiro pixel:

Preciso instalar essa seguinte lib, e ele ira desconsiderar o tamanho da barra de status, nesse caso ele ira adicionar os 26px apos terminar a barra.

```bash
❯ yarn add react-native-iphone-x-helper
```

A seguir irei importa-la no meu estilo.

```ts
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const styles = StyleSheet.create({
  header: {
    marginTop: getStatusBarHeight() + 26,
  },
});
```

## Navegação

Para fazer a navagação em nosso app irei utilizar o react-navigation. Primeiro passo precisamos instalar a lib:

```bash
❯ yarn add @react-navigation/native
```

Logo em seguida preciso instalar essas dependencias de personalização do expo.

```bash
❯ yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Agora preciso instalar o nosso estilo de navegação nesse caso irei utilizar stack (Em pilha).

```bash
❯ yarn add @react-navigation/stack

```

Dentro de src irei criar uma pasta chamada Routes, onde irei configurar as rotas do meu app.

Irei criar um arquivo chamado auth.routes, onde irei configurar as minhas rotas:

```tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../Pages/Home";
import { SignIn } from "../Pages/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthROutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn}></Screen>
      <Screen name="Home" component={Home}></Screen>
    </Navigator>
  );
}
```

A seguir irei criar um arquivo index.tsx que irei adicionar todoas as minhas rotas tanto publicas como privadas, administrativas entre outras, da seguinte forma:

```tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthROutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthROutes></AuthROutes>
    </NavigationContainer>
  );
}
```

Agora dentro do App.tsx irei chamar o component Routes que eu acabei de criar.

```tsx
return (
  <Background>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <Routes></Routes>
  </Background>
);
```

Em navigator consigo passar algumas opções por exemplo headerMode, ele ira remover os cabeçalhos com os nomes das rotas e screenOptions, cardStyle BackgroundColor ele ira aplicar ou no caso remover o background do component de rotas, deixando assim prevalecer oque nos definimos no App.tsx

```tsx
<Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}>
```

Para trafegar entre as rotas e voltar a rota anterior. Precisarei importar o useNavigation em seguida executa-lo pegado as funcoes retornadas do hook, esse hook ira retornar algumas funções sendo elas navigate, goBack que consiste em navegar para um nova tela e voltar a tela anterior, por exemplo:

```tsx
import { useNavigation } from "@react-navigation/native";
export function SignIn() {
  const { navigate } = useNavigation();
  const handleSignin = () => {
    navigate("Home");
    //para ele voltar a tela anterior
    goBack();
  };

  return (
    <ButtonIcon
      onPress={handleSignin}
      title="Entrar com Discord"
      activeOpacity={0.8}
    />
  );
}
```

Usando ReactButton, botao com estilo padrão de Android e IOS, no Android ele tem aquele efeito de ripple e no ios o efeito padrão que nao sei qual :)

```tsx
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface IButtonIcon extends RectButtonProps {
  title: string;
}

export function ButtonIcon({ title, ...rest }: IButtonIcon) {
  return (
    <RectButton style={styles.cotainer} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
```

## Usando icones do Expo Vector Icons

Primeiro passo irei importar essa lib, que ja vem por padrão junto ao expo e caso precise posso conferir na docs, pois há muito icones tops.

```tsx
import { MaterialCommunityIcons } from "@expo/vector-icons";
<MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />;
```

## Usando scroll View, para fazer uma lista rolavel.

```tsx
import { ScrollView } from "react-native";

export function CategorySelect() {
  return (
    <ScrollView
      // indica que a lista ficara na horizontal
      horizontal
      // estilos
      style={styles.container}
      // remove um indicador que fica abaixo da lista
      showsVerticalScrollIndicator={false}
      // adiciono um padding de 40 ao ultimo elemento da lista para nao ficar colado no device
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {}
    </ScrollView>
  );
}
```

## importando imagens svg

Para utilizar svg no projeto eu precisarei instalar esta lib abaixo:

```bash
  ❯ expo install react-native-svg
  ❯ yarn add react-native-svg-transformer -D
```

A seguir irei na raiz do meu projeto criar um arquivo de configuração chamado metro.config.js, e irei copiar a configuracao que copie da docs do app no github.

```js
// expo v40:
const { getDefaultConfig } = require("@expo/metro-config");

// expo v41:
// remove the @ (see: https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
```

A seguir irei criar um arquivo dentro de types, chamado svg.d.ts, e irei adicionar o seguinte código:

```ts
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

Para utilizar o SVG irei fazer da seguinte forma, caso precise passar ele atraves de props poderei tipar da seguinte forma:

```tsx
interface ICategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  icon: Icon,
  title,
  checked,
  ...rest
}: ICategoryProps) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}>
            <Icon width={48} height={48}></Icon>
          </View>
        </View>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </RectButton>
  );
}
```

## Quando usar FlatList ScrollView

Voce utiliza a FlatList quando tem muito elementos por ela ser mais performativa que a scrollview

```tsx
<FlatList
  // aqui eu passo as informacoes do array que irei renderizar
  data={appointments}
  // aqui eu passo uma chave unica sendo item cada posicao do array
  keyExtractor={(item) => item.id}
  // renderItem consistem em renderizar as informacoes com array com jsx
  renderItem={({ item }) => (
    // <Text>{item.guild.name}</Text>
    <Appointments data={item}></Appointments>
  )}
></FlatList>
```
