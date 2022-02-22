import {Text} from "@mantine/core"

const TextWhite = (props) => {
    return (
        <Text style = {{color: '#ffffff'}} size="lg">{props.children}</Text>
    )
}

export default TextWhite
