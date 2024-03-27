// import React from "react";
// import { View, Text } from "react-native";

// function App(){
//   return (

//     <View>
//       <Text> Olá Taylor </Text>
//     </View>
//   );
// }

// export default App;


/*Exemplo 2*/
// //Em forma de classes
import React, {Component} from "react";
import { View, Text, Image} from "react-native";

class App extends Component{
  render() {

    let curso = 'INFO';

    return(
      <View>
        <Text>Taylor Diva!</Text>
        <Text>Exemplo!</Text>
        <Text style={{color: 'blue', fontSize: 30, margin: 15}}>Meu exemplo!</Text> 

        <Image source={{uri: 'coloca a url aqui'}} style={{width: 300, height: 300}}/>
        {/* Image é obrigado a informar a largura e altura*/}
        <Text>{curso}</Text>
      
        {/*para chamar o componente*/}
        {/* <MinhaImagem /> */}
        {/* Passando propriedades a Largura e a Altura */}
        {/* <MinhaImagem largura={400} altura={400} nome="Imagem1"/> */} 
      </View>
    );
  }
}
// //para a imagem tem que ter o https
// // fontSIZE é o tamanho da fonte
export default App;