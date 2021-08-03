import NavigationBar from '../components/NavigationBar'
import styles from '../styles/home.module.css'

const Home = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>Contenido</h1>
            </div>
            <div className="navbar-container">
                <NavigationBar route='/home'/>
            </div>
        </div>
    )
}

export default Home