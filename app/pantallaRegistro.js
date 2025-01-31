import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from './componentes/inputPersonalizado'
import DatePicker from 'react-native-date-picker'
import axios from 'axios'

export default function pantallaRegistro() {

    const baseUrl = 'http://127.0.0.1:3001';

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [condicionUser, setCondicionUser] = useState(false);
    const [condicionCaracteresPassword, setCondicionCaracteresPassword] = useState(false);
    const [tec, setTec] = useState(false);
    const [ropa, setRopa] = useState(false);
    const [videojuego, setVideojuegos] = useState(false);
    const [colec, setColec] = useState(false);
    const [perf, setPerf] = useState(false);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setCondicionUser(username.length > 3);
    }, [username]);

    const manejarRegsitro = async () => {
        const {data} = await axios.post(baseUrl+'/register', {
            username: username,
            password: password,
            fecha: "2001/09/25",
            tec: tec,
            ropa: ropa,
            perf: perf,
            vid: videojuego,
            colec: colec
        }).then(function (response){
            console.log(response.config.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

  return (
    <SafeAreaView className="bg-indigo-50">
        <View className="py-4 px-3 flex-col items-start">
            <Text>Regsitrate</Text>
            <Input type={"Nombre de usuario"} value={username} setValue={setUsername} secure={false}/>
            {condicionUser && <Text>hola</Text>}
            <Input type={"Contraseña"} value={password} setValue={setPassword} secure={true}/>
            <Text>Selecciona tus intereses</Text>
            <View className="flex flex-wrap flex-row gap-x-4 gap-y-4 mb-4">
                <TouchableOpacity className={`rounded-full  ${tec ? "bg-indigo-200":""} border-2 p-4 border-indigo-200`} onPress={() => setTec(!tec)}>
                    <Text>Tecnologia</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`rounded-full  ${ropa ? "bg-indigo-200":""} border-2 p-4 border-indigo-200`} onPress={() => setRopa(!ropa)}>
                    <Text>Ropa</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`rounded-full  ${videojuego ? "bg-indigo-200":""} border-2 p-4 border-indigo-200`} onPress={() => setVideojuegos(!videojuego)}>
                    <Text>Videojuegos</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`rounded-full  ${colec ? "bg-indigo-200":""} border-2 p-4 border-indigo-200`} onPress={() => setColec(!colec)}>
                    <Text>Coleccionables</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`rounded-full  ${perf ? "bg-indigo-200":""} border-2 p-4 border-indigo-200`} onPress={() => setPerf(!perf)}>
                    <Text>Perfumes</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity className="bg-indigo-400 p-3 w-4/5">
                <Text className="text-center" onPress={() => manejarRegsitro()}>Siguiente</Text>
            </TouchableOpacity>

            
        </View>
    </SafeAreaView>
  )
}