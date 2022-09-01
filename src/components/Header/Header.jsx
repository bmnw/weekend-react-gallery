import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Header = ({showForm, setShowForm}) => {
    return (<header className="App-header">
                <h1 className="App-title">Pick A Few Pictures</h1>
                <Fab size="medium" onClick={() => setShowForm(!showForm)}>
                    <AddIcon />
                </Fab>
            </header>
            )
}

export default Header;