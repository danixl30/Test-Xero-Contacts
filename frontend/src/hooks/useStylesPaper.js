
const useStylesPaper = () => {
    const styles = (theme) => ({
            '&:hover': {
                backgroundColor: '#fffff' 
            },
            cursor: 'pointer',
        })
    
    return {
        styles
    }
}

export default useStylesPaper
