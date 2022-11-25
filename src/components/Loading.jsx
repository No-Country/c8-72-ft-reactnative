import { View, ActivityIndicator } from "react-native"

export const Loading = () => {
  return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator color="#E429A1" size={ 100 } />
        </View>
  )
}
