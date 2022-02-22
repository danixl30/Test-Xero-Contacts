import { Group } from "@mantine/core"

const CenterVerticalLayout = (props) => {
    return(
        <>
            <Group position = "center">
                <Group align = "center" position = "center" direction = "column">
                    {props.children}
                </Group>
            </Group>
        </>
    )
}

export default CenterVerticalLayout
