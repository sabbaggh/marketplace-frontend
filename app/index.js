import '../global.css';
import { Text, View, SafeAreaView } from "react-native";
import Boton from './componentes/boton'

export default function Index() {
  return (
    <SafeAreaView className="bg-indigo-50">
      <View className='bg-indigo-50 h-screen px-4 py-5 flex flex-col justify-center items-center'>
        <Text className='text-3xl bg-indigo-500 text-center h-4/6'>Logo</Text>
        <View className='h-2/6 w-5/6 py-12 flex-col justify-evenly'>
          <Boton texto={"Inicia Sesión"} bg={"bg-indigo-900"}/>
          <Boton texto={"Registrate"} bg={"bg-indigo-900"}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
