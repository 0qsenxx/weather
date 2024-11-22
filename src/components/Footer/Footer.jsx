import css from "./Footer.module.scss";
import logoFooter from "./logoFooter.png";
import inst from "./inst.png";
import face from "./face.png";
import whatsapp from "./whatsapp.png";



const Footer = () => {
    return (
        <>
            <footer className={css.footer}>
                <div className={css.container}>
                    <div className={css.footer__logo}>
                        <img src={logoFooter} />
                    </div>
                    <div className={css.footer__address}>
                        <h2 className={css.footer__title}>Address</h2>
                        <ul className={css.address__list}>
                            <li className={css.address__item}>
                                <p className={css.address__text}>
                                Svobody str. 35
                                </p>
                            </li>
                            <li className={css.address__item}>
                                <p className={css.address__text}>
                                Kyiv
                                </p>
                            </li>
                            <li className={css.address__item}>
                                <p className={css.address__text}>
                                Ukraine
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={css.footer__contact}>
                        <h2 className={css.footer__title}>Contact us</h2>
                        <ul className={css.contact__list}>
                            <li className={css.contact__item}>
                                <a className={css.contact__page}>
                                    <img src={inst} />
                                </a>
                            </li>
                            <li className={css.contact__item}>
                                <a className={css.contact__page}>
                                    <img src={face} />
                                </a>
                            </li>
                            <li className={css.contact__item}>
                                <a className={css.contact__page}>
                                    <img src={whatsapp} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;