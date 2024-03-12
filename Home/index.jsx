import { View, Text, TextInput, Button } from "react-native"
import { estilo } from "./styles"

export default function Home(){
    return(
    <View>
        <Text>lista de presença</Text>
        <Text>12, de março de 2024</Text>
        <View>
            <TextInput />
            <Button
                title="+"
            />
        </View>
    </View>
    )
}