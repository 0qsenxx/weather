import css from './Pets.module.scss';
import imgOne from "./Rectangle6.png";
import imgTwo from "./Rectangle7.png";
import imgThre from "./Rectangle8.png";
import imgFor from "./Rectangle9.png";

const Pets = () => {



    return (
        <>
            <div className="container">
                
                <h1 className={css.pets__title}>Interacting with our pets</h1>


                <ul className={css.pets__list}>

                    <li className={css.pets__item}>
                        <img src={imgOne} alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>Rescue pups pose as ghosts in festive photo shoot</p>
                    </li>
                    <li className={css.pets__item}>
                        <img src={imgTwo} alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>Cat interrupts morning coffee on sunny Washington morning</p>
                    </li>
                    <li className={css.pets__item}>
                        <img src={imgThre} alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>New study finds dogs pay more attention to women</p>
                    </li>
                    <li className={css.pets__item}>
                        <img src={imgFor} alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>Petting dogs gives health benefit, even if they are not yours</p>
                    </li>

                </ul>

                <button type='button' className={css.pets__btn}>See more</button>
            </div>
        </>
    );
};

export default Pets;