import { Center, Grid } from "@mantine/core"
import {useNavigate} from "react-router-dom"
import PaperDefault from '../../../components/PaperDefault'
import TextWhite from '../../../components/TextWhite'
import useStylesPaper from "../../../hooks/useStylesPaper"


const elements = [
    {
        name: 'Organization',
        onClick: '/organization'
    },
    {
        name: 'Account',
        onClick: '/account'

    },
    {
        name: 'Contacs',
        onClick: '/contacts'
    },
    {
        name: 'Invoices',
        onClick: '/invoices'
    }
]

const MenuHome = () => {
    const navigate = useNavigate()
    const { styles } = useStylesPaper()
    const onClickItem = (name) => {
        navigate(name)
    }
    return(
        <>
            <Grid>
                {elements.map(e => 
                    <Grid.Col span = {6}>
                        <PaperDefault 
                            sx = {styles}
                            onClick = {() => onClickItem(e.onClick)}
                        >
                            <Center>
                                <TextWhite>{e.name}</TextWhite>
                            </Center>
                        </PaperDefault>
                    </Grid.Col>
                )}
            </Grid>
        </>
    )
}

export default MenuHome
