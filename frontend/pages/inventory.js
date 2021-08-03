import styles from '../styles/inventory.module.css'
import NavigationBar from '../components/NavigationBar'
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from 'react'

const Inventory = () => {
    const [inventory, setInventory] = useState({
        ref: '',
        desc: '',
        price: '',
        cost: ''
    })

    return (
        <div className="container">
            <div className="content">
                <div className={styles._container}>
                    <Input type="text"
                        text="Referencia"
                        value={inventory.ref}
                        onChange={(e) => setInventory({...inventory, ref: e.target.value})}
                    />
                    <Input type="text"
                        text="Descripcion"
                        value={inventory.desc}
                        onChange={(e) => setInventory({...inventory, desc: e.target.value})}
                    />
                    <Input type="text"
                        text="Precio venta"
                        value={inventory.price}
                        onChange={(e) => setInventory({...inventory, price: e.target.value})}
                    />
                    <Input type="text"
                        text="Costo"
                        value={inventory.cost}
                        onChange={(e) => setInventory({...inventory, cost: e.target.value})}
                    />
                    <Button  text="Guardar" />
                </div>
                <div>

                </div>
            </div>
            <div className="navbar-container">
                <NavigationBar route='/inventory'/>
            </div>
        </div>
    )
}

export default Inventory