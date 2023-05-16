import mole from '../embedded/molehill.png'
import { useEffect } from 'react'

export default function Empty({setIsShowing}) {
    useEffect(() => {
        let randMillis = Math.ceil(Math.random() * 5000 + 2000);
        let timer = setTimeout(() => {
            setIsShowing(true)
        }, randMillis);

        return () => clearTimeout(timer);

    }, []);

    return <div>
        <img 
            style={{ width: '30vw'}}
            src={mole}  
            />  
    </div>
}