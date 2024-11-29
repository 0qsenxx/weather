import css from './Pets.module.scss';
import { useEffect, useState } from 'react';
const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-10-29&sortBy=publishedAt&apiKey=e0a307679a694d768c073d5569571e78";
// 2a1ed7356d77478b82dc07257d9eb933


const Pets = () => {

    const [isUrl, setUrl] = useState([]);

    function elemets(urla) {
        // console.log(urla)
        urla.articles.map(img => {
            // console.log(img.articles)
            
            return (

                <>
                    <li className={css.pets__item}>
                        <img src={img.urlToImage} alt="img" className={css.pets__img} />
                        <p className={css.pets__text}>{img.content}</p>
                    </li>
                </>);
        })
        // console.log(img);



    };


    useEffect(() => {
        fetch(url)
            .then(data =>
                data.json()

            ).then(data => {

                // console.log(data.articles);
                setUrl([data]);
            }).catch(error =>
                console.log(error)
            );
    }, [isUrl]);

    //   function fetchUrl() {

    //   };

    return (
        <>
            <div className="container">

                <h1 className={css.pets__title}>Interacting with our pets</h1>


                <ul className={css.pets__list}>
                    {elemets(isUrl)}
                </ul>

                <button type='button' className={css.pets__btn}>See more</button>
            </div>
        </>
    );
};

export default Pets;