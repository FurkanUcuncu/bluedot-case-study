import { Text } from 'react-native'

function CustomText({ fontSize, fontFamily, text, color, style }) {
    return (
        <Text style={{ fontSize, color, fontFamily, ...style }}>
            {text}
        </Text>
    )
}

export default CustomText
