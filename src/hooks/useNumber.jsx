import { useEffect } from "react";

const useNumber = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        axios.get('/getNumber')
        .then(res => {
            setNumber(res.data);
        })
    })
    return number;
};

export default useNumber;