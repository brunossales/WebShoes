import { collection, getDocs } from 'firebase/firestore'

export default class FirebaseShopService {
    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'shop'))
            .then(
                (querySnapshot) => {
                    let shoes = []
                    querySnapshot.forEach(
                        (shoe) => {
                            shoes.push({
                                title: shoe.data().title,
                                img: shoe.data().img,
                                desc: shoe.data().desc
                            })
                        }
                    )
                    callback(shoes)
                })
            .catch((error) => console.log(error))
    }
}